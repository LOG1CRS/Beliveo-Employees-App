import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';

import { updateEmployee, removeEmployee } from '../../redux';

const useEditEmployee = (setEmployeeDialog) => {
  const employeeSelected = useSelector((store) => store.employeeSelected);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formValidated, setFormValidated] = useState(false);
  const [error, setError] = useState('');
  const [activeSave, setActiveSave] = useState(false);
  const [editedEmployeeInfo, setEditedEmployeeInfo] = useState({});

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
      dispatch(updateEmployee(editedEmployeeInfo.id, editedEmployeeInfo));
    }
  }, [formValidated, setEmployeeDialog, editedEmployeeInfo, dispatch]);

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
    setEditedEmployeeInfo({
      id: employeeSelected.id,
      name,
      lastName,
      email,
      phone,
    });
    setError('');
  };

  const handleDeleteEmployee = () => {
    const deleting = window.confirm(
      `Are you sure to delete ${employeeSelected.name} employee?`
    );
    if (!deleting) {
      return;
    }

    dispatch(removeEmployee(employeeSelected.id));
    setEmployeeDialog(false);
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
    handleDeleteEmployee,
    error,
    activeSave,
  ];
};

export default useEditEmployee;
