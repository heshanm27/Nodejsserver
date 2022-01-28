import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function VehicleTable(props) {
  const { items } = props;
  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableRow>
            <TableCell align="left">Model</TableCell>
            <TableCell align="left">{items.Model}</TableCell>
          </TableRow>
          {items.Brand && (
            <TableRow>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">{items.Brand}</TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell align="left">Mileage</TableCell>
            <TableCell align="left">{items.Mileage}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Year of Manufacture</TableCell>
            <TableCell align="left">{items.YearofManufacture}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">{items.Price}million</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
}
