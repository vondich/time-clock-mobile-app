import React from 'react';
import { StyleSheet } from 'react-native';
import Button from './Button';

const DisabledButton = (props) => {
    console.log(props)
    return (
        <Button title={props.title} style={styles.disabledButton} />
    );
}

const styles = StyleSheet.create({
    disabledButton: {
        backgroundColor: "#AAA",
      },
});

export default DisabledButton;