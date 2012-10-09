<html>
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
    <script type="text/javascript">
        $(function(){
            $(".otherTextInput").hide(); 								//initially hide the textbox
            $('.otherActivate').change(function() {						//when a change is made to a dropdown with the "other" option..
              if($(this).find('option:selected').val() == "Other"){		//check if the "Other" was selected..
				var where = $(this).attr("name");
                $('select[name="'+where+'"]').hide(); 					//hide the dropdown
				where += "-otherTextInput";
				$('input[name="'+where+'"]').show().focus();			//show and focus the textinput
              }else{ $(".otherTextInput").hide();}						//can never be to sure..
            });
			$(".otherTextInput").blur(function(){						//if done with the "Other" text feild...
				//var othersOption = $(this).find('option:selected'); 	//--Old: get the currently selected option
				var where = $(this).attr("name");
				var val = $(this).val();								//What did they enter into the text field... I'm excited..
				$('input[name="'+where+'"]').hide().val("");			//hide the temp textinput
				where = where.substring(0,where.lastIndexOf('-'));		//cut off the ending to get dropdowns name
				//$("select[name='"+where+"']").append( new Option(val,val) ); 		//add the new "Other" to the dropdown
				var myselect=document.getElementsByName(where)[0];
				myselect.options[myselect.options.length]=new Option(val,val);
				//$(othersOption).html($(".otherTextInput").val());   	//--Old: change "Other" dropdown item -> new text
				$('select[name="'+where+'"]').show().focus();			//show dropdown again
				$("select[name='"+where+"'] option[value='"+val+"']").attr('selected', 'selected'); //focus the new option
			});
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
        <select name="Test-1" class="otherActivate">
		  <option value="">Select One</option>
          <option value="No employees">No employees</option>
          <option value="1-2 employees">1-2 employees</option>
          <option value="Other">Other(Specify reason)</option>
        </select>
        <input style="display:none;" class="otherTextInput" name="Test-1-otherTextInput" type="text" placeholder="Other Reason" />
		</p>

		<p>
        <select name="Test-2" class="otherActivate">
		  <option value="">Select One</option>
          <option value="No employees">No employees</option>
          <option value="1-2 employees">1-2 employees</option>
          <option value="Other">Other(Specify reason)</option>
        </select>
        <input style="display:none;" class="otherTextInput" name="Test-2-otherTextInput" type="text" placeholder="Other Reason" />
		</p>

		<p>
        <select name="Test-3" class="otherActivate">
		  <option value="">Select One</option>
          <option value="No employees">No employees</option>
          <option value="1-2 employees">1-2 employees</option>
          <option value="Other">Other(Specify reason)</option>
        </select>
        <input style="display:none;" class="otherTextInput" name="Test-3-otherTextInput" type="text" placeholder="Other Reason" />
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