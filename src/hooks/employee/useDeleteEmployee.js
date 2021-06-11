import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';

import { removeEmployee, setLoadingOn, setLoadingOff } from '../../redux';
import { methods } from '../../utils';

const useDeleteEmployee = (setEmployeeDialog) => {
  const employeeSelected = useSelector((store) => store.employeeSelected);
  const dispatch = useDispatch();

  const [deleteEmployee, { loading, data, error }] = useMutation(
    methods.deleteEmployee
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
      dispatch(removeEmployee(data.deleteEmployee));
    }
  }, [loading, data, error, dispatch]);

  const handleDeleteEmployee = () => {
    const deleting = window.confirm(
      `Are you sure to delete ${employeeSelected.name} employee?`
    );
    if (!deleting) {
      return;
    }

    deleteEmployee({
      variables: {
        id: employeeSelected.id,
      },
    });

    setEmployeeDialog(false);
  };

  return [handleDeleteEmployee];
};

export default useDeleteEmployee;
