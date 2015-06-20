# jquery.otherdropdown
A dropdown select box where choosing 'other' prompts the user for an alternate response.

[Examples / Docs](http://jstassen.com)

## Install
* Follow the instructions to install [Bower](http://bower.io/#install-bower).
* Switch to project folder and run `bower install jquery.otherdropdown --save`
* Include `jquery.otherdropdown.js` after jQuery is loaded in your document.

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
* Create `min` builds
* Add tests