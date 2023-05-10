import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Footer = () => {
  return (
    <View style={{ backgroundColor: '#373737', height: 200, width: '100%' }}>
      <TouchableOpacity>
        <Icon name="angle-right" size={20} color="black" />        
        <Text>Information</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="angle-right" size={20} color="black" />        
        <Text>Policies</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="angle-right" size={20} color="black" />        
        <Text>Need Help</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="angle-right" size={20} color="black" />        
        <Text>SharePal</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})