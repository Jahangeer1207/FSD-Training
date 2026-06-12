const input = document.querySelector("input");
const temperature = document.getElementById("temperature");
const weatherType = document.getElementById("weather-type");
const forecastContainer = document.getElementById("forecast");

const apiKey = "22ea40aadc5c587401480d173cf1b70a";

input.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
        const city = input.value.trim();

        if (!city) return;

        getCurrentWeather(city);
        getForecast(city);
    }
});

async function getCurrentWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.cod !== 200) {
            temperature.textContent = "City not found";
            weatherType.textContent = "";
            return;
        }

        temperature.textContent = `${data.main.temp} °C`;
        weatherType.textContent = data.weather[0].main;
    } catch (error) {
        console.error(error);
    }
}

async function getForecast(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        forecastContainer.innerHTML = "";

        const dailyForecasts = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        dailyForecasts.slice(0, 5).forEach(day => {
            const date = new Date(day.dt_txt);

            const card = document.createElement("div");
            card.classList.add("forecast-card");

            card.innerHTML = `
                <h4>${date.toLocaleDateString("en-US", { weekday: "short" })}</h4>
                <p>${Math.round(day.main.temp)}°C</p>
                <p>${day.weather[0].main}</p>
            `;

            forecastContainer.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}