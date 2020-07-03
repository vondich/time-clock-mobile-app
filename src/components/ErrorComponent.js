import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const ErrorComponent = (props) => {
    return (props.errorMessage !== null) ?
        (
            <View>
                <Text style={styles.message}>{props.errorMessage}</Text>
            </View>
        ) :
        null;
}

const styles = StyleSheet.create({
    message: {
        color: "#FF4D4F"
    },
});

export default ErrorComponent;