import Backbone from 'backbone';

let ContactCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/Todo',

  parse: function(data) {
    return data.results;
  }

});

export default ContactCollection;