import DS from 'ember-data';



export default DS.Model.extend({
  id:DS.attr(),
  age: DS.attr(),
  producer: DS.attr(),
  image: DS.attr()

});
