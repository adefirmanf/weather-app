/* eslint-disable */
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Mobile from '@/components/Mobile';

import VueOnsen from 'vue-onsenui'
Vue.use(VueOnsen);

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path : '/mobile',
      name : 'Mobile',
      component : Mobile
	}
    
  ],
});
