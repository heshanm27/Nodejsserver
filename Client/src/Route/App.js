import Home from "../Pages/Home/Home";
import { Route, Routes, Navigate } from "react-router-dom";

import NotFound from "../Notfound";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Warrenty from "../Pages/Warrenty";
import Pdf from "../component/PdfDocument";
import Login from "../Pages/Login/Login";
import { ChakraProvider } from "@chakra-ui/react";
import ForgotPassword from "../Pages/Login/Forgotpassword";
import DashBordDarwer from "../component/Drawer/DrawerDashbord";
import Additem from "../Pages/Additem";
import Dashbord from "../Pages/Dashbord";
import { useStyles } from "../component/Drawer/DrawerStyle";
import Setting from "../Pages/Setting";
import Graph from "../Pages/Graph";
import { useSelector } from "react-redux";
import ResetPassword from "../Pages/Login/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
import Vehicle from "../Pages/Vehicle/Vehicle";

const theme = createTheme({
  palette: {
    primary: {
      main: "#76ff03",
    },
    secondary: purple,
    type: "light",
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  root: {},
});

const themeDark = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#76ff03",
    },
    secondary: {
      main: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  const classes = useStyles();

  const { darkModeSet } = useSelector((state) => state.darkMode);
  const { curruntUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={darkModeSet ? themeDark : theme}>
      <ChakraProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            path="/login"
            element={curruntUser ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:resetlink" element={<ResetPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<DashBordDarwer />}>
              <Route
                path="/dashbord"
                element={curruntUser ? <Navigate to="/" /> : <Dashbord />}
              />
              <Route path="/warrenty" element={<Warrenty />} />
              <Route path="/additem" element={<Additem />} />
              <Route path="/additem/warrenty" element={<Warrenty />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/pdf" element={<Pdf />} />
              <Route path="/graph" element={<Graph />} />
            </Route>
          </Route>
          <Route path="/store" element={<Vehicle />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
