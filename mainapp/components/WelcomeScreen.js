import { Text, SafeAreaView, StyleSheet, View, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RoundLogo, ExpandedLogo } from './RoundLogo'; 
import React, {useEffect, useState} from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  const [isExpanded, setIsExpanded] = useState(false);
 const containerOpacity = useSharedValue(1);
  const rippleOpacity = useSharedValue(0);
  const rippleSize = useSharedValue(1);

 useEffect(() => {
    containerOpacity.value = isExpanded ? 0.8 : 1;

    const intervalId = setInterval(() => {
      rippleOpacity.value = withTiming(1, { duration: 500 });
      rippleSize.value = withTiming(1.2, { duration: 500, easing: Easing.linear });

      setTimeout(() => {
        rippleOpacity.value = withTiming(0, { duration: 1500 });
        rippleSize.value = withTiming(1, { duration: 1000, easing: Easing.linear });
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [isExpanded, containerOpacity, rippleOpacity, rippleSize]);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  const containerStyle = useAnimatedStyle(() => {
    return {
      opacity: containerOpacity.value,
    };
  });

  const rippleStyle = useAnimatedStyle(() => {
    return {
      opacity: rippleOpacity.value,
      transform: [{ scale: rippleSize.value }],
    };
  });


  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={handlePress}>
  <View style={styles.logoContainer}>
    {isExpanded ? (
            <>
              <ExpandedLogo navigation={navigation} />
              <Text style={styles.backText}>BACK</Text>
            </>
          ) : (
      <>
        <RoundLogo />
        <Animated.View style={[styles.ripple, rippleStyle]}>
        <View style={styles.centeredContainer}>
          <Ionicons name="chevron-up-outline" size={hp(3)} color="#fff" />
          <Text style={styles.tapText}>Tap</Text> 
          </View>
        </Animated.View>
      </>
    )}
  </View>
</TouchableOpacity> 

      {!isExpanded ? (
        <View style={styles.txt}>
          <Text style={styles.title}>Style++</Text>
          <Text style={styles.instructions}>
            Start your personal style journey with just a single
          </Text>
          <Text style={styles.instructions}>
          TAP
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.instructions}>What system do you want to look into today?</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5e4dc',
    padding: hp(5)
  },
  logoContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: hp(7)
  },
  txt: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    spaceY: 2
  },
  title: {
    fontSize: hp(5),
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
    paddingBottom: hp(5)
  },
  instructions: {
    fontSize: hp(1.2),
    color: '#000',
    letterSpacing: 2,
    alignSelf: 'center'
  },
  ripple: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
  },
  centeredContainer: {
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center', 
    top: '70%',
    left: '70%',
    transform: [{ translateX: -50 }, { translateY: -50 }]
}, 
  tapText: {
    color: 'white',
  }, 
  backText: {
    position: 'absolute',
    fontSize: hp(2.5), 
    color: '#fff', 
    fontWeight: 'bold',
    top: '110%', 
    left: '40%', 
  }
});