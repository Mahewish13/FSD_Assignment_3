function validateEmail(){
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("emailMsg");

  // solid regex — not toy pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(pattern.test(email)){
    msg.textContent = "Valid Email Address";
    msg.className = "msg ok";
  } else {
    msg.textContent = "Invalid Email Address";
    msg.className = "msg bad";
  }
}


// ================= PASSWORD STRENGTH =================


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
  const colors = ["#c0392b","#e67e22","#f1c40f","#2ecc71","#27ae60"];

  fill.style.width = (score*25) + "%";
  fill.style.background = colors[score];
  text.textContent = levels[score];
}


// ================= COOKIES =================


function setMyCookie(){
  const val = document.getElementById("cookieInput").value;
  document.cookie = "demoCookie=" + val + "; path=/";
  alert("Cookie stored");
}

function readMyCookie(){
  document.getElementById("cookieOutput").textContent =
    "Cookies: " + document.cookie;
}


// ================= SESSION STORAGE =================


function setSession(){
  const val = document.getElementById("sessionInput").value;
  sessionStorage.setItem("demoSession", val);
  alert("Session value stored");
}

function readSession(){
  const val = sessionStorage.getItem("demoSession");
  document.getElementById("sessionOutput").textContent =
    "Session Value: " + val;
}
