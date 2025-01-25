import React from "react";
import Main from "../component/main";
import './Style.css'; // Adjust the path if necessary

function Taxdescription() {
    return (
        <Main>
            <div className="container">
                <div className="col-md-12">
                    <div className="position-relative overflow-hidden text-center custom-background">
                        <div className="col-md-6 p-lg-5 mx-auto my-5">
                            <h1 className="display-6 fw-normal headed">ภาษีบุคคลธรรมดา</h1>
                            <p className="lead fw-normal">
                                ภาษีบุคคลธรรมดาคือ อะไร ??
                            </p>
                            <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                        </div>
                        <div className="product-device shadow-sm d-none d-md-block"></div>
                        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    </div>
                </div>
            </div>


        </Main >
    );
}

export default Taxdescription;