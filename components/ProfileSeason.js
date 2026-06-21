import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import React, { useContext, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import { SeasonEXPTypeCard }from './TypeCard';
import { ColorContext } from '../App';


export default function SeasonProfileScreen(){
  const {colors, selectPressed} = useContext(ColorContext);
  const swiperRef = useRef(null);

  const scrollToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  const scrollToPrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(-1, true);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <ScrollView>
      <View style={styles.title}>
        <Text style={styles.title}>
          According to your analysis of yourself, you resonate with the following types...
        </Text>
      </View>
      <View style={styles.scrollRelated}>
      <TouchableOpacity style={styles.leftArrow} onPress={scrollToPrevious}>
            <Ionicons name="chevron-back" color={"#000000"} size={32} />   
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightArrow} onPress={scrollToNext}>
             <Ionicons name="chevron-forward" color={"#000000"} size={32}/> 
          </TouchableOpacity> 
        <Swiper horizontal loop={true} showsPagination index={1} ref={swiperRef}>
            {colors.filter((c) => c.isSelected).map((x, idx) => ( 
              <SeasonEXPTypeCard 
                data={x}
                  idx={idx}
                  title={x.name}
                  img={x.img}
                  description={x.description}
                  savePressed={selectPressed}
                  ex1={x.recommendedWebsites}
              />
            ))}
          </Swiper>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7c0a6',
    padding: hp(5),
  },
  title: {
    fontSize: hp(3),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#333333',
    letterSpacing: 2,
    marginBottom: hp(2), 
    alignSelf: 'center'
  },
  leftArrow: {
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: [{ translateY: -16 }],
    zIndex: 1,
  },
  rightArrow: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -16 }],
    zIndex: 1,
  }, 
  scrollRelated: {
    marginBottom: hp(5),
  }
})