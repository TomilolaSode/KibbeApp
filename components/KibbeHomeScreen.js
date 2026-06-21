import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            INTRO. TO THE KIBBE SYSTEM
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/kibbe.webp')} style={styles.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            <Text style={styles.heading}>Discover Your Kibbe Body Archetype{'\n'}</Text>
            <Text style={styles.bodyText}>
              The Kibbe body type system is a holistic approach to style that goes beyond traditional body shapes (apple, pear, etc.). It considers your balance of Yin (feminine energy) and Yang (masculine energy) to identify your unique body type (or archetype). Each archetype has specific clothing recommendations that flatter your natural lines and essence.
            </Text>
            <Text style={styles.boldText}>{'\n'}Key Principles:{'\n'}</Text>
            <Text style={styles.bodyText}>
              - Yin & Yang: These opposing forces manifest in body features like curvy lines (Yin) vs. sharp or strong edges (Yang).
              {'\n'}- Contrast & Blend: Refers to how Yin and Yang mix within your body. Distinct features create a contrasting type, while a mix creates a blended type.
            </Text>
            <Text style={styles.boldText}>{'\n'}The 5 Kibbe Body Type Families:{'\n'}</Text>
            <Text style={styles.bodyText}>
              1. Dramatic (Sharp Yang): Elongated with sharp edges, no yin influence.
             {'\n'} 2. Natural (Soft Yang): Broad and angular, with a touch of yin softness.
              {'\n'}3. Classic (Balanced): Symmetrical with moderate features, a blend of yin and yang.
              {'\n'}4. Gamine (Yin & Yang Mix): Petite with a mix of yin curves and yang sharpness.
             {'\n'} 5. Romantic (Lush Yin): Soft and curvy with no yang influence.{'\n'}
            </Text>
            <Text style={styles.bodyText}>
              There are also subtypes within these families. Explore further to discover your unique Kibbe type and unlock a world of styles that flatter you!
            </Text>
          </Text>
        </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',  
    backgroundColor: '#f5e4dc'
  },
  titleContainer: {
  flex: 1, 
  backgroundColor: '#d9c2b9',
  padding: hp(2),
  borderRadius: 20, 
  marginTop:20, 
  justifyContent: 'center', 
  height: hp(14), 
  maxHeight: hp(14),
  alignContent: 'center'
  },
 descriptionContainer: {
    flex: 1, 
    backgroundColor: '#d9c2b9',
    padding: hp(2),
    borderRadius: 20, 
  },
  title: {
    fontSize: hp(4),
    fontFamily: '',
    fontWeight: 'bold',
    color: '#422921',
    letterSpacing: 2,
    marginBottom: hp(1), 
    alignSelf: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 30,
    overflow: 'hidden', 
    height: 175, marginBottom:100
  },
  image: {
    width: '95%',
    height: hp(40), 
    resizeMode: 'contain',  
    marginRight: 10, 
    borderRadius: 20
  }, 
  bodyText: {
    fontFamily: 'Roboto-Regular', 
    lineHeight: hp(10) / 4, 
    color: '#422921'
  },
  heading: {
    fontSize: hp(3),
    fontWeight: 'bold',
    marginTop: hp(1),
    fontStyle: 'italic',  
    color: '#422921' 
  },
  boldText: {
    fontWeight: 'bold',
    marginTop: hp(1),
    color: '#422921'
  },
});