import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const PreFinalScreen = () => {
  const {token, setToken} = useContext(AuthContext);
  const [userData, setUserData] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    if (token) {
      navigation.replace('MainStack', {screen: 'Main'});
    }
  }, [token]);
  useEffect(() => {
    getAllUserData();
  }, []);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 80}}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginTop: 10,
          }}>
          Setting up your profile for you
        </Text>
      </View>

      <Pressable
        onPress={registerUser}
        style={{backgroundColor: '#03C03C', padding: 15, marginTop: 'auto'}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}>
          Finish Registering
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default PreFinalScreen

const styles = StyleSheet.create({})