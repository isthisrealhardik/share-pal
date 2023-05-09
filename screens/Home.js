import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { primary, secondary } from '../colors/color';


const cateogry = [
    {
        text: "Trekking Gear",
        image: require('../assets/one.png'),
    },
    {
        text: 'Riding Gear',
        image: require("../assets/two.png"),
    },
    {
        text: 'Action Cameras',
        image: require("../assets/three.png"),
    },
    {
        text: 'Cameras',
        image: require("../assets/four.png"),
    },
    {
        text: 'Gaming Console',
        image: require("../assets/five.png"),
    },
    {
        text: 'PS4 Games',
        image: require("../assets/six.png"),
    },
    {
        text: 'Winter Wear',
        image: require("../assets/seven.png"),
    },
]


const slider = [
    {
        id: 1,
        uri: require('../assets/slideshow.png')
    },
    {
        id: 2,
        uri: require('../assets/slideshow1.png')
    },
    {
        id: 3,
        uri: require('../assets/slideshow2.png')
    },
    {
        id: 4,
        uri: require('../assets/slideshow3.png')
    },
    {
        id: 5,
        uri: require('../assets/slideshow5.png')
    },
    {
        id: 6,
        uri: require('../assets/slideshow6.png')
    },
]

const actionCameras = [
    {
        image: require('../assets/camera1.png'),
        heading: 'DJj Pocket 2',
        subHeading: 'High Image Quality, Enhanced'
    },
    {
        image: require('../assets/camera2.png'),
        heading: 'Insta360 X Action Camera',
        subHeading: '360 Audiproof'
    }, 
    {
        image: require('../assets/camera13.png'),
        heading: 'Head Mount',
        subHeading: 'GoPro 5, 6, 7, 8...'
    },
    {
        image: require('../assets/camera4.png'),
        heading: 'Head Strap Mount',
        subHeading: 'GoPro 5, 6, 7...'
    },
]

const trekkingGear = [
    {
        image: require('../assets/trekking1.png'),
        heading: 'Men Trek Jacket -10C',
        subHeading: 'Warm (-10C), Snowproof'
    },
    {
        image: require('../assets/trekking12.png'),
        heading: '50L Backpack',
        subHeading: 'Lightweight, Carrying Comfort....'
    },
    {
        image: require('../assets/trekking3.png'),
        heading: 'Rain Jacket',
        subHeading: 'Lightweight, Compact, Attached...',
    },
    {
        image: require('../assets/trekking4.png'),
        heading: 'Women Trek Jacket -10C',
        subHeading: 'Warm (-10C), Snowproof, Att...'
    }
]

const gamingConsoles = [
    {
        image: require('../assets/con1.png'),
        heading: "Rent PS5 Controller"
    },
    {
        image: require('../assets/con2.png'),
        heading: 'PS5 Controller on Rent',
    },
    {
        image: require('../assets/con3.png'),
        heading: 'Rent PS4 Console',
    },
    {
        image: require('../assets/con4.png'),
        heading: 'Xbox Series S Controller',
    }
]

const ItemComp = ({ image, heading, subHeading }) => {
    return (
        <View style={{ display: 'flex', height: 300, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 10, borderRadius: 10, paddingVertical: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
            <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                    source={image} 
                    style={{ width: 250, height: 250 }}
                />
                <Text style={{ fontSize: 15, fontWeight: '500' }} >{heading}</Text>
                <Text>{subHeading}</Text>
            </TouchableOpacity>
        </View>
    )
}

const HorizontalComp = ({ image, text }) => {
    return( 
        <View style={{ backgroundColor: '#D7DF23', height: 100, width: 100, borderRadius: 10, marginHorizontal: 5, marginVertical: 10, display: 'flex', justifyContent: 'center' , alignItems: 'center',}}>
            <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Image 
                    source={image} 
                    resizeMode='contain'
                    style={{ width: 60, height: 60 }}
                />
                <Text style={{ fontSize: 13, color: 'black' }}>{text}</Text>
            </TouchableOpacity>
        </View>
     )
}

const SlideshowComp = () => {
    const sliderLength = slider.length - 1;
    const[count, setCount] = useState(0);

    const increment = () => {
        if (count == sliderLength) {
            setCount(0)
        } else {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count <= 0) {
            setCount(sliderLength)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={decrement}>
                    <Icon name="angle-left" size={30} color={primary} />
                </TouchableOpacity>
                <View style={{ backgroundColor: '#D7DF23', borderRadius: 20, height: 300, overflow: 'hidden',  width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                    <Image 
                        source={slider[count].uri} 
                        resizeMode='contain'
                        style={{ width: 350, height: 350 }}
                    />
                </View>
                <TouchableOpacity onPress={increment}>
                    <Icon name="angle-right" size={30} color={primary} />
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: '500', textAlign: 'center',  }}>
                    Your search for the best rental in <Text style={{ color: primary }}>Bangalore</Text> ends here!
                </Text>
                <TouchableOpacity style={{ backgroundColor: primary, height: 50, marginVertical: 20, width: 150, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const Home = () => {
    const [show, setShow] = useState(false);

    const toggleBar = () => setShow(!show);

  return (
    <View>
        <ScrollView>
            <View style={[styles.container, { backgroundColor: secondary }]}>
                {/* NAV */}
            <View id='Nav' style={styles.nav}>
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

            {/* CATEGORY */}
            <View style={{ height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView horizontal={true} style={{ marginHorizontal: 10, marginVertical: 10, zIndex: 0 }} >
                        {cateogry.map(item => (
                            <HorizontalComp key={item.text} image={item.image} text={item.text} />
                        ))}
                </ScrollView>
            </View>

            {/* SLIDESHOW */}
            <SlideshowComp />

            {/* SCREENS */}
                <View style={{ marginVertical: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600' }}>Action Cameras</Text>
                    {actionCameras.map(item => (
                        <ItemComp image={item.image} heading={item.heading} subHeading={item.subHeading} />
                    ))}
                </View>

                <View style={{ marginVertical: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600' }}>Trekking Gear</Text>
                    {trekkingGear.map(item => (
                        <ItemComp image={item.image} heading={item.heading} subHeading={item.subHeading} />
                    ))}
                </View>

                <View style={{ marginVertical: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600' }}>Gaming Consoles</Text>
                    {gamingConsoles.map(item => (
                        <ItemComp image={item.image} heading={item.heading} />
                    ))}
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Home

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
        paddingHorizontal: 25
    },
    bar: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 400,
        width: '100%',
        top: 100,
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 50,
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
})