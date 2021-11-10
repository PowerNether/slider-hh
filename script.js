let itemGallery = document.getElementById('product-tab-gallery')
let itemGalleryImages = itemGallery.getElementsByTagName('img')
let itemGalleryDynamic = []

Array.from(itemGalleryImages).forEach((img) => {
  let src = img.getAttribute('src')
  itemGalleryDynamic.push({ src: src , thumb: src })
})


let itemGalleryLight = lightGallery(itemGallery, {
  dynamic: true,
  dynamicEl: itemGalleryDynamic
})

let imgSlider = new Swiper(itemGallery, {
  loop: true
})

itemGallery.addEventListener('click', () => {
  let realIndexSlider = Number(itemGallery.getElementsByClassName('swiper-slide-active')[0].getAttribute('data-swiper-slide-index'))
  itemGalleryLight.openGallery(realIndexSlider)
});

// let gallery = document.getElementById('slider-main')
      // let galleryImagesList = gallery.getElementsByTagName('img')
      // let galleryImages = []

      // Array.from(galleryImagesList).forEach((img) => {
      //   let src = img.getAttribute('src')
      //   galleryImages.push({ src: src , thumb: src })
      // })

      // let galleryLight = lightGallery(gallery, {
      //   dynamic: true,
      //   dynamicEl: galleryImages
      // })

      // // var swiper = new Swiper(".slider-thumbnail", {
      // //   spaceBetween: 4,
      // //   slidesPerView: 3,
      // //   freeMode: true,
      // //   watchSlidesProgress: true,
      // //   breakpoints: {
      // //     568: {
      // //       slidesPerView: 4
      // //     },
      // //     768: {
      // //       slidesPerView: 5
      // //     }
      // //   }
      // // });
      // // var swiper2 = new Swiper(".slider-main", {
      // //   lazy: true,
      // //   loop: true,
      // //   navigation: {
      // //     nextEl: ".swiper-button-next",
      // //     prevEl: ".swiper-button-prev",
      // //   },
      // //   thumbs: {
      // //     swiper: swiper,
      // //   }
      // // });

      // let swiper = new Swiper(".slider-thumbnail", {
      //   spaceBetween: 4,
      //   slidesPerView: 3,
      //   freeMode: true,
      //   watchSlidesProgress: true,
      //   direction: "horizontal",
      //   breakpoints: {
      //     768: {
      //       slidesPerView: 4,
      //       direction: "vertical"
      //     }
      //   }
      // });
      // let swiper2 = new Swiper(".slider-main", {
      //   lazy: true,
      //   loop: true,
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },
      //   thumbs: {
      //     swiper: swiper,
      //   }
      // });

      // document.getElementById('sliderGallery').addEventListener('click', () => {
      //   let slideIndex = Number(gallery.getElementsByClassName('swiper-slide-active')[0].getAttribute('data-swiper-slide-index'))
      //   galleryLight.openGallery(slideIndex)
      // });