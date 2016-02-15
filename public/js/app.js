/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var foodList =[];
// foodList.push({
//              item: 'Spam Musubi',
//              name: 'Hawaiian Treat',
//              image: ''
//            });
// foodList.push({
//              item: 'Poké',
//              name: 'Yummy Fish',
//              image: ''             
//            });
// foodList.push({
//              item: 'Loco Moco',
//              name: 'Yummy Goodness',
//              image: ''             
//            });
// /* end of hard-coded data */


// $(document).ready(function() {
//   console.log('app.js loaded!');
//   $.get('/api/foods').success(function (foods) {
//     foods.forEach(function(food) {
//       renderFood(food);
//     });

//   });
// });

//Client Side Ajax call for reading Stations for Suggestion Page

$(document).on('ready', function() {
  var searchUrl = "/api/foods";
  var results = $('#foods');
  var source = $('#food-template').html();
  // console.log(source);
  var template = Handlebars.compile(source);
  $.ajax({
    method: 'GET',
    url: searchUrl,
    success: function (data) {
      data.forEach(function(suggestion) {
        // console.log("this is the suggest id", suggestion._id)
        var html = template(suggestion);
        $('#foods').append(html);
      });
    }
  });

// Food for Post
  $('.form-horizontal').on('submit', function(e) {
    console.log("It works!");
    e.preventDefault();
    console.log($(this));
      var formData = $(this).serialize();
      //console.log(formData);

    $.ajax({
        method: "POST",
        url: searchUrl,
        data: formData,
        success: function (data) {
          console.log(data);
        var html = template(data);
        $('#foods').append(html);
        }
      });
    $(this).trigger("reset");
  }); 
      
// Food Delete
  $('#foods').on('click', '.delete-food', function(e) {
    console.log("It Works!");
    var id = $(this).parents('.food').data('food-id');
    console.log("this is the food id", id);

    $.ajax({
      method: 'DELETE',
      url: ('/api/foods/' + id),
      success: function() {
        console.log("Food Deleted!");
        $('[data-food-id=' + id + ']').remove();
      }   
    });
  });

});