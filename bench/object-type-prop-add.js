'use strict'

var benchmark = require('benchmark')
var suite = new benchmark.Suite()
var runs = 0

class MyClass {
  constructor (x) {
    this.x = x
  }
}

function MyCtor (x) {
  this.x = x
}

suite.add('literal', function base () {
  var obj = { x: 1 }
  obj.y = 20
})

suite.add('class', function allNums () {
  var obj = new MyClass(1)
  obj.y = 20
})

suite.add('constructor', function allNums () {
  var obj = new MyCtor(1)
  obj.y = 20
})

suite.on('complete', require('./print'))

suite.run()
