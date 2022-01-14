---
id: 20
title:  "Быстрый старт нового приложения на React с использованием nwb"
date:   "2016-03-19 03:13:23"
---

Оригинал [здесь](https://medium.com/@dtinth/quickly-start-a-new-react-application-using-nwb-334db59691d9#.kg7qhz6sj).  
[Перевод](https://habrahabr.ru/post/279513/).

Написав несколько приложений на React, теперь уже довольно скучно каждый раз начинать всё сначала. 
Мне нужно настроить webpack, webpack-dev-server, Babel с некоторыми пресетами и плагинами, Karma, React, 
несколько лоадеров для JSON, CSS, картинок и шрифтов – и объединить всё это вместе.

Альтернативой мог бы стать boilerplate, но многие из них содержат в себе кучу всего ненужного 
(роутер, Redux или сервер сайд рендеринг) и не покрывают некоторые нужные мне вещи 
(CSS-лоадеры, unit тестирование и т.д.). Не говоря уже о том, что разные проекты требуют различной конфигурации.

Сегодня всё действительно быстро меняется и boilerplate устаревает достаточно быстро. 
После того, как вы создали приложение с использованием boilerplate, на вас ложится 
ответственность содержать все зависимости в актуальном состоянии. Я обновлял 
зависимости для нескольких проектов и это требует довольно много туповатой, повторяющейся работы.

Теперь я предпочитаю использовать [nwb](https://github.com/insin/nwb).

**Шаг 1**. Устанавливаем nwb.

{% highlight javascript %}
$ npm install -g nwb
{% endhighlight %}

**Шаг 2**. Используем команду nwb для создания нового приложения на React.

{% highlight javascript %}
$ nwb new react-app scoreboard
{% endhighlight %}

**Шаг 3**. Заглядываем внутрь.


{% highlight javascript %}
$ cd scoreboard

$ ls
README.md     nwb.config.js   public   tests
node_modules  package.json    src
{% endhighlight %}

Здесь нет ни **webpack.config.js**, ни **.babelrc** или **karma.conf.js**. 
Все настройки в **nwb.config.js**. Так что давайте посмотрим.

{% highlight javascript %}
$ cat nwb.config.js

module.exports = { type: 'react-app' }
{% endhighlight %}

Конфигурация минимальна! Нам только нужно указать, что мы разрабатываем React-приложение 
и разумные настройки по умолчанию будут созданы.

**package.json**

{% highlight javascript %}
$ cat package.json

{
  "name": "scoreboard",
  "version": "1.0.0",
  "description": "Describe scoreboard here",
  "private": true,
  "scripts": {
    "build": "nwb build",
    "clean": "nwb clean",
    "start": "nwb serve",
    "test": "nwb test"
  },
  "dependencies": {
    "react": "0.14.x",
    "react-dom": "0.14.x"
  },
  "devDependencies": {
    "nwb": "0.7.x"
  },
  "author": "",
  "license": "MIT",
  "repository": ""
}
{% endhighlight %}

Всё, что у нас в dependencies – это **react** и **react-dom**.  
В devDependencies только **nwb**. Ни webpack, ни Karma или Babel – всё это менеджится nwb. 
Сам по себе nwb содержит много тестов, чтобы быть уверенным, что все эти вещи вместе работают согласованно.

Шаг 4. Запускаем сервер.

{% highlight javascript %}
$ npm start -- --auto-install

[...]
nwb: serve-react-app
nwb: dev server listening at http://localhost:3001
webpack built a98e92c8c4d34bae8856 in 2791ms
{% endhighlight %}

Это запустит webpack-dev-server.  
Попробуйте поменять файлы. Вы увидите, что webpack и Babel уже настроены для hot-reload React-компонентов.
Попробуйте заимпортить какой-нибудь npm-модуль, например:

{% highlight javascript %}
import Rx from ‘rx’
{% endhighlight %}

Благодаря флагу *--auto-install* при сохранении файла установятся отсутствующие зависимости и добавятся в **package.json**.
Создайте и заимпортите CSS-файл. Webpack уже сконфигурирован и содержит правильный loader и autoprefixer.
Настройка всего этого вручную заняла бы много времени.

**Шаг 5**. Запускаем тесты.

{% highlight javascript %}
$ npm test -- --server --coverage

[...]
SUMMARY:
√ 1 test completed
{% endhighlight %}

Это запустит Karma, интергрированную с webpack и измерением покрытия тестов.  
С флагом *--server* тесты перезапускаются, когда вы сохраняете файл.  
С флагом *--coverage* будет создан репорт. Вы можете установить плагин для редактора, чтобы видеть, какие строки покрыты тестами, а какие – нет.

<img src="https://habrastorage.org/getpro/habr/post_images/a7a/b5d/61d/a7ab5d61d4c69898955d250435c31a59.png" />

Наконец, запускаем

{% highlight javascript %}
$ npm run build
{% endhighlight %}

Данная команда сгенерирует статические ассеты. JavaScript и CSS из **node_modules** пойдут в **vendor.js** 
и **vendor.css**, тогда как код приложения – в **app.js** и **app.css**. Source maps создадутся в отдельном файле **.map**. 
Можете потом загрузить их на ваш вэб-сервер.

Я использовал nwb в нескольких проектах.  
[wonderstudio](https://medium.com/@dtinth/introducing-wonderstudio-db3d6755ca97#.k9jqztvus) с более ранней версией nwb.  
В то время как конфигурация в nwb несколько ограничена, хотя это работает на 90% из коробки,
мне нужно сделать хотфикс, чтобы конфигурировать webpack так, как мне хочется.  
Автор nwb выразил свои намерения в [обеспечении большей гибкости в конфигурации](https://twitter.com/jbscript/status/704943199425568769).

Несколько последних написанных мной библиотек также используют nwb (например [redux-send](https://github.com/dtinth/redux-send) и [ave](https://github.com/taskworld/ave)). 
Он может генерировать UMD, CommonJS и ES6 версии модулей. 

Как видите, nwb можно использовать также для разработки, тестирования и 
билдов вэб-приложений и библиотек на чистом JS или React-компонентов.

На момент написания nwb использует Babel 5, но мне предстоит ещё поискать инструмент, 
который настолько же хорошо выглядит и протестирован, как nwb. Встроенная поддержка 
unit-тестирования делает его для меня предпочительней других :D