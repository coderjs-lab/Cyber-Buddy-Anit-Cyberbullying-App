//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Modal, FlatList, Dimensions, Alert} from 'react-native';
import {Button, Card, Icon, ListItem, Header, CheckBox} from 'react-native-elements';
import AppHeader from '../components/AppHeader.js';
import call from 'react-native-phone-call';
import axios from 'axios';
import ChatBot from '../components/ChatBot.js'
import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const windowWidth = Dimensions.get('window').width;


export default class HomeScreen extends React.Component {

    //Defining states in constructor
    constructor() {
        super();
        this.state = {
            assess_title: "Take this assessment to determine your cyberbullying role",
            assessment_visible: false,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8: false,
            checked9: false,
            checked10: false,
            checked11: false,
            checked12: false,
            chat: false,
            play: false
        };
    }

    playSound = async() => {
        const soundObject = new Audio.Sound()
        let audioClip = require('../assets/bot.mp3');
        await soundObject.loadAsync(audioClip)
		await soundObject
			.playAsync()
    };

    showAssessment=()=>{
        return(
            <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.assessment_visible}
            >
                <View>

                    <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#0068BD'}}>
                        <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({assessment_visible: false, checked1: false, checked2: false, checked3: false, checked4: false, checked5: false, checked6: false, checked7: false, checked8: false, checked9: false, checked10: false, checked11: false, checked12: false,})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
                        <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 65, marginTop: 20, color: '#fff'}}>Determine Your Role</Text>
                    </View>

                    <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                        <View>
                            <Image style={{width: 300, height: 75, alignSelf: 'center', marginTop: 25, marginBottom: 5}} source={require('../assets/assessment-new.png')} />
                            <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 17, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#57D3F2', borderRadius: 10, width:330, height:80, textAlign: 'center', alignSelf: 'center'}}>Please indicate whether or not each of the following occurred over the past 7 days:</Text>     
                            <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 0, marginBottom:8, marginLeft: 10, marginRight: 10, backgroundColor: '#F27640', borderRadius: 10, width:330, height:55, textAlign: 'center', alignSelf: 'center'}}>Please tick if your answer is yes and let it remain empty if no.</Text>     

                            <View
                                style={{
                                    borderBottomColor: '#0866B3',
                                    borderBottomWidth: 2,
                                    width: 380,
                                    alignSelf: "center",
                                    marginTop: 15,
                                    marginBottom: 7
                                }}
                            />
                            <ScrollView contentContainerStyle={{height: 1380}}>
                                <View>

                                <CheckBox
                                    title='Someone teased you online in a hostile manner?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked1}
                                    onPress={() => this.setState({checked1: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='Someone intentionally embarrassed, frightened, or threatened you online?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked2}
                                    onPress={() => this.setState({checked2: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='Someone called you a bad name online?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked3}
                                    onPress={() => this.setState({checked3: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='Someone online threatened to physically harm you?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked4}
                                    onPress={() => this.setState({checked4: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='You were intentionally excluded and made to feel like an outcast online by one or more of your peers?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked5}
                                    onPress={() => this.setState({checked5: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='Someone online made up something negative about you so that others would no longer like you?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked6}
                                    onPress={() => this.setState({checked6: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='Did you tease someone online in a hostile manner?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked7}
                                    onPress={() => this.setState({checked7: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='You intentionally embarrassed, frightened, or threatened someone online?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked8}
                                    onPress={() => this.setState({checked8: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='You called someone a bad name online?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked9}
                                    onPress={() => this.setState({checked9: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='You threatened someone online that you would physically harm him/her?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked10}
                                    onPress={() => this.setState({checked10: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='You intentionally excluded someone online and and made him/her feel like an outcast online by one or more of their peers?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked11}
                                    onPress={() => this.setState({checked11: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                <CheckBox
                                    title='You made up something negative about someone online so that others would no longer like them?'
                                    iconRight
                                    right
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    checked={this.state.checked12}
                                    onPress={() => this.setState({checked12: true})}
                                    containerStyle={{width: windowWidth, alignSelf: 'center'}}
                                    textStyle={{color: '#0069BF', flex: 2}}
                                />
                                </View>

                                <View>
                                    <Button onPress={()=> this.showResult()}  raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="SUBMIT"></Button>
                                </View>

                            </ScrollView>

                        </View>
                        
                    </ImageBackground>

                </View>
            </Modal>
        );
    }

    showResult=()=>{
        if( this.state.checked1=== true || (this.state.checked2=== true) || (this.state.checked3=== true) || (this.state.checked4=== true) || (this.state.checked5=== true) || (this.state.checked6=== true) ){
            return(
                Alert.alert(
                    "You are a Cybervictim",
                    "Congratulations! You have completed your assessment. The app will help you prevent cyberbullying, increase awareness and help you cope up with distress caused due to cyberbullying",
                )
            );
        }
        else if( this.state.checked7=== true || (this.state.checked8=== true) || (this.state.checked9=== true) || (this.state.checked10=== true) || (this.state.checked11=== true) || (this.state.checked12=== true) ){
            return(
                Alert.alert(
                    "You are a Cyberbully",
                    "Congratulations! You have completed your assessment. The app will help you reduce your online agression, increase awareness and help you cope up with feelings of anger and agression.",
                )
            );
        }
        else {
            return(
                Alert.alert(
                    "You are a cyberbully/cybervictim",
                    "Congratulations! You have completed your assessment. The app help you prevent cyberbullying, cope up with distress caused due to it and increase awareness."
                )
            );
        }
    }

    //Function to show the AI ChatBot
    showChatBot=()=>{
        return(
        <Modal
        visible={this.state.chat}>
          <View>
            <Header 
                leftComponent={<Icon name="arrow-left" type="font-awesome" size={30} color="white" onPress={()=> this.setState({chat:false})}/>}
                centerComponent={<Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>Cyber Buddy</Text>}
                rightComponent={<Image source={require('../assets/cyberbuddy-bot.png')} style={{height:40, width: 40}}/>}
            />
        </View>
        <ChatBot />
        </Modal>
        )
    }


    componentDidMount() {
        this.playSound()
    }

    render() {

        return (

            <View>

                {this.showAssessment()}
                {this.showChatBot()}
                
                <AppHeader navigation ={this.props.navigation}/>

                <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <Image source={require('../assets/assessment-new.png')} style={{width:300, height: 75, alignSelf: 'center', marginTop:5}} />

                    <Card containerStyle={styles.assessCard}>
                        <Text style={styles.assessText}>{this.state.assess_title}</Text>                       
                        <Button
                            raised
                            buttonStyle={{borderRadius: 20, width:85, height:27, backgroundColor: 'white'}}
                            containerStyle={{borderRadius: 20, width:85, height:37, alignSelf: 'center'}}
                            title='Click'
                            titleStyle={{color: '#0866B3', fontSize: 24, marginTop: 5}}
                            onPress={()=>{this.setState({assessment_visible: true})}}
                        />                              
                    </Card>

                    <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 380,
                            alignSelf: "center",
                            marginTop: 23
                        }}
                    />

                    <Image source={require('../assets/tippp.png')} style={{width:390, height: 195, alignSelf: 'center', }} />   
                    
                    <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 380,
                            alignSelf: "center",
                          
                        }}
                    />

                    <View style={{flexDirection: "row", marginTop: 21, width: windowWidth-70, alignSelf: 'center', alignItems: 'center', alignContent: 'center'}}>
                        <Image source={require('../assets/cyberbuddy-bot.png')} style={{width:90, height: 90, marginLeft: -5}} />

                        <View style={{flexDirection: 'column'}}>

                            <Text style={{marginLeft: 40, fontSize: 17, color: '#0068BD', fontWeight: 'bold'}}>Hey friend! 👋{'\n'}I am your Cyber buddy</Text>

                            <Button
                                raised
                                buttonStyle={{borderRadius: 7, width:90, height:30, backgroundColor: '#F27640'}}
                                containerStyle={{borderRadius: 7, width:90, height:30, alignSelf: 'center', marginTop: 10, marginLeft: 20 }}
                                title='Talk Now'
                                titleStyle={{color: 'white', fontSize: 16}}
                                onPress={()=>{this.setState({chat:true})}}
                            /> 

                        </View>

                    </View>

                </ImageBackground>
                
            </View>
        
        )
    }
}

//Using Stylesheet to create different styles
const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    },
    assessText: {
        color:'white',
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 10,
        width: 300,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 7
    },
    assessCard: {
        height: 150,
        backgroundColor: '#57D3F2',
        paddingTop: 8,
        borderRadius: 30,
        marginTop: 10,
    }
});