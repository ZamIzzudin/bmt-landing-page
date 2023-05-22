import style from '../styles/about.module.css'

function About() {
    return (
        <div id="profil" className={style.about_container}>
            <h1 className={style.about_title}>Tentang Kami</h1>
            <span className={style.about_subtitle}>Jujur, Amanah & Menguntungkan</span>
            <div className={style.about_grid}>
                <div className={style.satu}>
                    <b>KSPPS BMT AL FATH IKMI </b> sebagai salah satu aset umat yang terus berkomitmen mengajak masyarakat untuk bertransaksi sesuai Syariah Islam.
                </div>
                <div className={style.dua}>
                    Dilandasi oleh sifat-sifat kejujuran dan Amanah. Insya Allah keberkahan dan keberuntungan akan kita raih bersama.
                </div>
            </div>
        </div>
    );
}

export default About;
