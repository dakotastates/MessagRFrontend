import React from 'react'
import { connect } from "react-redux";
import { logout } from "../actions/AuthActions";
import { Switch} from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";
import NavBar from "../components/NavBar";


function Dashboard(props) {

  const handleLogout = () => {
      props.logout();
      localStorage.removeItem("state");
      localStorage.removeItem("token");
      props.history.push("/");
    };
// debugger


    return(
        <div>
          <h1>FixStarter</h1>
          <div className="header">
          <NavBar user={props.user} />
            <div className="logout">
            <br/>
              <button onClick={handleLogout}>Logout</button>
            </div>
          <br/>



          </div>

          <Switch>
            <PrivateRoute path="/profile/:id" >
              <Profile user={props.user}/>
            </PrivateRoute>

            <PrivateRoute path="/messages" >
              <Messages user={props.user}/>
            </PrivateRoute>

            <PrivateRoute path="/" >
              <Home user={props.user}/>
            </PrivateRoute>
          </Switch>

        </div>
    )

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps, { logout })(Dashboard);
