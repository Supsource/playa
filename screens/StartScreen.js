import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();
  const mapView = useRef(null);
  const users = [
    {
      image: 'https://images.pexels.com/photos/7208625/pexels-photo-7208625.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '1',
      latitude: '13.1295',
      longitude: '79.5977',
      name: 'sujan',
      description: 'Hey!',
    },
    {
      image: 'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '2',
      latitude: '13.155',
      longitude: '77.6070',
      name: 'suhas',
      description: "let's play",
    },
    {
      image: 'https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '3',
      latitude: '13.0977',
      longitude: '77.5839',
      name: 'ashish',
      description: "I'm always",
    },
    {
      image: 'https://images.pexels.com/photos/4307678/pexels-photo-4307678.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '4',
      latitude: '13.0490',
      longitude: '77.5936',
      name: 'abhi',
      description: 'At 8pm?',
    },
    {
      image: 'https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '5',
      latitude: '13.0623',
      longitude: '77.5871',
      name: 'akash',
      description: 'Hey!',
    },
    {
      image: 'https://images.pexels.com/photos/3264235/pexels-photo-3264235.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '6',
      latitude: '13.0354',
      longitude: '77.5988',
      name: 'Preetham',
      description: 'What up?',
    },
  ];

  const BANGALORE_COORDS = {
    latitude: 12.9916987,
    longitude: 77.5945627,
  };

  const generateCircularPoints = (center, radius, numPoints) => {
    const points = [];
    const angleStep = (2 * Math.PI) / numPoints;

    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep;
      const latitude = center.latitude + (radius / 111) * Math.cos(angle);
      const longitude = center.longitude + (radius / (111 * Math.cos(center.latitude))) * Math.sin(angle);
      points.push({ latitude, longitude });
    }

    return points;
  };

  const radius = 5;
  const numPoints = 6;

  const circularPoints = generateCircularPoints(BANGALORE_COORDS, radius, numPoints);

  useEffect(() => {
    if (mapView.current) {
      mapView.current.fitToCoordinates(circularPoints, {
        edgePadding: {
          top: 70,
          bottom: 70,
          left: 70,
          right: 70,
        },
      });
    }
  }, [circularPoints]);

  return (
    <>
    <SafeAreaView>
      <MapView
        ref={mapView}
        style={{ width: '100%', height: 400 }}
        initialRegion={{
          latitude: BANGALORE_COORDS.latitude,
          longitude: BANGALORE_COORDS.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {circularPoints?.map((point, index) => {
          const user = users[index % users.length];
          return (
            <Marker key={user.id} coordinate={point}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{ uri: user.image }}
                  style={{ width: 70, height: 70, resizeMode: 'cover', borderRadius: 35 }}
                />
              </View>
            </Marker>
          );
        })}
      </MapView>
      <View style={{marginTop: 35, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: "500", width: "50%", textAlign: 'center'}}>Find the players in your neighborhood</Text>
        <Text style={{marginTop: 20, color: 'grey', fontSize: 15}}>"Just like you did as a kid"</Text>
      </View>
      <Pressable style={{marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, color:'grey'}}>
          Already have an account? <Text style={{color: 'blue'}}>Sign in</Text>
        </Text>
      </Pressable>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Image
          style={{ width: 110, height: 60, resizeMode: 'contain' }}
          source={{ uri: 'https://raw.githubusercontent.com/Supsource/playa/refs/heads/main/medias/Playa.png?token=GHSAT0AAAAAACYQFB3XRR4WXACTKWAK6TK2Z3O4LFA' }}
        />
      </View>
    </SafeAreaView>
    <View style={styles.footerContainer}>
      <Pressable onPress={() => navigation.navigate("Register")} style={styles.button}>
        <Text style={styles.buttonText}>READY, SET & GO</Text>
      </Pressable>
    </View>
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  footerContainer: {
    padding: 10,
    // backgroundColor: 'white',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1ec921',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 7,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
