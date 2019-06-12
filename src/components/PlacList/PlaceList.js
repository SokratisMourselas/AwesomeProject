import React from 'react';
import {View} from 'react-native';
import ListItem from '../ListItem/ListItem';


const placeList =(props)=>{

    const placesOutput = props.places.map((place,i)=>(
        <ListItem key={i} placeName={place}/>
      ));
        
    return(
        <View style={styles.listContainer}>{this.placesOutput}</View>
    );
}

const styles = StyleSheet.create({
    listContainer:{
        width:"100%"
      }
});

export default placeList;