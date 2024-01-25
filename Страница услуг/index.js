const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 140,
    slidesPerGroup: 4,
    mousewheel: {
        releaseOnEdges: true,
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

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        300: {
          slidesPerView: 1.5,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
    },
});

const swiper2= new Swiper('#last-slide', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 330,
    slidesPerGroup: 4,
    mousewheel: {
        releaseOnEdges: true,
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

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 5,
          slidesPerGroup: 2,
        },
    },
});


let links = document.querySelector(`.herself-link`);

let active = document.querySelector(`#active`);

let counter = 0; 

links.addEventListener(`click`,function(){

    if(counter == 0){
        links.style.color = `white`;
        counter++;
    }

    else if(counter == 1){
        links.style.color = ``;
        counter = counter * 0;
        console.log(counter)
    }
})


