   $(function() {
        $('#pagination').pagination({
            pages:2,
            cssStyle: 'custom-theme',
            onPageClick: function(pageNumber){test(pageNumber)},
            onInit: function(){pageOne()},
           
        });
    });

function test(pageNumber)
{

  var page="#page-"+pageNumber;
  $('.selection').hide()
  $(page).show()

}

function pageOne() {
	var page_1 = "#page-1";
	$('.selection').hide()
	$(page_1).show()
}


