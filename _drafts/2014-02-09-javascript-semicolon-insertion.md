---
layout: post
title: JavaScript Semicolon Insertion Demystified
teaser: The official explanation of how javascript handles semicolon insertion can be pretty confusing. Here's
 a brief explanation that hopefully states things clearly.
category: blog
tags: [javascript, code, tips & tricks]
---

According to the ECMAScript standards,
http://www.ecma-international.org/ecma-262/5.1/#sec-7.9


-----
var Super = function(args){ 
	this.prop = args;
};

Super.prototype.func = function(){ };

var Sub = function(args){
	// inherit instance properties of superclass
    Super.call(this, args);
};

// Add Super prototype chain to Sub
Sub.prototype = Object.create( Super.prototype );

var subby = new Sub();

Test:
var isPrototype = Object.getPrototypeOf( subby ) === Super.prototype;
Will isPrototype be true or false?

Surprisingly, the answer is false. Weird, since Object.create() creates a new object with the specified prototype object. 

What's going on?

According to MDN, the Object.getPrototypeOf() method returns the prototype (i.e. the internal [[Prototype]]) of the specified object. The test above fails because the internal [[Prototype]] of subby isn't Super.prototype, it's Sub.prototype:

Object.getPrototypeOf( subby ) === Sub.prototype; // true

However, this doesn't mean that Super.prototype isn't in subby's prototype chain — it is. 

Super.prototype.isPrototypeOf(subby); // returns true, as expected.

The point is that getPrototypeOf and isPrototypeOf do fairly distinct things, which is obvious if you think about it:

Object.getPrototypeOf(someObject) is a method of Object, and it tells you the [[prototype]] of an object.

SomeClass.prototype.isPrototypeOf(someObject) is a method of Object.prototype, and it tells you if the receiver object (SomeClass.prototype) is in the prototype chain of the specified object.


