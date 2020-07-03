export const API_BASE_URL = 'http://192.168.1.127:3000/';

export const WORKER_ID = 1;

export const timeLogActions = {
    CLOCK_IN: 1,
    CLOCK_OUT: 2,
}

const endpoints = {
    WORKERS: 'workers/{0}',
    TIME_LOGS: 'workers/{0}/time-logs',
}

export default endpoints;