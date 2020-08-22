// -----------------------NavBar--------------------------------
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

// -------------------------------------body---------------------------------------

let key = 'fd8fe80ceb57784cd10eae5dd2dcd81c'
let webID = document.querySelector('#locID');

function getTempK(){
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let zip = document.querySelector("#zip").value;
    let country = document.querySelector("#country").value;
    console.log(key,city,state,country,zip)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country},us&appid=${key}`)
    .then(response => response.json())
    .then(rawdata =>{

        // Local
        let locCity = document.querySelector('#locCity');
        let webcity = rawdata.name;
        locCity.innerHTML = webcity;


        let locState = document.querySelector('#locState');
        locState.innerHTML = state;

        let locZip = document.querySelector('#locZip');
        locZip.innerHTML = zip;

        let locCountry = document.querySelector('#locCountry');
        let webcountry = rawdata.sys.country;
        locCountry.innerHTML = webcountry;

        locID = document.querySelector('#locID');
        let webID = rawdata.id;
        locID.innerHTML = webID


        // High
        let high = document.querySelector('#high');
        let web_high = rawdata.main.temp_max;
        high.innerHTML = web_high + " K\xB0";

        // Low
        let low = document.querySelector('#low');
        let web_low = rawdata.main.temp_min;
        low.innerHTML = web_low + " K\xB0";

        // Forcast
        let forcast = document.querySelector('#forcast');
        let webforecast_Main = rawdata.weather[0].main;
        let webforcast_Description = rawdata.weather[0].description;
        forcast.innerHTML = webforecast_Main  + ", \n" + webforcast_Description;

        // Humidity
        let humidity = document.querySelector('#humid');
        let web_humidity = rawdata.main.humidity;
        humidity.innerHTML = web_humidity  + "%" 
        console.log(webID)
        return webID = rawdata.id;

    });
};

function getTempC(){
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let zip = document.querySelector("#zip").value;
    let country = document.querySelector("#country").value;
    console.log(key,city,state,country,zip)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country},us&units=metric&appid=${key}`)
    .then(response => response.json())
    .then(rawdata =>{

        // Local
        let locCity = document.querySelector('#locCity');
        let webcity = rawdata.name;
        locCity.innerHTML = webcity;


        let locState = document.querySelector('#locState');
        locState.innerHTML = state;

        let locZip = document.querySelector('#locZip');
        locZip.innerHTML = zip;

        let locCountry = document.querySelector('#locCountry');
        let webcountry = rawdata.sys.country;
        locCountry.innerHTML = webcountry;

        locID = document.querySelector('#locID');
        let webID = rawdata.id;
        locID.innerHTML = webID


        // High
        let high = document.querySelector('#high');
        let web_high = rawdata.main.temp_max;
        high.innerHTML = web_high + " C\xB0";

        // Low
        let low = document.querySelector('#low');
        let web_low = rawdata.main.temp_min;
        low.innerHTML = web_low + " C\xB0";

        // Forcast
        let forcast = document.querySelector('#forcast');
        let webforecast_Main = rawdata.weather[0].main;
        let webforcast_Description = rawdata.weather[0].description;
        forcast.innerHTML = webforecast_Main  + ", \n" + webforcast_Description;

        // Humidity
        let humidity = document.querySelector('#humid');
        let web_humidity = rawdata.main.humidity;
        humidity.innerHTML = web_humidity  + "%" 
        console.log(webID)
        return webID = rawdata.id;

    });
};

function getTempF(){
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let zip = document.querySelector("#zip").value;
    let country = document.querySelector("#country").value;
    console.log(key,city,state,country,zip)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country},us&units=imperial&appid=${key}`)
    .then(response => response.json())
    .then(rawdata =>{

        // Local
        let locCity = document.querySelector('#locCity');
        let webcity = rawdata.name;
        locCity.innerHTML = webcity;


        let locState = document.querySelector('#locState');
        locState.innerHTML = state;

        let locZip = document.querySelector('#locZip');
        locZip.innerHTML = zip;

        let locCountry = document.querySelector('#locCountry');
        let webcountry = rawdata.sys.country;
        locCountry.innerHTML = webcountry;

        locID = document.querySelector('#locID');
        let webID = rawdata.id;
        locID.innerHTML = webID


        // High
        let high = document.querySelector('#high');
        let web_high = rawdata.main.temp_max;
        high.innerHTML = web_high + " F\xB0";

        // Low
        let low = document.querySelector('#low');
        let web_low = rawdata.main.temp_min;
        low.innerHTML = web_low + " F\xB0";

        // Forcast
        let forcast = document.querySelector('#forcast');
        let webforecast_Main = rawdata.weather[0].main;
        let webforcast_Description = rawdata.weather[0].description;
        forcast.innerHTML = webforecast_Main  + ", \n" + webforcast_Description;

        // Humidity
        let humidity = document.querySelector('#humid');
        let web_humidity = rawdata.main.humidity;
        humidity.innerHTML = web_humidity  + "%" 
        console.log(webID)
        return webID = rawdata.id;

    });
};