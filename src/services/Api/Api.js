import { get, post } from './HttpClient'
import endpoints from './ApiConstants'

export const fetchWorker = (workerId) => {
  return new Promise((resolve, reject) => {
    get(endpoints.WORKERS.replace('{0}', workerId))
      .then(response => {
            console.log("fetchWorker::success", response)
            resolve(response.data)
      })
      .catch(error => {
            console.log("fetchWorker::catch", error)
            reject(error)
      })
  })
}

export const createTimeLog = (workerId, timeLogActionId) => {
  return new Promise((resolve, reject) => {
    const endpoint = endpoints.TIME_LOGS.replace('{0}', workerId)
    const payload = {
      timeLogActionId
    }

    post(endpoint, payload)
      .then(response => {
        console.log("createTimeLog::success", response)
        resolve({
            timeLogActionId: response.data.timeLogActionId,
            createdAt: response.data.createdAt,
        })
      })
      .catch(error => {
        console.log("createTimeLog::error", error)
          reject(error)
      })
  })
}