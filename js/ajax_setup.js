import $ from 'jquery';

const APP_ID = 'mmoMgOQzCeRE8Ad4vmRkHMLYyTwEPPrAGXMEfDFm';
const API_KEY = 'xvocUSdI55mrUV7m7fb0ylyXO2kQ6EML2mlBDEoY';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});