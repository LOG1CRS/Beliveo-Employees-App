import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import { routes } from '../../routes';
import { addAuthToken } from '../../redux';

const useSignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [formValidated, setFormValidated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (formValidated) {
      console.log('Authenticated');
      console.log(inputName, inputEmail, inputPassword);
      dispatch(addAuthToken('test'));
      history.push(routes.dashboard);
    }
  }, [formValidated, inputName, inputEmail, inputPassword, dispatch, history]);

  const handleSignUp = () => {
    if (inputName.trim().length < 4) {
      setFormValidated(false);
      setError('Name too short.');
      return;
    }

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

  return [setInputName, setInputEmail, setInputPassword, handleSignUp, error];
};

export default useSignUp;
