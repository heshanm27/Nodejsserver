import SettingsIcon from "@material-ui/icons/Settings";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";

const Mobileroutes = [
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
  {
    label: "Vehiles",
    path: "/store",
    icon: <HomeOutlinedIcon />,
    activeIcon: <HomeIcon />,
    component: "Home",
  },
];

export default Mobileroutes;
