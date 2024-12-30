import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileDetailScreen = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const { userId, token, setToken, setUserId } = useContext(AuthContext);

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://playa-z9fh.onrender.com/user/${userId}`);
      setUser(response.data.user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const clearAuthToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken('');
      setUserId('');
      navigation.replace('Start');
    } catch (error) {
      console.error('Error clearing auth token:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.header}>
          <Pressable onPress={clearAuthToken}>
            <Image 
              style={styles.profileImage}
              source={{uri: user?.image || 'default_avatar_url'}} 
            />
          </Pressable>
          <View style={styles.statsContainer}>
            {[
              { label: 'GAMES', value: user?.noOfGames || 0 },
              { label: 'PLAYPALS', value: user?.playpals?.length || 0 },
              { label: 'KARMA', value: 60 }  // Hardcoded value
            ].map((stat, index) => (
              <View key={index} style={styles.stat}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user?.firstName || 'Player'}</Text>
          <Text style={styles.lastPlayed}>Last Played on 13th July</Text>
          <Pressable style={styles.logoutButton} onPress={clearAuthToken}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  profileCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e9ecef',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  userInfo: {
    marginTop: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  lastPlayed: {
    fontSize: 13,
    color: 'gray',
    marginTop: 4,
  },
  logoutButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
