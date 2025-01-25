import React from "react";
import Main from "../component/main";
import './contact.css'; // Adjust the path if necessary

function Contact_us() {
    return (
        <Main>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <br /> <br />
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters mb-5">

                                    <div className="col-md-12">
                                        <div className="map-container" style={{ width: "100%", height: "450px", marginBottom: "30px" }}>
                                            <iframe
                                                title="Google Map"
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3583.561604020061!2d100.42629762499736!3d7.013460642988038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d2700731c92db%3A0xf3eb0c36159f1018!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4p-C4reC4o-C5jOC5gOC4muC4tOC4pSDguIjguLPguIHguLHguJQgKOC4q-C4suC4lOC5g-C4q-C4jeC5iOC5gOC4p-C5h-C4muC4lOC4teC5hOC4i-C4meC5jCk!5e1!3m2!1sen!2sth!4v1735270540281!5m2!1sen!2sth"
                                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen
                                                loading="lazy">

                                            </iframe>

                                        </div>
                                    </div>



                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text kanit-regular">
                                                <p><span>Address:</span> 126/41 Lopburi Ramesuan Rd,</p><p> Tha Chang, Bang Klam District, Songkhla 90110</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text kanit-regular">
                                                <p><span>Phone:</span> <a href="tel://0931592445">+66931592445</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text kanit-regular">
                                                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe"></span>
                                            </div>
                                            <div className="text kanit-regular">
                                                <p><span>Website</span> <a href="/">Taxmate.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </Main >
    );
}

export default Contact_us;