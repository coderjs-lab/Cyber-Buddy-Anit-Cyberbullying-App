//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Modal, FlatList, Dimensions} from 'react-native';
import {Button, Card, Icon, ListItem, Header} from 'react-native-elements';
import AppHeader from '../components/AppHeader.js';
import call from 'react-native-phone-call';
import * as Linking from 'expo-linking';
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';

const windowWidth = Dimensions.get('window').width;

export default class ResourceScreen extends React.Component {

    //Defining states in constructor
    constructor() {
        super();
        this.state = {
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
            modal5: false,
        };
    }

    showButton1=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal1}
        >
            <View>

            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#0068BD'}}>
                <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal1: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
                <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 117, marginTop: 20, color: '#fff'}}>Hotlines</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 5}} source={require('../assets/hotline.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 17, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#57D3F2', borderRadius: 10, width:330, height:55, textAlign: 'center', alignSelf: 'center'}}>These Hotlines are available for you to contact in times of need.</Text>     

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 380,
                                alignSelf: "center",
                                marginTop: 15,
                                marginBottom: 23
                            }}
                        />

                        <Button onPress={()=>{call({number:'18004224453'})}} raised buttonStyle={{ backgroundColor: '#F27640', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="USA Childhelp National Child Abuse Hotline"></Button>             
                        <Button onPress={()=>{call({number:'1800551800'})}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="24/7 Kids Helpline"></Button>             
                        <Button onPress={()=>{call({number:'18002738255'})}} raised buttonStyle={{ backgroundColor: '#0068BD', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="National Sucicide Prevention Helpline"></Button>             
                        <Button onPress={()=>{call({number:'18008435678'})}} raised buttonStyle={{ backgroundColor: '#F27640', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="NCMEC-USA Cybertipline"></Button>             
                        <Button onPress={()=>{Linking.openURL("https://www.stompoutbullying.org/helpchat")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="STOMP Out Cyberbullying HelpChat Line"></Button>             
                        <Button onPress={()=>{Linking.openURL("http://befriendersindia.net/helpline-details.php")}} raised buttonStyle={{ backgroundColor: '#0068BD', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="Befrienders India Helpline"></Button>             
                        
                    </View>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton2=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal2}
        >
            <View>

            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#57D3F2'}}>
                <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal2: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
                <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 73, marginTop: 20, color: '#fff'}}>Online Community</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 5}} source={require('../assets/community.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 17, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#F27640', borderRadius: 10, width:330, height:125, textAlign: 'center', alignSelf: 'center'}}>The following online community is available for you to speak more about your experience of cyberbullying with others. Click below to enter</Text>     

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 380,
                                alignSelf: "center",
                                marginTop: 10,
                                marginBottom: 20
                            }}
                        />

                        <Button onPress={()=>{Linking.openURL("https://www.cybersmile.org/cyberbullying-support-community")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 0, marginBottom: 20, width: 330}} title="CyberSmile Support Community"></Button>             
                        
                        
                    </View>

                        <WebView 
                            source={{
                                uri: "https://www.cybersmile.org/cyberbullying-support-community"
                            }}
                            style={{                           
                                marginLeft: 10,
                                marginRight: 10,
                                marginBottom: 165,                      
                            }}
                        />

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton3=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal3}
        >
            <View>

            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#F27640'}}>
                <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal3: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
                <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 112, marginTop: 20, color: '#fff'}}>Activities</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 18, marginBottom: 5}} source={require('../assets/activity.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 17, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#57D3F2', borderRadius: 10, width:330, height:82, textAlign: 'center', alignSelf: 'center'}}>The following activities are available to help the user cope with cyberbullying experiences</Text>     

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 380,
                                alignSelf: "center",
                                marginTop: 10,
                                marginBottom: 20
                            }}
                        />

                        <Button disabled raised disabledStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 0, marginBottom: 20, width: 330}} title="Write a letter to an adult/friend about your cyberbullying experience." disabledTitleStyle={{color: 'white'}}></Button> 
                        <Button disabled raised disabledStyle={{ backgroundColor: '#0866B3', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 0, marginBottom: 20, width: 330}} title="Create a safety plan on how to handle bullying" disabledTitleStyle={{color: 'white'}}></Button> 
                        <Button disabled raised disabledStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 0, marginBottom: 20, width: 330}} title="Learn how to engage in proper “diaphragmatic breathing”" disabledTitleStyle={{color: 'white'}}></Button> 
                        <Button disabled raised disabledStyle={{ backgroundColor: '#F27640', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 0, marginBottom: 20, width: 330}} title="Imagine your worries and emotions blasting away in a worry rocket." disabledTitleStyle={{color: 'white'}}></Button> 
                        <Button disabled raised disabledStyle={{ backgroundColor: '#0866B3', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 0, marginBottom: 20, width: 330}} title="Perform meditation to relax" disabledTitleStyle={{color: 'white'}}></Button>            
                        
                    </View>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton4=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal4}
        >
            <View>

            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#0068BD'}}>
                <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal4: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
                <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 123, marginTop: 20, color: '#fff'}}>Videos</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 18, marginBottom: 0}} source={require('../assets/video.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 17, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#F27640', borderRadius: 10, width:330, height:55, textAlign: 'center', alignSelf: 'center'}}>These videos will help you learn more about cyberbullying</Text>     

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 380,
                                alignSelf: "center",
                                marginTop: 10,
                                marginBottom: 0
                            }}
                        />
                    </View>

                    <ScrollView contentContainerStyle={{height: 1190,}}>

                        <View style={{alignContent: 'center', justifyContent: 'center', width: 320, alignSelf: 'center', marginTop: 20}}>
                            <YoutubePlayer
                                height={200}
                                play={false}
                                videoId={'dubA2vhIlrg'}
                            />
                            <YoutubePlayer
                                height={200}
                                play={false}
                                videoId={'qA1TJjJgdz8'}
                            />
                            <YoutubePlayer
                                height={200}
                                play={false}
                                videoId={'jNdBmjUvzEU'}
                            />
                            <YoutubePlayer
                                height={200}
                                play={false}
                                videoId={'lN2fuKPDzHA'}
                            />
                            <YoutubePlayer
                                height={200}
                                play={false}
                                videoId={'xGKmlTtZnSk'}
                            />
                        </View>
                        

                    </ScrollView>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton5=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal5}
        >
            <View>

            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#57D3F2'}}>
                <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal5: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
                <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 20, marginLeft: 65, marginTop: 20, color: '#fff'}}>Additional Resources</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 5}} source={require('../assets/add.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 17, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#0068BD', borderRadius: 10, width:345, height:80, textAlign: 'center', alignSelf: 'center'}}>Here are additional resources with relevant information on cyberbullying prevention</Text>     

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 380,
                                alignSelf: "center",
                                marginTop: 15,
                                marginBottom: 0
                            }}
                        />

                        <Button onPress={()=>{Linking.openURL("http://www.stopbullying.gov/")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 20, marginBottom: 8, width: 330}} title="Stopbullying.gov"></Button>             
                        <Button onPress={()=>{Linking.openURL("https://www.childline.org.uk/info-advice/bullying-abuse-safety/types-bullying/bullying-cyberbullying/")}} raised buttonStyle={{ backgroundColor: '#F27640', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="Childline.Org.UK"></Button>             
                        <Button onPress={()=>{Linking.openURL("http://cyberbullying.us/")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="Cyberbullying Research Center"></Button>             
                        <Button onPress={()=>{Linking.openURL("http://www.stopcyberbullying.org/take_action/msparrysguidetonetiquette.html")}} raised buttonStyle={{ backgroundColor: '#0068BD', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="Learning Online Etiquettes"></Button>             
                        <Button onPress={()=>{Linking.openURL("http://archive.ncpc.org/topics/cyberbullying/what-is-cyberbullying.html")}} raised buttonStyle={{ backgroundColor: '#F27640', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="National Crime Prevention Council"></Button>             
                        <Button onPress={()=>{Linking.openURL("https://www.facebook.com/safety/bullying/")}} raised buttonStyle={{ backgroundColor: '#0068BD', alignSelf: 'center', width: 330}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8, width: 330}} title="Facebook Safety"></Button>             

                    </View>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    render(){
        
        return(
            
            <View>

                {this.showButton1()}
                {this.showButton2()}
                {this.showButton3()}
                {this.showButton4()}
                {this.showButton5()}
                
                <AppHeader navigation ={this.props.navigation}/>

                <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 10, marginBottom: 10}} source={require('../assets/resource.png')} />
                    <Text style={{fontSize: 20, color: 'white', backgroundColor: '#57D3F2', borderRadius: 10, width:145, height:30, textAlign: 'center', alignSelf: 'center'}}>Resources</Text>
                    <Text style={{fontSize: 17, color: '#0069BF', textAlign: 'center', alignSelf: 'center', marginTop: 13, marginLeft: 15, marginRight: 15}}>These resources are accessible to you at all times to help you cope up with your experiences with cyberbullying</Text>

                    <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 380,
                            alignSelf: "center",
                            marginTop: 23, 
                            marginBottom: 9
                        }}
                    />

                    <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 20}}>
                        <TouchableOpacity style={[styles.button,{marginRight: 80}]} onPress={()=>{this.setState({modal1: true})}} >
                            <Image source={require('../assets/hotline.png')} style={styles.button}/>
                            <Text style={[styles.buttonText],{width:150, alignSelf: 'center', textAlign: 'center', color: '#0068BD'}}>Hotlines</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={()=>{this.setState({modal2: true})}} >
                            <Image source={require('../assets/community.png')} style={styles.button}/>
                            <Text style={[styles.buttonText],{width:150, alignSelf: 'center', textAlign: 'center', color: '#0068BD'}}>Online Community</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                        <TouchableOpacity style={[styles.button,{marginRight: 80, marginTop: 22}]} onPress={()=>{this.setState({modal3: true})}}>
                            <Image source={require('../assets/activity.png')} style={styles.button}/>
                            <Text style={[styles.buttonText],{width:150, alignSelf: 'center', textAlign: 'center', color: '#0068BD'}}>Activities</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width: 70, height: 70, alignSelf: 'center',marginTop:0}} onPress={()=>{this.setState({modal4: true})}} >
                            <Image source={require('../assets/video.png')} style={styles.button}/>
                            <Text style={[styles.buttonText],{width:150, alignSelf: 'center', textAlign: 'center', marginTop: 3, color: '#0068BD'}}>Videos</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity style={{width: 70, height: 70, alignSelf: 'center',marginTop:30}} onPress={()=>{this.setState({modal5: true})}} >
                        <Image source={require('../assets/add.png')} style={[styles.button]}/>
                        <Text style={[styles.buttonText],{width:150, alignSelf: 'center', textAlign: 'center', color: '#0068BD'}}>Additional Resources</Text>
                    </TouchableOpacity>

                </ImageBackground>

            </View>
        );
    }
}

//Using Stylesheet to create different styles
const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    },
    buttonImage: {
        width: 50,
        height: 50
    },
    button: {
        width: 85,
        height: 85,
        alignSelf: 'center',
    },
    buttonText: {
        flexDirection: 'row',
        alignSelf: 'center',
        color: '#681fa2',
        fontSize: 17,
        textAlign: 'center'
    },
});