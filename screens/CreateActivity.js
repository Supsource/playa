import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesgin from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {BottomModal} from 'react-native-modals';
import {SlideAnimation} from 'react-native-modals';
import {ModalContent} from 'react-native-modals';
import moment from 'moment';
import axios from 'axios';
import {AuthContext} from '../AuthContext';

const CreateActivity = () => {
  const [sport, setSport] = useState('');
  const [area, setArea] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [noOfPlayers, setnoOfPlayers] = useState(0);
  const [timeInterval, setTimeInterval] = useState('');
  const [selected, setSelected] = useState(['Public']);
  const navigation = useNavigation();
  const route = useRoute();
  const [taggedVenue, setTaggedVenue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (route?.params?.timeInterval) {
      setTimeInterval(route?.params?.timeInterval);
    }
  }, [route?.params]);

  useEffect(() => {
    if (route.params?.taggedVenue) {
      setTaggedVenue(route?.params?.taggedVenue);
    }
  }, [route?.params]);

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days');
      let displayDate;
      if (i === 0) {
        displayDate = 'Today';
      } else if (i === 1) {
        displayDate = 'Tomorrow';
      } else if (i === 2) {
        displayDate = 'Day after';
      } else {
        displayDate = date.format('Do MMMM');
      }
      dates.push({
        id: i.toString(),
        displayDate,
        dayOfWeek: date.format('dddd'),
        actualDate: date.format('Do MMMM'),
      });
    }
    return dates;
  };
  const dates = generateDates();

  const selectDate = date => {
    setModalVisible(false);
    setDate(date);
  };
  return (
    <>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 35 : 0,
      }}>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Create Activity
          </Text>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}>
            <MaterialCommunityIcons name="whistle" size={24} color="gray" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Sport</Text>
              <TextInput
                value={sport}
                onChangeText={setSport}
                style={{marginTop: 7, fontSize: 15}}
                placeholderTextColor="gray"
                placeholder="eg, badminton, cricket"
              />
            </View>
            <AntDesgin name="arrowright" size={24} color="black" />
          </Pressable>
          {/* Below This is a horizontal line  */}
          <Text style={{borderColor: '#E0E0E0', borderWidth: 1, height: 1}} />
          <Pressable
            onPress={() => navigation.navigate('TagVenue')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}>
            <Entypo name="location" size={24} color="gray" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Area</Text>
              <TextInput
                value={area ? area : taggedVenue}
                onChangeText={setArea}
                style={{marginTop: 7, fontSize: 15, color: 'black'}}
                placeholderTextColor="gray"
                placeholder="Locality or venue name"
              />
            </View>
            <AntDesgin name="arrowright" size={24} color="black" />
          </Pressable>
          {/* Below This is a horizontal line  */}
          <Text style={{borderColor: '#E0E0E0', borderWidth: 1, height: 1}} />
          <Pressable
           onPress={() => setModalVisible(!modalVisible)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}>
            <Feather name="calendar" size={24} color="gray" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Date</Text>
              <TextInput
                editable={false}
                value={area}
                onChangeText={setArea}
                style={{marginTop: 7, fontSize: 15, color: 'black'}}
                placeholderTextColor={date ? 'black' : 'gray'}
                placeholder={date ? date : 'Pick a Day'}
              />
            </View>
            <AntDesgin name="arrowright" size={24} color="black" />
          </Pressable>
          {/* Below This is a horizontal line  */}
          <Text style={{borderColor: '#E0E0E0', borderWidth: 1, height: 1}} />
          <Pressable
          onPress={() => navigation.navigate('Time')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}>
            <AntDesgin name="clockcircleo" size={24} color="gray" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Time</Text>
              <TextInput
                value={area}
                onChangeText={setArea}
                style={{marginTop: 7, fontSize: 15}}
                placeholderTextColor={timeInterval ? 'black' : 'gray'}
                placeholder={timeInterval ? timeInterval : 'Pick Exact Time'}
              />
            </View>
            <AntDesgin name="arrowright" size={24} color="black" />
          </Pressable>
          {/* Below This is a horizontal line  */}
          <Text style={{borderColor: '#E0E0E0', borderWidth: 1, height: 1}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 7,
              marginVertical: 10,
            }}>
            <Feather name="activity" size={24} color="gray" />
            <View style={{marginTop: 10}}>
              <Text style={{marginBottom: 10, fontSize: 15, fontWeight: '500'}}>
                Activity of Players
              </Text>
              <Pressable
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Pressable
                  onPress={() => setSelected('Public')}
                  style={
                    selected.includes('Public')
                      ? {
                          backgroundColor: '#07bc0c',
                          padding: 10,
                          borderRadius: 3,
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          width: 140,
                          justifyContent: 'center',
                        }
                      : {
                          backgroundColor: 'white',
                          padding: 10,
                          borderRadius: 3,
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          width: 140,
                          justifyContent: 'center',
                        }
                  }>
                  <Ionicons
                    name="earth"
                    size={24}
                    color={selected.includes('Public') ? 'white' : 'black'}
                  />
                  <Text
                    style={
                      selected.includes('Public')
                        ? {color: 'white', fontWeight: 'bold', fontSize: 15}
                        : {color: 'black', fontWeight: 'bold', fontSize: 15}
                    }>
                    Public
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelected('Invite Only')}
                  style={
                    selected.includes('Invite Only')
                      ? {
                          backgroundColor: '#07bc0c',
                          padding: 10,
                          borderRadius: 3,
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          width: 140,
                          justifyContent: 'center',
                        }
                      : {
                          backgroundColor: 'white',
                          padding: 10,
                          borderRadius: 3,
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          width: 140,
                          justifyContent: 'center',
                        }
                  }>
                  <AntDesgin
                    name="lock"
                    size={24}
                    color={selected.includes('Invite Only') ? 'white' : 'black'}
                  />
                  <Text
                    style={
                      selected.includes('Invite Only')
                        ? {color: 'white', fontWeight: 'bold', fontSize: 15}
                        : {color: 'black', fontWeight: 'bold', fontSize: 15}
                    }>
                    Invite Only
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
          {/* Below This is a horizontal line  */}
          <Text
            style={{
              borderColor: '#E0E0E0',
              borderWidth: 1,
              height: 1,
              marginTop: 7,
            }}
          />
          <Text style={{marginTop: 10, fontSize: 15}}>Total Players</Text>
          <View
            style={{
              padding: 10,
              backgroundColor: '#F0F0F0',
              borderRadius: 6,
              marginTop: 10,
            }}>
            <View style={{marginVertical: 5}}>
              <View>
                <TextInput
                  value={noOfPlayers}
                  onChangeText={setnoOfPlayers}
                  style={{
                    padding: 10,
                    backgroundColor: 'white',
                    borderColor: 'D0D0D0',
                    borderWidth: 1,
                    borderRadius: 4,
                  }}
                  placeholder="Total Players (including you)"
                />
              </View>
            </View>
          </View>
          {/* Below This is a horizontal line  */}
          <Text
            style={{
              borderColor: '#E0E0E0',
              borderWidth: 1,
              height: 1,
              marginTop: 15,
            }}
          />
          <Text style={{fontSize: 16, marginTop: 20}}>Instructions</Text>
          <View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Ionicons name="bag-check" size={24} color="red" />
              <Text style={{flex: 1, fontSize: 15, fontWeight: '500'}}>
                Bring your own equipement
              </Text>
              <FontAwesome5 name="check-square" size={24} color="green" />
            </View>
          </View>
          <View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <MaterialCommunityIcons
                name="directions-fork"
                size={24}
                color="#FEBE10"
              />
              <Text style={{flex: 1, fontSize: 15, fontWeight: '500'}}>
                Cost Shared
              </Text>
              <FontAwesome5 name="check-square" size={24} color="green" />
            </View>
          </View>
          <View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <FontAwesome5 name="syringe" size={24} color="green" />
              <Text style={{flex: 1, fontSize: 15, fontWeight: '500'}}>
                Covid Vaccinated players preferred
              </Text>
              <FontAwesome5 name="check-square" size={24} color="green" />
            </View>
            <TextInput
              style={{
                padding: 10,
                backgroundColor: 'white',
                borderColor: '#D0D0D0',
                borderWidth: 8,
                marginVertical: 8,
                borderRadius: 6,
              }}
              placeholder="Add Instructions"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 15,
              marginVertical: 10,
            }}>
            <AntDesgin name="setting" size={24} color="black" />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Advance Settings
              </Text>
            </View>
            <AntDesgin name="arrowright" size={24} color="black" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}>
        <ModalContent
          style={{width: '100%', height: 400, backgroundColor: 'white'}}>
          <View>
            <Text
              style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
              Choose a date to host the game
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                flexWrap: 'wrap',
                marginVertical: 20,
              }}>
              {dates?.map((item, index) => (
                <Pressable
                  onPress={() => selectDate(item?.actualDate)}
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    borderColor: '#E0E0E0',
                    borderWidth: 1,
                    width: '30%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item?.displayDate}</Text>
                  <Text style={{color: 'gray', marginTop: 8}}>
                    {item?.dayOfWeek}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default CreateActivity;

const styles = StyleSheet.create({});
