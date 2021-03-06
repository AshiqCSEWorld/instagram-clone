import auth from "utils/auth";
import { dispatchHelper } from "utils/dispatchHelper";
import { customHistory } from "reduxStore";

export const login = (username, password) => dispatch => {
  dispatch(dispatchHelper("SIGN_IN_REQUEST"));

  auth
    .login(username, password)
    .then(response => {
      dispatch(dispatchHelper("SIGN_IN_SUCCESS", response.data));
      customHistory.push("/");
    })
    .catch(({ response }) =>
      dispatch(dispatchHelper("SIGN_IN_FAILURE", response))
    );
};

export const logout = () => dispatch => {
  auth.logout();
  customHistory.push("/users/login");
  dispatch(dispatchHelper("LOG_OUT"));
};

export const signUp = props => dispatch => {
  dispatch(dispatchHelper("SIGN_UP_REQUEST"));

  auth
    .fetch("/users/register", { method: "post", ...props })
    .then(response => {
      auth.setToken(response.data.token);
      dispatch(dispatchHelper("SIGN_UP_SUCCESS", response.data));
      customHistory.push("/");
    })
    .catch(({ response }) =>
      dispatch(dispatchHelper("SIGN_UP_FAILURE", response))
    );
};
