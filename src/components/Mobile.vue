
  <template>
    <v-ons-page>
      <div class="background"></div>
      <div class="content">
          <div class="screen-area">
           <div v-if="$ons.platform.isAndroid()">
             <div class="screen-title" id="temperature"></div>
             <div id="DeviceReady"></div>
             <div id="area"></div></br>
             <div class="gps" id="DeviceGPSReady">
             </div>
             <v-ons-button id="RefreshButton">Refresh</v-ons-button>
          </div>
          <div v-else>
            You are running in browser version. <br>Please running application via Android / iOS
          </div>
           <starry-sky></starry-sky>
          </div>
          <footer>
            <div class="image-svg">
              <moon-sky style="position : absolute"></moon-sky>
              <wolf-animal style="position : absolute"></wolf-animal>
              <earth-tree style="position: absolute"></earth-tree>
              <earth-front></earth-front>
              <earth-middle></earth-middle>
            </div>
          </footer>
      </div>
    </v-ons-page>
  </template>
<style scoped>
  .background{
  background-color: #141E30;
  background-image: linear-gradient(bottom, #243b55 50%, #141E30 100%);
  background-image: -ms-linear-gradient(bottom, #243b55 50%, #141E30 90%);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0,#243b55),
    color-stop(0.70, #141E30)
    );
  }
  .image-svg{
    z-index: -1;
  }
  .gps{
    padding: 100px;
  }
  .footer-text{
    position: absolute;
  }
  .screen-area{
    text-align: center;
    padding : 100px;
    color : white;
  }
  .screen-title{
    font-size : 48px;
  }
  footer{
    z-index: -1;
    padding: 0px;
    margin : 0;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }
</style>

<script>
/* eslint-disable */
import Earth1 from '@/components/Earth1';
import Tree1 from '@/components/Tree';
import Wolf from '@/components/Wolf';
import Moon from '@/components/Moon';
import Particles from '@/components/Particles';
import Request from 'request'
// import Connection from '@/cordova/config';
export default {
  data() {
    return {
      message : ''
    };
  },
  components: {
    'earth-front': Earth1,
    'earth-tree': Tree1,
    'wolf-animal': Wolf,
    'moon-sky': Moon,
    'starry-sky': Particles,
  },
  created (){
    // this.GetTemperature()
  },
  methods : {
    // GetTemperature(){
    //   var UpdatedMessage = this
    //   Request('http://api.openweathermap.org/data/2.5/find?q=Jakarta&units=metric&appid=37fb76524a5e32930e1380a8adb5f5b0', function(err, response, body){
    //     return UpdatedMessage.message = JSON.parse(body).list[0].main.temp
    //     })
    //   }
    }
  };
</script>
</body>
</html>