import Ember from 'ember';
	
	var whisks =[{
	id:1,
	names: '12YO Regal',
	age: 12,
	producer: 'Chivas',
	image:'https://img.thewhiskyexchange.com/900/blend_chi55.jpg'},
	{id:2,
	names: 'Bushmills Irish Honey',
	age: 10,
	producer: 'Bushmills',
	image:'https://img.thewhiskyexchange.com/540/irish_bus1.jpg'},
	{id:3,
	names:'Wild Turkey 81',
	age: 10,
	producer: 'Wild Turkey',
	image:'http://cdn2.bigcommerce.com/server5500/tpbc2s65/products/3018/images/3117/wildturkey_kentuckyspirit_singlebarrel750__06199.1363798933.1280.1280.jpg?c=2'
	}	];




export default Ember.Route.extend({
model: function(){ return whisks; }
});