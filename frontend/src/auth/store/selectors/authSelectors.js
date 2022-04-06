export const getAuthState = (store) => {
  return store.auth;
};

export const getIsAuthenticated = (store) => {
  return store.auth.token !== null;
};
