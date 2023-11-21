// store/selectors.js

// Sélecteurs pour l'utilisateur
export const selectIsConnected = (state) => state.user.isAuthenticated;
export const selectUserFirstName = (state) => state.user.user?.firstName;
export const selectUserLastname = (state) => state.user.user?.lastName;
export const selectUser = (state) => state.user.user?.userName;
//autres sélecteurs selon les besoins
