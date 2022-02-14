import {
  Button as btn,
  Container,
  makeStyles,
  Typography,
  Paper,
  CssBaseline,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TablePagination,
  Grid,
  TableSortLabel,
  Toolbar,
  InputAdornment,
  Button,
  IconButton,
} from "@material-ui/core";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { Skeleton } from "@material-ui/lab";
import { db } from "../init/firebaseinit";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import PopUp from "../component/PopUp";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

import Notification from "../component/Notification/Notification";
import ConfirmDialog from "../component/ConfirmDialog/ConfirmDialog";
import Pdftemplate from "../component/Pdftemplate";
import PageviewIcon from "@material-ui/icons/Pageview";
import { useReactToPrint } from "react-to-print";
const userStyle = makeStyles((theme) => ({
  roots: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    textAlign: "center",
  },

  paper: {
    [theme.breakpoints.up("sm")]: {
      padding: "40px",
    },
    marginTop: "20px",
    height: "auto",
  },
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.text,
    },
    "& tbody td": {
      fontWeight: "400",
    },

    "& tbody tr:hover":
      theme.palette.type === "dark"
        ? {
            backgroundColor: theme.palette.grey.A400,
            cursor: "pointer",
          }
        : {
            backgroundColor: theme.palette.grey[300],
            cursor: "pointer",
          },
  },
  main: {
    [theme.breakpoints.down("sm")]: {
      padding: "50px 5px",
    },
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
  btn: {
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
    width: "70%",
  },

  secondary: {
    backgroundColor: theme.palette.secondary.light,
    "& .MuiSvgIcon-root": {
      color: theme.palette.background.paper,
    },
    margin: theme.spacing(0.5),
  },
  primary: {
    backgroundColor: theme.palette.error.light,
    "& .MuiSvgIcon-root": {
      color: theme.palette.background.paper,
    },
  },
}));

const Additem = () => {
  const navigate = useNavigate();
  const classes = userStyle();
  const toast = useToast();
  const [EngineData, setEngineData] = useState([]);
  const [Loading, setLoading] = useState(false);

  //pageNation and sorting
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("Brand");
  const colRef = collection(db, "Engine");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
  });
  const [searchFilter, setSearchFilter] = useState({
    fn: (items) => {
      return items;
    },
  });
  const componentRef = useRef();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const tableHeader = [
    { id: "BillNo", Header: "Bill No" },
    { id: "CustomerName", Header: "Customer Name" },
    { id: "Technician", Header: "Technician" },
    { id: "VehicalBrand", Header: "Vehical Brand", diableSorting: true },
    { id: "WarrentyTill", Header: "Warrenty Till", diableSorting: true },
    { id: "Actions", Header: "Actions", diableSorting: true },
  ];

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangePerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleSearch = (e) => {
    let target = e.target.value.toLowerCase();

    setSearchFilter({
      fn: (items) => {
        if (target == "") return items;
        else
          return items.filter(
            (x) =>
              x.CustomerName.toLowerCase().includes(target) ||
              x.BillNo.toLowerCase().includes(target)
          );
      },
    });
  };

  //handle all the sorting and  searching then return data
  const recordsAfterPagingAndSorting = () => {
    return stableSort(
      searchFilter.fn(EngineData),
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  const handleSortRequest = (cellId) => {
    const isAsc = orderBy === cellId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(cellId);
  };
  function getData() {
    const ref = collection(db, "Warrenty");
    setLoading(true);
    onSnapshot(ref, (snapshot) => {
      let post = [];
      snapshot.docs.map((doc) => {
        post.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setEngineData(post);
      setLoading(false);
    });
  }

  const updatepopUp = (e, item) => {
    console.log(item);
    setRecordForEdit(item);
    setOpenPopUp(true);
  };

  const handleDelete = (id) => {
    const docRef = doc(db, "Warrenty", id);
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    deleteDoc(docRef)
      .then(() => {
        setNotify({
          isOpen: true,
          message: "Successfully Deleted",
          type: "success",
        });
      })
      .catch((e) => {
        setNotify({
          isOpen: true,
          message: "Error Occurd",
          type: "error",
        });
      });
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.roots} id="review">
      <Container component="main" maxWidth="lg" className={classes.main}>
        <CssBaseline />
        <div className={classes.paper}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" color="textPrimary">
              Warrenty Details
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Toolbar>
              <TextField
                size="small"
                className={classes.btn}
                color="secondary"
                label="Search field"
                variant="outlined"
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Link to="warrenty">
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<AddIcon />}
                  className={classes.newButton}
                >
                  Add Item
                </Button>
              </Link>
            </Toolbar>
            <TableContainer>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    {tableHeader.map((value) => {
                      return (
                        <TableCell
                          key={value.id}
                          sortDirection={orderBy === value.id ? order : false}
                        >
                          <TableSortLabel
                            active={orderBy === value.id}
                            direction={orderBy === value.id ? order : "asc"}
                            onClick={() => handleSortRequest(value.id)}
                          >
                            {value.Header}
                          </TableSortLabel>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recordsAfterPagingAndSorting().map((item) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell> {item.BillNo}</TableCell>
                        <TableCell> {item.CustomerName}</TableCell>
                        <TableCell> {item.Technician}</TableCell>
                        <TableCell> {item.VehicalBrand}</TableCell>
                        <TableCell> {item.WarrentyTill}</TableCell>
                        <TableCell>
                          <IconButton
                            size="small"
                            aria-label="edit"
                            className={classes.secondary}
                            onClick={(e) => updatepopUp(e, item)}
                          >
                            <PageviewIcon />
                          </IconButton>
                          <IconButton
                            size="small"
                            className={classes.primary}
                            aria-label="delete"
                            onClick={() => {
                              setConfirmDialog({
                                isOpen: true,
                                title: "Are you sure to delete this record?",
                                subTitle: "You can't undo this operation",
                                onConfirm: () => handleDelete(item.id),
                              });
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {Loading &&
                    [1, 2, 3, 4].map((item) => {
                      return (
                        <TableRow key={item}>
                          <TableCell>
                            {" "}
                            <Skeleton animation="wave" />
                          </TableCell>
                          <TableCell>
                            {" "}
                            <Skeleton animation="wave" />
                          </TableCell>
                          <TableCell>
                            {" "}
                            <Skeleton animation="wave" />
                          </TableCell>
                          <TableCell>
                            {" "}
                            <Skeleton animation="wave" />
                          </TableCell>
                          <TableCell>
                            {" "}
                            <Skeleton animation="wave" />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              page={page}
              rowsPerPageOptions={pages}
              rowsPerPage={rowsPerPage}
              count={EngineData.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleChangePerPage}
            />
          </Paper>
          <PopUp
            title="View Warrenty"
            openPopup={openPopup}
            setOpenPopUp={setOpenPopUp}
          >
            <div ref={componentRef}>
              <Pdftemplate props={recordForEdit} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePrint}
              >
                {" "}
                Print{" "}
              </Button>
            </div>
          </PopUp>
          <Notification notify={notify} setNotify={setNotify} />
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </div>
      </Container>
    </div>
  );
};

export default Additem;
