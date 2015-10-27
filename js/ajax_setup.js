import $ from 'jquery';

const APP_ID = 'ITqpiqj3kSSimPxJhoFJEDaEs7GNUQ4HldoKnWHw';
const API_KEY = 'p9rsvcp3YtEB67185YLNkvhdehX2bVhNNa52AxpD';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});