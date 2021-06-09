
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
// const _SetMap = (lat,long) =>{
//   $(document).ready(function() {
//     var app = new Mapp({
//         element: '#app',
//         presets: {
//             latlng: {
//                 lat:lat,
//                 lng:long
//             },
//             zoom: 7,
//         },
//         apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4YjY4MDViNmU5ODU3ZDdiOTAxN2U4NWRkZWNlNjEwMTJiOWExYWY4NGRlM2ViNzg3OTJhY2FjZTBlYTQwYjRiZGVlOGJjYTcyZjNkZDUxIn0.eyJhdWQiOiIxNDI4NyIsImp0aSI6ImU4YjY4MDViNmU5ODU3ZDdiOTAxN2U4NWRkZWNlNjEwMTJiOWExYWY4NGRlM2ViNzg3OTJhY2FjZTBlYTQwYjRiZGVlOGJjYTcyZjNkZDUxIiwiaWF0IjoxNjIzMDY3MTI1LCJuYmYiOjE2MjMwNjcxMjUsImV4cCI6MTYyNTY1OTEyNSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.rS_bjwj2uQ5jOxKfyJPDje3v-Oc-CJpoJxlfP_0NmMz8m1sIR61_FOAokptojoQuBlIX_VKScjD4LkNy4xWDBnoQfM_I6DW7f5R60BYIWrTXZelFJUulHs5j1JemQHIFD9zjXc3Y159-nHeuTZugQrxcS3JL55AEwaJ3Ld5HBReUC9YyUwlNCsPA_P4BYFJywsJk9BnL7FkYle-lzHhWqmPYbYUcZxpI8QCLNkTqx25XB3yQCr3rDF7UH62zH67AT8894ph3sZ3W0mE5mN66pVvxnnfcB7EuiVOSJU_cAGCreJ5AaUg2_N0o3jq-Kw-cDFKkDwTaxWTEEwVJSBmBYA'
//     });
//   app.addLayers();
//   });
  
// }

const _findCountrys =(countrys,reg) => countrys.filter(country =>country.name.match(reg));
