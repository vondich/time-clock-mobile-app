import React from 'react';
import Button from './Button';
import { timeLogActions } from '../services/Api/ApiConstants'
import DisabledButton from './DisabledButton';

const TimeLogButton = (props) => {
    console.log("TimeLogButton", "nextTimeLogActionId: " + props.nextTimeLogActionId)
    const nextTimeLogAction = props.nextTimeLogActionId == timeLogActions.CLOCK_IN ? "Clock in" : "Clock out";
    if (props.showLoader) {
        return <DisabledButton title="Loading..." />
    }
    return (
        <Button title={nextTimeLogAction} onPress={props.onPress} />
    );
}

export default TimeLogButton;