<html>
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
    <script type="text/javascript">
	$.fn.otherDropdown = function(){
		debugger;
		var id = Date.now().toString(),
			$this = $(this).addClass(id+'-dropdown'),
			$textInput = $('<input type="text" placeholder="Other" />').addClass(id+'-text').addClass('form-control');

		this.change(function(ev){
			if (this.value === "other" || this.value === "Other") {
				$this.hide().after($textInput);
				$textInput.focus();
				textInputBlur();
			}
		});
		
		var textInputBlur = function(){ 
				$textInput.blur(function(ev){
				var $val = $("<option>" + this.value + "</option>");
				if (this.value !== "other" && this.value !== "Other" && this.value !== "") {
					$this.append($val);
					$val.attr('selected', 'selected');
				}
				$textInput.remove();
				$this.show();
			});
		};
	};
	$(function() {
		$('.test1').otherDropdown();
		$('.test2').otherDropdown();
	});
    </script>
</head>
<body>
<form id="quoteLong" action="FromOtherReplace.php" name="eval_edit" method="post" format="html">
    <fieldset id="workers_comp_info">
	-This is a demo of a dropdown select box where choosing 'other' prompts the user for an alternate response. The response is then added to the dropdown feild.<br>
	-When other is selected the dropdown is hidden, text field shown. Then the revers happens when input is finished.<br>
	-Works for Multiple dropdown boxes on a page, each is handled uniquely.<br>
	-Tested in Google Chrome and Internet Explorer (IE) 7<br>
		<p>
        <select name="Test-1" class="test1">
		  <option value="">Select One</option>
          <option value="No employees">No employees</option>
          <option value="1-2 employees">1-2 employees</option>
          <option value="Other">Other</option>
        </select>
		</p>

		<p>
        <select name="Test-2" class="test2">
		  <option value="">Select One</option>
          <option value="No employees">No employees</option>
          <option value="1-2 employees">1-2 employees</option>
          <option value="Other">Other</option>
        </select>
		</p>

	  <input class="submit" type="submit" value="Submit" /><br>
	  	Free to use. Written by <a href="http://jStassen.com">Jonathan Stassen</a>

    </fieldset>
	</form>
	<pre>
	<?php
	print_r($_POST);
	?>
</pre>
	
</body>
</html>
