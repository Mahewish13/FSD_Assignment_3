window.onload = () => {
  setCookie("demoCookie", "student");
  setSessionValue("demoSession", "Javascript validation");
};

// ---------- EMAIL VALIDATION ----------
function validateEmail(){
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("emailMsg");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  msg.textContent = pattern.test(email)
    ? "Valid Email Address"
    : "Invalid Email Address";

  msg.className = pattern.test(email) ? "msg ok" : "msg bad";
}

// ---------- PASSWORD STRENGTH ----------
function checkStrength(){
  const pwd = document.getElementById("password").value;
  const fill = document.getElementById("strengthFill");
  const text = document.getElementById("strengthText");

  const score =
    (pwd.length >= 8) +
    /[A-Z]/.test(pwd) +
    /[0-9]/.test(pwd) +
    /[^A-Za-z0-9]/.test(pwd);

  const levels = ["Very Weak","Weak","Medium","Strong","Very Strong"];
  const colors = ["#e74c3c","#e67e22","#f1c40f","#2ecc71","#27ae60"];

  fill.style.width = score * 25 + "%";
  fill.style.background = colors[score];
  text.textContent = levels[score];
}

// ---------- COOKIE HELPERS ----------
function setCookie(name, value){
  document.cookie = `${name}=${value}; path=/`;
}

function getCookies(){
  return document.cookie;
}

function clearCookie(name){
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function showCookies(){
  document.getElementById("cookieOutput").textContent =
    "Cookies: " + getCookies();
}

// ---------- SESSION HELPERS ----------
function setSessionValue(key, value){
  sessionStorage.setItem(key, value);
}

function getSessionValue(key){
  return sessionStorage.getItem(key);
}

function clearSessionValue(key){
  sessionStorage.removeItem(key);
}

function showSession(){
  document.getElementById("sessionOutput").textContent =
    "Session Value: " + getSessionValue("demoSession");
}

// ---------- RESET ----------
function resetAll(){
  clearCookie("demoCookie");
  sessionStorage.clear();

  ["cookieOutput","sessionOutput","emailMsg"].forEach(id =>
    document.getElementById(id).textContent = ""
  );

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("strengthFill").style.width = "0%";
  document.getElementById("strengthText").textContent = "";

  alert("All Data Reset");
}

