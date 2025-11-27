const form = document.getElementById("loginForm")
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const msg = document.getElementById("mensajeLogin");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;

  if (usuario.value.trim() === "") {
    document.getElementById("errorUsuario").textContent = "Ingresa un usuario";
    valido = false;
  } else {
    document.getElementById("errorUsuario").textContent = "";
  }

  if (password.value.trim() === "") {
    document.getElementById("errorPassword").textContent =
      "Ingresa una contraseña";
    valido = false;
  } else {
    document.getElementById("errorPassword").textContent = "";
  }

  if (!valido) return;

  // datos para el loggin
  if (usuario.value === "admin" && password.value === "1234") {
    msg.style.color = "#0f9d58";
    msg.textContent = "Acceso correcto...";

    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 800);
  } else {
    msg.style.color = "#d93025";
    msg.textContent = "Usuario o contraseña incorrectos";
  }
});


