function renderCountry(countrys){
    document.querySelector(".list-country").innerHTML= countrys.map((element,index) => {
        return `
         <li data-toggle="modal" data-target="#exampleModal"  onclick="hundleCountry(${element.callingCodes})" style="animation:animate 0.2s forwards linear ${index *0.2}s" class="bg-white pl-3 text-dark w-100 d-flex align-items-center country">
            <img width="40px" src="${element.flag}" alt="">
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
            <div class="col-6 d-flex flex-column align-items-center weather"></div>
        </div>
      
      
      `
}
function renderWeather(weather){
    const {description,icon,main} =weather.weather[0];
     document.querySelector(".weather").innerHTML = `
            <h1>${Math.round(weather.main.temp - 273.15)}°C</h1>
            <p>${description}</p>
            <img width="70px" src="http://openweathermap.org/img/wn/${icon}@2x.png">
            <span>${main}</span>
     `
}
function renderCards(weather){
    const {deg,gust,speed} = weather.wind
    document.querySelector(".cards").innerHTML =`
        <div class="col-md-4" >
            <div id="cards" class=" mt-4 mt-md-0 bg-white w-75 text-dark d-flex flex-column align-items-center justify-content-around rounded">
                <img width="35px" src="./img/celsius-thermometer-svgrepo-com.svg" alt="">
                <strong class="text-dark">${deg}</strong>
                <p>deg</p>
            </div>
        </div>
        <div class="col-md-4 ">
            <div id="cards" class=" mt-4 mt-md-0 m-md-auto bg-white w-75 text-dark d-flex flex-column align-items-center justify-content-around rounded">
                <img width="35px" src="./img/wind-svgrepo-com.svg" alt="">
                <strong class="text-dark">${(gust) ?? 0}</strong>
                <p>gust</p>
        </div>
        
        </div>
        <div class="col-md-4 ">
            <div id="cards" class=" mt-4 mt-md-0 ml-md-auto bg-white w-75 text-dark d-flex flex-column align-items-center justify-content-around rounded">
                <img width="35px" src="./img/dashboard-svgrepo-com.svg" alt="">
                <strong class="text-dark">${speed}</strong>
                <p>speed</p>
                </div>
        </div>

            <button class="btn btn-warning mt-4  mx-auto" data-toggle="modal" data-target="#exampleModal" >نمایش نقشه</bututon>

    `
}


function emptyList(){
    document.querySelector(".list-country").innerHTML =""
}

function setBackGround(flag){
    document.body.style.background = `linear-gradient(45deg,rgb(0 0 0 / 52%),rgb(0 0 0 / 52%)),url(${flag}) repeat`
     document.body.style.backgroundSize = "cover"
}

function modalShow(country){
    console.log(country);
   $(".modal-title").html(country.name)
   $(".img-modal").attr("src",country.flag);
   $(".native").html(country.nativeName)
   $(".capital").html(country.capital)
   $(".regin").html(country.region)
   $(".pup").html(country.population)

   $(".time").html(country.timezones)
   $(".code").html(country.numericCode)
} 

// https://restcountries.eu/rest/v2/alpha/${$(this).val()}