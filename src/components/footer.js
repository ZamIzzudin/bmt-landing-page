import style from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer id="footer" className={style.footer_container}>
            <div className={style.footer_grid}>
                <div className={style.footer_item}>
                    <span>Navigasi</span>
                    <ul>
                        <li><a href="#jumbotron">Beranda</a></li>
                        <li><a href="#profil">Profil</a></li>
                        <li><a href="#produk">Produk</a></li>
                        <li><a href="#testimonial">Anggota</a></li>
                        <li><a href="#footer">Kontak</a></li>
                    </ul>
                </div>
                <div className={style.footer_contact}>
                    <span>Alamat</span>
                    <table>
                        <tr>
                            <td><i class="fa-solid fa-location-dot"></i></td>
                            <td>Jl.Aria Putra No. 7, Kedaung, Pamulang, Kota Tangerang Selatan</td>
                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-phone"></i></td>
                            <td>021-7405458</td>
                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-envelope"></i></td>
                            <td>admin@bmtalfath.com</td>
                        </tr>
                    </table>
                </div>
            </div>
        </footer>
    );
}