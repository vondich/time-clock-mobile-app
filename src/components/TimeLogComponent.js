import React, { Component } from 'react';
import { View, StyleSheet, ImagePropTypes } from 'react-native';
import TimeLogDetailsComponent from './TimeLogDetailsComponent';
import TimeLogButton from './TimeLogButton';
import { createTimeLog } from '../services/Api/Api'
import { WORKER_ID, timeLogActions } from '../services/Api/ApiConstants'

class TimeLogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clockIn: null,
            clockOut: null,
            showLoader: false,
            nextTimeLogActionId: timeLogActions.CLOCK_IN
        }
    }

    showLoader = (show) => {
        this.setState(prevState => ({
            ...prevState,
            showLoader: show
        }))
    }

    onTimeLogButtonPress = () => {
        console.log("TimeLogComponent::onTimeLogButtonPress")

        this.showLoader(true)

        createTimeLog(WORKER_ID, this.state.nextTimeLogActionId)
            .then(result => {
                console.log("TimeLogComponent::onTimeLogButtonPress::then", result);
                this.setTimeLog(result);
                this.showLoader(false);
                this.props.showError(null);
            })
            .catch(error => {
                console.log("TimeLogComponent::onTimeLogButtonPress::catch", error);
                this.showLoader(false);
                this.props.showError(error.errorMessage);
            });
    }

    setTimeLog = (response) => {
        console.log("setTimeLog", response)

        this.setState(prevState => ({
            ...prevState,
            clockIn: (response.timeLogActionId == timeLogActions.CLOCK_IN) ? response.createdAt : prevState.clockIn,
            clockOut: (response.timeLogActionId == timeLogActions.CLOCK_OUT) ? response.createdAt : null,
            nextTimeLogActionId: (response.timeLogActionId == timeLogActions.CLOCK_IN) ? timeLogActions.CLOCK_OUT : timeLogActions.CLOCK_IN,
        }))
    }

    render() {
        return (
            <View style={styles.container}>
              <TimeLogDetailsComponent clockIn={this.state.clockIn} clockOut={this.state.clockOut} />
              <TimeLogButton
                    nextTimeLogActionId={this.state.nextTimeLogActionId}
                    onPress={this.onTimeLogButtonPress}
                    showLoader={this.state.showLoader}
                />
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "left",
    marginTop: 36,
  },
});

export default TimeLogComponent;