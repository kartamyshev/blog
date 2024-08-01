---
id: 1
title:  "My thoughts on Tailwind CSS"
published: true
date:   "2024-07-22 13:12:09"
---

[Tailwind CSS](https://tailwindcss.com) is an amazing set of tools, including autocompletion, built-in wide used classnames and mixins etc, developed by talented people. This comes, however, with a great cost. It adds another layer of complexity on the top of frontend development process which is already overly complicated.




Let's take a look at **advantages**:
- Faster development (after certain time).
- No need to switch between layout and style files.
- No (or almost no) cascades.
- Developing design systems is a breath of fresh air. 
- No need to create omnipresent classes and mixins, same for every project. Good bye `sass`, `less` and alike.
- Amazing error handling and autocompletion.
- Unified developer-designer communication, everyone speaks the same language.

Context switching is hard. Having css in the same place as html is good in this regard.  
We don't have to search for global css rules/mixins/variables all over the place. [Config file](https://tailwindcss.com/docs/configuration) is the only entrypoint.  
Often used styles are grouped and named clearly with meaningful defaults.  
There's not much to add to the strengths as they are pretty obvious and non negotiable.

Here are my subjective **weaknesses**: 

- Many CSS classes written in one line, each responsible for one or more property, can grow uncontrollably. 
Sometimes they don't fit the screen.
  
  So, instead of regular 
  ```css
    .chat-notification {
        display: flex;
        align-items: center;
        max-width: 24rem;
        margin: 0 auto;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background-color: #fff;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  ```
  we're doing
  ```html
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4" />
  ```
    This can be fixed by creating specfic class in configuration file (whichever the syntax is)

  ```js
    module.exports = {
        theme: {
            chatNotification: {
                // ...rules
            },
        },
    };
  ```

  but then there is no difference with moving all rules under one classname in css file. 

- If we move tailwind classes outside of html layout, autocompletion and tailwind error handling is lost.  
    Example:
    ```jsx
    // All good

    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4" />
    ```  

    
    ```jsx
    // Error prone, so it's easy to mistype

    const getClassNames = (options) => "p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4";
    <div className={getClassNames(options)} />
    ```  
- There are over 500 individual properties defined in CSS, it's hardly ever possible to remember syntax of subset of them, not talking about tailwind "versions". You can get used to searching in tailwind documentation, but that doesn't seem that natural as searching for native syntax (sometimes takes twice as much time).

- Tailwind CSS doesn't usually add much CSS knowledge to the people using it.  
And the derivation - a lot of CSS features, like grid, `:is`, `:where`, `:has` and [many others](https://developer.chrome.com/blog/new-in-web-ui-io-2024) are either hidden, abandoned or simply left behind the scenes.

I would like to focus on the last point more closely here.

I understand that cascades, inheritence, prioritization are complicated.
There are lots of rules, sometimes inconsistent, sometimes just difficult to comprehend because of various reasons.
There is no error handling - you forget to add semicolon and you get a blank screen. Not nice.

Historically CSS was never complete and was always behind business and subsequently designer needs. 
Maybe exactly designers were the ones who pushed specifications the most for better. 

But please name at least one technology that is perfect? There is none.
CSS is almost perfect for styling web pages. I don't think it's ever possible to find more concise and expressive way for the language to describe how something should look like. Probably `yaml` would do better. But something similar can be easily achieved with [stylus](https://stylus-lang.com) (no advert) - awesome tool in its time, clearly an underdog among css preprocessors.

Tailwind doesn't make a person a better developer. It makes person somewhat faster developer.
This isn't the same. I consider utility approach taken by tailwind team harmful for the industry.
Since `tailwind` became a standart, we probably don't even understand that bloated html is only top of the iceberg.
I wouldn't even mention separation of concerns here. Stating this makes me too conservative which I am not.

It seems like we're trying to write styles anywhere but where they belong to - css in js, jss, html etc.
The only important parameter is development speed whatever other tradeoffs are. 

There is literally one big downside in not using tailwind these days - maintaining separate css files. This is a big issue for developers incuding myself. Mostly because time is money. Tools are important. 

### Conclusion

Cascades are complicated. Writing maintainable CSS is complicated. If we join this with
CSS not even considered a proper language to make fun of - we get unmaintainable CSS.

Tailwind will evolve. Maybe it will be replaced by even better similar tool.  
But CSS will always be one step ahead. Utility first libraries are a thing of present.
It's not a thing of the future.

Unlike good javascript frameworks that pushed native browser/javascript APIs for better, tailwind will have nothing to do with future of CSS and won't affect it.