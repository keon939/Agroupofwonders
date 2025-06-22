// Main JavaScript for Classhelper
// Handle auth, real-time DB, messaging, posts, voice notes, etc.

// Example: listen for auth state changes
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User signed in:', user.uid);
  } else {
    console.log('No user signed in');
  }
});
