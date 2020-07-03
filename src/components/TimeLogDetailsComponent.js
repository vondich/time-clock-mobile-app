import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { formatTime } from '../services/Helpers';

const TimeLogDetailsComponent = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.column}>
            <Text style={styles.timeTitle}>Clock in</Text>
            <Text style={styles.time}>
                {
                    (props.clockIn) ? formatTime(props.clockIn) : '-'
                }
            </Text>
        </View>
        <View style={styles.column}>
            <Text style={styles.timeTitle}>Clock out</Text>
            <Text style={styles.time}>
                {
                    (props.clockOut) ? formatTime(props.clockOut) : '-'
                }
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "left",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: 36,
  },
  column: {
    flex: 0.5,
    width: "50%",
  },
  timeTitle: {
    lineHeight: 26,
    marginBottom: 4,
  },
  time: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: "bold",
  },
});

export default TimeLogDetailsComponent;