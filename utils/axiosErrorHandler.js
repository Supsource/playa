import { Alert } from 'react-native';

export const handleAxiosError = (error) => {
  let errorMessage = 'An error occurred';
  if (error.response) {
    errorMessage += `: ${error.response.data.message || error.response.data}`;
  } else {
    errorMessage += `: ${error.message}`;
  }
  Alert.alert('Error', errorMessage);
};
