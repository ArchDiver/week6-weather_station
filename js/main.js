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

// ===========================================================================================
// -------------------------------------body---------------------------------------

let key = APIKEY_here;
let webID = document.querySelector('#locID');

// =====================================================================================================
// ===================================================================================================

function getWeather(unit){
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let zip = document.querySelector("#zip").value;
    let country = document.querySelector("#country").value;
    console.log(key,city,state,country,zip)
    console.log(zip)
    let units;
    let speed;

    if (zip == ''){
        console.log("if")
        locData = `q=${city},${state},${country}`;
        console.log(locData);
    }else {
        locData = `zip=${zip},${country}`;
        console.log(locData);
    };

    if (unit == 'F'){
        units = '&units=imperial';
        console.log(units);
        speed = " miles/hour"
    }else if(unit == 'C'){
        units = '&units=metric';
        console.log(units);
        speed = " meters/sec"
    } else {
        units = '';
        console.log(units);
        speed = " meters/sec"
    }
    unit += '\xB0'
    console.log(unit)
    console.log(locData);
    console.log(units);
    console.log(`https://api.openweathermap.org/data/2.5/weather?${locData}${units}&appid=${key}`);



    fetch(`https://api.openweathermap.org/data/2.5/weather?${locData}${units}&appid=${key}`)
    .then(response => response.json())
    .catch(error => {
      console.log('error at the beginning');
    })
    .then(rawData =>{

      // Local
      let locCity = document.querySelector('#locCity');
      let webcity = rawData.name;
      locCity.innerHTML = webcity;


      let locState = document.querySelector('#locState');
      locState.innerHTML = state;

      let locZip = document.querySelector('#locZip');
      locZip.innerHTML = zip;

      let locCountry = document.querySelector('#locCountry');
      let webcountry = rawData.sys.country;
      locCountry.innerHTML = webcountry;

      // Temp
      let currentTemp = document.querySelector('#currentTemp')
      let web_temp = rawData.main.temp;
      currentTemp.innerHTML = web_temp + " " +unit;

      // feelsLike Temp
      let feelsTemp = document.querySelector('#feelsTemp');
      let web_feels = rawData.main.feels_like;
      feelsTemp.innerHTML = web_feels + " " +unit;

      // High Temp
      let high = document.querySelector('#high');
      let web_high = rawData.main.temp_max;
      high.innerHTML = web_high + " " +unit;

      // Low Temp
      let low = document.querySelector('#low');
      let web_low = rawData.main.temp_min;
      low.innerHTML = web_low + " " +unit;

      // Amtmoshpecial Pressure
      let ATM = document.querySelector('#ATM');
      let web_ATM = rawData.main.pressure;
      ATM.innerHTML = web_ATM + " hPa";

      // forecast
      let forecast = document.querySelector('#forecast');
      let webforecast_Main = rawData.weather[0].main;
      let webforecast_Description = rawData.weather[0].description;
      forecast.innerHTML = webforecast_Main  + ", \n" + webforecast_Description;

      // Humidity
      let humidity = document.querySelector('#humid');
      let web_humidity = rawData.main.humidity;
      humidity.innerHTML = web_humidity  + "%" 
      console.log(webID)
      
      // Windspeed
      let wind = document.querySelector('#wind');
      let web_wind_speed = rawData.wind.speed;
      let web_wind_direction = rawData.wind.deg;
      let windy = web_wind_speed + " " + speed + ", in a direction of " + web_wind_direction;
      console.log(windy);
      wind.innerHTML = windy;


      // Sunrise and Sunset
      let sunrise = document.querySelector('#sunrise');
      let web_rise = rawData.sys.sunrise;
      let web_sunrise =  new Date(web_rise *1000);
      console.log(sunrise);
      let sunset = document.querySelector('#sunset');
      let web_set = rawData.sys.sunset;
      let web_sunset = new Date(web_set *1000);
      console.log(sunset);
      // console.log(sunhours);
      sunrise.innerHTML = "Sunrise: " + web_sunrise;
      sunset.innerHTML = "Sunset: " + web_sunset;
  })
  .catch(error => {
    console.log('error at the end')
    let err = document.querySelector('#error');
    let errMessage = "Location not recognized. \nChecking the infomation \nor adding more.";
    err.innerHTML = errMessage;
  })
};





// ==============================Original Code=============================
// function getTempK(){
//     let city = document.querySelector("#city").value;
//     let state = document.querySelector("#state").value;
//     let zip = document.querySelector("#zip").value;
//     let country = document.querySelector("#country").value;
//     console.log(key,city,state,country,zip)
//     console.log(zip)

//     if(zip == ''){
//         console.log("if")
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${key}`)
//         .then(response => response.json())
//         .then(rawData =>{
    
//             // Local
//             let locCity = document.querySelector('#locCity');
//             let webcity = rawData.name;
//             locCity.innerHTML = webcity;
    
    
//             let locState = document.querySelector('#locState');
//             locState.innerHTML = state;
    
//             let locZip = document.querySelector('#locZip');
//             locZip.innerHTML = zip;
    
//             let locCountry = document.querySelector('#locCountry');
//             let webcountry = rawData.sys.country;
//             locCountry.innerHTML = webcountry;
    
//             locID = document.querySelector('#locID');
//             let webID = rawData.id;
//             locID.innerHTML = webID
    
    
//             // High
//             let high = document.querySelector('#high');
//             let web_high = rawData.main.temp_max;
//             high.innerHTML = web_high + " K\xB0";
    
//             // Low
//             let low = document.querySelector('#low');
//             let web_low = rawData.main.temp_min;
//             low.innerHTML = web_low + " K\xB0";
    
//             // forecast
//             let forecast = document.querySelector('#forecast');
//             let webforecast_Main = rawData.weather[0].main;
//             let webforecast_Description = rawData.weather[0].description;
//             forecast.innerHTML = webforecast_Main  + ", \n" + webforecast_Description;
    
//             // Humidity
//             let humidity = document.querySelector('#humid');
//             let web_humidity = rawData.main.humidity;
//             humidity.innerHTML = web_humidity  + "%" 
//             console.log(webID)
//             return webID = rawData.id;    
//         });
//     }else{
//         console.log("else")
//         fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}`)
//         .then(response => response.json())
//         .then(rawData =>{
    
//             // Local
//             let locCity = document.querySelector('#locCity');
//             let webcity = rawData.name;
//             locCity.innerHTML = webcity;
    
    
//             let locState = document.querySelector('#locState');
//             locState.innerHTML = state;
    
//             let locZip = document.querySelector('#locZip');
//             locZip.innerHTML = zip;
    
//             let locCountry = document.querySelector('#locCountry');
//             let webcountry = rawData.sys.country;
//             locCountry.innerHTML = webcountry;
    
    
//             // High Temp
//             let high = document.querySelector('#high');
//             let web_high = rawData.main.temp_max;
//             high.innerHTML = web_high + " K\xB0";
    
//             // Low Temp
//             let low = document.querySelector('#low');
//             let web_low = rawData.main.temp_min;
//             low.innerHTML = web_low + " K\xB0";

//             // feelsLike Temp
            

//             // Amtmoshpecial Pressure
    
//             // forecast
//             let forecast = document.querySelector('#forecast');
//             let webforecast_Main = rawData.weather[0].main;
//             let webforecast_Description = rawData.weather[0].description;
//             forecast.innerHTML = webforecast_Main  + ", \n" + webforecast_Description;

//             // Humidity
//             let humidity = document.querySelector('#humid');
//             let web_humidity = rawData.main.humidity;
//             humidity.innerHTML = web_humidity  + "%" 
//             console.log(webID)
//             return webID = rawData.id;


//             // Windspeed

//             // Sunrise and Sunset
                
            
//         });
//     }

// };

// // ========================================================================================
// // =======================================================================================

// function getTempC(){
//     let city = document.querySelector("#city").value;
//     let state = document.querySelector("#state").value;
//     let zip = document.querySelector("#zip").value;
//     let country = document.querySelector("#country").value;
//     console.log(key,city,state,country,zip)

//     if(zip == ''){
//         console.log("if")
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=metric&appid=${key}`)
//         .then(response => response.json())
//         .then(rawData =>{
    
//             // Local
//             let locCity = document.querySelector('#locCity');
//             let webcity = rawData.name;
//             locCity.innerHTML = webcity;
    
    
//             let locState = document.querySelector('#locState');
//             locState.innerHTML = state;
    
//             let locZip = document.querySelector('#locZip');
//             locZip.innerHTML = zip;
    
//             let locCountry = document.querySelector('#locCountry');
//             let webcountry = rawData.sys.country;
//             locCountry.innerHTML = webcountry;
    
//             locID = document.querySelector('#locID');
//             let webID = rawData.id;
//             locID.innerHTML = webID
    
    
//             // High
//             let high = document.querySelector('#high');
//             let web_high = rawData.main.temp_max;
//             high.innerHTML = web_high + " K\xB0";
    
//             // Low
//             let low = document.querySelector('#low');
//             let web_low = rawData.main.temp_min;
//             low.innerHTML = web_low + " K\xB0";
    
//             // forecast
//             let forecast = document.querySelector('#forecast');
//             let webforecast_Main = rawData.weather[0].main;
//             let webforecast_Description = rawData.weather[0].description;
//             forecast.innerHTML = webforecast_Main  + ", \n" + webforecast_Description;
    
//             // Humidity
//             let humidity = document.querySelector('#humid');
//             let web_humidity = rawData.main.humidity;
//             humidity.innerHTML = web_humidity  + "%" 
//             console.log(webID)
//             return webID = rawData.id;    
//         });
//     }else{
//         console.log("else")
//         fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&units=metric&appid=${key}`)
//         .then(response => response.json())
//         .then(rawData =>{
    
//             // Local
//             let locCity = document.querySelector('#locCity');
//             let webcity = rawData.name;
//             locCity.innerHTML = webcity;
    
    
//             let locState = document.querySelector('#locState');
//             locState.innerHTML = state;
    
//             let locZip = document.querySelector('#locZip');
//             locZip.innerHTML = zip;
    
//             let locCountry = document.querySelector('#locCountry');
//             let webcountry = rawData.sys.country;
//             locCountry.innerHTML = webcountry;
    
    
//             // High
//             let high = document.querySelector('#high');
//             let web_high = rawData.main.temp_max;
//             high.innerHTML = web_high + " K\xB0";
    
//             // Low
//             let low = document.querySelector('#low');
//             let web_low = rawData.main.temp_min;
//             low.innerHTML = web_low + " K\xB0";
    
//             // forecast
//             let forecast = document.querySelector('#forecast');
//             let webforecast_Main = rawData.weather[0].main;
//             let webforecast_Description = rawData.weather[0].description;
//             forecast.innerHTML = webforecast_Main  + ", \n" + webforecast_Description;
    
//             // Humidity
//             let humidity = document.querySelector('#humid');
//             let web_humidity = rawData.main.humidity;
//             humidity.innerHTML = web_humidity  + "%" 
//             console.log(webID)
//             return webID = rawData.id;    
//         });
//     }
// };

// function getTempF(units){
//     let city = document.querySelector("#city").value;
//     let state = document.querySelector("#state").value;
//     let zip = document.querySelector("#zip").value;
//     let country = document.querySelector("#country").value;
//     console.log(key,city,state,country,zip)
//     let locData;
//     let measure = CFK; //



    
//     if(zip == ''){
//         console.log("if")
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=${key}`)
//         .then(response => response.json())
//         .then(rawData =>{
    
//             // Local
//             let locCity = document.querySelector('#locCity');
//             let webcity = rawData.name;
//             locCity.innerHTML = webcity;
    
    
//             let locState = document.querySelector('#locState');
//             locState.innerHTML = state;
    
//             let locZip = document.querySelector('#locZip');
//             locZip.innerHTML = zip;
    
//             let locCountry = document.querySelector('#locCountry');
//             let webcountry = rawData.sys.country;
//             locCountry.innerHTML = webcountry;
    
//             locID = document.querySelector('#locID');
//             let webID = rawData.id;
//             locID.innerHTML = webID
    
    
//             // High
//             let high = document.querySelector('#high');
//             let web_high = rawData.main.temp_max;
//             high.innerHTML = web_high + " K\xB0";
    
//             // Low
//             let low = document.querySelector('#low');
//             let web_low = rawData.main.temp_min;
//             low.innerHTML = web_low + " K\xB0";
    
//             // forecast
//             let forecast = document.querySelector('#forecast');
//             let webforecast_Main = rawData.weather[0].main;
//             let webforecast_Description = rawData.weather[0].description;
//             forecast.innerHTML = webforecast_Main  + ", \n" + webforecast_Description;
    
//             // Humidity
//             let humidity = document.querySelector('#humid');
//             let web_humidity = rawData.main.humidity;
//             humidity.innerHTML = web_humidity  + "%" 
//             console.log(webID)
//             return webID = rawData.id;    
//         });
//     }else{
//         console.log("else")
//         fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&units=imperial&appid=${key}`)
//         .then(response => response.json())
//         .then(rawData =>{
    
//             // Local
//             let locCity = document.querySelector('#locCity');
//             let webcity = rawData.name;
//             locCity.innerHTML = webcity;
    
    
//             let locState = document.querySelector('#locState');
//             locState.innerHTML = state;
    
//             let locZip = document.querySelector('#locZip');
//             locZip.innerHTML = zip;
    
//             let locCountry = document.querySelector('#locCountry');
//             let webcountry = rawData.sys.country;
//             locCountry.innerHTML = webcountry;
    
    
//             // High
//             let high = document.querySelector('#high');
//             let web_high = rawData.main.temp_max;
//             high.innerHTML = web_high + " K\xB0";
    
//             // Low
//             let low = document.querySelector('#low');
//             let web_low = rawData.main.temp_min;
//             low.innerHTML = web_low + " K\xB0";
    
//             // forecast
//             let forecast = document.querySelector('#forecast');
//             let webforecast_Main = rawData.weather[0].main;
//             let webforecast_Description = rawData.weather[0].description;
//             forecast.innerHTML = webforecast_Main  + ", \n" + webforecast_Description;
    
//             // Humidity
//             let humidity = document.querySelector('#humid');
//             let web_humidity = rawData.main.humidity;
//             humidity.innerHTML = web_humidity  + "%" 
//             console.log(webID)
//             return webID = rawData.id;    
//         });
//     }
// };
