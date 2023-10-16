export const authActions = {
  SETUSER: 'SETUSER',
};

export function setUser(user) {
  return { type: authActions.SETUSER, user };
}
