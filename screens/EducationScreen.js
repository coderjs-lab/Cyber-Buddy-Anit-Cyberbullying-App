//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Modal, FlatList, Dimensions} from 'react-native';
import {Button, Card, Icon, ListItem, Header, CheckBox} from 'react-native-elements';
import AppHeader from '../components/AppHeader.js';
import * as Linking from 'expo-linking';

const windowWidth = Dimensions.get('window').width;

export default class EducationScreen extends React.Component {
    
    //Defining states in constructor
    constructor() {
        super();
        this.state = {
            assess_title: "Take this assessment to determine your cyberbullying role",
            assessment_visible: false,
            button1: "What is meaning of Cyber   \nbullying",
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
            modal5: false,
            modal6: false,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked_1: false,
            checked_2: false,
            checked_3: false,
            checked_4: false,
            checked_5: false,
            checked_6: false,
            result: "If you said yes to one or more of these online actions then you have engaged in cyberbullying\n\nDon't worry, as the first step toward changing a harmful behavior such as cyberbullying is becoming aware that you are doing it",
            result2: "If you said yes to one or more of these online actions then you have been cyberbullyied\n\nDon't worry, you are not alone and the first step is awareness. You have taken that step and can now look at ways to stop the cyberbullying and feel better",
            button2: "Preventing Cyberbullying    ",
            button3: "How to know if I am hurting\nsomeone?",
            button4: "How do I know if I am being\ncyberbullied?",
            button5: "What do I do if I am being    \ncyberbullied?",
            button6: "How do I stop cyberbullying?",
            cybbullyDef: 'Cyberbullying is bullying that takes place over digital devices like cell phones, computers, and tablets. Cyberbullying can occur through SMS, Text, and apps, or online in social media, forums, or gaming where people can view, participate in, or share content. Cyberbullying includes sending, posting, or sharing negative, harmful, false, or mean content about someone else. It can include sharing personal or private information about someone else causing embarrassment or humiliation.',

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
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#57D3F2'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal1: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 50, marginTop: 16, color: '#fff'}}>What is Cyberbullying?</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 5, backgroundColor: '#57D3F2', borderRadius: 20}} source={require('../assets/psy1.png')} />
                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:15, marginLeft: 10, marginRight: 10}}>{this.state.cybbullyDef}</Text>     

                        <Button onPress={()=>{Linking.openURL("https://www.youtube.com/watch?v=lN2fuKPDzHA1")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8}} title="Link to video"></Button>             
                        <Button onPress={()=>{Linking.openURL("http://www.stopbullying.gov/cyberbullying/what-is-it/index.html")}} raised buttonStyle={{ backgroundColor: '#F27640', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 8}} title="More Information"></Button>             
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
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#F27640'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal2: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 40, marginTop: 16, color: '#fff'}}>Preventing Cyberbullying</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>
                <ScrollView contentContainerStyle={{height: 1340}}>
                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 5, backgroundColor: '#F27640', borderRadius: 20}} source={require('../assets/psy2.png')} />

                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#57D3F2', borderRadius: 10, width:320, height:55, textAlign: 'center', alignSelf: 'center'}}>To prevent cyberbullying{'\n'}remember to do the following:</Text>
                        
                        <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 20
                        }}
                    />

                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:0, marginLeft: 10, marginRight: 10}}>1) Refuse to pass along cyberbullying messages</Text>
                        <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 32
                        }}
                    />
                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:0, marginLeft: 10, marginRight: 10}}>2) Tell a friend to stop cyberbullying.{'\n'}(e.g., refuse to be a part of cyberbullying, say it is wrong and can hurt someone, say you can get into trouble)</Text>          
                        <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 32
                        }}
                    />
                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:0, marginLeft: 10, marginRight: 10}}>3) Take an Anti-Bullying Pledge:{'\n'}Says that you care and shows that you are against bullying and united for kindness, acceptance and inclusion. For more info on singing a pledge</Text><Button onPress={()=>{Linking.openURL("http://www.teenangels.org/the_megan_pledge/")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="Click Here"></Button>                 
                        <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 32
                        }}
                    />
                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 27, marginLeft: 10, marginRight: 10}}>4) Report Cyberbullying:{'\n'}Find additional information on how to report cyberbullying to an adult or online reporting system.</Text><Button onPress={()=>{Linking.openURL("http://www.stopbullying.gov/cyberbullying/how-to-report/index.htm")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="Click Here"></Button>
                        <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 32
                        }}
                    />
                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:0, marginLeft: 10, marginRight: 10}}>5) Raise awareness about cyberbullying in your school and with your friends.{'\n'}Find ways to get involved</Text><Button onPress={()=>{Linking.openURL("http://www.stopbullying.gov/what-you-can-do/teens/index.html")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="Click Here"></Button>        
                        
                    </View>
                    </ScrollView>

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
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#0866B3'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal3: false, checked1: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 90, marginTop: 16, color: '#fff'}}>How to know?</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <ScrollView contentContainerStyle={{height: 1190}}>
                        <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 0, backgroundColor: '#0866B3', borderRadius: 20}} source={require('../assets/psy3.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#57D3F2', borderRadius: 10, width:320, height:55, textAlign: 'center', alignSelf: 'center'}}>Have you engaged in any of the following?</Text>

                        <CheckBox
                            title='Sent hurtful or threatening texts or emails'
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
                            title='Harassed other players in online video games'
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
                            title='Posted photos that will embarrass someone '
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
                            title='Created a blog to make fun of someone '
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
                            title='Rated people negatively in online polls'
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
                            title='Used a fake identity to hurt somebody'
                            iconRight
                            right
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={this.state.checked6}
                            onPress={() => this.setState({checked6: true})}
                            containerStyle={{width: windowWidth, alignSelf: 'center'}}
                            textStyle={{color: '#0069BF', flex: 2}}
                        />

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 380,
                                alignSelf: "center",
                                marginTop: 23,
                                marginBottom: 23
                            }}
                        />

                        <Text style={{color:"#F27640", fontWeight: 'bold', fontSize: 20, marginLeft: 15, marginRight: 15, textAlign: 'center'}}>{this.state.result}</Text>

                        <Image source={require('../assets/start.png')} style={{width: 300, height: 200, alignSelf: 'center', marginTop: 23}} />

                        </View>
                    </ScrollView>

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
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#F27640'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal4: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 80, marginTop: 16, color: '#fff'}}>How do I know?</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>
                <ScrollView contentContainerStyle={{height: 1215}}>
                <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 0, backgroundColor: '#F27640', borderRadius: 20}} source={require('../assets/psy4.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#57D3F2', borderRadius: 10, width:320, height:55, textAlign: 'center', alignSelf: 'center'}}>Did someone do any of the following?</Text>
                        
                        <CheckBox
                            title='Send hurtful or threatening texts or emails to you'
                            iconRight
                            right
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={this.state.checked_1}
                            onPress={() => this.setState({checked_1: true})}
                            containerStyle={{width: windowWidth, alignSelf: 'center'}}
                            textStyle={{color: '#0069BF', flex: 2}}
                        />
                        <CheckBox
                            title='Harassed you in an online video game'
                            iconRight
                            right
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={this.state.checked_2}
                            onPress={() => this.setState({checked_2: true})}
                            containerStyle={{width: windowWidth, alignSelf: 'center'}}
                            textStyle={{color: '#0069BF', flex: 2}}
                        />
                        <CheckBox
                            title='Posted photos that embarrassed you'
                            iconRight
                            right
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={this.state.checked_3}
                            onPress={() => this.setState({checked_3: true})}
                            containerStyle={{width: windowWidth, alignSelf: 'center'}}
                            textStyle={{color: '#0069BF', flex: 2}}
                        />
                        <CheckBox
                            title='Created blogs to make fun of you'
                            iconRight
                            right
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={this.state.checked_4}
                            onPress={() => this.setState({checked_4: true})}
                            containerStyle={{width: windowWidth, alignSelf: 'center'}}
                            textStyle={{color: '#0069BF', flex: 2}}
                        />
                        <CheckBox
                            title='Invented fake pages to ridicule you'
                            iconRight
                            right
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={this.state.checked_5}
                            onPress={() => this.setState({checked_5: true})}
                            containerStyle={{width: windowWidth, alignSelf: 'center'}}
                            textStyle={{color: '#0069BF', flex: 2}}
                        />
                        <CheckBox
                            title='Rated you negatively on an online poll'
                            iconRight
                            right
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={this.state.checked_6}
                            onPress={() => this.setState({checked_6: true})}
                            containerStyle={{width: windowWidth, alignSelf: 'center'}}
                            textStyle={{color: '#0069BF', flex: 2}}
                        />

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 380,
                                alignSelf: "center",
                                marginTop: 23,
                                marginBottom: 23
                            }}
                        />

                        <Text style={{color:"#0068BD", fontWeight: 'bold', fontSize: 20, marginLeft: 15, marginRight: 15, textAlign: 'center'}}>{this.state.result2}</Text>

                        <Image source={require('../assets/start.png')} style={{width: 300, height: 200, alignSelf: 'center', marginTop: 23}} />

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
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 30, marginTop: 16, color: '#fff'}}>What to do if cyberbullied?</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                <ScrollView contentContainerStyle={{height: 1350}}>
                    
                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 5, backgroundColor: '#57D3F2', borderRadius: 20}} source={require('../assets/psy5.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#0866B3', borderRadius: 10, width:320, height:77, textAlign: 'center', alignSelf: 'center'}}>If you are being cyberbullied,{'\n'}remember to do the following{'\n'}immediately after:</Text>    

                        <Image style={{width: 200, height: 200, alignSelf: 'center', marginTop: 10}} source={require('../assets/light.png')} />

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 400,
                                alignSelf: "center",
                                marginTop: 28
                            }}
                        />

                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 15, marginBottom:0, marginLeft: 10, marginRight: 10}}>1) STOP + SAVE:{'\n'}{'\n'}Stop, count to 10, take a deep breath, and then save the evidence.{'\n'}Learn how to save.</Text><Button onPress={()=>{Linking.openURL("https://support.google.com/android/answer/9075928?hl=en")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="Click Here"></Button>
                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 400,
                                alignSelf: "center",
                                marginTop: 32
                            }}
                        />

                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 15, marginBottom:0, marginLeft: 10, marginRight: 10}}>2) BLOCK:{'\n'}{'\n'}After saving the evidence,{'\n'}block the sender of the message.{'\n'}Learn how to block</Text><Button onPress={()=>{Linking.openURL("https://www.businessinsider.in/tech/how-to/how-to-block-unwanted-text-messages-from-the-same-number-on-any-android-phone/articleshow/77271614.cms")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="Click Here"></Button>
                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 400,
                                alignSelf: "center",
                                marginTop: 32
                            }}
                        />

                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 15, marginBottom:0, marginLeft: 10, marginRight: 10}}>3) TELL:{'\n'}{'\n'}Reach out to someone you trust.</Text>
                        <Button onPress={()=>{Linking.openURL("https://pacerteensagainstbullying.org/advocacy-for-self/tell-an-adult/")}} raised buttonStyle={{ backgroundColor: '#F27640', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="TELL an adult"></Button>
                        <Button onPress={()=>{Linking.openURL("http://www.stopbullying.gov/cyberbullying/how-to-report/index.html#Report%20Cyberbullying%20to%20Online%20Service%20Providers")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="RESOURCES for reporting"></Button>
                        <Button onPress={()=>{Linking.openURL("http://www.bullyreportonline.com/Bullying/Report.aspx")}} raised buttonStyle={{ backgroundColor: '#F27640', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="Fill out a FORM for reporting"></Button>

                    </View>
                </ScrollView>
            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton6=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal6}
        >
            <View>
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#0866B3'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal6: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 80, marginTop: 16, color: '#fff'}}>How do I stop?</Text>
            </View>

            <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                <ScrollView contentContainerStyle={{height: 1185}}>
                    
                    <View>
                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 25, marginBottom: 5, backgroundColor: '#0866B3', borderRadius: 20}} source={require('../assets/psy6.png')} />
                        <Text style={{color: '#ffffff', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:15, marginLeft: 10, marginRight: 10, backgroundColor: '#57D3F2', borderRadius: 10, width:320, height:55, textAlign: 'center', alignSelf: 'center'}}>If you are cyberbullying,{'\n'}remember to do the following</Text>    

                        <Image style={{width: 165, height: 165, alignSelf: 'center', marginTop: 10}} source={require('../assets/job.png')} />
                        <Text style={{color: '#F27640', fontSize: 20, textAlign: "center", marginTop: 27, marginBottom:15, marginLeft: 10, marginRight: 10, borderRadius: 10, width:320, textAlign: 'center', alignSelf: 'center'}}>Just reaching this point is a good start! It means you have recognized your harmful online behaviors and want to stop. Congratualtion on talking this important step!</Text>

                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 400,
                                alignSelf: "center",
                                marginTop: 28
                            }}
                        />

                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 15, marginBottom:0, marginLeft: 10, marginRight: 10}}>1) Let a trusted adult know about this issue.</Text>
                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 400,
                                alignSelf: "center",
                                marginTop: 32
                            }}
                        />

                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 15, marginBottom:0, marginLeft: 10, marginRight: 10}}>2) Limit time spent online.{'\n'}Follow these tips</Text><Button onPress={()=>{Linking.openURL("https://www.verywellfamily.com/strategies-limit-your-teens-screen-time-2608915")}} raised buttonStyle={{ backgroundColor: '#57D3F2', alignSelf: 'center'}} containerStyle={{alignSelf: 'center', marginTop: 15, marginBottom: 0}} title="Click Here"></Button>
                        <View
                            style={{
                                borderBottomColor: '#0866B3',
                                borderBottomWidth: 2,
                                width: 400,
                                alignSelf: "center",
                                marginTop: 32
                            }}
                        />

                        <Text style={{color: '#0069BF', fontSize: 20, textAlign: "center", marginTop: 15, marginBottom:0, marginLeft: 10, marginRight: 10}}>3) Use the 1 minute rule:{'\n'}{'\n'}(taking a minute after writing, but before sending something, to consider whether it’s hurtful and how you’d feel if someone sent it to you)</Text>

                    </View>
                </ScrollView>
            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    render() {

        return (

            <View>
                
                {this.showButton1()}
                {this.showButton2()}
                {this.showButton3()}
                {this.showButton4()}
                {this.showButton5()}
                {this.showButton6()}

                <AppHeader navigation ={this.props.navigation}/>

                <ImageBackground source={require('../assets/cyberbuddy-bg.png')} style={styles.image}>

                    <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 10}} source={require('../assets/psychoeducation.png')} />
                    <Text style={{fontSize: 20, color: 'white', backgroundColor: '#57D3F2', borderRadius: 10, width:165, height:30, textAlign: 'center', alignSelf: 'center'}}>Psychoeducation</Text>
                    <Text style={{fontSize: 17, color: '#0069BF', textAlign: 'center', alignSelf: 'center', marginTop: 13, marginLeft: 15, marginRight: 15}}>What to know about Cyberbullying?</Text>

                    <View
                        style={{
                            borderBottomColor: '#0866B3',
                            borderBottomWidth: 2,
                            width: 380,
                            alignSelf: "center",
                            marginTop: 23
                        }}
                    />

                <ScrollView contentContainerStyle={{height: 780}}>

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#57D3F2', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 15, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/psy1.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button1}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal1: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#F27640', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/psy2.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button2}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal2: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#0866B3', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/psy3.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button3}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal3: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#F27640', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/psy4.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button4}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal4: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#57D3F2', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/psy5.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button5}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal5: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#0866B3', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/psy6.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button6}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal6: true})}}
                />

                </ScrollView>

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
    buttonText: {
        color: 'white', 
        fontSize: 16, 
        textAlign: 'left', 
        paddingLeft: 25
    }
});