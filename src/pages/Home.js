import React from 'react'
// import { connect } from "react-redux";
// import ProfilesContainer from "../containers/ProfilesContainer";


function Home(props) {
  const { user } = props;
  return(
    <div>
      <h1>Welcome {user.firstName}</h1>
    </div>
  )
}

export default Home;
