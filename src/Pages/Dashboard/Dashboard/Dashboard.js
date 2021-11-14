import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AdminRoute from "./../../Login/AdminRoute/AdminRoute";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MyBookings from "./../MyBookings/MyBookings";
import useAuth from "./../../../hooks/useAuth";
import AllBookings from "./../AllBookings/AllBookings";
import ManageAllBikes from "./../ManageAllBikes/ManageAllBikes";
import Review from "./../../Review/Review";
import AddANewBike from "./../AddANewBike/AddANewBike";
import DashboardMain from "./../DashboardMain/DashboardMain";
import Payment from "./Payment/Payment";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin , logout } = useAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <NavLink className="nav-item text-dark  text-center" to="/">
        <h1
          
          style={{
            padding:"11px",
            color: "white",
            backgroundColor: "#3D72A6",
            fontWeight: "bold",
          }}
        >
          Home
        </h1>
      </NavLink>
      <Link to={`${url}`} style={{ textDecoration: "none", color: "#3D72A6" }}>
        <Button color="inherit"> Dashboard Home </Button>
      </Link>
      <br />
      
        { !admin && ( <Box>
          <Link
          to={`${url}/bookings`}
          style={{ textDecoration: "none", color: "#3D72A6" }}
        >
          <Button color="inherit">My Bookings</Button>
        </Link>
      <br />
        <Link
          to={`${url}/payment`}
          style={{ textDecoration: "none", color: "#3D72A6" }}
        >
          <Button color="inherit">Payment System</Button>
        </Link>
      <br />
        <Link
          to={`${url}/review`}
          style={{ textDecoration: "none", color: "#3D72A6" }}
        >
          <Button color="inherit">Add Review</Button>
        </Link>
      <br />
      <Button className="button-light " onClick={logout}>
        Log Out
        <FontAwesomeIcon className="ms-2" icon={faUser} />
      </Button>
          </Box>)}

      {admin && (
        <Box>
          <Link
            to={`${url}/makeadmin`}
            style={{ textDecoration: "none", color: "#3D72A6" }}
          >
            <Button color="inherit" >
              Make Admin
            </Button>
          </Link>
          <br />
          <Link
            to={`${url}/allbookings`}
            style={{ textDecoration: "none", color: "#3D72A6" }}
          >
            <Button color="inherit">
              All Bookings
            </Button>
          </Link>
          <Link
            to={`${url}/manageallbikes`}
            style={{ textDecoration: "none", color: "#3D72A6" }}
          >
            <Button color="inherit">
              {" "}
             Manage All Bikes
            </Button>
          </Link>
          <br />
          <Link
            to={`${url}/addanewbikes`}
            style={{ textDecoration: "none", color: "#3D72A6" }}
          >
            <Button color="inherit">
              Add New Bikes
            </Button>
          </Link>
          <br />
          <Button
            color="inherit"
            onClick={logout}
            style={{
              textDecoration: "none",
              color: "#3D72A6",
              fontSize: "18px",
            }}
          >
            Log Out
          </Button>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <h2 className="mt-2">Dashboard</h2>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardMain></DashboardMain>
          </Route>
          <Route path={`${path}/bookings`}>
            <MyBookings></MyBookings>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/allbookings`}>
            <AllBookings></AllBookings>
          </Route>
          <Route path={`${path}/manageallbikes`}>
            <ManageAllBikes></ManageAllBikes>
          </Route>
          <Route path={`${path}/addanewbikes`}>
            <AddANewBike></AddANewBike>
          </Route>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
