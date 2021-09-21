import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class weatherApp extends React.Component {

  constructor(){
    super();
    this.state={
      weather:'',
    }

  }
  

  getWeather = async ()=>{
    
    var url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
    return fetch(url)
    .then(response=>response.json())
    .then(responseJson=>this.setState({
      weather : responseJson,
    }))
    .catch(error=>{
      console.log(error)
    })
    
  } 

  componentDidMount=()=>{
    this.getWeather();
  }

  render(){

    if(this.state.weather===''){

      return(
        <View>
         <Text>Loading......</Text>
        </View>
      )

    }

    else{

      return(

        <View>
        <Text style ={{margin:50, fontSize:24, fontWeight:'500'}}>Weather Forecast</Text>
        <Text style = {{margin:50}}> Humidity:{this.state.weather.main.humidity}</Text>
        </View>

      )

    }

  }

}