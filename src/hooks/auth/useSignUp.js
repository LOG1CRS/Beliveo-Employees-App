import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import validator from 'validator';

import { routes } from '../../routes';
import {
  addAuthToken,
  addUser,
  // setLoadingOn,
  // setLoadingOff
} from '../../redux';
import { methods } from '../../utils';

const useSignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [setSignUp, { loading, data, error }] = useMutation(methods.register);

  const [inputName, setInputName] = useState('');
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
      // setSignUp({
      //   variables: {
      //     RegisterInput: {
      //       username: inputName,
      //       email: inputEmail,
      //       password: inputPassword,
      //     },
      //   },
      // });

      const user = { name: inputName, email: inputEmail };
      dispatch(addUser(user));
      dispatch(addAuthToken('test'));
      history.push(routes.employees);
    }
  }, [
    formValidated,
    inputName,
    inputEmail,
    inputPassword,
    setSignUp,
    dispatch,
    history,
  ]);

  const handleSignUp = () => {
    if (inputName.trim().length < 4) {
      setFormValidated(false);
      setClientError('Name too short.');
      return;
    }

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

  return [
    setInputName,
    setInputEmail,
    setInputPassword,
    handleSignUp,
    clientError,
  ];
};

export default useSignUp;
