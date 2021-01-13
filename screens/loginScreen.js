import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput, Alert, Image, Modal, ScrollView, KeyboardAvoidingView,} from 'react-native';
import firebase from 'firebase';
import db from '../config';
//import SantaAnimation from '../SantaClaus';

export default class LoginScreen extends React.Component {

    constructor(){
        super();
        this.state={
            emailId:"",
            password:"",
            first_name:"",
            last_name:"",
            address:"",
            mobile_no:"",
            username:"",
            confirmPassword:"",
            isModalVisible:'false',
        }
    }

    showModal=()=>{
        return(
            <Modal
                animationType = "fade"
                transparent = {true}
                visible = {this.state.isModalVisible}>
                    <View style = {styles.modalcontainer}>
                        <ScrollView style = {{width:"100%",}}>
                            <KeyboardAvoidingView>
                                
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
            </Modal>
        );
    }

    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(function(error){
            var errorCode = error.Code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("User Login Successfully")
        })
        .catch(function(error){
            var errorCode = error.Code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}></View>
                <View>
                <Text style = {styles.title}>Book Santa</Text>
                </View>
                <View>
                <Image
                  source = {require("../assets/santa.jpg")}
                  style = {{width:200,height:100}}
                />
                </View>
                <View>
                    <TextInput 
                    style = {styles.loginBox}
                    placeholder = "abc@example.com"
                    keyboardType = "email-address"
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text,
                        })
                    }}>
                    </TextInput>
                    <TextInput
                    style = {styles.loginBox}
                    placeholder = "enter password"
                    secureTextEntry = {true}
                    onChangeText={(text)=>{
                        this.setState({
                            password:text,
                        })
                    }}>                        
                    </TextInput>
                    <TouchableOpacity 
                    style = {[styles.login,{marginBottom:50,marginTop:20}]}
                    onPress = {()=>{
                        this.userLogin(this.state.emailId,this.state.password)
                    }}>
                        <Text style = {styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style = {styles.signUp}
                    onPress = {()=>{
                        this.userSignUp(this.state.emailId,this.state.password)
                    }}>
                        <Text style = {styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"cyan",
        flex:1,
    },
    profileContainer:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    title:{
        textAlign:"center",
        fontSize:50,
        fontWeight:250,
        paddingBottom:90,
        color:"blue",
    },
    loginBox:{
        width:240,
        height:50,
        borderBottomWidth:1.5,
        borderColor:"yellow",
        fontSize:22,
        paddingLeft:10,
        alignSelf:"center",
        color:"red",
    },
    login:{
        width:200,
        height:50,
        marginTop:50,
        borderBottomWidth:1.5,
        backgroundColor:"yellow",
        alignSelf:"center",
        
    },
    loginText:{
        fontSize:30,
        fontWeight:200,
        textAlign:"center",
        textAlign:"center",
        color:"red",
    },
    signUp:{
        width:200,
        height:50,
        borderBottomWidth:1.5,
        backgroundColor:"yellow",
        alignSelf:"center",
        marginBottom:100,
    },
    signUpText:{
        fontSize:30,
        fontWeight:200,
        textAlign:"center",
        color:"blue",
    }
})