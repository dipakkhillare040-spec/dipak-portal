
  function login() {
  alert("Button Working ✅");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login Successful 🔥");
      window.location.href = "admin.html";
    })
    .catch((error) => {
      document.getElementById("msg").innerText = error.message;
    });
}
