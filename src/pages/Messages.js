import React from 'react'
// import { connect } from "react-redux";
// import ProfilesContainer from "../containers/ProfilesContainer";


function Messages(props) {
  const { user } = props;
  return(
    <div>
      <h1>Conversations for {user.firstName}</h1>
    </div>
  )
}

export default Messages;
