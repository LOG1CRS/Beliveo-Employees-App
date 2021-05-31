import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import validator from 'validator';

const useEditEmployee = (setEmployeeDialog) => {
  const employeeSelected = useSelector((store) => store.employeeSelected);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formValidated, setFormValidated] = useState(false);
  const [error, setError] = useState('');
  const [activeSave, setActiveSave] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState({});

  useEffect(() => {
    setName(employeeSelected?.name);
    setLastName(employeeSelected?.lastName);
    setEmail(employeeSelected?.email);
    setPhone(employeeSelected?.phone);
  }, [employeeSelected]);

  useEffect(() => {
    if (
      name === employeeSelected?.name &&
      lastName === employeeSelected?.lastName &&
      email === employeeSelected?.email &&
      phone === employeeSelected?.phone
    ) {
      setActiveSave(false);
    } else {
      setActiveSave(true);
    }
  }, [name, lastName, email, phone, setActiveSave, employeeSelected]);

  useEffect(() => {
    if (formValidated) {
      setEmployeeDialog(false);
      console.log(employeeInfo);
    }
  }, [formValidated, setEmployeeDialog, employeeInfo]);

  const handleEditEmployee = () => {
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

    if (phone.trim().length < 8) {
      setFormValidated(false);
      setError('Invalid phone number.');
      return;
    }

    setFormValidated(true);
    setEmployeeInfo({
      name,
      lastName,
      email,
      nationality: employeeSelected.nationality,
      phone,
      civilStatus: employeeSelected.civilStatus,
      birthday: employeeSelected.birthday,
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
    phone,
    setPhone,
    handleEditEmployee,
    error,
    activeSave,
  ];
};

export default useEditEmployee;
