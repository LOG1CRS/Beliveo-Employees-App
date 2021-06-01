const Employees = require('../../models/Employees');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getEmployees(_, {}, context) {
      checkAuth(context);
      try {
        const employees = await Employees.find();
        return employees;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
