import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const placeDetail =(props)=>{

    let modalContent = null;

    if (props.selectedPlace !== null){
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.imageStyle}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return(
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
            {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );
    
};

const styles = new StyleSheet.create({
    modalContainer:{
        margin: 22
    },
    imageStyle:{
        width: "100%",
        height: 200
    },
    placeName:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

export default placeDetail;