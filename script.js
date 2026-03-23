function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      alert("Login Success ✅");
      window.location.href = "index.html";
    })
    .catch(function(error) {
      alert(error.message);
    });
}
