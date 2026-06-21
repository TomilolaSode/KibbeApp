import React, {createContext, useState, useEffect} from 'react'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from  './components/WelcomeScreen';
import HomeScreen from './components/KibbeHomeScreen';
import ColorHomeScreen from './components/ColorHomeScreen';
import KibbeTypeScreen from './components/TypesKibbeScreen';
import SeasonTypeScreen from './components/TypesSeasonScreen';
import KibbeProfileScreen from './components/ProfileKibbe';
import ColorProfileScreen from './components/ProfileSeason';
import { bodyTypes, seasonalColors } from './components/Types'
 
const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();
export const KibbeContext = createContext();
export const ColorContext = createContext();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#f5e4dc' },
          headerTitleStyle: {
    color: '#000',
  },
          navigation
        })}
      />
      <Stack.Screen
        name="Kibbe"
        component={KibbeTab}
        options={{
          headerStyle: { backgroundColor: '#d9c2b9' }
        }}
      />
      <Stack.Screen
        name="Seasonal Colors"
        component={SeasonalTab}
        options={{
          headerStyle: { backgroundColor: '#d8bea3' }
        }}
      />
    </Stack.Navigator>
  );
};

const KibbeTab = () => {
  const bodyData = [...bodyTypes];
  const [types, setTypes] = useState(bodyData);

  const updateData = async(i) => {
      try {
    const KibbeData = await AsyncStorage.getItem("@KibbeData");
    await AsyncStorage.setItem("@KibbeData", JSON.stringify(i));
    }catch(err){
      console.log(err);
    }
  }

  function selectPressed(i) {
    const tmpData = [...types]; 
    const selectedCount = tmpData.filter((item) => item.isSelected).length;
    if ( !tmpData[i].isSelected && selectedCount === 3) {
      return;
    }
    tmpData[i].isSelected = !tmpData[i].isSelected;
    setTypes(tmpData);
    updateData(tmpData);
  }

  return (
    <KibbeContext.Provider value={{types, setTypes, bodyData, selectPressed}}>
    <Tab.Navigator
    screenOptions={{ 
          headerShown: false, 
          tabBarStyle: {backgroundColor: '#d9c2b9'} 
        }}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#333333',
        }}>
      <Tab.Screen name="HOME" component={HomeScreen} 
      options={{
            tabBarIcon: () => (
              <Ionicons name="home-outline" color={'#333333'} size={20} />
            ),
            headerShown: false
          }}/>
      <Tab.Screen name="TYPES" component={KibbeTypeScreen}
      options={{
            tabBarIcon: () => (
              <Ionicons name="list-outline" color={'#333333'} size={20} />
            ),
            headerShown: false
          }}/>
      <Tab.Screen name="PROFILE" component={KibbeProfileScreen}
      options={{
            tabBarIcon: () => (
              <Ionicons name="person-outline" color={'#333333'} size={20} />
            ),
            headerShown: false
          }}/>
    </Tab.Navigator>
    </KibbeContext.Provider>
  );
};

const SeasonalTab = () => {
  const colorData  = [...seasonalColors]
  const [colors, setColors] = useState(colorData);

  const updateData = async(i) => {
      try {
    const SeasonalData = await AsyncStorage.getItem("@SeasonalData");
    await AsyncStorage.setItem("@SeasonalData", JSON.stringify(i));
    }catch(err){
      console.log(err);
    }
  }
  
  function selectPressed(i) {
    const tmpData = [...colors]; 
    const selectedCount = tmpData.filter((item) => item.isSelected).length;
    if ( !tmpData[i].isSelected &&selectedCount === 3) {
      return;
    }
    tmpData[i].isSelected = !tmpData[i].isSelected;
    setColors(tmpData);
    updateData(tmpData);
  }
  return (
    <ColorContext.Provider value={{colors, setColors, colorData, selectPressed}}>
    <Tab.Navigator
    screenOptions={{ 
          headerShown: false, 
          tabBarStyle: {backgroundColor: '#d8bea3'} 
        }}
        tabBarOptions={{
          activeTintColor:  '#333333',
          inactiveTintColor: 'grey',
        }}>
      <Tab.Screen name="HOME" component={ColorHomeScreen} 
      options={{
            tabBarIcon: () => (
              <Ionicons name="home-outline" color={'#333333'} size={20} />
            ),
            headerShown: false
          }}/>
      <Tab.Screen name="TYPES" component={SeasonTypeScreen}
      options={{
            tabBarIcon: () => (
              <Ionicons name="list-outline" color={'#333333'} size={20} />
            ),
            headerShown: false
          }}/>
      <Tab.Screen name="PROFILE" component={ColorProfileScreen}
      options={{
            tabBarIcon: () => (
              <Ionicons name="person-outline" color={'#333333'} size={20} />
            ),
            headerShown: false
          }}/>
    </Tab.Navigator>
    </ColorContext.Provider>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack/> 
    </NavigationContainer>
  );
}

