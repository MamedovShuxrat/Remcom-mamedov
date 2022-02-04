$(document).ready(function(){
  $('.js-burger').on('click', function(){
    $('.js-nav-list').slideToggle();

    $('.js-nav-list').addClass('show');
  });

  // фильтры
  $('.js-filter-link').on('click', function(event){
    event.preventDefault();

    const filterType = $(this).data('filter')

    $('.js-filter-link').removeClass('active-1');
    $(this).addClass('active-1');

    if (filterType === 'all') {
      $('.js-portfolio').show();
      return;
    }
    $('.js-portfolio').each(function(){
      const portfolioType = $(this).data('type');
      if(filterType === portfolioType){
        $(this).show();
        return;
      }

      $(this).hide();
    });
  });

  if($('.js-slider').length){
    $('.js-slider').slick({

    });
  }

})
