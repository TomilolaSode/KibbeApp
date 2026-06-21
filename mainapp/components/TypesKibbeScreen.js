import React, {useState, useContext, useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KibbeTypeCard, KibbeEXPTypeCard } from './TypeCard'
import { KibbeContext } from '../App';
 

export default function KibbeTypeScreen() {
  const {types, selectPressed} = useContext(KibbeContext);
  const [expandedIndex, setExpandedIndex] = useState(null); 
  const handlePress = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); 
  };
  
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.title}>
          <Text style={styles.title}>KIBBE ARCHETYPES</Text>
        </View>
        {types==null? "":types.map((x, idx) => (
          <View key={idx}>
            <TouchableOpacity onPress={() => handlePress(idx)}>
              {idx !== expandedIndex && ( 
                <KibbeTypeCard
                  data={x} 
                  idx={idx}
                  title={x.title}
                  shortdesc={x.shortDescription}
                  img={x.img}
                  savePressed={selectPressed}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(idx)} disabled={idx !== expandedIndex}>
              {idx === expandedIndex && (
                <KibbeEXPTypeCard
                  data={x}
                  idx={idx}
                  title={x.title}
                  img={x.img} 
                  description={x.longDescription}
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
    backgroundColor: '#f5e4dc',
    padding: hp(5),
  },
  title: {
    fontSize: hp(3.5),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
    marginBottom: hp(2), 
    alignSelf: 'center'
  }
});