import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../AuthContext';

const Login = () => {
  const {setUserId} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://playa-z9fh.onrender.com/login', {
        username,
        password,
      });
      const {userId} = response.data;
      await AsyncStorage.setItem('userId', userId);
      setUserId(userId);
      console.log('Stored userId in AsyncStorage:', userId); // Add this line to log userId
      // Navigate to the next screen or handle successful login
    } catch (error) {
      console.error('Failed to login:', error);
      Alert.alert('Login failed', 'Please check your credentials and try again.');
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
