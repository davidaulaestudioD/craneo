$(document).ready(function() {
    $('.tab-button').on('click', function() {
      $('.tab-button').removeClass('active');
      $('.tab-content').removeClass('active');

      $(this).addClass('active');
  
      var targetTab = $(this).attr('data-tab');

      $('#' + targetTab).addClass('active');
    });

    $('.play-button').on('click', function() {
        $('.tracklist li').removeClass('playing');
        
        $(this).closest('li').addClass('playing');
      });

    $('.stop-button').on('click', function() {
        $(this).closest('li').removeClass('playing');
      });
  });