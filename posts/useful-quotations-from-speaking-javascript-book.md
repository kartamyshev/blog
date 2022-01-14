---
id: 11
title:  "Useful quotations from \"Speaking Javascript\" book "
date:   "2015-03-22 09:46:42"
---

### The history of typeof null

> The [first JavaScript engine](http://mxr.mozilla.org/classic/source/js/src/jsapi.h)
> represented JavaScript values as 32-bit words.
> The lowest 3 bits of such a word were used as a type tag, to indicate whether
> the value was an object, an integer, a double, a string, or a boolean
> (as you can see, even this early engine already stored numbers as integers if possible).
>
> The type tag for objects was 000. In order to represent the value null, the engine used the
> machine language NULL pointer, a word where all bits are zero. typeof checked the
> type tag to determine the type of value, which is why it reported null to be an object.



### History: Why are objects always truthy?

> The conversion to boolean is different for historic reasons. For ECMAScript 1,
> it was decided to not enable objects to configure that conversion (e.g., via a toBoolean() method).
> The rationale was that the boolean operators || and && preserve the values of their operands.
> Therefore, if you chain those operators, the same value may be checked multiple times for
> truthiness or falsiness. Such checks are cheap for primitives, but would be costly for
> objects if they were able to configure their conversion to boolean. ECMAScript
> 1 avoided that cost by making objects always truthy.