
//     event.preventDefault();
//   var elephant = $("#elephant1").val();
//   $("#elephant1").show(elephant);
//   var kangaroo = $("#kangaroo1").val();
//   $("#kangaroo1").show(kangaroo);
//   var tiger = $("#tiger1").val();
//   $("#tiger1").show(tiger);


//   });
//
//
//
//
// });
$(function() {
  $(".form1").submit(function(event) {
  var animal = parseInt($("#animal").val());


  if (animal === 1) {
 $(".elephant").show();
 $(".kangaroo").hide();
 $(".tiger").hide()
 }
 else if (animal === 2) {

   $(".kangaroo").show();
   $(".tiger").hide()
   $(".elephant").hide();
 }
 else {

   $(".tiger").show();
   $(".elephant").hide();
   $(".kangaroo").hide();
}
event.preventDefault();

});


});
