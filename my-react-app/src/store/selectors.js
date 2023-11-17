// store/selectors.js

// Sélecteurs pour l'utilisateur
export const selectIsConnected = (state) => state.user.isAuthenticated;
export const selectUserFirstName = (state) => state.user.user?.firstName;
//autres sélecteurs selon les besoins
