// Set up variables
var apiKey = "fb7c1ad92bb81728d12349821ce85842";
var currentWeather = $("#current-weather");
var fiveDayForecast = $("#five-day-forecast");

// Default cities to display
var cities = ["San Diego, Seattle, New York, Miami"];

// Add event listener to search button
$("#city-search").on("click", function(event) {
    console.log("Test the click!")
    event.preventDefault();

    // Get the user input
    var userInput = $("#city-input").val();
    console.log(userInput);

    // Show current weather of user's city input
    getCurrentWeather(userInput);

    // Show five day forecast of user's city input
    getFiveDayForecast(userInput);

    // Append city button to result container
    $("#buttons-view").append('<button class="btn btn-outline-secondary btn-clock city-btn">' + userInput + '</button>');
});

// Render city buttons


// Create function to retrieve and display current weather
function getCurrentWeather(cityName) {
    // Create URL
    var queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

    // Make AJAX call to get current weather data
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(data) {
        // Create current weather html markup
        var currentWeatherMarkup =
        `
        <div class="col-md card m-2" style="width:auto;">
            <div class="card-body">
                <h4 class="card-title">
                    <strong>${data.name}</strong>
                    <span>(${new Date().toLocaleDateString()})</span>
                    <span><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"></span>
                </h4>
                <p>Temperature: ${data.main.temp}&deg;F</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed}MPH</p>
            </div>
        </div>
        `;
        // Add markup to current-weather div
        $("#current-weather").html(currentWeatherMarkup);
    });
};

// Create function to retrieve and display 5-day forecast
function getFiveDayForecast(cityName) {

    
};

