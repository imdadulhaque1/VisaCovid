import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';
import background from '../../assets/images/Group162.png';

import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Welcome = (props) => {

         return (
             <View>
                 <View>
                     <TouchableOpacity onPress={() =>{
                         props.navigation.navigate("Login")
                     }}>
                         <Image style={styles.logo}
                                source={logo}
                         />
                         
                     </TouchableOpacity>
                     <View>
                     <Image style={styles.background}
                                source={background}
                         />
                     </View>
                 </View>
             </View>
         );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
   logo: {
       justifyContent: 'center',
       alignItems: 'center',
       height:  280,
       width: 230,
       marginLeft: "25%",
       marginTop: 30
   },
   background:{
       width: '100%',
       height: 450,

   }
})
export default Welcome;
