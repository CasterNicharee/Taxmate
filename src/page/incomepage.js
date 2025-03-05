import React, { useState, useEffect } from 'react';
import Main from "../component/main";
import './persontax.css';


function IncomePage() {
    const [formData, setFormData] = useState({
        salary401: '', bonus401: '', pension401: '', salary402: '',
        salary403: '', salary404: '', salary405: '', salary406: '',
        salary407: '', salary408: ''
    });
    const [result, setResult] = useState(0);
    const [annualIncome, setAnnualIncome] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    // Load data from localStorage on component mount
    useEffect(() => {
        const savedSalary = localStorage.getItem('salary401');
        const savedBonus = localStorage.getItem('bonus401');
        const savedPension = localStorage.getItem('pension401');
        const savedAnnualIncome = localStorage.getItem('annualIncome');

        if (savedSalary) setFormData(prev => ({ ...prev, salary401: savedSalary }));
        if (savedBonus) setFormData(prev => ({ ...prev, bonus401: savedBonus }));
        if (savedPension) setFormData(prev => ({ ...prev, pension401: savedPension }));
        if (savedAnnualIncome) setAnnualIncome(Number(savedAnnualIncome) || 0);
    }, []);

    // Calculate net income automatically whenever formData changes
    useEffect(() => {
        const salary401 = parseFloat(formData.salary401.replace(/,/g, '')) || 0;
        const bonus401 = parseFloat(formData.bonus401.replace(/,/g, '')) || 0;
        const pension401 = parseFloat(formData.pension401.replace(/,/g, '')) || 0;

        const totalIncome401 = (salary401 * 12) + bonus401 + pension401;
        setResult(totalIncome401 > 0 ? totalIncome401 : 0);
    }, [formData.salary401, formData.bonus401, formData.pension401]);

    // Format number with commas
    const formatNumberWithComma = (value) => {
        let cleanedValue = value.replace(/,/g, '');
        if (!isNaN(cleanedValue) && cleanedValue !== '') {
            return parseInt(cleanedValue).toLocaleString();
        }
        return value;
    };

    // Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        const formattedValue = formatNumberWithComma(value);

        setFormData(prev => ({ ...prev, [name]: formattedValue }));

        if (name === 'salary401') {
            const annualValue = parseFloat(formattedValue.replace(/,/g, '')) * 12 || 0;
            setAnnualIncome(annualValue);
            localStorage.setItem('annualIncome', annualValue);
        }

        localStorage.setItem(name, formattedValue);
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
                                name="salary401"
                                value={formData.salary401}
                                onChange={handleChange}
                            />
                            <span className="kanit-regular text-form-span-content">บาท/เดือน</span>
                            <div className="annual-income-box" style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "16px" }}>
                                <span className="kanit-regular text-form-span-content">
                                    {annualIncome ? annualIncome.toLocaleString() : '0'}
                                </span>
                                <span className="kanit-regular text-form-span-content">บาท/เดือน</span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <label className="kanit-regular text-form-leble-content">โอที โบนัส</label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <input
                                className="box-form"
                                type="text"
                                name="bonus401"
                                value={formData.bonus401}
                                onChange={handleChange}
                            />
                            <span className="kanit-regular text-form-span-content">บาท</span>
                        </div>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <label className="kanit-regular text-form-leble-content">บำเหน็จ</label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <input
                                className="box-form"
                                type="text"
                                name="pension401"
                                value={formData.pension401}
                                onChange={handleChange}
                            />
                            <span className="kanit-regular text-form-span-content">บาท</span>
                        </div>
                    </div>

                    <br /> <div className="dashed-line"></div><br />

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <label className="kanit-regular text-form-leble-content">เงินได้สุทธิของท่าน</label>

                            <span className="kanit-regular text-form-span-content">
                                {result ? result.toLocaleString() : '0'}   บาท
                            </span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span className="kanit-regular  text-form-leble-content ">คุณมีเงินได้ประเภทอื่นๆ หรือไม่</span>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <label className='kanit-regular text-form-span-content'>
                                    <input type="radio" name="option2" value="มี" /> มี
                                </label>
                                <label className='kanit-regular text-form-span-content'>
                                    <input type="radio" name="option2" value="ไม่มี" /> ไม่มี
                                </label>
                            </div>
                        </div>
                    </div>
                    <br /> <div className="dashed-line"></div>
                </form>
            </div>
        </div>
    );
}

export default IncomePage;
