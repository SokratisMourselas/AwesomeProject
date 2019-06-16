import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import placeImage from './src/assets/zante.jpg';

class App extends Component{

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  placeSelectedHandler = key =>{
    this.props.onSelectPlace(key);
  }

  placeDeletedHandler=()=>{
    this.props.onDeletePlace();
  }


  modalClosedHandler=()=>{
    this.props.onDeselectPlace();
  }

  render() { 
    
    return (
      <View style={styles.container}>
      <PlaceDetail selectedPlace={this.props.selectedPlace} 
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
         <PlaceList places={this.props.places} 
                    onItemSelected={this.placeSelectedHandler}/> 
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
  }
});

const mapStateToProps = state => {
  return{
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispach = dispatch => {
  return{
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispach)(App);
