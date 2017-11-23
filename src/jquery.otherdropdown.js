/**
 * @license
 * @name jquery.otherdropdown
 * @description A small jQuery plugin to support a text area when selecting an 'Other' option in a dropdown
 * @version 1.2.2
 * @author Jonathan Stassen <jstassen.com>
 * @see https://github.com/TheBox193/jquery.otherdropdown
 */
;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	'use strict';
	$.fn.otherDropdown = function(options) {
		var $this = this;
		// Allow a different name/value to trigger, default to 'other'
		var opts = $.extend({}, {value: 'other', placeholder: options.value || 'Other'}, options);
		opts.name_lower = opts.value.toLowerCase();

		// Prepare text input
		var $textInput = $('<input type="text" class="otherdropdown '+opts.classes+'" placeholder="' + opts.placeholder + '" />');

		// Bind to all change events to swap in the text area if 'other' option was chosen
		$this.change( function(ev){
			if (this.value.toLowerCase() === opts.name_lower) {
				$this.hide().after( $textInput );
				$textInput.focus();
			}
		});

		// Bind to blur to swap back to select dropdown
		$textInput.blur( function(ev) {
			var value = this.value;
			this.value = '';
			this.remove();
			$this.show();

			if (value === '' || this.value.toLowerCase() === opts.name_lower) {
				return;
			}

			// Create a new option with that value
			var $searchedOption = $this.children('[value="' + value + '"]');

			// If value doesn't exist, added it.
			if ( $searchedOption.length < 1 ) {
				var $option = $('<option value="' + value + '">' + value + '</option>');
				$this.append($option);
			}

			// Focus the value
			$this.val( value );
		});

		// TODO
		// var doCallback = function(name) {
		// 	if ( opts[name] ) {
		// 		opts[name]();
		// 	}
		// };
	};

}));