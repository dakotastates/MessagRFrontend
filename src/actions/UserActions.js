const _userObject = (state) => ({
  user: {
    id: state.id,
    username: state.username,
    password: state.password,
    firstName: state.firstName,
    lastName: state.lastName,
    bio: state.bio,
    avatar: state.avatar,
    email: state.email

  },

});

export const createUser = (state) => {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_userObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/users", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_USER",
        payload: json.user,
      });
      // debugger
   }


};

export const storeUser = (user) => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({user}),
  };

  return async (dispatch) => {
    const res = await fetch("http://localhost:3000/api/v1/login", configObj);
    const json = await res.json();
    if (json.message) {
      throw new Error(json.message /*+ " " + json.message*/);
    }
    localStorage.setItem("token", json.jwt);
    dispatch({
       type: "STORAGE_USER",
       payload: json.user,
     });
  }
};

export const storeUsers = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/users", options);
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_USERS",
      payload: json,
    });
  };
};

export const updateUser = (state, user) => {

  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(_userObject(state)),
  };

  return async (dispatch) => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3000/api/v1/users" + `/${user.id}`, options);

    const json = await res.json();
    if (json.errors) {
      throw new Error(json.errors /*+ " " + json.message*/);
    }
    dispatch({
      type: "UPDATE_USER",
      payload: json,
    });
  };
};

export const showUser = (state) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {
// eslint-disable-next-line
    const res = await fetch("http://localhost:3000/api/v1/users" + `/${state.match.params.id}`, options);
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "SHOW_USER",
      payload: json,
    });
  };
};
