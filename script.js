$(document).ready(function() {
    $('.tab-button').on('click', function() {
      // Elimina la clase 'active' de todos los botones y contenidos de pestañas
      $('.tab-button').removeClass('active');
      $('.tab-content').removeClass('active');
  
      // Agrega la clase 'active' al botón que se pulsó
      $(this).addClass('active');
  
      // Obtiene el valor del atributo data-tab del botón pulsado
      var targetTab = $(this).attr('data-tab');
  
      // Muestra el contenido de la pestaña correspondiente
      $('#' + targetTab).addClass('active');
    });

    $('.play-button').on('click', function() {
        // Remover la clase 'playing' de todos los li
        $('.tracklist li').removeClass('playing');
        
        // Añadir la clase 'playing' al li que contiene el botón presionado
        $(this).closest('li').addClass('playing');
      });

    $('.stop-button').on('click', function() {
        // Remover la clase 'playing' al detener el audio
        $(this).closest('li').removeClass('playing');
      });
  });