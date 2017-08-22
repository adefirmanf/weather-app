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
import moment from 'moment';
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
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener('online', this.onOnline, false);
        document.getElementById("RefreshButton").addEventListener("click", this.Refresh.bind(this), false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        alert(moment().format())
        console.log('Received Event: ' + id);
    },
    onOffline: function(){
        document.getElementById('DeviceReady').innerHTML = "Checking connection...";
    },
    Refresh: function (){
            var options = {
              maximumAge: 3600000,
              timeout: 100000,
              enableHighAccuracy: true,
           }
            var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
               function onSuccess(position) {
                  alert('Latitude: '       + position.coords.latitude)
                  document.getElementById('DeviceGPSReady').innerHTML = position.coords.latitude;
               };
               function onError(error) {
                   alert("Error" + error.message)
               };
    }
};

app.initialize();
