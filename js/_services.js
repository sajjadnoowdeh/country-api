const _GetApiCountry = async()=>{
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  return data
}

const _getCountry = async(code)=>{
  let countrys = await _GetApiCountry()
  return countrys.find(item=> item.callingCodes == code)
}

const _GetWeatherCountry = async(capital)=>{
  const weathersCountry = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=44b1fe8a6c0207544cdd674445971577`)
  const data = await weathersCountry.json();
  return data;
}

const _findCountrys =(countrys,reg) => countrys.filter(country =>country.name.match(reg));
