import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayScreen = () => {
  const [option, setOption] = useState("My Sports");
  return (
    <SafeAreaView>
      <View style={{padding: 12, backgroundColor: "#223537", }}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', gap:5,alignItems:'center'}}>
            <Text style={{fontSize: 16, fontWeight: "500", color:'white'}}>Bidhannagar</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </View>
          <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
          <Ionicons name="chatbox-outline" size={24} color="white" />
          <Ionicons name="notifications-outline" size={24} color="white" />

          <Image
          style={{width:30, height:30, borderRadius:15}}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/72860690?v=4'
          }}
          />
          </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', gap: 10, marginVertical:13}}>
          <Pressable onPress={() => setOption("Calendar") }>
            <Text style={{fontWeight:'500', fontSize: 15, color: option == "Calendar" ? "#12e04c" : "white"}}>Calendar</Text>
          </Pressable>
          <Pressable onPress={() => setOption("My Sports")}>
            <Text style={{fontWeight:'500', fontSize: 15, color: option == "My Sports" ? "#12e04c" : "white"}}>My Sports</Text>
          </Pressable>
          <Pressable onPress={() => setOption("Other Sports")}>
            <Text style={{fontWeight:'500', fontSize: 15, color: option == "Other Sports" ? "#12e04c" : "white"}}>Other Sports</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PlayScreen

const styles = StyleSheet.create({})