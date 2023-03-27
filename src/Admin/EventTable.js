import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { Button } from '@mui/material';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
export default function EventTable() {
    const [rows, setRows] = useState([])
  let data = fetch(`http://localhost:8000/api/v1/events/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({department:" ",status:" "})
  })
    .then(res => {
      return res.json()
    })
    .then(d => setRows(d.data.Events))

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target);
    setPage(0);
  };
 
  const[value,setValue]=React.useState(0);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
             

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                   <TableCell>{row.name}</TableCell>
                   <TableCell>{row.status}</TableCell>
                   <TableCell><Edit data={row}></Edit></TableCell>
                   <TableCell><Delete id={row._id}></Delete></TableCell>
                   <TableCell><Button>Show Participants</Button></TableCell>
                   <TableCell><Button>Show Results</Button></TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
