import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { CARD_DETAILS } from './slider.constants';
import Card from './card';

const CardSlider = () => {
    return <div className='flex'>
        <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
                slideShadows: false,
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
            }}
            pagination={{
                el: '.swiper-pagination',
                clickable: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[
                EffectCoverflow, Pagination, Navigation
            ]}
            className='swiper_container'
        >
            {CARD_DETAILS.map((card) => (
                <SwiperSlide>
                    <Card
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                        logoUrl={card.logoUrl} />
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
        </Swiper>
    </div>
}

export default CardSlider