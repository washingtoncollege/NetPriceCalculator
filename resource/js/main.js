/**
 * Created by jasontll on 3/22/17.
 */
"use strict";

import Vue from 'vue';
import EfcCalculator from './EfcCalculator';

let efcCalculator = new EfcCalculator();
window._ = require('lodash');

import Calculator from './components/Calculator.vue';

new Vue({
    el: '#app',
    components: {
        Calculator,
    },
    mounted(){
        "use strict";
    }
});