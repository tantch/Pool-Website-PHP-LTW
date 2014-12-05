$(document).ready(function(){
    $('#searchresult').html('<p style="padding:5px;">Enter a search term to start filtering.</p>');
    $('#pollsearch').keyup(function() {
        var searchVal = $(this).val();
        if(searchVal !== '') {

            $.get('actions/action_search.php?pollsearch='+searchVal, function(returnData) {
                window.history.replaceState( {} , './?pagina=searchpage&pollsearch=%', './?pagina=searchpage&pollsearch='+ searchVal );
                if (!returnData) {
                    $('#searchresult').html('<p style="padding:5px;">Search term entered does not return any data.</p>');
                } else {
                    $('#searchresult').html(returnData);
                }
            });
        } else {
            $('#searchresult').html('<p style="padding:5px;">Enter a search term to start filtering.</p>');
            window.history.replaceState( {} , './?pagina=searchpage&pollsearch=%', './?pagina=searchpage&pollsearch=' );

        }
 
    });
    $('#pollsearch').submit(function() {
    	 $('#pollsearch').keyup();
    });
    $('#pollsearch').submit();
});