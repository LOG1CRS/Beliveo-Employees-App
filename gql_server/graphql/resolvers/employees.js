const Employees = require('../../models/Employee');
const checkAuth = require('../../util/check-auth');
const { UserInputError } = require('apollo-server');

const Employee = require('../../models/Employee');

module.exports = {
  Mutation: {
    async addNewEmployee(
      _,
      {
        employeeInput: {
          id,
          name,
          lastName,
          email,
          nationality,
          phone,
          civilStatus,
          birthday,
        },
      },
      context
    ) {
      const error = validatingEmployeeInformation(
        id,
        name,
        lastName,
        email,
        nationality,
        phone,
        civilStatus,
        birthday
      );

      if (error) {
        throw new UserInputError(error[0], {
          errors: {
            error: error[1],
          },
        });
      }

      const employee = new Employee({
        id,
        name,
        lastName,
        email,
        nationality,
        phone,
        civilStatus,
        birthday,
      });

      const res = await employee.save();

      return res._doc;
    },
    async editEmployee(
      _,
      {
        employeeInput: {
          id,
          name,
          lastName,
          email,
          nationality,
          phone,
          civilStatus,
          birthday,
        },
      },
      context
    ) {
      const error = validatingEmployeeInformation(
        id,
        name,
        lastName,
        email,
        nationality,
        phone,
        civilStatus,
        birthday
      );

      if (error) {
        throw new UserInputError(error[0], {
          errors: {
            error: error[1],
          },
        });
      }

      const employee = await Employee.findOneAndUpdate(
        { id },
        {
          id,
          name,
          lastName,
          email,
          nationality,
          phone,
          civilStatus,
          birthday,
        },
        {
          new: true,
          useFindAndModify: false,
        }
      );

      if (!employee) {
        throw new UserInputError('Employee not found.', {
          errors: {
            Employee: 'Please add a valid id of an existing employee.',
          },
        });
      }

      return employee._doc;
    },
    async deleteEmployee(_, { id }, context) {
      const employee = await Employee.findOneAndRemove({ id });

      if (!employee) {
        throw new UserInputError('Employee not found.', {
          errors: {
            Employee: 'Please add a valid id of an existing employee.',
          },
        });
      }

      return id;
    },
  },
  Query: {
    async getEmployees(_, {}, context) {
      // checkAuth(context);
      try {
        const employees = await Employees.find();
        return employees;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const validatingEmployeeInformation = (
  id,
  name,
  lastName,
  email,
  nationality,
  phone,
  civilStatus,
  birthday
) => {
  // Validating name
  if (name.trim() === '') {
    return ['Invalid name.', 'Please add a valid name.'];
  }

  // Validating last name
  if (lastName.trim() === '') {
    return ['Invalid last name.', 'Please add a valid last name.'];
  }

  // Validating email
  if (email.trim() === '') {
    return ['Invalid email.', 'Please add a valid email.'];
  }

  // Validating nationality
  if (nationality.trim() === '') {
    return ['Invalid nationality.', 'Please add a valid nationality.'];
  }

  // Validating phone
  if (phone.trim() === '') {
    return ['Invalid phone.', 'Please add a valid phone.'];
  }

  // Validating civilStatus
  if (civilStatus.trim() === '') {
    return ['Invalid civil status.', 'Please add a valid civil status.'];
  }

  // Validating birthday
  if (birthday.trim() === '') {
    return ['Invalid birthday.', 'Please add a valid birthday.'];
  }

  return null;
};
