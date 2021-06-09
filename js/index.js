

const inputSearch = document.querySelector(".search");
inputSearch.addEventListener("keyup",async ()=>{
    
        let countrys = await _GetApiCountry();
        let searchtxt = inputSearch.value;
        if (searchtxt.length > 0) {
    
            const reg = new RegExp(`^${searchtxt}`,"gi")
            countrys = _findCountrys(countrys,reg);
            renderCountry(countrys);
        }else{
            emptyList()
            $(".cards").empty()
        }
        
});



let lat = null,long = null;
async function hundleCountry(code){

    const countryFind = await _getCountry(code);
    modalShow(countryFind)
    setBackGround(countryFind.flag);
     emptyList()
     const weather = await _GetWeatherCountry(countryFind.capital);
     lat = weather.coord.lat;
     long = weather.coord.lon;
     renderMap()
     modalShow(code)
     renderDesc(countryFind)
     renderWeather(weather)
     renderCards(weather)

     
 }


function renderMap(){
    document.querySelector(".neshan").innerHTML = ` <div id="map" style="width: 100%; height: 100%; background: #eee; border: 2px solid #aaa;"></div>
    `
    var myMap = new ol.Map({
        target: 'map',
        key: 'web.QgU8wEhHUJbHxcOVOiGPPQ0Am7vPGUIgd4CRN0tH',
        maptype: 'dreamy',
        poi: true,
        traffic: true,
        view: new ol.View({
            center: ol.proj.fromLonLat([long,lat]),
            zoom: 5
        })
    });
    myMap.setMapType("dreamy");
    myMap.setMapType("dreamy-gold");
    myMap.setMapType("neshan");
}
