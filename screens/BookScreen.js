import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BookScreen = () => {
  return (
    <SafeAreaView>
     <View style={{flexDirection:"row", alignItems:"center", justifyContent:'space-between', padding: 12}}>
      <View style={{flexDirection:'row', alignItems:"center", gap:4}}>
        <Text>Bidhannagar</Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </View>
      <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
      <Ionicons name="chatbox-outline" size={24} color="black" />
      <Ionicons name="notifications-outline" size={24} color="black" />

      <Image
          style={{width:30, height:30, borderRadius:15}}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/72860690?v=4'
          }}
          />
      </View>
     </View>
     <View style={{marginHorizontal:12, backgroundColor:'#E8E8E8', padding:12, flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderRadius: 25}}>
      <TextInput placeholder='Search for Venues'/>
      <Ionicons name="search" size={24} color="gray" />
     </View>
    </SafeAreaView>
  )
}

export default BookScreen

const styles = StyleSheet.create({})