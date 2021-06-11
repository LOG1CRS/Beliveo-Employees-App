import { useEffect } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { useLazyQuery } from '@apollo/client';

import { methods } from '../../utils';
import { setLoadingOn, setLoadingOff, updateEmployeesList } from '../../redux';

const useUpdateEmployees = () => {
  const dispatch = useDispatch();
  // const token = useSelector((store) => store.authToken);
  const [getEmployees, { loading, data, error }] = useLazyQuery(
    methods.getEmployees
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
      dispatch(updateEmployeesList(data.getEmployees));
    }
  }, [loading, data, error, dispatch]);

  useEffect(() => {
    getEmployees({
      context: {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      },
    });
  }, [getEmployees]);
};

export default useUpdateEmployees;
