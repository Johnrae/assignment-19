import Backbone from 'backbone';
import $ from 'jquery';
import ContactCollection from './contact_collection';

import listTemp from './views/contact_list';
import singleTemp from './views/contact';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "showContacts",
    "contact/:id" : "showSingleContact",
    "about" : "showAbout"
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.users = new ContactCollection();

    let router = this;

    this.$el.on('click', '.clickable', function(event){
      let $li= $(event.currentTarget);
      var userId = $li.data('user-id');
      console.log('show me the money', userId);
      router.navigate(`list/${userId}`, {trigger: true});
      router.showSpecificContact()

    });
  },

  home: function() {
    console.log('show home page');
    this.$el.html( listTemp() );
  },

  showSpecificContact: function(userId){
    let user = this.users.get(userId);
    if (user) {
      this.$el.html( listTemp(users.toJSON()));
    } else {
      let router = this;
      user = this.users.add({objectId: userId});
      this.showSpinner();
      user.fetch().then(function(){
        router.$el.html( listTemp(user.toJSON))
      })
    }
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

    this.users.fetch().then(()=>{

      this.$el.html( singleTemp(this.users.toJSON()) );

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