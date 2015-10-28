import Backbone from 'backbone';
import $ from 'jquery';

import contactCollection from './contact_collection';

import homeTemplate from './views/home';
import listTemplate from './views/contact_list';
import contactTemplate from './views/contact';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "showList",
    "/:id" : "showContact",
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.list = new contactCollection();

    let router = this;

    this.$el.on('click', '.user-list-item', function(event) {
      let $li = $(event.currentTarget);
      var userId = $li.data('user-Id');
      router.navigate(`list/${userId}`);
      router.showContact(userId);
    });
  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showContact: function(userId) {
    let user = this.list.get(userId);

    if (user) {
      this.$el.html( contactTemplate(user.toJSON()) );
    } else {
      let router = this;
      user = this.list.add({objectId: userId});
      this.showSpinner();
      user.fetch().then(function() {
        router.$el.html( contactTemplate(user.toJSON()) );
      });
    }

  },

  showList: function() {
    console.log('show list page');
    
    this.showSpinner();

    var router = this;

    router.list.fetch().then(()=>{

      this.$el.html( listTemplate( this.list.toJSON()) );

    });

  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;