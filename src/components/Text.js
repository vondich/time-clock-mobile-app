import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = (props) => {
    return (
        <Text style={[styles.text, props.style]}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "normal",
        color: "#777777",
        fontFamily: "System",
    },
});

export default DefaultText;