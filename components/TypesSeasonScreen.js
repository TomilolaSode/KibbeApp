import React, {useState, useContext, useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, Animated} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SeasonTypeCard, SeasonEXPTypeCard } from './TypeCard'
import { ColorContext } from '../App';



export default function SeasonTypeScreen() {
  const {colors, selectPressed} = useContext(ColorContext);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handlePress = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); 
  };
  
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.title}>
          <Text style={styles.title}>TYPES</Text>
        </View>
        {colors==null? "":colors.map((x, idx) => (
          <View key={idx}>
            <TouchableOpacity onPress={() => handlePress(idx)}>
              {idx !== expandedIndex && (
                <SeasonTypeCard
                  data={x} 
                  idx={idx}
                  title={x.name}
                  shortdesc={x.description}
                  img={x.img}
                  savePressed={selectPressed}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(idx)} disabled={idx !== expandedIndex}>
              {idx === expandedIndex && (
                <SeasonEXPTypeCard
                  data={x}
                  idx={idx}
                  title={x.name}
                  img={x.img}
                  description={x.description}
                  savePressed={selectPressed}
                />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7c0a6',
    padding: hp(5),
  },
  title: {
    fontSize: hp(3.5),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#333333',
    letterSpacing: 2,
    marginBottom: hp(2), 
    alignSelf: 'center'
  }
});