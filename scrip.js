
const apikey = "223b7c710a1f286e002a3d07578a1b53";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function check(city){
    const k = await fetch(apiUrl + city +`&appid=${apikey}`);
    
    if(k.status ==404){
        alert("City not found");
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await k.json();
     document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"Km/h";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.scr="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.scr="clear.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.scr="mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.scr="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.scr="drizzle.png";
    }
    document.querySelector(".weather").style.display="block";
    }
    
    
}

searchbtn.addEventListener("click",() =>{
    check(searchbox.value);
})




