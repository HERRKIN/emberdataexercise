import DS from 'ember-data';

export default DS.Model.extend({
	cedula:DS.attr('string'),
	nombre:DS.attr('string'),
	apellido:DS.attr('string')
});
