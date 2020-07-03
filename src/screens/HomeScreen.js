import React, { useState } from 'react';
import { View } from 'react-native';
import UserDetails from '../components/UserDetails';
import TimeLogComponent from '../components/TimeLogComponent';
import ErrorComponent from '../components/ErrorComponent';

const HomeScreen = () => {
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <View>
      <UserDetails showError={updateErrorMessage}  />
      <TimeLogComponent showError={updateErrorMessage}  />
      <ErrorComponent errorMessage={errorMessage} hideError={updateErrorMessage} />
    </View>
  );
}

export default HomeScreen;