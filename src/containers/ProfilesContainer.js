import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showUser } from "../actions/UserActions";

// import Profile from '../components/profiles/Profile'


class ProfilesContainer extends Component {

  // state = {
  //   profile: [],
  //
  // };
  //
  // componentDidMount(){
  //
  //   this.props
  //   .showUser(this.props)
  //   .then(() => {
  //     this.setState({profile: this.props.profile})
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   });
  //
  // }

  render() {
    const { profile, user } = this.props


    return (
      <div>
      <h1>Profiles Container</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.usersStore.profile
});

export default connect(mapStateToProps, {showUser})(ProfilesContainer)
