$(document).ready(function(){
    $( ".add-row" ).click(function(){
       var $clone = $( "div.addFields" ).first().clone();
       $clone.append( "<div type='btn' class='remove-row mt-3'><i class='fas fa-lg fa-trash-alt'></i></div>" );
       $clone.insertBefore( ".add-row" );
    });
   
    $( ".form-style-9" ).on("click", ".remove-row", function(){
       $(this).parent().remove();
    });
 });