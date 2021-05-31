import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { addNewEmployee } from '../../redux';

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
  const [error, setError] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState({});

  useEffect(() => {
    if (formValidated) {
      setAddEmployee(false);
      dispatch(addNewEmployee(employeeInfo));
    }
  }, [formValidated, setAddEmployee, employeeInfo, dispatch]);

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
      setError('Name too short.');
      return;
    }

    if (lastName.trim().length < 4) {
      setFormValidated(false);
      setError('Last name too short.');
      return;
    }

    if (!validator.isEmail(email.trim())) {
      setFormValidated(false);
      setError('Invalid email.');
      return;
    }

    if (nationality.trim() === '') {
      setFormValidated(false);
      setError('Please add a nationality.');
      return;
    }

    if (phone.trim().length < 8) {
      setFormValidated(false);
      setError('Invalid phone number.');
      return;
    }

    if (civilStatus.trim() === '') {
      setFormValidated(false);
      setError('Please add civil status.');
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
    setError('');
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
    error,
  ];
};

export default useAddEmployee;
