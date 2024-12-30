import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';
import VenueCard from '../components/VenueCard';


const BookScreen = () => {
  const [user, setUser] = useState(null);
  const [venues, setVenues] = useState([]);
  const navigation = useNavigation();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  };

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:3000/venues');
        setVenues(response.data);
      } catch (error) {
        console.error('Failed to fetch venues:', error);
      }
    };

    fetchVenues();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>Sahakar Nagar</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View>
            {user?.image ? (
              <Image
                style={{ width: 30, height: 30, borderRadius: 15 }}
                source={{ uri: user.image }}
              />
            ) : (
              <Ionicons name="person-circle-outline" size={30} color="black" />
            )}
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 12,
          backgroundColor: '#E8E8E8',
          padding: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 25,
        }}
      >
        <TextInput placeholder="Search For Venues" />
        <Ionicons name="search" size={24} color="gray" />
      </View>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          padding: 13,
        }}
      >
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            borderColor: '#E0E0E0',
            borderWidth: 2,
          }}
        >
          <Text>Sports & Availabilty</Text>
        </View>

        <View
          style={{
            padding: 10,
            borderRadius: 10,
            borderColor: '#E0E0E0',
            borderWidth: 2,
          }}
        >
          <Text>Favorites</Text>
        </View>

        <View
          style={{
            padding: 10,
            borderRadius: 10,
            borderColor: '#E0E0E0',
            borderWidth: 2,
          }}
        >
          <Text>Offers</Text>
        </View>
      </Pressable>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={venues}
        renderItem={({ item }) => <VenueCard item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});