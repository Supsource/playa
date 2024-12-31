import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Image
          style={{width: 110, height: 60, resizeMode: 'contain'}}
          source={{
            uri: 'https://pbs.twimg.com/media/GgB5gqTWIAAyoVk?format=png&name=240x240',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});