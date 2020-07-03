import moment from 'moment';

export const formatTime = timestamp => {
    return moment(timestamp, 'YYYY-MM-DD HH:mm:ss').format('h:mm A')
}