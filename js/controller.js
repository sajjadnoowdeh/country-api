function renderCountry(countrys){
    document.querySelector(".list-country").innerHTML= countrys.map((element,index) => {
        return `
         <li onclick="hundleCountry(${element.callingCodes})" style="animation:animate 0.2s forwards linear ${index *0.2}s" class="bg-white pl-3 text-dark w-100 d-flex align-items-center country">
            <img width="20px" src="${element.flag}" alt="">
            <h6 class="ml-4">${element.name}</h6>
        </li> 
         `
     });
}

function renderDesc(country){
      document.querySelector(".list-country").innerHTML = `
        <div class="row  desc-country">
            <div class="col-6">
                <p>Name: <small>${country.name}</small> </p>
                <p>Native Name: <small>${country.nativeName}</small> </p>
                <p>Capital: <small>${country.capital}</small> </p>
                <p>Rgion: <small>${country.region}</small> </p>
                <p>Pupulation: <small>${country.population}</small> </p>
                <p>Langauge: <small>${country.languages[0].name}</small> </p>
                <p>TimeZone: <small>${country.timezones[0]}</small> </p>
                <p>Code: <small>${country.numericCode}</small> </p>
            </div>
            <div class="col-6 d-flex flex-column align-items-center">
                <h1>31OC</h1>
                <p>Logos,Lg</p>
                <img width="70px" src="./img/iconfinder_weather-partlycloudy_274769.svg" alt="">
                <span>cloudy</span>
            </div>
        </div>
      
      
      `
}
function renderWeather(weather){
    
}
function scrollApp(){
    document.querySelector(".main-app").style.overflowY = "scroll"
}
function hideScroll(){
    document.querySelector(".main-app").style.overflow = "hidden"
}

function emptyList(){
    document.querySelector(".list-country").innerHTML =""
}

function setBackGround(flag){
    document.body.style.background = `url(${flag}) no-repeat`
     document.body.style.backgroundSize = "cover"
}


// https://restcountries.eu/rest/v2/alpha/${$(this).val()}