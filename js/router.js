import Backbone from 'backbone';

import ContactCollection from './contact_collection';

import listTemp from './views/contact_list';
import singleTemp from './views/contact';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "todos" : "showContacts",
    "contact/:id" : "showSingleContact",
    "about" : "showAbout"
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.todos = new TodosCollection();
  },

  home: function() {
    console.log('show home page');
    this.$el.html( listTemp() );
  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showSingleContact: function(todoId) {
    console.log('should show', todoId);
  },

  showContacts: function() {
    console.log('show contacts page');
    
    this.showSpinner();

    this.todos.fetch().then(()=>{

      this.$el.html( singleTemp(this.todos.toJSON()) );

    });

  },

  showAbout: function() {
    console.log('show about page');
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;