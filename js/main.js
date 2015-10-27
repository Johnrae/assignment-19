import $ from 'jquery';
import Router from './router';

import './ajax_setup';

var appElement = $('.app');

var router = new Router(appElement);
router.start();

console.log('Hello, World');