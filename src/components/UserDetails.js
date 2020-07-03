import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { fetchWorker } from '../services/Api/Api'
import { WORKER_ID } from '../services/Api/ApiConstants'

class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '-',
            userPosition: '-',
        }
    }

    componentDidMount() {
        console.log("UserDetails::componentDidMount")
        fetchWorker(WORKER_ID)
            .then(result => {
                console.log("UserDetails::componentDidMount::then", result)
                this.setUserDetails(result);
            })
            .catch(error => {
                console.log("UserDetails::componentDidMount::catch", error)
                this.props.showError(error.errorMessage);
            });
    }

    setUserDetails = (response) => {
        console.log("setUserDetails", response)
        this.setState(prevState => ({
            ...prevState,
            userName: response.name,
            userPosition: response.positionName,
        }))
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                textAlign: "left",
                marginTop: 80,
            },
            userPosition: {
                flex: 0.3,
                fontSize: 22,
                fontWeight: "bold",
                lineHeight: 36,
            },
            userName: {
                flex: 0.3,
                fontWeight: "bold",
                color: "#777777",
                fontFamily: "Roboto",
            },
        });

        return (
            <View style={styles.container}>
                <Text style={styles.userPosition}>{this.state.userPosition}</Text>
                <Text style={styles.userName}>{this.state.userName}</Text>
            </View>
        );
    }
}

export default UserDetails;