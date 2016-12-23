import Ember from 'ember';

var whisks = [{
	id:1,
	names: 'Cornish Rex',
	age: 12,
	producer: 'special haired',
	image:'http://www.yourcat.co.uk/images/catimages/Breed_CornishRex/cornish1.jpg'},
	{id:2,
	names: 'Ragdoll',
	age: 10,
	producer: 'Longhaired',
	image:'http://ragdollkittenscats.com/portals/0/ragdoll%20kittens/Seal%20Bicolor%20Ragdoll%20Cat.png'},
	{id:3,
	names:'Scotish Fold',
	age: 10,
	producer: 'special haired',
	image:'https://s-media-cache-ak0.pinimg.com/236x/09/0e/1a/090e1a865716e97ebb1f6c465c3f5aa6.jpg'},
	{id:4,
	names:'Russian Blue',
	age: 10,
	producer: 'Short haired',
	image:'https://s-media-cache-ak0.pinimg.com/236x/d9/f2/c1/d9f2c19cc6ae1e024a136e60eb9c27d3.jpg'
	}	];

/*
Ember.Handlebars.helper('autocomplete', Ember.View.extend({
  templateName: 'controls/autocomplete',
  
  filteredList: function() {
    var list = this.get('whisks'),
        filter = this.get('filter');

    if (!filter) { return list; }
    
    return list.filter(function(item) {
      return item.name.indexOf(filter) !== -1;
    });
  }.property('list.@each', 'filter')
}));

*/
export default Ember.Route.extend({
model: function(){ return whisks; }
});
