import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  state={
    places:[]
  }
  placeAddedHandler=placeName=>{
    this.setState(prevState=>{
        return{
          places: prevState.places.concat(placeName),
        };
    });
  }

  render() {
    const placesOutput = this.state.places.map((place,i)=>(
        <Text key={i}>{place}</Text>
      ));
    return (
      <View style={styles.container}>
          <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
          <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 26,
    alignItems: 'center',
    color: "green",
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
