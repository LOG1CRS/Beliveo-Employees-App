import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import { routes } from '../../routes';
import { addAuthToken } from '../../redux';

const useLogIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [formValidated, setFormValidated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (formValidated) {
      console.log('Authenticated');
      console.log(inputEmail, inputPassword);
      dispatch(addAuthToken('test'));
      history.push(routes.dashboard);
    }
  }, [formValidated, inputEmail, inputPassword, dispatch, history]);

  const handleLogIn = () => {
    if (!validator.isEmail(inputEmail.trim())) {
      setFormValidated(false);
      setError('Invalid email.');
      return;
    }

    if (inputPassword.trim().length < 6) {
      setFormValidated(false);
      setError('Password too short.');
      return;
    }

    setFormValidated(true);
    setError('');
  };

  return [setInputEmail, setInputPassword, handleLogIn, error];
};

export default useLogIn;
