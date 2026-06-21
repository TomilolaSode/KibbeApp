import {View, Image, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from './KibbeHomeScreen';
import ColorHomeScreen from './ColorHomeScreen';



const bottomImage = require('../assets/SeasonalColor.jpg');
const topImage = require('../assets/kibbe.jpg')
const size = 200;


export function RoundLogo() {
  return (
    <View style={styles.container}>
      <Image source={topImage} style={styles.image} />
      <Image source={bottomImage} style={styles.image} />
    </View>
  );
}

export function ExpandedLogo({ navigation }) { 

  const handlePress = (clickedImage) => {
    const screenName = clickedImage === topImage ? 'Kibbe' : 'Seasonal Colors';
    navigation.navigate(screenName); 
  };

  return (
    <View style={styles.expandedcontainer}>
      <TouchableWithoutFeedback onPress={() => handlePress(topImage)}>
      <Image
        source={topImage}
        style={styles.expandedImageStyle}
      />
    </TouchableWithoutFeedback>                        
    <TouchableWithoutFeedback onPress={() => handlePress(bottomImage)} >
      <Image
        source={bottomImage}
        style={styles.expandedImageStyle}/>
      </TouchableWithoutFeedback>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2, 
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'space-between', 
      borderTopRightRadius: 30,
    borderBottomRightRadius: 30
    },
    image: {
      width: '90%', 
      height: '50%', 
    },
    expandedcontainer: {
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expandedImageStyle: {
    width: '100%',
    height: '40%', 
    borderRadius: 10,
  }
});