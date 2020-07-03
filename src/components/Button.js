import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DefaultButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.appButtonContainer, props.style]}>
            <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: "#00CA7F",
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderColor: "transparent",
        marginBottom: 5,
      },
      appButtonText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
      }
});

export default DefaultButton;