
import TESTIMONIAL from '../assets/testimonial.png'
import style from '../styles/testimonial.module.css'

function Testimonial() {
    return (
        <div id="testimonial" className={style.testimonial_container}>
            <h1 className={style.testimonial_title}>Apa Kata Mereka</h1>
            <span className={style.testimonial_subtitle}>Testimoni Anggota KSPPS BMT AL FATH IKMI</span>
            <div className={style.testimonial_grid}>
                <div className={style.satu}>
                    <img src={TESTIMONIAL} alt="testimonial-pict" />
                </div>
                <div className={style.dua}>
                    <p>“KSPPS BMT AL FATH IKMI sangat membantu saya dalam mengelola keuangan usaha dan keuangan keluarga. Semoga BMT ini dapat terus maju dan berkembang”</p>
                    <span>Cho Yi-hyun, Sayangnya Aku</span>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
