window.onload = function(){
  document.cookie = "demoCookie=student; path=/";
  sessionStorage.setItem("demoSession", "javascript validation");
}

// ---------------- EMAIL VALIDATION ----------------
function validateEmail(){
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("emailMsg");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(pattern.test(email)){
    msg.textContent = "Valid Email Address";
    msg.className = "msg ok";
  } else {
    msg.textContent = "Invalid Email Address";
    msg.className = "msg bad";
  }
}

// ---------------- PASSWORD STRENGTH ----------------
function checkStrength(){
  const pwd = document.getElementById("password").value;
  const fill = document.getElementById("strengthFill");
  const text = document.getElementById("strengthText");

  let score = 0;

  if(pwd.length >= 8) score++;
  if(/[A-Z]/.test(pwd)) score++;
  if(/[0-9]/.test(pwd)) score++;
  if(/[^A-Za-z0-9]/.test(pwd)) score++;

  const levels = ["Very Weak","Weak","Medium","Strong","Very Strong"];
  const colors = ["#e74c3c","#e67e22","#f1c40f","#2ecc71","#27ae60"];

  fill.style.width = (score*25) + "%";
  fill.style.background = colors[score];
  text.textContent = levels[score];
}


function setMyCookie(){
  document.cookie = "UserName=student; path=/";
  alert("Cookie set");
}

function readMyCookie(){
  document.getElementById("cookieOutput").textContent =
    "Cookies: " + document.cookie;
}

function clearCookie(){
  document.cookie = "demoCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.getElementById("cookieOutput").textContent = "Cookie Cleared";
}


function setSession(){
  sessionStorage.setItem("demoSession", "JAVASCRIPT VALIDATION");
  alert("Session set");
}

function readSession(){
  const val = sessionStorage.getItem("demoSession");
  document.getElementById("sessionOutput").textContent =
    "Session Value: " + val;
}

function clearSession(){
  sessionStorage.removeItem("demoSession");
  document.getElementById("sessionOutput").textContent =
    "Session Cleared";
}

// ---------------- RESET ALL ----------------
function resetAll(){
  document.cookie = "demoCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  sessionStorage.clear();

  document.getElementById("cookieOutput").textContent = "";
  document.getElementById("sessionOutput").textContent = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("strengthFill").style.width = "0%";
  document.getElementById("strengthText").textContent = "";
  document.getElementById("emailMsg").textContent = "";

  alert("All Data Reset");
}
