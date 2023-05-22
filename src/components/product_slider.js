import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import PRODUCT1 from '../assets/product.png'
import PRODUCT2 from '../assets/product2.png'
import PRODUCT3 from '../assets/product3.png'
import PRODUCT4 from '../assets/product4.png'
import PRODUCT5 from '../assets/product5.png'

import style from '../styles/product.module.css'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

function ProductSlider() {
    return (
        <div id="produk" className={style.product_container}>
            <h1 className={style.product_title}>Produk Kami</h1>
            <Splide hasTrack={false}
                options={{
                    type: 'loop',
                    perPage: 4,
                    drag: 'free',
                    snap: true,
                    width: '70%',
                    focus: 'center',
                }}>
                <div>
                    <SplideTrack>
                        <SplideSlide>
                            <div className={style.product_card}>
                                <img src={PRODUCT1} alt="slider-1" />
                                <span>Pembiayaan Kerja Sama</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={style.product_card}>
                                <img src={PRODUCT2} alt="slider-2" />
                                <span>Pembiayaan Jual Beli</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={style.product_card}>
                                <img src={PRODUCT3} alt="slider-3" />
                                <span>Simpanan Pokok</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={style.product_card}>
                                <img src={PRODUCT4} alt="slider-4" />
                                <span>Simpanan Wajib</span>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={style.product_card}>
                                <img src={PRODUCT5} alt="slider-5" />
                                <span>Simpanan Sukarela</span>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </div>

            </Splide>
        </div>
    );
}

export default ProductSlider;