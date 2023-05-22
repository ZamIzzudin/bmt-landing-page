import FeatureItem from './feature_item'

import style from '../styles/features.module.css'

function Features() {
    const data = [
        {
            title: 'Cepat dan Mudah',
            value: 'Pengajuan cepat dan proses akan lebih lengkap apabila dokumen lengkap.',
            font: 'clock'
        },
        {
            title: 'Bebas Denda',
            value: 'Tidak adanya denda dalam pembiayaan yang ada dalam BMT kami.',
            font: 'money-bill'
        },
        {
            title: 'Bebas Penalty',
            value: 'Tanpa penalty ketika terjadi percepatan pelunasan, bahkan bisa mengajukan diskon.',
            font: 'scale-balanced'
        },
        {
            title: 'Bebas Riba',
            value: 'Semua akad berbasis syariah sehingga sudah dipastikan lepas dari Riba.',
            font: 'coins'
        }
    ]
    return (
        <div id="features" className={style.features_container}>
            <h1 className={style.features_title}>Keunggulan</h1>
            <span className={style.features_subtitle}>KSPPS BMT AL FATH IKMI</span>
            <div className={style.features_grid}>
                {data.map((each, index) => (
                    <div key={`card-${index}`}>
                        <FeatureItem title={each.title} value={each.value} font={each.font} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
