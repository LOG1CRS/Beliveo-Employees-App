import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import validator from 'validator';

import { addNewEmployee, setLoadingOn, setLoadingOff } from '../../redux';
import { methods } from '../../utils';

const useAddEmployee = (setAddEmployee) => {
  const dispatch = useDispatch();
  const employeesList = useSelector((store) => store.employeesList);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');
  const [phone, setPhone] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formValidated, setFormValidated] = useState(false);
  const [clientError, setClientError] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState({});

  const [addEmployee, { loading, data, error }] = useMutation(
    methods.addEmployee
  );

  useEffect(() => {
    if (loading) {
      dispatch(setLoadingOn());
    } else {
      dispatch(setLoadingOff());
    }

    if (error) {
      console.error(error);
    }

    if (data && !error) {
      dispatch(addNewEmployee(data.addNewEmployee));
    }
  }, [loading, data, error, dispatch]);

  useEffect(() => {
    if (formValidated) {
      addEmployee({
        variables: {
          input: {
            id: employeeInfo.id,
            name: employeeInfo.name,
            lastName: employeeInfo.lastName,
            email: employeeInfo.email,
            nationality: employeeInfo.nationality,
            phone: employeeInfo.phone,
            civilStatus: employeeInfo.civilStatus,
            birthday: employeeInfo.birthday,
          },
        },
      });
      setAddEmployee(false);
      setFormValidated(false);
      setName('');
      setLastName('');
      setEmail('');
      setNationality('');
      setPhone('');
      setCivilStatus('');
      setSelectedDate(new Date());
    }
  }, [formValidated, setAddEmployee, employeeInfo, addEmployee]);

  const getFormattedDate = (date) => {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  };

  const handleCivilStatus = (event) => {
    setCivilStatus(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddEmployee = () => {
    if (name.trim().length < 4) {
      setFormValidated(false);
      setClientError('Name too short.');
      return;
    }

    if (lastName.trim().length < 4) {
      setFormValidated(false);
      setClientError('Last name too short.');
      return;
    }

    if (!validator.isEmail(email.trim())) {
      setFormValidated(false);
      setClientError('Invalid email.');
      return;
    }

    if (nationality.trim() === '') {
      setFormValidated(false);
      setClientError('Please add a nationality.');
      return;
    }

    if (phone.trim().length < 8) {
      setFormValidated(false);
      setClientError('Invalid phone number.');
      return;
    }

    if (civilStatus.trim() === '') {
      setFormValidated(false);
      setClientError('Please add civil status.');
      return;
    }
    const birthday = getFormattedDate(selectedDate);
    const id = employeesList[employeesList.length - 1].id;
    setFormValidated(true);
    setEmployeeInfo({
      id: id + 1,
      name,
      lastName,
      email,
      nationality,
      phone,
      civilStatus,
      birthday,
    });
    setClientError('');
  };

  return [
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    nationality,
    setNationality,
    phone,
    setPhone,
    civilStatus,
    selectedDate,
    handleCivilStatus,
    handleDateChange,
    handleAddEmployee,
    clientError,
  ];
};

export default useAddEmployee;
