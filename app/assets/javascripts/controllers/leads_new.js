App.LeadsNewController = Ember.Controller.extend({
  
  setupController: function (controller) {
    controller.set('showError', false);
  },

  actions: {

    createLead: function () {
      var self = this;
      var fields = this.get('fields');

      if (App.Lead.valid(fields)) {
        var lead = this.store.createRecord('lead', this.get('fields'));

        lead.save().then(function () {
          self.transitionToRoute('lead', lead);
        });

      } else {

        this.set('showError', true);
      
      }
    }

  }

});
