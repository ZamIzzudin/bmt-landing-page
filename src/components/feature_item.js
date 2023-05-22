import style from '../styles/feature_item.module.css'

function FeatureItem({ title, value, font }) {
    return (
        <div className={style.card}>
            <i class={`fa-solid fa-${font} ${style.card_icon}`}></i>
            <h3 className={style.card_title}>{title}</h3>
            <span className={style.card_subtitle}>{value}</span>
        </div>
    );
}

export default FeatureItem;
