import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { secondary } from '../colors/color'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const info = [
  {
    id: 1,
    text: "Excellent Quality Products",
    image: require('../assets/icon1.png')
  },
  {
    id: 2,
    text: "Delivery Date & Return Date is FREE!!",
    image: require('../assets/icon2.png')
  },
  {
    id: 3,
    text: "Pay On Delivery",
    image: require('../assets/icon3.png')
  }
]

const trekkingThings = [
  {
    text: 'Trekking Shoes',
    image: require('../assets/trekkingThing1.png'),
    prod: 3
  },
  {
    text: 'Trekking Jackets',
    image: require('../assets/trekkingThing2.png'),
    prod: 10
  },
  {
    text: 'Trekking Accessories',
    image: require('../assets/trekkingThing3.png'),
    prod: 11
  },
  {
    text: 'Trekking Backpacks',
    image: require('../assets/trekkingThing4.png'),
    prod: 4
  }
]

const InfoComp = ({ text, image, id }) => {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginHorizontal: 10 }}>
      <Image source={image} style={{ width: 50, height: 50, marginHorizontal: 10 }} />
      <Text style={{ marginRight: 25 }} >{text}</Text>
      <View style={{ backgroundColor: 'black', height: 80, width: 2, borderRadius: 10, display: id != 3 ? 'flex' : 'none' }}></View>
    </View>
  )
}

const TrekkingThingsComp = ({ text, image, prod }) => {
  return (
    <View style={[styles.boxShadow, { display: 'flex', flexDirection: 'row', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', height: 200, width: 350, paddingHorizontal: 20, borderRadius: 5, marginVertical: 10 }]} >
      <View style={{ display: 'flex', flexDirection: 'column', height: 140, width: 140, paddingRight: 15, justifyContent: 'space-between', alignItems: 'flex-start', marginHorizontal: 10 }}>
        <Text style={{ fontWeight: '500', fontSize: 30 }} >{text}</Text>
        <TouchableOpacity style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5 }}>
          <Text>{prod}+ Products</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#D7DF23', position: 'absolute', height: 200, width: 150, right: -10 }}></View>
      <Image 
        source={image} 
        style={{ height: 175, width: 175 }}
      />
    </View>
  )
}


const Trekking = () => {
  const [show, setShow] = useState(false);

  const toggleBar = () => {
    setShow(!show)
  };

  return (
    <View>
      <ScrollView>
        <View style={[styles.container, { backgroundColor: secondary }]}>
          {/* NAV */}
          <View id='Nav' style={[styles.nav, { borderBottomColor: 'lightgrey', borderBottomWidth: 1 }]}>
                <Image
                    source={require('../assets/logo.png')} 
                    resizeMode='contain'
                    style={{ width: 150, height: 50 }}
                />
                <TouchableOpacity onPress={toggleBar}>
                    <Icon name="bars" size={30} color='#0927EB' />
                </TouchableOpacity>
              </View>
            <View id='MenuBar' style={[styles.bar, { display: show ? 'flex' : 'none', zIndex:10 }]}>
                {/* <TouchableOpacity onPress={toggleBar} style={{ position: 'absolute', top: 45, left: 20 }}>
                    <Icon name="times" size={30} color="black" />
                </TouchableOpacity> */}
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity>
                        <Text style={styles.barText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.barText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.barText}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={[styles.barText, { marginRight: 7 }]} >Bangalore</Text>
                        <Icon name="arrow-down" size={12} color="black" style={{ marginTop: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="shopping-cart" size={20} color="white" />
                        <Text style={{ color: 'white', fontSize: 20, paddingLeft: 5 }} >Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* INFO */}
            <View style={{ backgroundColor: '#D6E5FF', height: 100, margin: 5, borderRadius: 5 }}>
              <ScrollView horizontal={true}>
                {info.map(item => (
                  <InfoComp key={item.id} text={item.text} image={item.image} id={item.id} />
                ))}
              </ScrollView>
            </View>

            {/* BOXES */}
            <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginVertical: 20 }}>
              <Text style={{ fontWeight: '700', fontSize: 30, marginBottom: 20 }}>Trekking Gear On Rent</Text>
              {trekkingThings.map(item => (
                <TrekkingThingsComp key={item.prod} image={item.image} text={item.text} prod={item.prod} />
              ))}
            </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default Trekking

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  nav: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 35,
      paddingBottom: 10,
      paddingHorizontal: 25,
  },
  bar: {
      position: 'absolute',
      backgroundColor: 'white',
      height: 350,
      width: '100%',
      top: 100,
      right: 0,
      paddingHorizontal: 30,
      // paddingVertical: ,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
  },
  barText: {
      fontSize: 20,
      fontWeight: '400',
      marginVertical: 10,
      color: 'black',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      paddingVertical: 5,
  },
  button: {
      backgroundColor: 'black',
      width: 100,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      marginVertical: 10,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})