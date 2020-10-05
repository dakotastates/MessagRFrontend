import React from 'react'
import { connect } from "react-redux";
import { storeUser, createUser } from "../../actions/UserActions";
import { login } from "../../actions/AuthActions";

class Signup extends React.Component {
  state = {
      username:"",
      password: "",
      email:"",
      firstName: "",
      lastName: ""



    };

    handleOnChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };


    onSubmit = (e) => {
      e.preventDefault();
      this.props
         .createUser(this.state)
         .then(() => this.props.login())
         .catch((error) => {
           alert(error);
           console.log(error);
         });
    };

    render(){
        return(
            <div>
                <h1>SignUp Form</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleOnChange}
                    />


                    <br/>
                    <input
                        type="submit"
                        value="SignUp"
                    />
                </form>
                Already have an Account? <button onClick={()=>this.props.toggle(true)}>Login</button>
            </div>
        )
    }
}



export default connect(null, { storeUser, login, createUser })(Signup);
