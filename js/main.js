//**first slider */
$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
    fade:false,
    speed:2000,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});

//**second slider */
$('.slider-two')
.not(".slick-initialized")
.slick({
   
    prevArrow:".site-slider-two  .prev",
    nextArrow:".site-slider-two  .next",
    slidesToShow:4,
    slidesToScroll:2,
    autoplaySpeed:3000,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

/*if(window.outerWidth==360px){
  $('.slider-two')
.not(".slick-initialized")
.slick({
   
    prevArrow:".site-slider-two  .prev",
    nextArrow:".site-slider-two  .next",
    slidesToShow:2,
    slidesToScroll:2,
    autoplaySpeed:3000
});


  }*/
$(document).ready( function(){
    $('.blush').on('click',function(){
      $('.blush').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
      $('.blush').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
      $('.blush').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
      $('.blush').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
      $('.blush').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){

        //$('.blush:first').removeClass('fa fa-heart-o pink align-self-end mr-4 mt-4').toggleClass('fa fa-heart pink align-self-end mr-4 mt-4');
        
      });
    })
    })
    })
//<!--lipstick-->
$('.lipstick').on('click',function(){
      $('.lipstick').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
      $('.lipstick').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
      $('.lipstick').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
      $('.lipstick').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
      $('.lipstick').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        
        //$('.lipstick:first').removeClass('fa fa-heart-o pink align-self-end mr-4 mt-4').toggleClass('fa fa-heart pink align-self-end mr-4 mt-4');
        
      });
    })
    })
    })
  })
});
    ///////////nailpolish
    $('.nailpolish').on('click',function(){
      $('.nailpolish').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
      $('.nailpolish').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
      $('.nailpolish').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
      $('.nailpolish').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
      $('.nailpolish').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        
        //$('.nailpolish:first').removeClass('fa fa-heart-o pink align-self-end mr-4 mt-4').toggleClass('fa fa-heart pink align-self-end mr-4 mt-4');
        
      });
    })
    })
    }) })
  });

    ////palette
    $('.palette').on('click',function(){
      $('.palette').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
      $('.palette').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
      $('.palette').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
      $('.palette').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
      $('.palette').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        
        //$('.palette:first').removeClass('fa fa-heart-o pink align-self-end mr-4 mt-4').toggleClass('fa fa-heart pink align-self-end mr-4 mt-4');
        
      });
    })
    })
    })  })
  });
    ///remover
    $('.remover').on('click',function(){
        $('.remover').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        $('.remover').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
        $('.remover').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        $('.remover').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
        $('.remover').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
          
          //$('.remover:first').removeClass('fa fa-heart-o pink align-self-end mr-4 mt-4').toggleClass('fa fa-heart pink align-self-end mr-4 mt-4');
            
        });
      })
      })
      });
    })
  });
      //perfume
      $('.perfume').on('click',function(){
        $('.perfume').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        $('.perfume').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
        $('.perfume').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        $('.perfume').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
        $('.perfume').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
          
          //$('.perfume:first').removeClass('fa fa-heart-o pink align-self-end mr-4 mt-4').toggleClass('fa fa-heart pink align-self-end mr-4 mt-4');
          
        });
      })
      })
      });
    })
  });
      //compact
      $('.compact').on('click',function(){
        $('.compact').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        $('.compact').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
        $('.compact').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        $('.compact').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
        $('.compact').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
          
          //$('.compact:first').removeClass('fa fa-heart-o pink align-self-end mr-4 mt-4').toggleClass('fa fa-heart pink align-self-end mr-4 mt-4');
          
        });
      })
      })
      });
    })
  });

      //mascara
      $('.mascara').on('click',function(){
        $('.mascara').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        $('.mascara').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
        $('.mascara').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
        $('.mascara').removeClass('fa fa-heart').addClass('fa fa-heart-o').on('click',function(){
        $('.mascara').removeClass('fa fa-heart-o').addClass('fa fa-heart').on('click',function(){
            //$('.mascara:first').removeClass('fa fa-heart-o pink align-self-end mr-4 mt-4').toggleClass('fa fa-heart pink align-self-end mr-4 mt-4');
          
      
        });
        });
      })
      })
      });
    })
  });


   

    });
  });