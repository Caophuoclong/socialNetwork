function sliderSettings(slideToShowAndScroll: number, length: number, showArrow: boolean = true) {
    return {
        className: 'w-full text-black',
        infinite: false,
        speed: 500,
        arrows: showArrow,
        slidesToShow: slideToShowAndScroll,
        slidesToScroll: slideToShowAndScroll,
        afterChange: (x: any) => {
            if (x === 0) {
                const prevElement = document.querySelector('.slick-prev');
                prevElement?.classList.add('invisible');
            }
            if (x === length - slideToShowAndScroll) {
                const nextElement = document.querySelector('.slick-next');
                nextElement?.classList.add('invisible');
            }
        },
        onInit: () => {
            const prevElement = document.querySelector('.slick-prev');
            prevElement?.classList.add('invisible');
        },
    };
}


export default sliderSettings;
