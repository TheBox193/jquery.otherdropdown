/**
 * @name jquery.otherdropdown
 * @description A small jQuery plugin to support a text area when selecting an 'Other' option in a dropdown
 * @version 1.0.0
 * @author Jonathan Stassen <jstassen.com>
 * @see https://github.com/TheBox193/Other-Option
 */
$.fn.otherDropdown = function(options) {
	var $this = this;
	// Allow a different name/value to trigger, default to 'other'
	var opts = $.extend({}, {value: 'other'}, options);
	opts.name_lower = opts.value.toLowerCase();
	opts.name_upper = opts.value.charAt(0).toUpperCase() + opts.value.slice(1);
	opts.placeholder = opts.placeholder || opts.name_upper;

	// Prepare our text input
	var $textInput = $('<input type="text" class="otherdropdown" placeholder="' + opts.placeholder + '" />');

	// Allow custom classes on the text input
	if (opts.classes) {
		$textInput.addClass(opts.classes);
	}

	// Bind to all change events
	$this.change(function(ev){

		// Swap in the text area if our 'other' option was chosen
		if (this.value === opts.name_lower || this.value === opts.name_upper) {
			$this.hide().after($textInput);
			$textInput.focus();
			bindInputBlur();
		}
	});
	
	// Bind to blur to swap back to select dropdown
	var bindInputBlur = function() {
		$textInput.blur( function(ev) {

			// If something was typed, create a new option with that value
			if (this.value !== opts.name_lower && this.value !== opts.name_upper && this.value !== '') {
				var $val = $('<option>' + this.value + '</option>');
				$this.append($val);
				$val.attr('selected', 'selected');
			}
			$textInput.remove();
			$this.show();
		});
	};

	// TODO
	// var doCallback = function(name) {
	// 	if ( opts[name] ) {
	// 		opts[name]();
	// 	}
	// };
};