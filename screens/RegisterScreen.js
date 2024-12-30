import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {saveRegistrationProgress, getRegistrationProgress} from '../registrationUtils';

const RegisterScreen = () => {
  const [email, setEmail] = useState(''); 
  const navigation = useNavigation();

  useEffect(() => {
    getRegistrationProgress('Register').then(progressData => {
      if (progressData?.email) {
        setEmail(progressData.email); 
      }
    });
  }, []);

  const next = () => {
    if ((email || '').trim() !== '') {
      saveRegistrationProgress('Register', { email });
    }
    navigation.navigate('Password');
  };

  return (
    <SafeAreaView style={{ flex: 1 , paddingTop: Platform.OS === 'android' ? 35 : 0}}>
      <View style={{ padding: 13 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>
          You're almost there!
        </Text>
        <View style={{ flexDirection: 'column', gap: 16, marginVertical: 40 }}>
          <Text>Enter Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail} 
            style={{
              padding: 15,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <Pressable
            onPress={next}
            style={{
              padding: 15,
              backgroundColor: email?.trim()?.length > 4 ? '#2dcf30' : '#E0E0E0',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'BLACK', textAlign: 'center' }}>Next</Text>
          </Pressable>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 15 }}>
            I agree to receive updates over WhatsApp
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'grey',
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            By Signing Up, you agree to the terms of service and privacy policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
