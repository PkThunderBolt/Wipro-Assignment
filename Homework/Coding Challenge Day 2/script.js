const usersKey = "sf_users_v2";
const activitiesKey = "sf_activities_v2";

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(usersKey)) || [];
  } catch {
    return [];
  }
}
function saveUsers(u) {
  localStorage.setItem(usersKey, JSON.stringify(u));
}

if (!localStorage.getItem(usersKey)) {
  saveUsers([
    {
      username: "student1",
      password: "pass1",
      classSection: "10A",
      name: "Prashant Kumar",
    },
  ]);
}

function loadActivities() {
  try {
    return JSON.parse(localStorage.getItem(activitiesKey)) || [];
  } catch {
    return [];
  }
}
function saveActivities(a) {
  localStorage.setItem(activitiesKey, JSON.stringify(a));
}

if (!localStorage.getItem(activitiesKey)) {
  const sample = [
    {
      id: 1,
      activity: "Science lab report submission",
      subject: "Science",
      month: "March",
    },
    {
      id: 2,
      activity: "Write paragraph on climate",
      subject: "English",
      month: "February",
    },
  ];
  saveActivities(sample);
}

let currentUser = null;

// DOM elements
const authPane = document.getElementById("authPane");
const appPane = document.getElementById("appPane");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const gotoRegister = document.getElementById("gotoRegister");
const gotoLogin = document.getElementById("gotoLogin");
const authMessage = document.getElementById("authMessage");
const regMessage = document.getElementById("regMessage");
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const regUser = document.getElementById("regUser");
const regPass = document.getElementById("regPass");
const regClass = document.getElementById("regClass");
const logoutBtn = document.getElementById("logoutBtn");
const loggedUserInfo = document.getElementById("loggedUserInfo");
const profileName = document.getElementById("profileName");
const profileClass = document.getElementById("profileClass");
const subjectSelect = document.getElementById("subjectSelect");
const monthSelect = document.getElementById("monthSelect");
const activitiesBody = document.getElementById("activitiesBody");
const newActivityText = document.getElementById("newActivityText");
const addActivityBtn = document.getElementById("addActivityBtn");
const activityMsg = document.getElementById("activityMsg");

// Show/hide forms
gotoRegister.onclick = () => {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
  authMessage.textContent = "";
};
gotoLogin.onclick = () => {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  regMessage.textContent = "";
};

// Login
loginBtn.onclick = () => {
  const users = loadUsers();
  const u = loginUser.value.trim();
  const p = loginPass.value.trim();
  const found = users.find((x) => x.username === u && x.password === p);
  if (!found) {
    authMessage.textContent = "Invalid username or password";
    return;
  }
  currentUser = found;
  onLogin();
};

// Register
registerBtn.onclick = () => {
  const u = regUser.value.trim();
  const p = regPass.value.trim();
  const c = regClass.value.trim() || "Unknown";
  if (!u || !p) {
    regMessage.textContent = "Enter username and password";
    return;
  }
  const users = loadUsers();
  if (users.find((x) => x.username === u)) {
    regMessage.textContent = "Username taken";
    return;
  }
  users.push({ username: u, password: p, classSection: c, name: u });
  saveUsers(users);
  regMessage.style.color = "green";
  regMessage.textContent = "Registered successfully! You can login now.";
  regUser.value = regPass.value = regClass.value = "";
};

// Login success
function onLogin() {
  authPane.classList.add("hidden");
  appPane.classList.remove("hidden");
  loggedUserInfo.textContent = `Logged in as ${currentUser.username}`;
  profileName.textContent = currentUser.name;
  profileClass.textContent = currentUser.classSection;
  populateSubjects();
  renderActivities();
  showSection("welcome");
}

// Logout
logoutBtn.onclick = () => {
  currentUser = null;
  appPane.classList.add("hidden");
  authPane.classList.remove("hidden");
  loginUser.value = loginPass.value = "";
};

// Navigation
const navBtns = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");
navBtns.forEach((btn) => {
  btn.onclick = () => showSection(btn.dataset.show);
});
function showSection(id) {
  sections.forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Activities
function populateSubjects() {
  const acts = loadActivities();
  const subjects = Array.from(new Set(acts.map((a) => a.subject)));
  const defaults = ["Maths", "Science", "English", "Computer"];
  defaults.forEach((d) => {
    if (!subjects.includes(d)) subjects.push(d);
  });
  subjectSelect.innerHTML = subjects
    .map((s) => `<option>${s}</option>`)
    .join("");
}
function renderActivities() {
  const subj = subjectSelect.value || "Maths";
  const month = monthSelect.value || "January";
  const acts = loadActivities().filter(
    (a) => a.subject === subj && a.month === month
  );
  activitiesBody.innerHTML = acts.length
    ? acts
        .map(
          (a, i) =>
            `<tr><td>${i + 1}</td><td>${a.activity}</td><td>${
              a.subject
            }</td><td>${a.month}</td></tr>`
        )
        .join("")
    : '<tr><td colspan="4">No activities found.</td></tr>';
}
subjectSelect.onchange = monthSelect.onchange = renderActivities;
addActivityBtn.onclick = () => {
  const text = newActivityText.value.trim();
  if (!text) {
    activityMsg.textContent = "Enter activity text";
    return;
  }
  const subj = subjectSelect.value;
  const month = monthSelect.value;
  const acts = loadActivities();
  const newId = acts.length ? Math.max(...acts.map((a) => a.id)) + 1 : 1;
  acts.push({ id: newId, activity: text, subject: subj, month: month });
  saveActivities(acts);
  newActivityText.value = "";
  activityMsg.style.color = "green";
  activityMsg.textContent = "Activity added!";
  renderActivities();
  setTimeout(() => (activityMsg.textContent = ""), 2000);
};
