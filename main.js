const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

  
    effect:'cube',
    cubeEffect: {
        slideShadows: false,
        shadow: false,
      },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
                ' из ' +
                '<span class="' + totalClass + '"></span>';
    }    
  });

