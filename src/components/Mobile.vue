
  <template>
    <v-ons-page>
      <div class="background"></div>
      <div class="content">
          <div class="screen-area">
           <!--  <h4> Hello world </h4> -->      <starry-sky></starry-sky>
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
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, rgba(36, 59, 85, 90%), #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, rgba(36, 59, 85, 92%), #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .image-svg{
    z-index: -1 
  }
  .screen-area{
    padding : 100px;
    color : white;
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
import Earth1 from '@/components/Earth1';
import Tree1 from '@/components/Tree';
import Wolf from '@/components/Wolf';
import Moon from '@/components/Moon';
import Particles from '@/components/Particles';

export default {
  data() {
    return {
    };
  },
  components: {
    'earth-front': Earth1,
    'earth-tree': Tree1,
    'wolf-animal': Wolf,
    'moon-sky': Moon,
    'starry-sky': Particles,
  },
};
</script>
</body>
</html>