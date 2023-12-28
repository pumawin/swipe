$(function () {
  const swiper = new Swiper('.mySlider', {
    loop: true,
    autoplay: {
      delay: 2000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 슬라이더와 연동되는 정보
    /* slideChange 는 슬라이드가 바뀌는 상황을 잡을수 있다. */
    on: {
      slideChange: function () {
        const sIdx = this.realIndex;
        // console.log(this);

        const slideInfo = $('.slide-info li');
        slideInfo.removeClass('active');
        slideInfo.eq(sIdx).addClass('active');
      },
    },
  });

  // 커스텀 링크
  const myLink = $('.my-link li');
  myLink.on('click', function (e) {
    e.preventDefault();

    const myLinkIdx = $(this).index();
    console.log(myLinkIdx);

    // 활성화 표시 : css 확인
    myLink.removeClass('on');
    myLink.eq(myLinkIdx).addClass('on');

    //  swiper에서 메서드 중에서 슬라이드로 이동하는 메서드
    swiper.slideTo(myLinkIdx); /* 인덱스를 적어준 것이다. */
  });
});
