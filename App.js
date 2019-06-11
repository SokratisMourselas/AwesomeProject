import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component{

  state={
    places:['Munich', 'San Francisco']
  }

  placeAddedHandler = placeName => {
    this.setState( prevState => {
        return {
          places: prevState.places.concat(placeName)
        };
    });
  };

  render() { 
    const placesOutput = this.state.places.map((place,i)=>(
        <ListItem key={i} placeName={place}/>
      ));
    return (
      <View style={styles.container}>
          <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
          <View style={styles.listContainer}>{placesOutput}</View>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listContainer:{
    width:"100%"
  }
});
