import $ from 'jquery';
import './jquery.otherdropdown';

// Binding the otherDropdowns listeners to our form
$('[name="Test-1"]').otherDropdown();
$('[name="Test-2"]').otherDropdown({value:'Something'});
$('[name="Test-3"]').otherDropdown({placeholder:'Type of event?'});
$('[name="Test-4"]').otherDropdown({classes:'lightgreen-bg'});
$('[name="Test-5"]').otherDropdown({classes:'lightgreen-bg', value:'Something', placeholder:'Type of event?' });
