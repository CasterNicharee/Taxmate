function Footer() {
    return (
        <div className="footerbg footertextcolor">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-4 ">
                            <h5 className="kanit-medium">TAXMATE เพื่อนคู่คิดเรื่องภาษี</h5>
                            <p className="kanit-light">
                                เว็บไซต์ช่วยให้จัดการภาษีเป็นเรื่องง่าย ทั้งคำปรึกษาและการคำนวณภาษีสำหรับบุคคลและองค์กร ให้คุณมั่นใจในทุกการดำเนินการด้านภาษี
                            </p>
                        </div>
                    </div>

                    <ul className="nav justify-content-center my-4">
                        <li className="nav-item">
                            <a href="/" className="nav-link px-2 kanit-light footertextcolor">
                                หน้าแรก
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="abou" className="nav-link px-2 kanit-light footertextcolor">
                                เกี่ยวกับเรา
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 kanit-light footertextcolor disable">
                                นิติบุคคล
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/persontax" className="nav-link px-2 kanit-light footertextcolor">
                                บุคคลธรรมดา
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/taxlaw" className="nav-link px-2 kanit-light footertextcolor">
                                กฎหมาย
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/QA" className="nav-link px-2 kanit-light footertextcolor">
                                Q&A
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link px-2 kanit-light footertextcolor">
                                ติดต่อเรา
                            </a>
                        </li>
                    </ul>

                    <div className="d-flex justify-content-between py-4 my-4 border-top">
                        <p className="kanit-regular">© 2024 TAXMATE, Inc. All rights reserved.</p>
                        <div className="social-links">
                            <ul className="list-unstyled d-flex">
                                {/* Line Icon */}
                                <li className="ms-3">
                                    <a href="https://line.me/ti/p/LSmlGV_ePv" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-line" style={{ fontSize: "30px", color: "#00c300" }}></i>
                                    </a>
                                </li>

                                {/* Facebook Icon */}
                                <li className="ms-3">
                                    <a href="https://www.facebook.com/hatyaiaccouting" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook" style={{ fontSize: "30px", color: "#3b5998", alignItems: "center" }}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
