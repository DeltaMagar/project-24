// Simulating a database using localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Signup functionality
function signup() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert("Email already registered!");
    return false;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
  return false;
}

// Login functionality
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password!");
  }

  return false;
}

// Display user name on dashboard
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser && document.getElementById("userName")) {
    document.getElementById("userName").textContent = currentUser.name;
  }
});

// Logout functionality
function logout() {
  localStorage.removeItem("currentUser");
  alert("Logged out successfully!");
  window.location.href = "login.html";
}
