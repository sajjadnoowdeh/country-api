const inputSearch = document.querySelector(".search");
inputSearch.addEventListener("keyup",async ()=>{
    
        let countrys = await _GetApiCountry()
        console.log(countrys);
        let searchtxt = inputSearch.value;
        if (searchtxt.length > 0) {
            scrollApp()
            const reg = new RegExp(`^${searchtxt}`,"gi")
            countrys = _findCountrys(countrys,reg);
            renderCountry(countrys);
        }else{
            emptyList()
            hideScroll()
        }
        
})


async function hundleCountry(code){
     const countryFind = await _getCountry(code);
     setBackGround(countryFind.flag);
     emptyList()
     const weather = await _GetWeatherCountry(countryFind.capital);
     console.log(weather);
     renderDesc(countryFind)
 }


