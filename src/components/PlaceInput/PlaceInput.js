import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';


class PlaceInput extends Component{
    state={
        placeName:'',
        placePassword:'',
    }

    placeNameChangerHandler=val=>{
        this.setState({
        placeName: val
        });
    };

    placePasswordChangerHandler=val=>{
        this.setState({
          placePassword: val
        });
    };

    placeSubmitHandler=()=>{
        if(this.state.placeName.trim() === ""){
          return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    }

    render(){
      return (
            <View style={styles.inputContainer}>
                <Text style={styles.welcome}>Welcome to an Awesome App</Text>
                <TextInput 
                    style={styles.placeInput}
                    placeholder="Username"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangerHandler}/>
                <TextInput 
                    style={styles.placeInput}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.placePassword}
                    onChangeText={this.placePasswordChangerHandler}/>
                <Button 
                    title="Sign In"
                    style={styles.buttonInput}
                    onPress={this.placeSubmitHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer:{
      // flex: 1,
      width:"100%",
      flexDirection:"column",
      alignItems: "center",
      justifyContent:"space-between"
    },
    placeInput:{
      width:"300",
      borderColor: "black", 
      borderWidth:1, 
      margin:6
    },
    welcome: {
        fontSize: 26,
        alignItems: 'center',
        color: "green",
        margin: 10,
      },
    buttonInput:{
      width:"50%"
    }
  });

export default PlaceInput;