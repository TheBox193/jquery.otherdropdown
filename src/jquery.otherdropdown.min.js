/**
 * @license
 * @name jquery.otherdropdown
 * @description A small jQuery plugin to support a text area when selecting an 'Other' option in a dropdown
 * @version 1.1.2
 * @author Jonathan Stassen <jstassen.com>
 * @see https://github.com/TheBox193/jquery.otherdropdown
 */
$.fn.otherDropdown=function(e){var a=this,l=$.extend({},{value:"other"},e);l.name_lower=l.value.toLowerCase(),l.name_upper=l.value.charAt(0).toUpperCase()+l.value.slice(1),l.placeholder=l.placeholder||l.name_upper,a.change(function(e){(this.value===l.name_lower||this.value===l.name_upper)&&(a.hide().after(r),r.focus())});var r=$('<input type="text" class="otherdropdown" placeholder="'+l.placeholder+'" />');l.classes&&r.addClass(l.classes),r.blur(function(e){var r=this.value;if(this.value="",this.remove(),a.show(),""!==r&&r!==l.name_lower&&r!==l.name_upper){var o=a.children('[value="'+r+'"]');if(o.length<1){var n=$('<option value="'+r+'">'+r+"</option>");a.append(n)}a.val(r)}})};