import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { primary, secondary } from '../colors/color';
import Footer from './Footer';



// OBJECTS
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

const whySharePal = [
    {
        image: require('../assets/icon-one.svg'),
        heading: 'Quality Products',
        subHeading: 'Every Product you rent is fully functional & in excelent condition',
    },
    {
        image: require('../assets/icon-two.svg'),
        heading: 'Simple Pricing',
        subHeading: 'Daily, Weekly, & monthly rental plans. Rent longer, Pay lesser',
    },
    {
        image: require('../assets/icon-three.svg'),
        heading: 'Quick & Hassle-free',
        subHeading: 'Simply order online & relax, Enjoy doorstep delivery & pick-up.',
    }, 
    {
        image: require('../assets/icon-four.svg'),
        heading: 'Pay on Delivery',
        subHeading: 'Just Pay 100% advance & reserve. Pay the balance upon delivery',
    },
    {
        image: require('../assets/icon-five.svg'),
        heading: 'Customer Friendly',
        subHeading: 'Friendly & customer-centric team to help every step of the way',
    },
    {
        image: require('../assets/icon-six.svg'),
        heading: 'Safe & Sanitised',
        subHeading: 'Enjoy a safe & pleasant renting experience, always',
    },
]

const starsArray = (stars) => {
    let newArr = new Array();
    for (let i = 0; i < stars; i++) {
        newArr.push(i);
    }
    return newArr;
}

const testimonials = [
    {
        icon: require('../assets/person-one.png'),
        name: 'Afrana',
        city: 'Bangalore',
        product: 'Game Console',
        review: 'Great Renting Experience',
        // stars: starsArray(5),
        testimonial: 'Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4. Thanks Sharepal! Cheers to you guys!'
    },
    {
        icon: require('../assets/person-two.png'),
        name: 'Kanthikaran',
        city: 'Bangalore',
        product: 'Riding Gear',
        review: 'Quality Product',
        // stars: starsArray[5],
        testimonial: 'It’s an amazing service, starting from the quality of the gear provided to the pickup and drop at doorstep facility. The staff is extremely helpful and supportive. The jacket was freshly washed and the shoes provided were brand new. The refund for the deposit was also processed immediately. We had no clue that this kind of service existed in India, SharePal.'
    },
    {
        icon: require('../assets/person-three.png'),
        name: 'Amal',
        city: 'Bangalore',
        product: 'Gaming Console',
        review: 'Affordable Products',
        // stars: starsArray(5),
        testimonial: 'I am a regular customer and order ps4 It’s very affordable and booking an order is super easy and user friendly website and polite staff.'
    },
    {
        icon: require('../assets/person-four.png'),
        name: 'Mayank',
        city: 'Bangalore',
        product: 'Action Cameras',
        review: 'Good Products',
        // stars: starsArray(5),
        testimonial: 'I rented GoPro Hero 10 , talking about gadget nicely packed and top quality. Also refund process is very much simple and trustworthy.',
    },
    {
        icon: require('../assets/person-five.png'),
        name: 'Nikita',
        city: 'Bangalore',
        product: 'Trekking Gear',
        review: 'Hassle-free ',
        // stars: starsArray(5),
        testimonial: "It was a great experience with SharePal. Hassle-free renting of gears at a reasonable cost. The materials rented for my Winter trek were of great quality and were perfect for the trek. It's great that they also have a delivery n pickup option. I highly recommend SharePal to all."
    },
    {
        icon: require('../assets/person-six.png'),
        name: 'Manu',
        city: 'Bangalore',
        product: 'Trekkign Gear',
        review: 'Great Renting Experience',
        // stars: starsArray(5),
        testimonial: 'Hi All I have taken SharePal services for my chadar tekk , All gears are good quality and in Hygiene condition, Customer Care is very fast and good Highly recommend to use there service instead of buying new gears… 🤘ManuRaam🤘"'
    }
]

// console.log(testimonials[0]);


// COMPONENTS
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

const HorizontalComp = ({ image, text, toTrekking }) => {
    return( 
        <View style={[styles.boxShadow, { backgroundColor: 'white', borderRadius: 100, overflow: 'hidden', height: 90, width: 90, marginHorizontal: 5, marginVertical: 10, display: 'flex', justifyContent: 'center' , alignItems: 'center',}]}>
            <View style={{ position: 'absolute', backgroundColor: '#D7DF23', height: 200, width: 200, top: 50, borderRadius: 1000  }}></View>
            <TouchableOpacity onPress={text == 'Trekking Gear' ? toTrekking : () => console.log('Hello')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Image 
                    source={image} 
                    resizeMode='contain'
                    style={{ width: 80, height: 80 }}
                />
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
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, height: 400, overflow: 'hidden',  width: 380, display: 'flex', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ position: 'absolute', backgroundColor: '#D7DF23', height: 500, width: 500, borderRadius: 1000, top: 160 }}></View>
                    <TouchableOpacity onPress={decrement} style={{ position: 'absolute', top: 160, left: 20 }}>
                        <Icon name="angle-left" size={50} color={primary} />
                    </TouchableOpacity>
                    <Image 
                        source={slider[count].uri} 
                        resizeMode='contain'
                        style={{ width: 400, height: 400 }}
                    />
                    <TouchableOpacity onPress={increment} style={{ position: 'absolute', top: 160, right: 20 }}>
                        <Icon name="angle-right" size={50} color={primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 0, paddingHorizontal: 20 }}>
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

const WhySharePal = ({ heading, subHeading }) => {
    return (
        <View style={[styles.boxShadow, { backgroundColor: 'white', height: 100, width: 300, borderRadius: 10, marginVertical: 10, display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }]} >
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '500', marginBottom: 5 }} >{heading}</Text>
            <Text style={{ textAlign: 'center', fontSize: 15, paddingHorizontal: 20 }} >{subHeading}</Text>
        </View>
    )
}

const Testimonials = ({ icon, name, city, product, stars, testimonial, review }) => {
    return (
        <View style={[styles.boxShadow, { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'white', borderRadius: 10, height: 350, width: 350, padding: 20, marginVertical: 20, marginHorizontal: 10 }]}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={icon} style={{ height: 75, width: 75, marginRight: 20 }} />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>{`${name}, ${city}`}</Text>
                    <Text style={{ fontSize: 15 }} >{product}</Text>
                </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 600, marginTop: 10 }}>{review}</Text>
            {/* <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                {stars.map(star => (
                    // <Icon name="star" size={30} color="yellow" />
                    <Text>{star}</Text>
                ))}
            </View> */}
            <Text style={{ fontSize: 15, fontWeight: '300', marginTop: 15, lineHeight: 22 }}>{testimonial}</Text>
        </View>
    )
}

const Home = ({ navigation }) => {
    const [show, setShow] = useState(false);

    const toggleBar = () => setShow(!show);

    const toTrekking = () => {
        navigation.navigate('Trekking');
    }

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

            {/* CATEGORY */}
            <View style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 25, fontWeight: '700', marginVertical: 20 }}>What would you like to rent?</Text>
                <ScrollView horizontal={true} style={{ marginHorizontal: 10, zIndex: 0 }} >
                        {cateogry.map(item => (
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <HorizontalComp key={item.text} image={item.image} text={item.text} toTrekking={toTrekking} />
                                <Text style={{ fontSize: 13, fontWeight: '500', color: 'black', marginBottom: 10 }}>{item.text}</Text>
                            </View>
                        ))}
                </ScrollView>
            </View>

            {/* SLIDESHOW */}
            <SlideshowComp />

            {/* SCREENS */}
                <View style={{ marginVertical: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600' }}>Action Cameras</Text>
                    {actionCameras.map(item => (
                        <ItemComp key={item.heading} image={item.image} heading={item.heading} subHeading={item.subHeading} />
                    ))}
                </View>

                <View style={{ marginVertical: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600' }}>Trekking Gear</Text>
                    {trekkingGear.map(item => (
                        <ItemComp key={item.heading} image={item.image} heading={item.heading} subHeading={item.subHeading} />
                    ))}
                </View>

                <View style={{ marginVertical: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600' }}>Gaming Consoles</Text>
                    {gamingConsoles.map(item => (
                        <ItemComp key={item.heading} image={item.image} heading={item.heading} />
                    ))}
                </View>

                {/* Why SharePal */}
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#F4F6F9', width: '100%', paddingBottom: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: '700', marginVertical: 15 }}>Why SharePal</Text>
                    {whySharePal.map(item => (
                        <WhySharePal heading={item.heading} subHeading={item.subHeading} key={item.heading} />
                    ))}
                </View>

                {/* Testimonials */}
                <View style={{ height: 450, width: 350, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: '700', textAlign: 'center' }}>More than <Text style={{ color: '#0927EB' }} >50k</Text> Happy Customers!</Text>
                    <ScrollView horizontal={true}>
                        {testimonials.map(item => (
                            <Testimonials key={item.name} icon={item.icon} name={item.name} city={item.city} product={item.product} review={item.review} stars={item.stars} testimonial={item.testimonial} />
                        ))}
                    </ScrollView>
                </View>

                {/* FOOTER */}
                <Footer />
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
        backgroundColor: '#0927EB',
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