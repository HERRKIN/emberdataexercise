import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['personas'],
	  actions: {
	    creapersona: function() {
	      var persona = this.get('model'),
	        	persona = this.store.createRecord('persona', model);
	      	persona.save()
	      	.then(function() {
	       	 this.transitionToRoute('persona', persona);
	      }.bind(this));
	    }
	  }
});
