// function to handle DOM manipulation and API
document.getElementById('searchButton').addEventListener('click',function(){
    const city =document.getElementById('city-input').value;

    // open weatherapp api url
    const apiKey= 'bd5e378503939ddaee76f12ad7a97608';
    const apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    //Fetch data from api
    fetch(apiUrl)
    .then(response=>response.json())
    .then(data =>{
        // if the city is found, display weather
        if(data.cod===200){
            document.getElementById('weather-Result').innerHTML = `
                    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
        } else{
            // if the city is not found ,display the message
            document.getElementById('weather-Result').innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error=>{
            //In case of error of network or api error
            document.getElementById('weather-Result').innerHTML = `<p>There was an error fetching data. Please try again.</p>`;
            console.error('Error fetching weather data:', error); 
        });
    });
