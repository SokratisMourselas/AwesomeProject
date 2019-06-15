import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const placeDetail =(props)=>{

    let modalContent = null;

    if (props.selectedPlace !== null){
        modalContent = (
            <View>
                <Image source={props.selectedPlace.placeImage}/>
                <Text>{props.selectedPlace.placeName}</Text>
            </View>
        );
    }

    return(
        <Modal>
            <View>
                <View>
                    <Button title="Delete" color="red"/>
                    <Button title="Close"/>
                </View>
            </View>
        </Modal>
    );
    
};

export default placeDetail;