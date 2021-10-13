import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";
import { Props } from ".";
import { HeaderItemAlignment } from "./type";

import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.secondary.main,
    fontWeight:"bold"
  },
  [`&.${tableCellClasses.body}`]: {
    fontWeight: 500,
    color: theme.palette.secondary.main,
  },
}));

const DataGrid: React.FC<Props> = ({ items, columnRefs }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderHeader = (): React.ReactElement => {
    const tableHeader = columnRefs.map(
      ({ title, alignment = HeaderItemAlignment.LEFT , width}) => (
        <StyledTableCell key={title} width={width} align={alignment}>{title}</StyledTableCell>
      )
    );
    return <TableRow>{tableHeader}</TableRow>;
  };

  const renderData = (): React.ReactElement[] => {
    const rows =
      items.length > rowsPerPage
        ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : items;
    return rows.map((row, index) => {
      const colItems = columnRefs.map(({ alignment, propertyRef, width }) => {
        const value = row[propertyRef] ? row[propertyRef] : "";
        return (
          <StyledTableCell width={width} key={value} align={alignment} scope="row">
            {value}
          </StyledTableCell>
        );
      });

      return <TableRow key={index} >{colItems}</TableRow>;
    });
  };

  return (
    <React.Fragment>
      <TableContainer>
        <Table>
          <TableHead>{renderHeader()}</TableHead>
          <TableBody>{renderData()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 30, 50]}
        labelRowsPerPage=" "
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
};

export default DataGrid;
