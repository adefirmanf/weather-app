/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById('DeviceReady').innerHTML = "Getting Data...";
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener('online', this.onOnline, false);
        document.getElementById("RefreshButton").addEventListener("click", this.GetPosition.bind(this), false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        this.GetPosition()
    },
    onOffline: function(){
        document.getElementById('DeviceReady').innerHTML = "Checking connection...";
    },
    onOnline: function(){
        document.getElementById('DeviceReady').innerHTML = "";
        this.GetPosition()
    },
    GetPosition: function(){
        var options = {
              maximumAge: 3600000,
              timeout: 100000,
              enableHighAccuracy: true,
           }
        var vm = this;
        var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
          function onSuccess(position) {
            var latitude = position.coords.latitude
            var longitude = position.coords.longitude
            vm.GetWeather(latitude, longitude)
           };
          function onError(error) {
             alert("Error" + error.message)
          };
    },
    GetWeather: function(latitude, longitude){
          var openWeather = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid=37fb76524a5e32930e1380a8adb5f5b0"
          cordovaHTTP.get(openWeather, {}, {}, function(response){
                  var Parse = JSON.parse(response.data)
                  var area = Parse.name
                  var country = Parse.sys.country
                  document.getElementById('temperature').innerHTML = Parse.main.temp + "&#176;C"
                  document.getElementById('area').innerHTML = area + ", " + country 

                }, function(response){
                  alert(response.error)
                })      
    },
    Refresh: function (){
          this.GetPosition()    
    }
};

app.initialize();
