const apiKey = 'YOUR_API_KEY';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherIcon = document.getElementById('weather-icon');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const hobby = document.getElementById('hobby');
const forecastCards = document.querySelector('.forecast-cards');

// Function to fetch weather data from the API
async function fetchWeatherData(city) {
	const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
	const data = await response.json();
	return data;
}

// Function to fetch forecast data from the API
async function fetchForecastData(city) {
	const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`);
	const data = await response.json();
	return data.forecast.forecastday;
}

// Function to display current weather data on the page
function displayCurrentWeather(data) {
	weatherIcon.setAttribute('src', `https:${data.current.condition.icon}`);
	cityName.textContent = `${data.location.name} - ${data.location.country}`;
	condition2.textContent = `Condition: ${data.current.condition.text}`;
	temp.textContent = `Temperature: ${data.current.temp_c}°C`;
	humidity.textContent = `Humidity: ${data.current.humidity}%`;
	wind.textContent = `Wind: ${data.current.wind_kph} km/h`;
	latitude.textContent = `Latitude: ${data.location.lat}`;
	longitude.textContent = `Longitude: ${data.location.lon}`;
	feelsLike.textContent = `Feels Like: ${data.current.feelslike_c}°C`;


	// Show hobby section based on weather condition
	let condition = data.current.condition.text.toLowerCase();

	if (condition.includes('rain')) {
		hobby.innerHTML = `
		<h3>Indoor Hobbies for Rainy Day</h3>
		<ul>
		  <li>Reading a book</li>
		  <li>Watching a movie</li>
		  <li>Baking</li>
		</ul>
	  `;
		hobby.style.display = 'block';
	} else if (condition.includes('sunny')) {
		hobby.innerHTML = `
		<h3>Outdoor Hobbies for Sunny Day</h3>
		<ul>
		  <li>Cycling</li>
		  <li>Hiking</li>
		  <li>Swimming</li>
		</ul>
	  `;
		hobby.style.display = 'block';
	} else if (condition.includes('fog')) {
		hobby.innerHTML = `
		  <h3>Indoor Hobbies for Foggy Day</h3>
		  <ul>
			<li>Playing chess</li>
			<li>Journaling</li>
			<li>Listening to music</li>
		  </ul>
		`;
		hobby.style.display = 'block';
	} else if (condition.includes('mist')) {
		hobby.innerHTML = `
		  <h3>Indoor Hobbies for Misty Day</h3>
		  <ul>
			<li>Having a cozy reading session with a hot drink</li>
			<li>Trying out a new recipe for comfort food</li>
			<li>Starting a new knitting or crocheting project</li>
			<li>Watching a documentary or educational program</li>
			<li>Having a relaxing spa day at home</li>
		  </ul>
		`;
		hobby.style.display = 'block';
	} else if (condition.includes('overcast')) {
		hobby.innerHTML = `
		  <h3>Indoor Hobbies for Overcast Day</h3>
		  <ul>
			<li>Having a cozy movie marathon with snacks and blankets</li>
			<li>Starting a new creative project like painting or drawing</li>
			<li>Trying out a new baking recipe with seasonal ingredients</li>
			<li>Having a game day with family or roommates</li>
			<li>Having a virtual dance party with friends</li>
		  </ul>
		`;
		hobby.style.display = 'block';
	} else if (condition.includes('cloudy')) {
		hobby.innerHTML = `
		<h3>Indoor Hobbies for Cloudy Day</h3>
		<ul>
		  <li>Painting</li>
		  <li>Playing board games</li>
		  <li>Cooking</li>
		</ul>
	  `;
		hobby.style.display = 'block';
	} else if (condition.includes('snow')) {
		hobby.innerHTML = `
		<h3>Outdoor Hobbies for Snowy Day</h3>
		<ul>
		  <li>Skiing</li>
		  <li>Snowboarding</li>
		  <li>Building a snowman</li>
		</ul>
	  `;
		hobby.style.display = 'block';
	} else if (condition.includes('clear')) {
		hobby.innerHTML = `
		<h3>Outdoor Hobbies for Clear Day</h3>
		<ul>
		  <li>Picnicking</li>
		  <li>Playing Frisbee</li>
		  <li>Reading a book in the park</li>
		</ul>
	  `;
		hobby.style.display = 'block';
	} else if (condition.includes('hot')) {
		hobby.innerHTML = `
		  <h3>Indoor Hobbies for Hot Day</h3>
		  <ul>
			<li>Painting or drawing indoors</li>
			<li>Learning to code or develop websites</li>
			<li>Trying out a new DIY home decor project</li>
			<li>Having a refreshing swim or water activity if available</li>
			<li>Trying out a new ice cream or popsicle recipe</li>
		  </ul>
		`;
		hobby.style.display = 'block';
	} else if (condition.includes('wind')) {
		hobby.innerHTML = `
		  <h3>Indoor Hobbies for Windy Day</h3>
		  <ul>
			<li>Listening to a new podcast or audiobook</li>
			<li>Having a virtual hangout with friends or family</li>
			<li>Trying out a new baking recipe</li>
			<li>Playing a musical instrument or singing</li>
			<li>Starting a new creative writing project</li>
		  </ul>
		`;
		hobby.style.display = 'block';
	} else if (condition.includes('humid')) {
		hobby.innerHTML = `
		  <h3>Indoor Hobbies for Humid Day</h3>
		  <ul>
			<li>Doing a relaxing yoga or stretching routine</li>
			<li>Having a movie marathon with popcorn and snacks</li>
			<li>Trying out a new board game or card game</li>
			<li>Doing a home workout with resistance bands or weights</li>
			<li>Starting a new scrapbooking or memory-keeping project</li>
		  </ul>
		`;
		hobby.style.display = 'block';
	} else if (condition.includes('dry')) {
		hobby.innerHTML = `
		  <h3>Indoor Hobbies for Dry Day</h3>
		  <ul>
			<li>Trying out a new indoor plant or gardening project</li>
			<li>Starting a new puzzle or brain teaser</li>
			<li>Learning a new language or skill with an online course</li>
			<li>Trying out a new dessert recipe</li>
			<li>Having a virtual book club or discussion group</li>
		  </ul>
		`;
		hobby.style.display = 'block';
	} else if (condition.includes('storm')) {
		hobby.innerHTML = `
		<h3>Indoor Hobbies for Stormy Day</h3>
		<ul>
		  <li>Listening to music</li>
		  <li>Playing board games</li>
		  <li>Watching a movie</li>
		</ul>
	  `;
		hobby.style.display = 'block';
	} else if (condition.includes('windy')) {
		hobby.innerHTML = `
		<h3>Outdoor Hobbies for Windy Day</h3>
		<ul>
		  <li>Kite flying</li>
		  <li>Surfing</li>
		  <li>Go for a run</li>
		</ul>
	  `;
		hobby.style.display = 'block';
	} else {
		hobby.style.display = 'none';
	}
}


// Function to display forecast data on the page
function displayForecastData(data) {
	forecastCards.innerHTML = '';
	data.forEach(day => {
		const date = new Date(day.date).toDateString();
		const temp = `${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C`;
		const icon = `https:${day.day.condition.icon}`;
		const forecastCard = `
      <div class="forecast-card">
        <h3>${date}</h3>
        <img src="${icon}" alt="weather icon">
        <p>${temp}</p>
      </div>
    `;
		forecastCards.insertAdjacentHTML('beforeend', forecastCard);
	});
}

// Event listener for search button click
searchBtn.addEventListener('click', async () => {
	const city = cityInput.value.trim();
	if (city === '') {
		alert('Please enter a city');
		return;
	}
	const weatherData = await fetchWeatherData(city);
	if (weatherData.error) {
		alert('Unknown location. Please enter a valid city.');
		return;
	}
	const forecastData = await fetchForecastData(city);
	displayCurrentWeather(weatherData);
	displayForecastData(forecastData);
});
