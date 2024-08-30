const apiKey = 'YOUR_API_KEY';
const location = 'Los Angeles';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weatherIcon = document.getElementById('weather-icon');
        const temp = document.getElementById('temp');
        const weatherDesc = document.getElementById('weather-desc');
        const locationSpan = document.getElementById('location');

        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temp.textContent = Math.round(data.main.temp);
        weatherDesc.textContent = data.weather[0].description;
        locationSpan.textContent = data.name;
    });