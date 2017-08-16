<template>
	<div class="background" id="particles-js"></div>
</template>

<script>
	/* eslint-disable */
	import particleJS from 'particles.js';
	export default{
		mounted(){
			particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 411.29582863770594
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 1.4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 47.34960581453156,
      "color": "#7fb4d2",
      "opacity": 0.6944608852797962,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})
		},
		data(){
			return {

			}
		}
	}
</script>

<style type="text/css">
		.background{
			position: absolute;
			top:0;
			right:0;
			bottom:0;
			left:0;
			z-index:-1;
		  	width: 100%;
		  	height: 100%;
		  	background-repeat: no-repeat;
		  	background-size: cover;
		}
</style>