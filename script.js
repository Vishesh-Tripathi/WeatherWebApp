    
   
 
  document.getElementById("userInput").value = "Kanpur";
function getValue() {
  
  var city = document.getElementById("userInput").value;
  
  console.log(city);
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2f9b3beb4aa181edd0ecf94473c782f`;

const shuivam = async()=>{
  const data = await fetch(url);
  const isdi = await data.json();
  const  fa = isdi.main.temp;
  const df= isdi.weather[0].main;
  const rg = isdi.sys.country;
  var  city = isdi.name;
  document.getElementById("gh").innerHTML=city;

  document.getElementById("span").innerHTML=","+rg;
  // icon changing
  var iconcode = isdi.weather[0].icon;
  var img = document.getElementById("imgf");
  document.getElementById("ws").innerHTML="Weather Forecast For  "+city;


   // Summary section
    document.getElementById("main_temp").innerHTML=Math.floor(isdi.main.temp-273)+"°C";
    document.getElementById("feelslike").innerHTML=Math.floor(isdi.main.feels_like-273)+"°C";
    document.getElementById("pressure").innerHTML=Math.floor(isdi.main.pressure)+"hPa";
    document.getElementById("humidity").innerHTML=Math.floor(isdi.main.humidity)+"%";
    document.getElementById("visibility").innerHTML=Math.floor((isdi.visibility)/1000)+"KM";

    

  
  
    if(iconcode == "01d"){
      //clear sky
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg");

    }else if(iconcode == "02d"){
      //fewClouds
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg");

    }else if(iconcode == "03d"){
      //scattered clouds
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg");

    }else if(iconcode == "04d"){
      // broken clouds
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg");

    }else if(iconcode == "09d"){
      // shower RAin
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-rain.svg");

    }else if(iconcode == "11d"){
      // thunderstorm
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-day-rain.svg");

    }else if(iconcode == "13d"){
      // Snow
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/snow.svg");

    }else if(iconcode == "50d"){
      // mist
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/mist.svg");

    }else if(iconcode == "10d"){
      // rain
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/rain.svg");

    }

    //night Icon
    else if(iconcode == "01n"){
      //clear sky
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/clear-night.svg");

    }else if(iconcode == "02n"){
      //fewClouds
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night.svg");

    }else if(iconcode == "03n"){
      //scattered clouds
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/overcast-night.svg");

    }else if(iconcode == "04n"){
      // broken clouds
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg");

    }else if(iconcode == "09n"){
      // shower RAin
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg");

    }else if(iconcode == "11n"){
      // thunderstorm
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-night-rain.svg");

    }else if(iconcode == "13n"){
      // Snow
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/snow.svg");
    }else if(iconcode == "50n"){
      // mist
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/mist.svg");

    }else if(iconcode == "10n"){
      // rain
      img.setAttribute("src","https://basmilius.github.io/weather-icons/production/fill/all/rain.svg");

    }









  // console.log(img.src); 
 
  const sunrise = new Date((isdi.sys.sunrise ) * 1000).toLocaleTimeString();
  const sunset = new Date((isdi.sys.sunset ) * 1000).toLocaleTimeString();
 
    
  var v = Math.floor(fa-273);
  console.log(v);
  console.log(df);
  document.getElementById("th").innerHTML=Math.floor(isdi.main.temp_max-273)+"°C";
  document.getElementById("tm").innerHTML=Math.floor(isdi.main.temp_min-273)+"°C";
  document.getElementById("hawa").innerHTML=Math.floor((isdi.wind.speed*3.6))+"Kmph";
  document.getElementById("rise").innerHTML=sunrise;
  document.getElementById("set").innerHTML=sunset;
  

  

console.log(sunrise);
console.log(sunset);




  document.getElementById("cts").innerHTML=df;
  var c = document.getElementById("shi");
  c.innerHTML=v+"°C";
}

shuivam();
}






shuivam();






function getQuote(){
  let url=`https://api.quotable.io/quotes/random`;
  const quote = document.getElementById("qutoe");
  const cite = document.getElementById("author");

const ishu = async()=>{
  const data2 = await fetch(url);
  const data3 = await data2.json();
 quote.innerHTML = data3[0].content;
 cite.innerHTML = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+data3[0].author;
 
  console.log(data3[0].author)
  
}
ishu();



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


var d = new Date();
var  f = months[d.getMonth()];
var  din = days[d.getDay()];
var tarikh = d.getDate();
var dinak = [din,tarikh+"th",f]
// console.log(dinak);
let  fullDate = document.getElementById("dateFull").innerHTML=din+" "+tarikh+"th"+" "+f;


}