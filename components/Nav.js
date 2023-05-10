import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../screens/Home';


const Nav = ({ toggleBar, show }) => {
  return (
    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View id='Nav' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingTop: 30, paddingHorizontal: 20 }}>
                <Image
                    source={require('../assets/logo.png')} 
                    resizeMode='contain'
                    style={{ width: 150, height: 50 }}
                />
                <TouchableOpacity onPress={toggleBar}>
                    <Icon name="bars" size={30} color='#0927EB' />
                </TouchableOpacity>
        </View>

    </View>
  )
}

export default Nav

// const styles = StyleSheet.create({})