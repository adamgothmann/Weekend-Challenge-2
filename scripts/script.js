var dataString;
var counter;
var i = 0;

$(function() {
  // $('#getJsonAjax').on('click', function() {
    $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
          firstName = "<p>First name: " + data.students[0].first_name + "</p>";
          lastName = "<p>Last name: " + data.students[0].last_name + "</p>";
          city = "<p>City: " + data.students[0].city + "</p>";
          shoutout = "<p>Shoutout: " + data.students[0].shoutout + "</p>";
          $('#displayStudent').append(firstName);
          $('#displayStudent').append(lastName);
          $('#displayStudent').append(city);
          $('#displayStudent').append(shoutout);


          $('#nextButton').on('click', function(){
            if(i > 19) {
              i = 0;
            } else if (i < 0) {
              i = 19;
            }
            $('#displayStudent p').remove();
            i++;
            counter++;
            firstName = "<p>Name: " + data.students[i].first_name + "</p>";
            lastName = "<p>Last name: " + data.students[i].last_name + "</p>";
            city = "<p>City: " + data.students[i].city + "</p>";
            shoutout = "<p>Shoutout: " + data.students[i].shoutout + "</p>";
            $('#displayStudent').append(firstName);
            $('#displayStudent').append(lastName);
            $('#displayStudent').append(city);
            $('#displayStudent').append(shoutout);

          });

          $('#prevButton').on('click', function(){
            i--;
          });

          counter = '<p>Showing #' + i + '/20</p>';
          $('#currentStudent').append(counter);



          // }
         },
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          }
        }

    });
  // });
});
