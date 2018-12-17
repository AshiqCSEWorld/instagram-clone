import produce from "immer";

const initialState = {
  loginPending: false,
  loginPayload: {},
  loginError: false,
  signupPending: false,
  signupPayload: {},
  signupError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_REQUEST":
      return produce(state, draft => { draft.loginPending = true });

    case "SIGN_IN_SUCCESS":
      return produce(state, draft => {
        draft.loginPending = false;
        draft.loginPayload = action.payload;
      });

    case "SIGN_IN_FAILURE":
      return produce(state, draft => {
        draft.loginPending = false;
        draft.loginPayload = action.payload;
        draft.loginError = true;
      });

    default:
      return state;
  }
};
