import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function ColorHomeScreen() {
  return (
    <ScrollView>
      <ImageBackground style={styles.bg} source={require('../assets/Designer.jpeg')}>
        <StatusBar style="light" />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>INTRO. TO SEASONAL COLOR ANALYSIS</Text>
        </View>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={require('../assets/seasonalHome.jpg')} style={styles.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {/* Introduction */}
            <Text style={styles.introText}>
              Ever open your closet to a rainbow of unworn clothes, feeling lost about what flatters you? Seasonal color analysis can help! It's a personalized approach to color that considers your unique features – skin tone, eye color, and hair color – to create a color palette that enhances your natural beauty. 
            </Text>
            <Text style={styles.heading}>{'\n'}{'\n'}What is Seasonal Color Analysis?{'\n'}</Text>
            <Text style={styles.bodyText}>
              Seasonal color analysis categorizes colors into 12 harmonious palettes based on four main seasons (Spring, Summer, Autumn, Winter) with three sub-categories each. By considering your coloring and undertones (warm, cool, or neutral), this system helps you identify colors that flatter your complexion and make you look your best.
            </Text>
            <Text style={styles.heading}>{'\n'}{'\n'}How Do I Determine My Season?{'\n'}</Text>
            <Text style={styles.bodyText}>
              There are three main factors that determine your seasonal color palette:
{'\n'}{'\n'}
              * **Hue:** This refers to whether your undertones are warm (think golden or peachy) or cool (think rosy or blueish). While there are also neutral undertones, they often lean slightly warm or cool.{'\n'}
              * **Value:** This refers to whether your overall coloring is light or dark. Hair color plays a significant role here, but skin tone and eye color are also considered.{'\n'}
              * **Chroma:** This refers to the intensity or brightness of your coloring. Colors can be clear and vibrant, or muted and soft.{'\n'}{'\n'}

              By analyzing these factors in your skin, eyes, and hair, you can determine your seasonal color family (e.g., Light Spring, Cool Summer, Warm Autumn).

              Professional color draping, where different colored fabrics are placed next to your face to see how they interact with your coloring, is considered the most reliable way to determine your season. However, there are also resources available online and in books to guide you through the self-assessment process.
            </Text>
            <Text style={styles.heading}>{'\n'}{'\n'}Why Does My Seasonal Color Palette Matter?{'\n'}</Text>
            <Text style={styles.bodyText}>
              Discovering your seasonal color palette offers several benefits:
{'\n'}{'\n'}
              * **Confident Clothing Choices:** Knowing which colors flatter you empowers you to make confident choices when building your wardrobe.{'\n'}
              * **Streamlined Wardrobe:** By focusing on colors that work well together, you can create a more cohesive and versatile closet.{'\n'}
              * **Enhanced Appearance:** Choosing colors that complement your natural beauty allows you to look and feel your most radiant.{'\n'}{'\n'}

              Seasonal color analysis is not a rigid set of rules. It's a starting point to help you understand the colors that harmonize best with you. You can still experiment with colors outside your palette, but this knowledge gives you a foundation for making informed choices.
            </Text>
            <View>
            <Text style={styles.conclusionText}>{'\n'}
Ready to embrace your most vibrant self? Explore our resources to discover your perfect color palette. Let's unlock the colors that make you shine!
            </Text>
            </View>
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  title: {
    fontSize: hp(3),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#333333',
    letterSpacing: 2,
    marginTop: hp(1), 
    alignSelf: 'center'
  },
  titleContainer: {
  flex: 1, 
  backgroundColor: '#d8bea3',
  padding: hp(2),
  borderRadius: 5, 
  justifyContent: 'center', 
  height: hp(14), 
  maxHeight: hp(18),
  alignContent: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden'
  },
  image: {
    width: '80%',
    height: hp(50), 
    resizeMode: 'contain',  
    marginRight: 10, 
    borderRadius: 50 
  }, 
  descriptionContainer: {
    backgroundColor: '#d8bea3', 
    padding: hp(3),
    borderRadius: 5, 
    maxHeight: hp(400)
  },
  heading: {
    fontSize: hp(3),
    fontWeight: 'bold',
    marginTop: hp(1),
    color: '#333333'
  },
  bodyText: {
    fontFamily: 'Roboto-Regular', 
    lineHeight: hp(10) / 4, 
    color: '#333333',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover'
  },
  conclusionText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'justify',
    lineHeight: hp(10) / 4.5,
    fontStyle: 'italic'
  },
  introText: {
    fontFamily: 'Roboto-Regular',
    lineHeight: hp(10) / 3.5, 
    color: '#333333',
    fontStyle: 'italic',
  }
});