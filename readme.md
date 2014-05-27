# obj

A very tiny library that turns `Object.create()` into a method called `clone`,
where the idea is to use prototypes to structure your systems rather than
something resembling classes and instances:

#### Obj.clone()

```js
var Fruit = Obj.clone()
Fruit.taste = 'sweet'
Fruit.eat = function() {return 'it tasted ' + this.taste}

var Apple = Fruit.clone()
Apple.texture = 'crunchy'
Apple.eat = function() { return Fruit.eat.call(this) + ' and ' + this.texture }

Apple.taste === 'sweet' // true
Apple.eat() // 'it tasted sweet and crunchy'
```

You can optionally pass in the `propertiesObject` to `clone` as described [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

#### Obj.mixin()
There's also a `mixin` method, allowing you to mix another object's properties
into your own object. It will override existing
defined properties.

```js
var Edible = Obj.clone()
Edible.eat = function() {return 'it tasted ' + this.taste}

var Kale = Obj.clone()
Kale.taste = 'bitter'
Kale.mixin(Edible)

Kale.eat() // 'it tasted bitter'
```

#### installation

```sh
component install the-swerve/obj
```

#### compatibility

ie6+

A polyfill is provided for browsers that don't have `Object.create` defined.
