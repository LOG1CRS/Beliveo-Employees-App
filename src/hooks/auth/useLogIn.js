import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import validator from 'validator';

import { routes } from '../../routes';
import {
  addAuthToken,
  addUser,
  setLoadingOn,
  setLoadingOff,
} from '../../redux';
import { methods } from '../../utils';

const useLogIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [setLogIn, { loading, data, error }] = useMutation(methods.login);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [formValidated, setFormValidated] = useState(false);
  const [clientError, setClientError] = useState('');

  useEffect(() => {
    if (loading) {
      dispatch(setLoadingOn());
    } else {
      dispatch(setLoadingOff());
    }

    if (error) {
      console.error(error);
      setClientError(error.message);
    }

    if (data && !error) {
      dispatch(addAuthToken(data.login.token));
      const user = { name: data.login.username, email: data.login.email };
      dispatch(addUser(user));
      history.push(routes.employees);
    }
  }, [data, error, loading, setClientError, dispatch, history]);

  useEffect(() => {
    if (formValidated) {
      setLogIn({
        variables: {
          email: inputEmail,
          password: inputPassword,
        },
      });
    }
  }, [formValidated, inputEmail, inputPassword, setLogIn]);

  const handleLogIn = () => {
    if (!validator.isEmail(inputEmail.trim())) {
      setFormValidated(false);
      setClientError('Invalid email.');
      return;
    }

    if (inputPassword.trim().length < 6) {
      setFormValidated(false);
      setClientError('Password too short.');
      return;
    }

    setFormValidated(true);
    setClientError('');
  };

  return [setInputEmail, setInputPassword, handleLogIn, clientError];
};

export default useLogIn;
