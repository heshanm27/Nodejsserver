import DashboardIcon from "@material-ui/icons/Dashboard";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
const Mobileroutes = [
  {
    label: "Dashboard",
    path: "/dashbord",
    icon: <DashboardOutlinedIcon />,
    activeIcon: <DashboardIcon />,
    component: "Dashboard",
  },
  {
    label: "Settings",
    path: "/Setting",
    icon: <SettingsOutlinedIcon />,
    activeIcon: <SettingsIcon />,
    component: "Settings",
  },
  {
    label: "Home",
    path: "/",
    icon: <HomeOutlinedIcon />,
    activeIcon: <HomeIcon />,
    component: "Home",
  },
];

export default Mobileroutes;
