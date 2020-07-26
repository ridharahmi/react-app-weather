import React, {Component} from 'react';
import './App.css';

import Form from './components/Form';
import Weather from './components/Weather';

const api_key = "71d3a0f8205c7acf088e4a5f1703de5f";

class App extends Component {
    state = {
        tempreature:'',
        city: '',
        country:'',
        humidity: '',
        description: '',
        error: ''
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
        const data = await api.json();
        //console.log(data);
        if(city && country){
            this.setState({
                tempreature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            });
        }else{
            this.setState({
                tempreature:'',
                city: '',
                country:'',
                humidity: '',
                description: '',
                error: 'Please Enter City and Country'
            });
        }
    }

    render() {
        return (
            <div className="app">
             <h1>React Weather</h1>
            <div className = "weather">
             <Form getWeather = {this.getWeather}/>
             <Weather
            tempreature={this.state.tempreature}
            city= {this.state.city}
            country= {this.state.country}
            humidity= {this.state.humidity}
            description= {this.state.description}
            error= {this.state.error}
                />
           </div>
        </div>
    )
        ;
    }
}

export default App;