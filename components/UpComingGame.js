import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const UpComingGame = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Game', {
          item: item,
        })
      }
      style={styles.container}>
      <Text style={styles.dateText}>{item?.date}</Text>

      <View style={styles.mainContent}>
        {/* Admin Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: item?.adminUrl }}
          />
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.title}>{item?.adminName}'s Badminton Game</Text>

          <Text style={styles.areaText} numberOfLines={2}>
            {item?.area}
          </Text>

          <View style={item?.isBooked ? styles.bookedContainer : styles.availableContainer}>
            {item?.isBooked ? (
              <>
                <Text style={styles.courtNumberText}>{item?.courtNumber}</Text>

                <View style={styles.bookedStatus}>
                  <Text style={styles.bookedText}>Booked</Text>
                </View>
              </>
            ) : (
              <Text style={styles.timeText}>{item?.time}</Text>
            )}
          </View>
        </View>

        {/* Player Count */}
        <View style={styles.playerCountContainer}>
          <Text style={styles.playerCountText}>{item?.players?.length}</Text>
          <Text style={styles.goingText}>GOING</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default UpComingGame;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 2,
    marginBottom: 20,
    borderRadius: 10,
  },
  dateText: {
    marginVertical: 7,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 2,
    color: '#56cc79',
    fontWeight: '600',
  },
  mainContent: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  areaText: {
    color: 'gray',
    marginBottom: 10,
    flexShrink: 1,
  },
  bookedContainer: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#f1f1f1',
  },
  availableContainer: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  courtNumberText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 13,
    paddingVertical: 10,
  },
  bookedStatus: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#56cc79',
    paddingVertical: 5,
    borderRadius: 8,
  },
  bookedText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'white',
  },
  timeText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
    color: '#333',
  },
  playerCountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  playerCountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  goingText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
});
