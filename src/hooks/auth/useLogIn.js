import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import validator from 'validator';

import { routes } from '../../routes';
import { addAuthToken } from '../../redux';
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
      // dispatch(loadingActions.setLoadingOn());
    } else {
      // dispatch(loadingActions.setLoadingOff());
    }

    if (error) {
      console.error(error);
      setClientError(error.message);
    }

    if (data && !error) {
      console.log(data);
      dispatch(addAuthToken(data.token));
      history.push(routes.employees);
    }
  }, [data, error, loading, setClientError, dispatch, history]);

  useEffect(() => {
    if (formValidated) {
      // setLogIn({
      //   variables: {
      //     email: inputEmail,
      //     password: inputPassword,
      //   },
      // });
      dispatch(addAuthToken('test'));
      history.push(routes.employees);
    }
  }, [formValidated, inputEmail, inputPassword, setLogIn, dispatch, history]);

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
