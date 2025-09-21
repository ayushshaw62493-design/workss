// ----------------- Language Labels -----------------

// Rain animation generator
const rainContainer = document.getElementById('rain');
if(rainContainer){
  const drops = 100; // number of raindrops
  for(let i=0; i<drops; i++){
    const drop = document.createElement('div');
    drop.classList.add('raindrop');
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    rainContainer.appendChild(drop);
  }
}
const labels = {
  en: {
    loginTitle: "KrishiMitra Login",
    registerTitle:"KrishiMitra Registration",
    username:"Username",
    password:"Password",
    email:"Email",
    loginBtn:"Login",
    registerBtn:"Register",
    newUser:"New User? Register Here",
    cropLabel:"Select Crop:",
    soilLabel:"Select Soil:",
    locationLabel:"Enter City:",
    advisoryTitle:"Advisory",
    optimalSowing:"Optimal Sowing",
    harvesting:"Harvesting Time",
    irrigation:"Irrigation",
    fertilizer:"Fertilizer",
    pest:"Pest & Diseases",
    climate:"Climate Practices",
    weather:"Weather Info",
    selectLang:"Select Language"
  },
  hi: {
    loginTitle:"कृषिमित्र लॉगिन",
    registerTitle:"कृषिमित्र पंजीकरण",
    username:"उपयोगकर्ता नाम",
    password:"पासवर्ड",
    email:"ईमेल",
    loginBtn:"लॉगिन",
    registerBtn:"पंजीकरण",
    newUser:"नया उपयोगकर्ता? यहाँ पंजीकरण करें",
    cropLabel:"फ़सल चुनें:",
    soilLabel:"मिट्टी का प्रकार:",
    locationLabel:"शहर दर्ज करें:",
    advisoryTitle:"सलाह",
    optimalSowing:"उत्तम बुवाई",
    harvesting:"फसल कटाई का समय",
    irrigation:"सिंचाई",
    fertilizer:"उर्वरक",
    pest:"कीट और रोग",
    climate:"जलवायु आधारित प्रथाएँ",
    weather:"मौसम जानकारी",
    selectLang:"भाषा चुनें"
  },
  bn: {
    loginTitle:"কৃষিমিত্র লগইন",
    registerTitle:"কৃষিমিত্র নিবন্ধন",
    username:"ব্যবহারকারীর নাম",
    password:"পাসওয়ার্ড",
    email:"ইমেল",
    loginBtn:"লগইন",
    registerBtn:"নিবন্ধন",
    newUser:"নতুন ব্যবহারকারী? এখানে নিবন্ধন করুন",
    cropLabel:"ফসল নির্বাচন করুন:",
    soilLabel:"মাটি নির্বাচন করুন:",
    locationLabel:"শহর লিখুন:",
    advisoryTitle:"পরামর্শ",
    optimalSowing:"সেরা বপন",
    harvesting:"ফসল কাটার সময়",
    irrigation:"সেচ",
    fertilizer:"সার",
    pest:"পোকামাকড় ও রোগ",
    climate:"জলবায়ু প্রথা",
    weather:"আবহাওয়া",
    selectLang:"ভাষা নির্বাচন করুন"
  }
};

// ----------------- Crop Advisory -----------------
const cropAdvisory = {
  rice:{sowing:"June-July", harvesting:"Nov-Dec", irrigation:"Standing water", fertilizer:"Nitrogen-rich", pest:"Brown hopper, blight", climate:"Warm, humid"},
  wheat:{sowing:"Nov-Dec", harvesting:"Mar-Apr", irrigation:"Tillering & heading", fertilizer:"Urea + DAP", pest:"Rust, aphids", climate:"Cool winter"},
  maize:{sowing:"Jun-Jul / Sep-Oct", harvesting:"Sep-Nov", irrigation:"Tasseling & grain filling", fertilizer:"NPK split doses", pest:"Stem borer, leaf blight", climate:"Warm"},
  cotton:{sowing:"Apr-May", harvesting:"Sep-Nov", irrigation:"Regular", fertilizer:"NPK mix", pest:"Bollworm", climate:"Hot"},
  sugarcane:{sowing:"Feb-Mar", harvesting:"Dec-Apr", irrigation:"Heavy", fertilizer:"Nitrogen & Potash", pest:"Shoot borer", climate:"Tropical"},
  jute:{sowing:"Mar-Apr", harvesting:"Jul-Sep", irrigation:"Moderate", fertilizer:"Organic", pest:"Stem weevil", climate:"Humid"},
  pulses:{sowing:"Oct-Nov", harvesting:"Feb-Mar", irrigation:"Light", fertilizer:"DAP + Potash", pest:"Pod borer", climate:"Dry"},
  tea:{sowing:"Anytime moist", harvesting:"Year-round", irrigation:"Frequent", fertilizer:"NPK", pest:"Blister blight", climate:"Cool humid"},
  coffee:{sowing:"Jun-Jul", harvesting:"Nov-Jan", irrigation:"Regular", fertilizer:"Nitrogen & Potash", pest:"Berry borer", climate:"Cool"},
  mustard:{sowing:"Oct-Nov", harvesting:"Feb-Mar", irrigation:"3-4 times", fertilizer:"NPK mix", pest:"Aphids", climate:"Cool dry"}
};

// ----------------- Language Update -----------------
function updateLanguage(page){
  const lang = document.getElementById("languageSelect").value;
  localStorage.setItem("lang", lang);
  const l = labels[lang];

  if(page==="login"){
    document.getElementById("loginTitle").innerText=l.loginTitle;
    document.getElementById("username").placeholder=l.username;
    document.getElementById("password").placeholder=l.password;
    document.getElementById("loginBtn").innerText=l.loginBtn;
    document.getElementById("registerText").innerText=l.newUser;
  }
  if(page==="register"){
    document.getElementById("registerTitle").innerText=l.registerTitle;
    document.getElementById("newUsername").placeholder=l.username;
    document.getElementById("newPassword").placeholder=l.password;
    document.getElementById("email").placeholder=l.email;
    document.getElementById("registerBtn").innerText=l.registerBtn;
  }
  if(page==="crop"){
    document.getElementById("cropLabel").innerText=l.cropLabel;
  }
  if(page==="soil"){
    document.getElementById("soilLabel").innerText=l.soilLabel;
  }
  if(page==="location"){
    document.getElementById("locationLabel").innerText=l.locationLabel;
  }
}

// ----------------- Registration & Login -----------------
function registerUser(){
  const username=document.getElementById("newUsername").value;
  const password=document.getElementById("newPassword").value;
  const email=document.getElementById("email").value;
  if(!username||!password||!email){alert("Fill all fields!"); return;}
  let users=JSON.parse(localStorage.getItem("users"))||[];
  if(users.find(u=>u.username===username)){alert("Username exists!"); return;}
  users.push({username,password,email});
  localStorage.setItem("users",JSON.stringify(users));
  alert("Registration successful!");
  window.location.href="index.html";
}

function login(){
  const username=document.getElementById("username").value;
  const password=document.getElementById("password").value;
  let users=JSON.parse(localStorage.getItem("users"))||[];
  const user=users.find(u=>u.username===username && u.password===password);
  if(user){localStorage.setItem("loggedInUser",username); window.location.href="crop.html";}
  else{alert("Invalid credentials!");}
}

// ----------------- Crop / Soil / Location Navigation -----------------
function goToSoil(){
  const crop=document.getElementById("cropSelect").value;
  if(!crop){alert("Select crop!"); return;}
  localStorage.setItem("selectedCrop",crop);
  window.location.href="soil.html";
}

function goToLocation(){
  const soil=document.getElementById("soilSelect").value;
  if(!soil){alert("Select soil!"); return;}
  localStorage.setItem("selectedSoil",soil);
  window.location.href="location.html";
}

function goToAdvisory(){
  const city=document.getElementById("cityInput").value;
  if(!city){alert("Enter city!"); return;}
  localStorage.setItem("selectedLocation",city);
  window.location.href="advisory.html";
}

// ----------------- Weather API -----------------
// ----------------- Weather API -----------------
async function getWeather(city){
  const apiKey = "3ae862d0f9bd431da8b125033252109"; // ✅ only the key
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);
    const data = await res.json();

    if(data.current){
      return `🌡 ${data.current.temp_c}°C | 💧 ${data.current.humidity}% | 🌦 ${data.current.condition.text}`;
    }
    return "Weather not found";
  } catch(e){
    return "Error fetching weather";
  }
}

// ----------------- Show Advisory -----------------
// ----------------- Show Advisory -----------------
async function showAdvisory() {
  const crop = localStorage.getItem("selectedCrop");
  const soil = localStorage.getItem("selectedSoil");
  const city = localStorage.getItem("selectedLocation");
  const lang = localStorage.getItem("lang") || "en";
  const l = labels[lang];
  const advisory = cropAdvisory[crop];
  const weather = await getWeather(city);

  let suggestion = "";

  // --- Temperature based (priority) ---
  const tempMatch = weather.match(/🌡\s*([\d.]+)°C/);
  if (tempMatch) {
    const temp = parseFloat(tempMatch[1]);
    if (temp >= 35) {
      suggestion = "⚠️ High temperature alert: Water crops frequently and protect from heat stress.";
    } else if (temp <= 10) {
      suggestion = "❄️ Low temperature alert: Protect seedlings and sensitive crops from cold.";
    } else if (temp >= 25 && temp <= 35) {
      suggestion = "🌱 Temperature is ideal for growth.";
    } else if (temp > 10 && temp < 25) {
      suggestion = "🌤 Moderate temperature: Ensure normal irrigation and monitor growth.";
    }
  }

  // --- If no temp suggestion, fall back to weather condition ---
  if (!suggestion) {
    if (weather.includes("rain") || weather.includes("Rain") || weather.includes("shower")) {
      suggestion = "💡 Suggestion: Ensure proper drainage and avoid overwatering.";
    } else if (weather.includes("clear") || weather.includes("sun")) {
      suggestion = "💡 Suggestion: Ideal weather for sowing and growth. Maintain irrigation.";
    } else if (weather.includes("storm") || weather.includes("thunder")) {
      suggestion = "💡 Suggestion: Protect crops from strong winds and heavy rain.";
    } else {
      suggestion = "💡 Suggestion: Monitor weather and adjust irrigation and fertilization accordingly.";
    }
  }

  // --- Show Advisory ---
  if (document.getElementById("advisoryOutput")) {
    document.getElementById("advisoryOutput").innerHTML = `
      <h2>${crop.toUpperCase()} - ${l.advisoryTitle}</h2>
      <p><b>${l.optimalSowing}:</b> ${advisory.sowing}</p>
      <p><b>${l.harvesting}:</b> ${advisory.harvesting}</p>
      <p><b>${l.irrigation}:</b> ${advisory.irrigation} | Soil: ${soil}</p>
      <p><b>${l.fertilizer}:</b> ${advisory.fertilizer}</p>
      <p><b>${l.pest}:</b> ${advisory.pest}</p>
      <p><b>${l.climate}:</b> ${advisory.climate}</p>
      <hr>
      <h3>🌍 ${l.weather} - ${city}</h3>
      <p>${weather}</p>
      <p style="margin-top:10px; font-weight:bold; color:#FFD700;">${suggestion}</p>
    `;
  }
}

// Run advisory on advisory.html
if(document.getElementById("advisoryOutput")) showAdvisory();

// ----------------- Load language from localStorage on page load -----------------
document.addEventListener("DOMContentLoaded",()=>{
  const lang=localStorage.getItem("lang")||"en";
  const selectLang=document.getElementById("languageSelect");
  if(selectLang) selectLang.value=lang;
  const pages=["login","register","crop","soil","location"];
  pages.forEach(p=>{if(document.body.contains(document.getElementById(p+"Title"))) updateLanguage(p);});
});
window.addEventListener('DOMContentLoaded', () => {
  const rainContainer = document.getElementById('rain');
  if(rainContainer){
    const drops = 100; // number of raindrops
    for(let i=0; i<drops; i++){
      const drop = document.createElement('div');
      drop.classList.add('raindrop');
      drop.style.left = Math.random() * window.innerWidth + 'px';
      drop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
      drop.style.animationDelay = Math.random() * 2 + 's';
      rainContainer.appendChild(drop);
    }
  }
});

