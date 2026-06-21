import { Text, View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import { Linking } from 'expo-linking';


const LinkText = ({ url }) => (
  <Text style={{ color: 'blue', textDecorationLine: 'underline' }} onPress={() => Linking.openURL(url)}>
    ◦{url}
  </Text>
);
const INITIAL_IMAGE_HEIGHT = 100; 


export function KibbeTypeCard({ data, idx, title, shortdesc, img, savePressed}) {
  return (
    <Card style={styles.kibbecard}>
      <View style={styles.view}>
        <Image style={styles.image} source={img[0]} />
        <View style={styles.kibbeinfo}> 
          <View style={styles.kibbetitle}>
          <Text style={styles.kibbetitle}>{title}</Text>
      <TouchableWithoutFeedback  onPress={() => savePressed(idx)}>
              <Ionicons name="heart-circle-outline" size={35} color={data.isSelected ? '#422921' : 'gray'}></Ionicons>
            </TouchableWithoutFeedback>
        </View>
        <View>
          <Text style={styles.kibbeparagraph}>{shortdesc}</Text>
        </View>
      </View>
      </View> 
    </Card>
  );
}

export function KibbeEXPTypeCard({data, idx, title, img, description, ex1, ex2, savePressed}) {
    return (
      <Card style={expstyles.kibbecard}>
        <View style={expstyles.view}>
          <Swiper style={{ height:hp(30) }}>  
            {img.map((imageSource, index) => (
            <Image key={index} style={expstyles.image} source={imageSource} />
          ))}
          </Swiper>
          <View>
            <Text style={expstyles.title}>{title}</Text>
          </View>
        </View>
        <View style={expstyles.expandedTextContainer}>
          <Text style={expstyles.paragraph}>{description}</Text>
          {ex1 && (
            <>
              <Text style={expstyles.expandedListTitle}>{"\n"}You are not {title} if you </Text>
              <Text>{ex1}</Text>
            </> 
          )}
          {ex2 && (
            <>
              <Text style={expstyles.expandedListTitle}>{"\n"}Recommended Websites:  </Text>
              <View>
    {ex2.map((url, index) => (
      <LinkText key={index} url={url} text={`Website ${index + 1}`} />
    ))}
  </View>
            </>
          )}
        </View>
        <TouchableWithoutFeedback style={styles.infoIconWrapper} onPress={() => savePressed(idx)}>
                <Ionicons name="heart-circle-outline" size={35} color={data.isSelected ? '#422921' : 'gray'}></Ionicons>
          </TouchableWithoutFeedback>
      </Card>
    );
}


export function SeasonTypeCard({ data, idx, title, shortdesc, img, savePressed }) {
  return (
    <Card style={styles.seasonalcard}>
      <View style={styles.view}>
        <Image style={styles.image} source={img[0]} />
        <View style={styles.seasonalinfo}> 
        <View style={styles.seasontitle}>
          <Text style={styles.seasontitle}>{title}</Text>
          <TouchableWithoutFeedback onPress={() => savePressed(idx)}>
              <Ionicons name="heart-circle-outline" size={35} color={data.isSelected ? '#333333' : 'gray'}></Ionicons>
          </TouchableWithoutFeedback>
          </View>
          <View style={styles.textcontainer}>
          <Text style={styles.seasonparagraph} numberOfLines={5} ellipsizeMode="tail">{shortdesc}</Text>
          </View> 
          </View>
        </View>
    </Card>
  );
}



export function SeasonEXPTypeCard({data, idx, title, img, description, ex1, savePressed}) {
return (
    <Card style={expstyles.seasoncard}>
      <View style={expstyles.view}>
          <Swiper style={{ height:hp(30) }}>  
            {img.map((imageSource, index) => (
            <Image key={index} style={expstyles.image} source={imageSource} />
          ))}
          </Swiper>
          <View>
            <Text style={expstyles.title}>{title}</Text>
          </View>
      <View style={expstyles.expandedTextContainer}>
          <Text style={expstyles.paragraph}>{description}</Text>
          {ex1 && (
            <>
              <Text style={expstyles.expandedListTitle}>{"\n"}Recommended Websites:  </Text>
              <View>
    {ex1.map((url, index) => (
      <LinkText key={index} url={url} text={`Website ${index + 1}`} />
    ))}
  </View>
            </>
          )}
        </View>
        
      <TouchableWithoutFeedback style={styles.infoIconWrapper} onPress={() => savePressed(idx)}>
          <Ionicons name="heart-circle-outline" size={35} color={data.isSelected ? '#333333' : 'gray'}></Ionicons>
          </TouchableWithoutFeedback>
      </View>
    </Card>
    
  );
}


const styles = StyleSheet.create({
  kibbetitle: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'flex-start', 
    flexDirection:'row'
  },
  kibbeparagraph: {
    margin: 5,
    paddingRight: 40,
    fontSize: 11.5,
    width: '200px'
  },
  kibbeinfo: {
    flexDirection: 'column'
  },
   kibbecard: {
    margin: 10,
    padding: 5,
    backgroundColor: '#d9c2b9',
    borderRadius: 10,
    justifyContent: 'center', 
  alignItems: 'right'
  },
  seasontitle: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    justifyContent: 'flex-start', 
    flexDirection:'row'
  },
  seasonparagraph: {
    margin: 5,
    fontSize: 11.5,
    width: '200px',
    color: '#666666', 
  },
  seasonalcard: {
    margin: 10,
    padding: 5,
    backgroundColor: '#f0e9d5',
    borderRadius: 10, 
    justifyContent: 'left', 
  alignItems: 'center'
  },
  seasonalinfo: {
    flexDirection: 'column'
  },
  image: {
    width: '100px',
    height: INITIAL_IMAGE_HEIGHT,
    margin: 10,
    borderRadius: 10
  },
  view: {
    flexDirection: 'row',
    width: '80%',
  }, 
  textcontainer:{
    width:160,
  }, 
    infoIconWrapper: {
    position: 'absolute',
    flexDirection: 'row'
  },
});

const expstyles = StyleSheet.create({
  title: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  paragraph: {
    margin: 5,
    fontSize: 13,
    flex: 1
  },
  image: {
    width: '100%',
    height: 200,
  },
  kibbecard: {
    margin: 10,
    padding: 5,
    backgroundColor: '#d9c2b9',
    borderRadius: 10,
    flex:1
  },
  seasoncard: {
    margin: 10,
    padding: 5,
    backgroundColor: '#f0e9d5',
    borderRadius: 10,
    flex:1
  },
  view: {
    flexDirection: 'column',
  },
  expandedTextContainer: {
    marginTop: 10, 
    padding: 10,
  },
  expandedListTitle: {
    fontWeight: 'bold',
    marginBottom: 5, 
  }
});