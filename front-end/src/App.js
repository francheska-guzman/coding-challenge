import React, { Component } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Forecast from './components/Forecast';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';
import {
        BrowserRouter as Router,
        Route,
        Switch
        } from 'react-router-dom';

console.log("%cWelcome to the Weather Forecast!", "color: #ad8401; font-size: 16px");
console.log("%cDeveloped by Francheska Guzman.", "color: #0f3150; font-size: 14px");

class App extends Component {
  constructor(){
    super();
    this.state = {
      first_city: [],
      first_city_coord: [],
      first_city_main: [],
      first_city_sys: [],
      first_city_weather: [],
      first_city_wind: [],
      second_city: [],
      second_city_coord: [],
      second_city_main: [],
      second_city_sys: [],
      second_city_weather: [],
      second_city_wind: [],
      third_city: [],
      third_city_coord: [],
      third_city_main: [],
      third_city_sys: [],
      third_city_weather: [],
      third_city_wind: [],
      fourth_city: [],
      fourth_city_clouds: [],
      fourth_city_main: [],
      fourth_city_sys: [],
      fourth_city_weather: [],
      fourth_city_wind: [],
      fifth_city: [],
      fifth_city_coord: [],
      fifth_city_main: [],
      fifth_city_sys: [],
      fifth_city_weather: [],
      fifth_city_wind: []
    }
  }

// To try other cities: http://openweathermap.org/help/city_list.txt 
	
  initializeReactGA() {
	ReactGA.initialize('UA-132345211-1');
	ReactGA.pageview('/weather-forecast');
  }

  componentWillMount() {
    var api = 'https://api.openweathermap.org/data/2.5/';
    var cities = 'group?id=5128581,3451190,4568138,498817,3128760';
    var system = "&units=imperial";
    /*
    My two API keys in case of any issue are: 
    c2a8f705fd5c4cdcab53ed003fbf3927
    9fd9021ddf72d859fb5818cd4beee4f9
    */
    const key = '&appid=9fd9021ddf72d859fb5818cd4beee4f9';
    const url = api + cities + system + key;

    // Making a call to the openweathermap API, that get the object of five cities.
    fetch(url)
      .then((res) => {
       return res.json();
    }).then(data => {
    this.setState({
      first_city: data.list[0],
      first_city_coord: data.list[0].coord,
      first_city_main: data.list[0].main,
      first_city_sys: data.list[0].sys,
      first_city_weather: data.list[0].weather[0],
      first_city_wind: data.list[0].wind,
      second_city: data.list[1],
      second_city_coord: data.list[1].coord,
      second_city_main: data.list[1].main,
      second_city_sys: data.list[1].sys,
      second_city_weather: data.list[1].weather[0],
      second_city_wind: data.list[1].wind,
      third_city: data.list[2],
      third_city_coord: data.list[2].coord,
      third_city_main: data.list[2].main,
      third_city_sys: data.list[2].sys,
      third_city_weather: data.list[2].weather[0],
      third_city_wind: data.list[2].wind,
      fourth_city: data.list[3],
      fourth_city_coord: data.list[3].coord,
      fourth_city_main: data.list[3].main,
      fourth_city_sys: data.list[3].sys,
      fourth_city_weather: data.list[3].weather[0],
      fourth_city_wind: data.list[3].wind,
      fifth_city: data.list[4],
      fifth_city_coord: data.list[4].coord,
      fifth_city_main: data.list[4].main,
      fifth_city_sys: data.list[4].sys,
      fifth_city_weather: data.list[4].weather[0],
      fifth_city_wind: data.list[4].wind
      })
      // console.log(this.state);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Route startsWith path="/weather-forecast/" component={() =>
              (<Header />) }/>
          <Route path="/weather-forecast/:city" component={() =>
              (<Navigation />) }/>
          <Switch>
            <Route exact path="/weather-forecast/" component={() => 
                (<Home state={this.state} />) }/>
            <Route path="/weather-forecast/:city" component={() => 
                (<Forecast state={this.state} />) }/>
          </Switch>
          <Route startsWith path="/weather-forecast/" component={() =>
              (<Footer />) }/>
        </div>
      </Router>
    );
  }
}

export default App;
