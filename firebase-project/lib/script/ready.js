/* 1. Proloder */
$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });

  $(document).ready(function () {
    var timestamp = Date.now();
var date = new Date(timestamp);
var day = date.getDate();
var month = date.getMonth() < 10 ? date.getMonth() + 1 : date.getMonth();
var year = date.getFullYear();
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var seconds = "0" + date.getSeconds();
var formattedTime = day + '/' + month + '/' + year + '/' + '   ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log('Time', formattedTime);
  })
