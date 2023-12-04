$(function () {

  //add the current day to the top of the page via selecting the current day id in the html
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));


  // event listener when the save btn is clicked and save the data into local storage
  $('.saveBtn').on('click', function () {
    var timeBlock = $(this).parent(); // save the btn parent in its own var
    var timeBlockId = timeBlock.attr('id'); // target the id in the parent and save in another var
    var userInput = timeBlock.find('.description').val(); // get the value of the time block
    localStorage.setItem(timeBlockId, userInput); //save the values in local storage using the made var
  });


  //now display the items from local storage to the blocks
  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);

    $(this).find('.description').val(userInput);
  });

  //make code to color code the blocks by the time of day
  $('.time-block').each(function () {
    var currentTime = dayjs().hour();
    var blockTime = parseInt($(this).attr('id').split('-')[1], 10);// convert the string into sub array and get the second item in the array which shoudld contain the number of the hour we want
    //fuctions to determine the color based on the time of the day, add/remove classes accordingly
    if (blockTime < currentTime) {
      $(this).removeClass('present future').addClass('past');
    } else if (blockTime === currentTime) {
      $(this).removeClass("past future").addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }

  })

});