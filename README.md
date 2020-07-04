
## Time Clock Mobile App

**Depedencies**

You need clone and install [time-clock-api](https://github.com/vondich/time-clock-api)


**Installation**
1. Clone repository
2. Make sure [time-clock-api](https://github.com/vondich/time-clock-api) is running on http://localhost:3000. Otherwise, you can update the API_BASE_URL in `src/services/Api/ApiConstants`.
3. Run the following in your terminal
    ```
    $ cd time-clock-mobile-app
    $ npm install
    $ react-native start
    $ react-native run-android (or react-native run-ios)
    ```
**TODO**
- The app assumes that on first load, the worker has not clocked in yet as the initial state is always set to "Clock In". If the worker has previously clocked in, restarted the app and tried to clock in again, the API will return 400 and "Something went wrong. Please try again." message will be displayed as worker is not allowed to clock in/out twice.

**Screenshots**

![First Load](https://vondich-github.s3-ap-southeast-1.amazonaws.com/time-clock-mobile-app-first-load.png)
![Clock In](https://vondich-github.s3-ap-southeast-1.amazonaws.com/time-clock-mobile-app-clock-in.png)
![Clock Out](https://vondich-github.s3-ap-southeast-1.amazonaws.com/time-clock-mobile-app-clock-in.png)