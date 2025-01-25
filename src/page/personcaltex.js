import Main from "../component/main";
import './persontax.css'; // Adjust the path if necessary
import React, { useState } from "react";
import IncomePage from './incomepage';
import ReductionPage from './reductionpage';
import ResultPage from './resultpage';

const Personcaltex = () => {
    const [step, setStep] = useState(1);

    // ฟังก์ชันเปลี่ยนขั้นตอน
    const goToStep = (stepNumber) => {
        setStep(stepNumber);
    };

    return (
        <Main>
            <br />
            <h1 className="text-center kanit-bold" style={{ color: '#0D2A3D' }}>คำนวณภาษีเงินได้บุคคลธรรมดา</h1>
            <br /><br />
            <div className="container kanit-regular">
                {/* Navigation Steps */}
                <div className="step-navigation center">
                    <button onClick={() => goToStep(1)} className={step === 1 ? 'active' : ''}>รายได้</button>
                    <button onClick={() => goToStep(2)} className={step === 2 ? 'active' : ''}>ค่าลดหย่อน</button>
                    <button onClick={() => goToStep(3)} className={step === 3 ? 'active' : ''}>ผลการคำนวณ</button>
                </div>

                {/* Rendering Pages Based on Step */}
                {step === 1 && <IncomePage />}
                {step === 2 && <ReductionPage />}
                {step === 3 && <ResultPage />}
            </div>
        </Main>
    );
};



export default Personcaltex;