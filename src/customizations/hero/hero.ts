import Hero from '../../../node_modules/creative-patterns/packages/components/hero/src/hero';
import $ from 'jquery';

$('.cs-hero').each(function(): void {
    const hero: JQuery = $(this);
    new Hero(hero, {
        spaceBetween: 2,
        callbacks: {
            onInit() {
                hero
                    .find(`.cs-hero__slide--clone`)
                    .each(function(i: number, el: JQuery): void {
                        const clonedSlideImg: JQuery = $(el).find('img');

                        const clonedSlideImgAlt: string = clonedSlideImg.attr(
                            'alt'
                        );

                        clonedSlideImg.attr(
                            'alt',
                            `${clonedSlideImgAlt}-duplicated-${i}`
                        );
                    });
            },
        },
    });
});
