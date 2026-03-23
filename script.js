function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("msg").innerText = "Login Success ✅";
      window.location.href = "index.html";
    })
    .catch((error) => {
      document.getElementById("msg").innerText = error.message;
    });
}
