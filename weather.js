const apiKey = "42ca2561254544162bbff6a696f08f79";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=standard&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°f";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "mph";

    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })
    checkWeather(city);