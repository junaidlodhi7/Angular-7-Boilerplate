# Angular 7 tutorial for Route Guards

This project serves as a tutorial on how to use Route guards and how can we make our routes public and protected by using it

## Angular Guard

Angular’s route guards are interfaces which can tell the router whether or not it should allow navigation to a requested route. They make this decision by looking for a `true` or `false` return value from a class which implements the given guard interface.

## How to authenticate each navigation request by Guard