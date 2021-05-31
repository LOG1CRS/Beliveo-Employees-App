import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch } from 'react-redux';

import { addEmployeeSelected } from '../../redux';
import { users } from '../../utils';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 170 },
  { field: 'lastName', headerName: 'Last name', width: 170 },
  { field: 'email', headerName: 'Email', width: 170 },
  { field: 'nationality', headerName: 'Nationality', width: 170 },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 170,
  },
  { field: 'civilStatus', headerName: 'Civil Status', width: 170 },
  { field: 'birthday', headerName: 'Birthday', width: 170 },
];

const EmployeesList = (props) => {
  const { setEmployeeDialog } = props;
  const classes = useStyle();
  const dispatch = useDispatch();
  return (
    <Paper elevation={4} className={classes.employeesList}>
      <DataGrid
        rows={users}
        columns={columns.map((column) => ({
          ...column,
          sortable: false,
        }))}
        rowsPerPageOptions={false}
        autoPageSize
        hideFooterSelectedRowCount
        onRowSelected={(rowSelected) => {
          setEmployeeDialog(true);
          dispatch(addEmployeeSelected(rowSelected.data));
        }}
      />
    </Paper>
  );
};

const useStyle = makeStyles((theme) => ({
  employeesList: {
    height: '100%',
    width: 'calc(100% - 30px)',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
  },
}));

export default EmployeesList;
