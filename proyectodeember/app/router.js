import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('personas', function(){
  	this.route('nueva');
 	 this.resource('persona', {path: "/:persona_id"});
  });
  this.route('personas/nueva');
});

export default Router;
