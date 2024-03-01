document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '4dfccac529e9070032ee257fbf2b1865'; // Replace with your OpenWeatherMap API key
    const searchButton = document.getElementById('searchButton');
    const locationInput = document.getElementById('locationInput');
    const locationOutput = document.getElementById('location');
    const temperatureOutput = document.getElementById('temperature');
    const descriptionOutput = document.getElementById('description');

    searchButton.addEventListener('click', function() {
        const location = locationInput.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                locationOutput.textContent = data.name;
                temperatureOutput.textContent = `Temperature: ${data.main.temp}°C`;
                descriptionOutput.textContent = `Description: ${data.weather[0].description}`;
            })
            .catch(error => {
                console.error('There was a problem fetching the weather data:', error);
            });
    });
});
