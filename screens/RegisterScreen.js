import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 13}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          You're almost there!
        </Text>
        <View style={{flexDirection: 'column', gap: 16, marginVertical: 40}}>
          <Text>Enter Email</Text>
          <TextInput
            value={email}
            onChange={setEmail}
            style={{
              padding: 15,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <Pressable
            onPress={() => navigation.navigate('Password')}
            style={{
              padding: 15,
              backgroundColor: email?.length > 4 ? '#2dcf30' : '#E0E0E0',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'BLACK', textAlign: 'center'}}>Next</Text>
          </Pressable>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 15}}>I agree to recieve updates over Whatsapp</Text>
          <Text style={{fontSize: 15, color: 'grey', marginTop: 20, textAlign: 'center'}}>
            By Signing Up, you agree to the term of services and privacy policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
