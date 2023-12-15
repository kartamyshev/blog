---
id: 4
title:  "LOL Javascript"
published: false
date:   "2014-12-18 18:39:08"
---


Here I'm gonna show you some mad and weird js-examples. `_Enjoy :)`

```js
function alert(text) {
    return console.log(text);
}

alert('text');
```

```js
var console = {
    log: function (text) {
        return alert(text);
    }
};

console.log('text inside');
```


```js
var bool = false;
if (bool.toString().length !== 4) {
    //
}
```


```js
var a = NaN;
a === a; // false
a !== a; // true
```


```js
 (0.1 + 0.2).toFixed(1) === 0.3; // false
+(0.1 + 0.2).toFixed(1) === 0.3; // true
```


```js
[] + []; // ""
[] + {}; // "[object Object]"
{} + []; // 0
{} + {}; // NaN
[] == ![] // true
```


```js
typeof null; // object
null instanceof Object; // false
```


```js
9999999999999999; // 10000000000000000
```


```js
Math.max() > Math.min(); // false
Math.max() < Math.min(); // true
Math.abs(Math.max()) === Math.min(); // true (thanks God)
```


```js
localStorage[0] = false;

if (localStorage[0]) {
    console.log('wtf'); // runs?!
}
```



```js
<div id="someId"></div>

<script>
    console.log(someId.id) // --> someId
    console.log(window.someId.id) // --> someId

    console.log('someId' in window) // true


    var present = false;


    for (var i in window) {
        if (i === 'someId') {
            present = true;
        }
    }
    console.log(present); // false (??!) wtf
</script>
```

```js
+!+[] // 1
```

```js
// This is not obviously actually, thus I need to check
// whether "not a number" is not a number
isNaN(NaN)

// Let's check with previous chunk
isNaN(NaN) == +!+[] // true
// NaNNaNNaNNaNNaNNaNa

```

```js
Number.MAX_VALUE > 0 // true
Number.MIN_VALUE < 0 // false
```

```js
42.toFixed(2) // Syntax Error
42. toFixed(2) // Syntax Error
42 .toFixed(2) // "42.00"
42 . toFixed(2) // "42.00"
42.0.toFixed(2) // "42.00"
42..toFixed(2) // "42.00"
```

```js
var s = Symbol("That's cool");
s; // Symbol(that's cool)
String(s); // "Symbol(That's cool)"
s + "" // TypeError
```

```js
switch(42) {
  default:
    console.log('yep');
  case 10:
  case 20:
    console.log('oops');
    break;
  case 30:
    console.log('nope');
    break;
}

// yep
// oops
```

Check out these links here:  
[https://www.destroyallsoftware.com/talks/wat](https://www.destroyallsoftware.com/talks/wat)  
[http://www.phpied.com/files/location-location/location-location.html](http://www.phpied.com/files/location-location/location-location.html)  
[http://charlieharvey.org.uk/page/javascript_the_weird_parts](http://charlieharvey.org.uk/page/javascript_the_weird_parts)  
[http://wtfjs.com/](http://wtfjs.com/)  
[http://blog.mgechev.com/2013/02/22/javascript-the-weird-parts/](http://blog.mgechev.com/2013/02/22/javascript-the-weird-parts/)  
[https://www.youtube.com/watch?v=2pL28CcEijU](https://www.youtube.com/watch?v=2pL28CcEijU)

And my goofy [presentation](http://kartamyshev.github.io/js-humor):

And...
`Love js )`
