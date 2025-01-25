import React, { useState, useEffect } from 'react';
import './persontax.css';

function IncomePage() {
    const [salary401, setSalary401] = useState('');
    const [bonus401, setBonus401] = useState('');
    const [pension401, setPension401] = useState('');
    const [result, setResult] = useState(null);
    const [annualIncome, setAnnualIncome] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    // โหลดข้อมูลจาก localStorage เมื่อเริ่มต้น
    useEffect(() => {
        const savedSalary = localStorage.getItem('salary401');
        const savedBonus = localStorage.getItem('bonus401');
        const savedPension = localStorage.getItem('pension401');
        const savedAnnualIncome = localStorage.getItem('annualIncome')

        if (savedSalary) setSalary401(savedSalary);
        if (savedBonus) setBonus401(savedBonus);
        if (savedPension) setPension401(savedPension);
        if (savedAnnualIncome) setAnnualIncome(savedAnnualIncome);
    }, []);

    // ฟังก์ชันคำนวณรายได้สุทธิ
    const calculate = () => {
        const num1 = parseFloat(salary401.replace(/,/g, '')) || 0;
        const num2 = parseFloat(bonus401.replace(/,/g, '')) || 0;
        const num3 = parseFloat(pension401.replace(/,/g, '')) || 0;

        const totalIncome = (num1 * 12) + num2 + num3;

        if (totalIncome > 0) {
            setResult(totalIncome);
        } else {
            setResult('กรุณาใส่ข้อมูลรายได้ที่ถูกต้อง');
        }
    };

    // ฟังก์ชันสำหรับเพิ่มเครื่องหมายคอมม่าในตัวเลข
    const formatNumberWithComma = (value) => {
        // เอาเครื่องหมายอื่นออก เช่น เครื่องหมายคอมม่าแล้วแปลงเป็นตัวเลข
        let cleanedValue = value.replace(/,/g, '');

        // ถ้าค่าคือหมายเลข ให้ใส่เครื่องหมายคอมม่า
        if (!isNaN(cleanedValue) && cleanedValue !== '') {
            return parseInt(cleanedValue).toLocaleString();
        }

        return value;  // ถ้าไม่ใช่ตัวเลขก็คืนค่ากลับไปตามเดิม
    };

    const handleSalaryChange = (e) => {
        // แปลงค่าที่รับเข้ามาให้มีเครื่องหมายคอมม่า
        const formattedValue = formatNumberWithComma(e.target.value);
        setSalary401(formattedValue);
        // คำนวณรายได้ต่อปีโดยคูณด้วย 12 เดือน
        const annualValue = parseFloat(formattedValue.replace(/,/g, '')) * 12;
        setAnnualIncome(annualValue);
        // บันทึกค่าลงใน localStorage ทั้งเงินเดือนและรายได้ต่อปี
        localStorage.setItem('salary401', formattedValue);
        localStorage.setItem('annualIncome', annualValue);
    };

    const handleBonusChange = (e) => {
        const formattedValue = formatNumberWithComma(e.target.value);  // เพิ่มคอมม่าเมื่อพิมพ์
        setBonus401(formattedValue);
        // บันทึกค่าใน localStorage
        localStorage.setItem('bonus401', formattedValue);
    };

    const handlepensionChange = (e) => {
        const formattedValue = formatNumberWithComma(e.target.value);  // เพิ่มคอมม่าเมื่อพิมพ์
        setPension401(formattedValue);
        // บันทึกค่าใน localStorage
        localStorage.setItem('pension401', formattedValue);
    };

    const handleIconClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="container">
            <div className="page-format">
                <div className="header-top text-white kanit-regular" style={{ position: 'relative' }}>
                    รายได้ทั้งหมดของคุณ (เงินได้พึงประเมิน)
                    <button onClick={handleIconClick} className="info-icon">
                        <i className="fas fa-info-circle" aria-label="info"></i>
                    </button>
                    {showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                <button onClick={handleClosePopup} className="floating-close-btn">✖</button>
                                <div className="popup-header">
                                    <span className="popup-text-head-1 kanit-semibold">เงินได้</span>
                                    <span className="popup-text-head-2 kanit-regular">ที่ต้องนำมาคำนวณเพื่อเสียภาษีมี 8 ประเภท</span>
                                </div>
                                <div className="popup-text-list">
                                    <span className='popup-text-content-1'>40(1) เงินได้จากการจ้างงาน </span><span className='popup-text-content-2'> เช่น เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส บำเหน็จบำนาญ ฯลฯ</span><br />
                                    <span className='popup-text-content-1'>40(2) เงินได้จากหน้าที่งานหรือตำแหน่งงานที่ทำ หรือการรับทำงานให้  </span><span className='popup-text-content-2'> เช่น ค่านายหน้า เบี้ยประชุม ค่าธรรมเนียม ฯลฯ</span><br />
                                    <span className='popup-text-content-1'>40(3) เงินได้จากทรัพย์สินทางปัญญา  </span><span className='popup-text-content-2'> เช่น ค่าลิขสิทธิ์ ค่ากู๊ดวิลล์ ฯลฯ</span><br />
                                    <span className='popup-text-content-1'>40(4) เงินได้ที่เป็นดอกผลหรือผลตอบแทนจากการออมการลงทุน</span><span className='popup-text-content-2'> เช่น เงินปันผล ดอกเบี้ยเงินฝาก ดอกเบี้ยเงินกู้ กำไรจากการขายกองทุน LTF / RMF / SSF ฯลฯ</span><br />
                                    <span className='popup-text-content-1'>40(5) เงินได้จากการให้เช่าทรัพย์สิน </span><span className='popup-text-content-2'> เช่น บ้านให้เช่า อพาร์ตเม้นต์ คอนโด ที่ดิน รถยนต์ให้เช่า ฯลฯ</span><br />
                                    <span className='popup-text-content-1'>40(6) เงินได้จากวิชาชีพอิสระ 6 อาชีพ</span><span className='popup-text-content-2'> คือ แพทย์ นักกฎหมาย วิศวกร สถาปนิก นักบัญชี ผู้ผลิตประณีตศิลปกรรม</span><br />
                                    <span className='popup-text-content-1'>40(7) เงินได้จากการรับเหมาที่ผู้รับเหมาต้องจัดหาสัมภาระในส่วนสำคัญนอกจากเครื่องมือ</span><span className='popup-text-content-2'> เช่น รับเหมาก่อสร้าง ฯลฯ</span><br />
                                    <span className='popup-text-content-1'>40(8) เงินได้อื่นๆ นอกเหนือจากที่ระบุไว้ในประเภทที่ 1 - 7</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <form className="incomepage">
                    <div>
                        <label className="kanit-semibold text-form-leble-head">40(1) เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส บำเหน็จ บำนาญ ฯลฯ</label><br />
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <label className="kanit-regular text-form-leble-content">เงินเดือน ค่าจ้าง เบี้ยเลี้ยง บำนาญ ฯลฯ</label>
                            <input
                                className="box-form"
                                type="text"
                                value={salary401}
                                onChange={handleSalaryChange}  // ใช้ handle change เพื่อ format
                            />
                            <span className="kanit-regular text-form-span-content">บาท/เดือน</span>
                            <div className="annual-income-box" style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "16px" }}>
                                <div className="form-control kanit-regular text-form-span-content disabled-input">
                                    {annualIncome.toLocaleString()}
                                </div>
                                <span className="kanit-regular text-form-span-content">บาท/เดือน</span>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <label className="kanit-regular text-form-leble-content">โอที โบนัส</label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingRight: "50px" }}>
                            <input
                                className="box-form"
                                type="text"
                                value={bonus401}
                                onChange={handleBonusChange}  // ใช้ handle change เพื่อ format
                            />
                            <span className="kanit-regular text-form-span-content">บาท</span>
                        </div>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <label className="kanit-regular text-form-leble-content">บำเหน็จ</label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingRight: "50px" }}>
                            <input
                                className="box-form"
                                type="text"
                                value={pension401}
                                onChange={handlepensionChange}  // ใช้ handle change เพื่อ format
                            />
                            <span className="kanit-regular text-form-span-content">บาท</span>
                        </div>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <button className="calculate-button" onClick={calculate}>คำนวณ</button>
                </div>

                {result !== null && (
                    <div className="result-container">
                        {typeof result === 'number' ? (
                            <h2 className="kanit-bold text-success">เงินได้สุทธิของท่าน: {result.toLocaleString()} บาท</h2>
                        ) : (
                            <h2 className="kanit-bold text-danger">{result}</h2>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default IncomePage;
