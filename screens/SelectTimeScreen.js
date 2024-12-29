import {Pressable, StyleSheet, Text, View, Button} from 'react-native';
import React, {useLayoutEffect, useContext, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const SelectTimeScreen = () => {
  const [time, setTime] = useState('');
  const navigation = useNavigation();

  const times = [
    {
      id: '0',
      type: 'Morning',
      timings: '12 AM - 9 AM',
      icon: <Feather name="sunrise" size={24} color="black" />,
    },
    {
      id: '1',
      type: 'Day',
      timings: '9 AM - 4 PM',
      icon: <Feather name="sun" size={24} color="black" />,
    },
    {
      id: '2',
      type: 'Evening',
      timings: '4 PM - 9 PM',
      icon: <Feather name="sunset" size={24} color="black" />,
    },
    {
      id: '3',
      type: 'Night',
      timings: '9 PM - 11 PM',
      icon: <Ionicons name="cloudy-night-outline" size={24} color="black" />,
    },
  ];

  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const selectTime = (item) => {
    setTime(item);
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Select Suitable Time',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'light',
      },
    });
  }, [navigation]);

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };

  const handleConfirmStartTime = (time) => {
    setStartTime(time);
    hideStartTimePicker();
  };

  const handleConfirmEndTime = (time) => {
    setEndTime(time);
    hideEndTimePicker();

    if (startTime) {
        const formattedStartTime = formatTime(startTime);
        const formattedEndTime = formatTime(time);
        const timeInterval = `${formattedStartTime} - ${formattedEndTime}`;
        navigation.navigate('Create', { timeInterval });
      }
  };

  const formatTime = (time) => {
    if (!time) return 'Select Time';
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeSlotsContainer}>
        {times.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => selectTime(item.type)}
            style={styles.timeSlot}
          >
            {item.icon}
            <Text style={styles.timeSlotText}>{item.type}</Text>
            <Text style={styles.timeSlotTimings}>{item.timings}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.pickerContainer}>
        <View style={styles.pickerSection}>
          <Text style={styles.label}>Start Time:</Text>
          <Button title={formatTime(startTime)} onPress={showStartTimePicker} />
          <DateTimePickerModal
            isVisible={isStartTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmStartTime}
            onCancel={hideStartTimePicker}
            is24Hour={false}
          />
        </View>
        <View style={styles.pickerSection}>
          <Text style={styles.label}>End Time:</Text>
          <Button title={formatTime(endTime)} onPress={showEndTimePicker} />
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmEndTime}
            onCancel={hideEndTimePicker}
            is24Hour={false}
          />
        </View>
      </View>

      {startTime && endTime && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>
            Selected Interval: {formatTime(startTime)} - {formatTime(endTime)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default SelectTimeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
  timeSlot: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 16,
    width: 160,
    height: 120,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  timeSlotText: {
    fontSize: 16,
    fontWeight: '600',
  },
  timeSlotTimings: {
    fontSize: 14,
    color: '#6c757d',
  },
  pickerContainer: {
    marginVertical: 16,
  },
  pickerSection: {
    marginBottom: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  summaryContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
  },
});
