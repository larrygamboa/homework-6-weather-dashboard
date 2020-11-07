// Set up variables
var apiKey = "fb7c1ad92bb81728d12349821ce85842";
var currentWeather = $("#current-weather");
var fiveDayForecast = $("#five-day-forecast");

// Default cities to display
var cities = ["San Diego, Seattle, New York, Miami"];

// Add event listener to search button
$("#city-search").on("click", function(event) {
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


};

// Create function to retrieve and display 5-day forecast
function getFiveDayForecast(cityName) {

    
};

