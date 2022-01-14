---
id: 4
title:  "LOL Javascript"
date:   "2014-12-18 18:39:08"
---


Here I'm gonna show you some mad and weird js-examples. `_Enjoy :)`

{% highlight javascript %}
function alert(text) {
    return console.log(text);
}

alert('text');
{% endhighlight %}

{% highlight javascript %}
var console = {
    log: function (text) {
        return alert(text);
    }
};

console.log('text inside');
{% endhighlight %}


{% highlight javascript %}
var bool = false;
if (bool.toString().length !== 4) {
    //
}
{% endhighlight %}


{% highlight javascript %}
var a = NaN;
a === a; // false
a !== a; // true
{% endhighlight %}


{% highlight javascript %}
 (0.1 + 0.2).toFixed(1) === 0.3; // false
+(0.1 + 0.2).toFixed(1) === 0.3; // true
{% endhighlight %}


{% highlight javascript %}
[] + []; // ""
[] + {}; // "[object Object]"
{} + []; // 0
{} + {}; // NaN
[] == ![] // true
{% endhighlight %}


{% highlight javascript %}
typeof null; // object
null instanceof Object; // false
{% endhighlight %}


{% highlight javascript %}
9999999999999999; // 10000000000000000
{% endhighlight %}


{% highlight javascript %}
Math.max() > Math.min(); // false
Math.max() < Math.min(); // true
Math.abs(Math.max()) === Math.min(); // true (thanks God)
{% endhighlight %}


{% highlight javascript %}
localStorage[0] = false;

if (localStorage[0]) {
    console.log('wtf'); // runs?!
}
{% endhighlight %}


{% highlight javascript %}

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

{% endhighlight %}

{% highlight javascript %}
+!+[] // 1
{% endhighlight %}

{% highlight javascript %}
// This is not obviously actually, thus I need to check
// whether "not a number" is not a number
isNaN(NaN)

// Let's check with previous chunk
isNaN(NaN) == +!+[] // true
// NaNNaNNaNNaNNaNNaNa

{% endhighlight %}

{% highlight javascript %}
Number.MAX_VALUE > 0 // true
Number.MIN_VALUE < 0 // false
{% endhighlight %}

{% highlight javascript %}
42.toFixed(2) // Syntax Error
42. toFixed(2) // Syntax Error
42 .toFixed(2) // "42.00"
42 . toFixed(2) // "42.00"
42.0.toFixed(2) // "42.00"
42..toFixed(2) // "42.00"
{% endhighlight %}

{% highlight javascript %}
var s = Symbol("That's cool");
s; // Symbol(that's cool)
String(s); // "Symbol(That's cool)"
s + "" // TypeError
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}


<div class="break-word">
    Check out these links here: <br /> 
    <a href="https://www.destroyallsoftware.com/talks/wat">https://www.destroyallsoftware.com/talks/wat</a><br />
    <a href="http://www.phpied.com/files/location-location/location-location.html">http://www.phpied.com/files/location-location/location-location.html</a><br /> 
    <a href="http://charlieharvey.org.uk/page/javascript_the_weird_parts">http://charlieharvey.org.uk/page/javascript_the_weird_parts</a><br /> 
    <a href="http://wtfjs.com/">http://wtfjs.com/</a><br /> 
    <a href="http://blog.mgechev.com/2013/02/22/javascript-the-weird-parts/">http://blog.mgechev.com/2013/02/22/javascript-the-weird-parts/</a><br /> 
    <a href="https://www.youtube.com/watch?v=2pL28CcEijU">https://www.youtube.com/watch?v=2pL28CcEijU</a><br /> 

</div>
And my goofy [presentation](http://kartamyshev.github.io/js-humor):  

And...  
`Love js )`