
import React from "react";

import Titles from "./components/Titles";

import Forms from "./components/Forms";

import Weather from "./components/Weather";


const API_KEY = '9d6644f39b9dcf719a92c5393a3b3ac5';

class App extends React.Component {

    state = {
        temperature: undefined,

        city: undefined,

        country: undefined,

        humidity: undefined,

        description: undefined,

        error: undefined
    }

    getWeather = async (e) => {

        e.preventDefault();

        const city = e.target.elements.city.value;

        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

        const data = await api_call.json();

        console.log(data);



       if(city && country && data.cod !=="404") {

            this.setState({
                temperature: data.main.temp,

                city: data.name,

                country: data.sys.country,

                humidity: data.main.humidity,

                description: data.weather[0].description,

                error: ''
            })
        } else {
            this.setState({
                temperature: undefined,

                city: undefined,

                country: undefined,

                humidity: undefined,

                description: undefined,

                error: 'Please correctly enter your city and country'

            })
        }


    }

    render() {

        return (

            <div>
               <div className="wrapper">
                   <div className="main">
                       <div classsName="container">
                           <div className="row">
                               <div className="col-xs-6 title-container">
                               <Titles />
                               </div>
                               <div className="col-xs-7 form-container">
                                   <Forms getWeather={this.getWeather}/>

                                   <Weather

                                       temperature={this.state.temperature}

                                       city={this.state.city}

                                       country={this.state.country}

                                       humidity={this.state.humidity}

                                       description={this.state.description}

                                       error={this.state.error}

                                   />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

            </div>

        );
    }
};

export default App;