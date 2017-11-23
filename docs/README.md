# jquery.otherdropdown
A dropdown select box where choosing 'other' prompts the user for an alternate response.

![alt tag](https://raw.github.com/TheBox193/jquery.otherdropdown/master/screenshot.png)

* [Examples / Docs](http://otherdropdown.code.jstassen.com/)
* [Github](https://github.com/TheBox193/jquery.otherdropdown)
* [NPM Stats](http://npm-stat.com/charts.html?package=jquery.otherdropdown)

## Install

### NPM
* Follow the instructions to install [Node](https://nodejs.org/download/) which gives you npm.
* Switch to project folder and run `yarn add jquery.otherdropdown` or `npm install jquery.otherdropdown --save`
* Include `jquery.otherdropdown.js` after jQuery is loaded in your document.

### Bower
* Follow the instructions to install [Bower](http://bower.io/#install-bower).
* Switch to project folder and run `bower install jquery.otherdropdown --save`
* Include `jquery.otherdropdown.js` after jQuery is loaded in your document.

### Add to project
* `import 'jquery.otherdropdown';`
or
* `<script type="text/javascript" src="./path/to/jquery.otherdropdown.min.js"></script>` after the jQuery script tag

## Usage
* Bind jquery.otherdropdown to an html select, optionally pass an `options` object
* `$('select').otherdropdown()`
* `$('.mySelect').otherdropdown({placeholder:'Type your answer'})`

## Options
You can pass in options to otherdropdown as an object.

* `{value: 'more'}` - Optional, Value you wish to trigger the text input. `default = 'other'`
* `{classes: 'noborder greybg'}` - Optional, clases that the text input should have. `default = null`
* `{placeholder: 'Type your answer'}` - Optional, placeholder text on text input. `default = name`

## Future
* Add Callbacks hooks
* Add tests
