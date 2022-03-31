$(document).ready(function(){
  $('.js-burger').on('click', function(){
    $('.js-nav-list').slideToggle();

  });

  // фильтры
  $('.js-filter-link').on('click', function(event){
    event.preventDefault();

    const filterType = $(this).data('filter')

    $('.js-filter-link').removeClass('active-text');
    $(this).addClass('active-text');

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

  if ( $('.js-slider').length ) {
    $('.js-slider').slick({

    });
  }

  // Табы в контактах
  $('.js-tabs-link').on('click', function(event){
    event.preventDefault();

    const index = $(this).index('.js-tabs-link');

    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.js-tabs-content').removeClass('active');
    $('.js-tabs-content').eq(index).addClass('active');

  });

  //Аккардион
  let prevBtn;
  $('.js-accordion-btn').on('click', function(){
    $(this).removeClass('.span');

    if (this === prevBtn) {
      $(this).next().slideToggle();
      return;
    }


    $('.js-accordion-btn').next().slideUp();
    $(this).next().slideToggle();
    prevBtn = this;

  });


});
