import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PrivacyPolicy from './Policy';



const {width, height} = Dimensions.get('window');

const COLORS = { primary: '#fff',white: '#fff', black:'#000', orange :'#F58909'};

const slides = [
  {
    id: '1',
    image: require('../assets/Netshop3.png'),
    title: 'Bienvenue sur',
    title1: 'NETSHOP',
    subtitle1: 'Votre application d\'e-commerce \n préférée',
  },
  {
    id: '2',
    image: require('../assets/backconnect.png'),
    title3: 'Créer votre',
    title4: 'compte NETSHOP',
  },
  {
    id: '3',
    image: require('../assets/start1.png'),
    
  },
];

const Slide = ({item}) => {
  return (
    
    
        <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '60%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.title1}>{item?.title1}</Text>
        <Text style={styles.title2}>{item?.title2}</Text>
        <Text style={styles.title2}>{item?.title3}</Text>
        <Text style={styles.title2}>{item?.title4}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
        <Text style={styles.subtitle1}>{item?.subtitle1}</Text>
      </View>
    </View>
    
  );
};


const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.orange,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.replace('Policy')}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  COMMENCER
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.black,
                  }}>
                  PASSER
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  SUIVANT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.69}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.black,
    fontSize: 13,
    fontWeight: 'bold',
    maxWidth: '100%',
    textAlign: 'center',
    lineHeight: 23,
  },
  subtitle1:{
    color: COLORS.black,
    fontSize: 13,
    fontWeight: 'bold',
    maxWidth: '100%',
    textAlign: 'center',
    top:-50
  },
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: 'bold',
    top:-35,
    textAlign: 'center',
  },

  title1: {
    color: '#F58909',
    fontSize: 30,
    fontWeight: 'bold',
    top:-30,
    textAlign: 'center',
  },

  title2: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: 'bold',
    top:-45,
    textAlign: 'center',
  },
 
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#F58909',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#F58909',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 10,
    top:-250
  },
});
export default OnboardingScreen;