import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import validator from 'validator';

import { updateEmployee, setLoadingOn, setLoadingOff } from '../../redux';
import { methods } from '../../utils';

const useEditEmployee = (setEmployeeDialog) => {
  const employeeSelected = useSelector((store) => store.employeeSelected);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formValidated, setFormValidated] = useState(false);
  const [clientError, setClientError] = useState('');
  const [activeSave, setActiveSave] = useState(false);
  const [editedEmployeeInfo, setEditedEmployeeInfo] = useState({});

  const [editEmployee, { loading, data, error }] = useMutation(
    methods.editEmployee
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
      dispatch(updateEmployee(data.editEmployee.id, data.editEmployee));
    }
  }, [loading, data, error, dispatch, editedEmployeeInfo]);

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
      editEmployee({
        variables: {
          input: {
            id: editedEmployeeInfo.id,
            name: editedEmployeeInfo.name,
            lastName: editedEmployeeInfo.lastName,
            email: editedEmployeeInfo.email,
            nationality: employeeSelected.nationality,
            phone: editedEmployeeInfo.phone,
            civilStatus: employeeSelected.civilStatus,
            birthday: employeeSelected.birthday,
          },
        },
      });
      setEmployeeDialog(false);
      setFormValidated(false);
    }
  }, [
    formValidated,
    setEmployeeDialog,
    editedEmployeeInfo,
    employeeSelected,
    editEmployee,
  ]);

  const handleEditEmployee = () => {
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

    if (phone.trim().length < 8) {
      setFormValidated(false);
      setClientError('Invalid phone number.');
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
    setClientError('');
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
    clientError,
    activeSave,
  ];
};

export default useEditEmployee;
