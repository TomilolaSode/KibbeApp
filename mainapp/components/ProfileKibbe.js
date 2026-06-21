import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import React, { useContext, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import { FontAwesome } from '@expo/vector-icons';
import { KibbeEXPTypeCard }from './TypeCard';
import { KibbeContext } from '../App';
import { Ionicons } from '@expo/vector-icons';



export default function KibbeProfileScreen() {
  const {types, selectPressed} = useContext(KibbeContext);
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
        <Swiper horizontal loop={true} showsPagination index={1} style={{ height: hp(120)}} ref={swiperRef}> 
            {types.filter((body) => body.isSelected).map((x, idx) => ( <KibbeEXPTypeCard 
                data={x}
                  idx={idx}
                  title={x.title}
                  img={x.img}
                  description={x.longDescription}
                  savePressed={selectPressed}
                  ex1={x["Not-type"]}  
                  ex2={x.recommendedWebsites}
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
    flex:1,
    backgroundColor: '#f5e4dc',
    padding: hp(5),
  },
  title: {
    fontSize: hp(3),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#ff',
    letterSpacing: 2,
    marginBottom: hp(2), 
    alignSelf: 'center'
  },
  leftArrow: {
    position: 'absolute',
    top: '30%',
    left: 10,
    transform: [{ translateY: -16 }],
    zIndex: 1,
  },
  rightArrow: {
    position: 'absolute',
    top: '30%',
    right: 10,
    transform: [{ translateY: -16 }],
    zIndex: 1,
  }, 
  scrollRelated: {
    marginBottom: hp(5),
    flex:1
  }
});