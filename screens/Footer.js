import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Footer = () => {
  const [sharePal, setSharePal] = useState(false);
  const [Information, setInformation] = useState(false);
  const [policies, setPolicies] = useState(false);
  const [help, setHelp] = useState(false);

  const SharePal = [
    'About Us',
    'Why SharePal',
    'Careers',
    'Blogs',
    'Sitemaps'
  ]
  
  const information = [
    'How it works?',
    'FAQs',
    'Verification',
    'Refund Procress',
    'Cancellation Policy',
  ]

  const Policies = [
    'Rental Terms & Condition',
    'Shipping Policy',
    'Damage Policy',
    'Terms of Use',
    'Privacy Policy',
  ]

  const Help = [
    '+91 76192 20543',
    'care@sharepal.in',
  ]

  return (
    <View style={{ backgroundColor: '#373737', width: '100%', marginTop: 50, padding: 10 }}>
      <TouchableOpacity onPress={() =>setSharePal(!sharePal) } style={{ display: 'flex', justifyContent: 'center', borderBottomColor: '#D7DF23', marginVertical: 5, paddingBottom: 10, borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ marginHorizontal: 10, fontSize: 20, color: 'white' }}>SharePal</Text>
        {sharePal ? <Icon name="angle-down" size={30} color="white" /> : <Icon name="angle-right" size={30} color="white" /> }        
      </TouchableOpacity>
      <View style={{ display: sharePal ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        {SharePal.map(str => (
          <Text style={{ color: 'white', marginVertical: 5 }} key={Math.random()} >{str}</Text>
        ))}
      </View>

      <TouchableOpacity onPress={() => setInformation(!Information)} style={{ display: 'flex', justifyContent: 'center', borderBottomColor: '#D7DF23', marginVertical: 5, paddingBottom: 10, borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ marginHorizontal: 10, fontSize: 20, color: 'white' }}>Information</Text>
        {Information ? <Icon name="angle-down" size={30} color="white" /> : <Icon name="angle-right" size={30} color="white" /> }        
      </TouchableOpacity>
      <View style={{ display: Information ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        {information.map(str => (
          <Text style={{ color: 'white', marginVertical: 5 }} key={Math.random()} >{str}</Text>
        ))}
      </View>

      <TouchableOpacity onPress={() => setPolicies(!policies)} style={{ display: 'flex', justifyContent: 'center', borderBottomColor: '#D7DF23', marginVertical: 5, paddingBottom: 10, borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ marginHorizontal: 10, fontSize: 20, color: 'white' }}>Policies</Text>
        {policies ? <Icon name="angle-down" size={30} color="white" /> : <Icon name="angle-right" size={30} color="white" /> }        
      </TouchableOpacity>
      <View style={{ display: policies ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        {Policies.map(str => (
          <Text style={{ color: 'white', marginVertical: 5 }} key={Math.random()} >{str}</Text>
        ))}
      </View>

      <TouchableOpacity onPress={() => setHelp(!help)} style={{ display: 'flex', justifyContent: 'center', borderBottomColor: '#D7DF23', marginVertical: 5, paddingBottom: 10, borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ marginHorizontal: 10, fontSize: 20, color: 'white' }}>Need Help</Text>
        {help ? <Icon name="angle-down" size={30} color="white" /> : <Icon name="angle-right" size={30} color="white" /> }        
      </TouchableOpacity>
      <View style={{ display: help ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        {Help.map(str => (
          <Text style={{ color: 'white', marginVertical: 5 }} key={Math.random()} >{str}</Text>
        ))}
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})