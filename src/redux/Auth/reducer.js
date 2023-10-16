import { authActions } from "./actions";

const initState = {
  user: null,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case authActions.SETUSER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}