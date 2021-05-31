import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

import { users } from '../../utils';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'lastName', headerName: 'Last name', width: 180 },
  { field: 'email', headerName: 'Email', width: 180 },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 180,
  },
  { field: 'civilStatus', headerName: 'Civil Status', width: 180 },
  { field: 'birthday', headerName: 'Birthday', width: 180 },
];

const EmployeesList = () => {
  const classes = useStyle();
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
          console.log(rowSelected.data);
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
