---
id: 1
title:  "My thoughts on Tailwind CSS"
published: true
date:   "2024-07-22 13:12:09"
---

This is an amazing set of tools, including autocompletion, built-in wide used classnames and mixins etc, developed by talented people. This comes, however, with a great cost. [Tailwind CSS](https://tailwindcss.com) adds another layer of complexity on the top of frontend development process which is already quite complex.

---

Let's take a look at **Advantages**:
- Faster, comparing to maintaining native CSS, development.
- No need to switch between layout and style files.
- No (or almost no) cascades.
- Developing design systems is a breath of fresh air. 
- No need to create omnipresent classes and mixins (same for every project). Good bye `sass`, `less` and alike.
- Amazing error handling and autocompletion.

---

There's not much to add to the strengths as they are pretty obvious and non negotiable. 
I will focus only on one **weakness** which is: 

- Tailwind CSS doesn't usually add much CSS knowledge to the people using it.

---

And the derivation - a lot of CSS features, like grid, `:is`, `:where`, `:has` and many others are either hidden, abandoned or simply left behind the scenes.

I understand that cascades, inheritence, prioritization are complicated.
There are a lot of rules, sometimes inconsistent, sometimes just difficult to understand because of various reasons.
There is no error handling, you forget to add a semicolon and you get a blank screen. Not nice.

Historically CSS was never complete and was always behind business and subsequently designer needs. 
Maybe exactly designers were the ones who pushed specifications the most for better. 

But please name at least one technology that is perfect? There is none.
CSS is almost perfect for styling web pages. I don't think it's ever possible to find more laconical way for the language to describe how something should look like. Probably `yaml` would do better. But something similar can be easily achieved with [stylus](https://stylus-lang.com) (no advert) which was amazing tool at a time, clearly an underdog between css preprocessors.

Tailwind doesn't make person a better developer. It makes person somewhat faster developer.
This isn't the same. I consider utility approach taken by tailwind team harmful for the industry.
Since `tailwind` became a standart, we probably even don't understand that bloated html is top of the iceberg.
I wouldn't even mention separation of concerns here. Stating this makes me conservative dinosaur which I hope I am not.

There is literally one downside in not using tailwind these days - maintaining separate css files. This is a big issue for developers incuding myself. Mostly because time is money. Tools are important. 

### Conclusion:

Cascades are complicated. Writing maintainable CSS is complicated. If we join this with
CSS not even considered a proper language to make fun of - we get unmaintainable CSS.

Tailwind will evolve. Maybe it will be replaced by even better similar tool.  
But CSS will always be one step ahead. Utility first libraries are a thing of present.
It's not a thing of the future.

Unlike good javascript frameworks that pushed native browser/javascript APIs for better, tailwind will have nothing to do with future of CSS and won't affect it.