import React from 'react'
import ProfilesContainer from "../containers/ProfilesContainer";


function Profile(props) {
  const { user } = props;
  return(
    <div>
    {user.firstName ? <ProfilesContainer
      user={user}

      />:<h1>Profile not Found</h1>}
    </div>
  )
}

export default Profile;
