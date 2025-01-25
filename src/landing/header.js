import 'bootstrap-icons/font/bootstrap-icons.css';
import './landingstyle.css';

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-center">
                <ul className="navbar-links  kanit-regular">
                    <li><a href="/">หน้าแรก</a></li>
                    <li><a href="/abouttax">เกี่ยวกับภาษี</a></li>
                    <li><a href="/taxcal">นิติบุคคล</a></li>
                </ul>
                <a href="/" className="navbar-logo">
                    <img src="asset/logo.png" alt="TAXMATE" />
                </a>
                <ul className="navbar-links  kanit-regular">
                    <li><a href="/persontax">บุคคลธรรมดา</a></li>
                    <li><a href="#opinions">กฎหมาย</a></li>
                    <li><a href="/contact">ติดต่อเรา</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
