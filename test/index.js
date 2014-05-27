var assert = require('assert')
var Obj = require ('obj')

describe('obj', function() {

	it ('clones objects', function(){
		var Parent = Obj.clone()
		var Child = Parent.clone()
		for (var prop in Child) assert(Obj[prop] === Parent[prop] && Parent[prop] === Child[prop])
	})

	it ('mixes objects', function(){
		var Mixer = Obj.clone()
		Mixer.x = 'x'
		var Mixed = Obj.clone().mixin(Mixer)
		assert(Mixed.x === 'x')
	})

})
