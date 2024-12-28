import { Pressable, View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const PreFinalScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 80}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
          Congratulations! 🎉
        </Text>
        <Text style={{marginTop: 10, textAlign: 'center'}}>
          All set to register, Setting up your profile.
        </Text>
      </View>
      <Pressable
        // onPress={registerUser}
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