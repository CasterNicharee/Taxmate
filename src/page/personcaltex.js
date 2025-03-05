import React, { useState, useEffect, useCallback } from 'react';
import Main from "../component/main";
import './persontax.css'; // Adjust the path if necessary

const Personcaltex = () => {
    const [formData, setFormData] = useState({
        salary401: '', bonus401: '', pension401: '', salary402: '', salary403: '',
        increase404: '', sell404: '', cost404: '', house405: '', agricutural405: '',
        noagricutural405: '', vehicle405: '', otherasset405: '', default405: '',
        physician406: '', independent406: '', salary407: '', salary408: '', childs: '',
        childafter: '', pregnancyexpenses: '', parentshealthinsurance: '', socialSecurity: '',
        providentfund: '', healthInsurance: '', lifeInsurance: '', RMF: '', SSF: '', homeLoan: '',
        shopping: '', politicalDonations: '', publicDonations: '', donation: '',

    });

    const [result, setResult] = useState(0);
    const [deduction, setDeduction] = useState(0);
    const [totalincome, setTotalincome] = useState(0);
    const [realincome, setRealincome] = useState(0);
    const [totalexpense, setTotalexpense] = useState(0);
    const [calchild, setCalchild] = useState(0);
    const [calchildafter, setCalchildafter] = useState(0);
    const [insurance, setInsurance] = useState(0);
    const [netincome, setNetincome] = useState(0);
    const [caltenpercent, setCaltenpercent] = useState(0);
    const [calpublicdonate, setCalpublicdonate] = useState(0);
    const [caldonate, setCaldonate] = useState(0);
    const [realnetincome, setRealnetincome] = useState(0);
    const [calculator, setCalculator] = useState(0);
    const [expense401, setExpense401] = useState(0);
    const [expense402, setExpense402] = useState(0);
    const [expense403, setExpense403] = useState(0);
    const [expense404, setExpense404] = useState(0);
    const [expense405, setExpense405] = useState(0);
    const [expense406, setExpense406] = useState(0);
    const [expense407, setExpense407] = useState(0);
    const [expense408, setExpense408] = useState(0);
    const [annualIncome, setAnnualIncome] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [showAdditionalInfo40_2, setShowAdditionalInfo40_2] = useState(false);
    const [showAdditionalInfo40_3, setShowAdditionalInfo40_3] = useState(false);
    const [showAdditionalInfo40_4, setShowAdditionalInfo40_4] = useState(false);
    const [showAdditionalInfo40_5, setShowAdditionalInfo40_5] = useState(false);
    const [showAdditionalInfo40_6, setShowAdditionalInfo40_6] = useState(false);
    const [showAdditionalInfo40_7, setShowAdditionalInfo40_7] = useState(false);
    const [showAdditionalInfo40_8, setShowAdditionalInfo40_8] = useState(false);

    // Dropdown
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("--- กรุณาเลือก --- ▼");
    const [statusValue, setStatusValue] = useState(0);
    // ตัวเลือกที่มี status และ statusvalue
    const options = [
        { status: "--- กรุณาเลือก ---", statusvalue: 0 },
        { status: "โสด", statusvalue: 60000 },
        { status: "ม่าย/หย่า", statusvalue: 60000 },
        { status: "คู่สมรสมีเงินได้แยกยื่น", statusvalue: 60000 },
        { status: "คู่สมรสมีเงินยื่นร่วม", statusvalue: 120000 },
        { status: "คู่สมรสไม่มีเงินได้", statusvalue: 120000 }
    ];

    const [parentisopen, setParentisopen] = useState(false);
    const [selectedparent, setSelectedParent] = useState("--- กรุณาเลือก --- ▼");
    const [parentValue, setParentValue] = useState(0);

    // ตัวเลือกที่มี status และ statusvalue
    const parentoptions = [
        { status: "--- กรุณาเลือก --- ", parentValue: 0 },
        { status: "ไม่ประสงค์ใช้สิทธิลดหย่อน", parentValue: 0 },
        { status: "1 คน", parentValue: 30000 },
        { status: "2 คน", parentValue: 60000 },
    ];

    //Caredisabled  อุปการะเลี้ยงดูคนพิการหรือทุพพลภาพ
    const [caredisabledisopen, setCaredisabledisopen] = useState(false);
    const [selecteddisabled, setSelectedDisabled] = useState("--- กรุณาเลือก --- ▼");
    const [disabledValue, setDisabledValue] = useState(0);

    const disabledoptions = [
        { status: "--- กรุณาเลือก --- ", disabledValue: 0 },
        { status: "ไม่ประสงค์ใช้สิทธิลดหย่อน", disabledValue: 0 },
        { status: "1 คน", disabledValue: 60000 },
        { status: "2 คน", disabledValue: 120000 },
        { status: "3 คน", disabledValue: 180000 },
    ];




    useEffect(() => {
        //คำนวณและกำหนดเงื่อนไขการคำนวณภาษี40(1)
        const salary401 = parseFloat(formData.salary401.replace(/,/g, '')) || 0;
        const bonus401 = parseFloat(formData.bonus401.replace(/,/g, '')) || 0;
        const pension401 = parseFloat(formData.pension401.replace(/,/g, '')) || 0;
        let expense401 = ((salary401 * 12) + bonus401 + pension401) * 0.5;
        // ตรวจสอบเงื่อนไข
        if (expense401 > 100000) {
            expense401 = 100000;
        }
        setExpense401(expense401);
        //คำนวณและกำหนดเงื่อนไขการคำนวณภาษี40(2)
        const salary402 = parseFloat(formData.salary402.replace(/,/g, '')) || 0;
        let expense402 = salary402 * 0.5;
        if (expense402 > 100000) {
            expense402 = 100000;
        } setExpense402(expense402);
        const salary403 = parseFloat(formData.salary403.replace(/,/g, '')) || 0;
        //คำนวณและกำหนดเงื่อนไขการคำนวณภาษี40(3)
        let expense403 = salary403 * 0.5;
        if (expense403 > 100000) {
            expense403 = 100000;
        } setExpense403(expense403);
        // คำนวณและกำหนดเงื่อนไขการคำนวณภาษี40(4)
        const increase404 = parseFloat(formData.increase404.replace(/,/g, '')) || 0;
        const sell404 = parseFloat(formData.sell404.replace(/,/g, '')) || 0;
        const cost404 = parseFloat(formData.cost404.replace(/,/g, '')) || 0;
        // คำนวณ sell404 - cost404 แล้วทำเงื่อนไขว่าถ้าเป็นลบให้เป็น 0
        const sellCostDifference = Math.max(0, sell404 - cost404);
        // ถ้า sellCostDifference เป็นบวก จะรวมกับ increase404
        const calculatedExpense404 = increase404 + sellCostDifference;
        setExpense404(calculatedExpense404);
        // คำนวณและกำหนดเงื่อนไขการคำนวณภาษี40(5)
        const house405 = parseFloat(formData.house405.replace(/,/g, '')) || 0;
        const agricutural405 = parseFloat(formData.agricutural405.replace(/,/g, '')) || 0;
        const noagricutural405 = parseFloat(formData.noagricutural405.replace(/,/g, '')) || 0;
        const vehicle405 = parseFloat(formData.vehicle405.replace(/,/g, '')) || 0;
        const otherasset405 = parseFloat(formData.otherasset405.replace(/,/g, '')) || 0;
        const default405 = parseFloat(formData.default405.replace(/,/g, '')) || 0;
        const calculatedExpense405 =
            house405 * 0.3 +
            agricutural405 * 0.2 +
            noagricutural405 * 0.15 +
            vehicle405 * 0.3 +
            otherasset405 * 0.1 +
            default405 * 0.2;
        setExpense405(calculatedExpense405);
        // คำนวณและกำหนดเงื่อนไขการคำนวณภาษี 40(6)
        const physician406 = Math.max(0, parseFloat(formData.physician406.replace(/,/g, '')) || 0);
        const independent406 = Math.max(0, parseFloat(formData.independent406.replace(/,/g, '')) || 0);
        const calculatedExpense406 = Math.max(0, (physician406 * 0.6) + (independent406 * 0.3));
        setExpense406(calculatedExpense406);

        // คำนวณและกำหนดเงื่อนไขการคำนวณภาษี40(7)
        const salary407 = parseFloat(formData.salary407.replace(/,/g, '')) || 0;
        setExpense407(salary407 * 0.6);
        // คำนวณและกำหนดเงื่อนไขการคำนวณภาษี40(8)
        const salary408 = parseFloat(formData.salary408.replace(/,/g, '')) || 0;
        setExpense408(salary408 * 0.6);
        //ค้างไว้ยังไม่ต่อ
        const totalIncome401 = (salary401 * 12) + bonus401 + pension401;
        setResult(totalIncome401 > 0 ? totalIncome401 : 0);

        const totalincome =
            (salary401 * 12) + bonus401 + pension401 + salary402 + salary403 +
            increase404 + sell404 + house405 + agricutural405 +
            noagricutural405 + vehicle405 + otherasset405 +
            default405 + physician406 + independent406 +
            salary407 + salary408;
        setTotalincome(totalincome)
        const childs = Math.max(0, parseFloat(formData.childs.replace(/,/g, '')) || 0);
        const calchild = childs * 30000;
        setCalchild(calchild)
        const childafter = Math.max(0, parseFloat(formData.childafter.replace(/,/g, '')) || 0);
        const calchildafter = childafter * 60000;
        setCalchildafter(calchildafter)
        let pregnancyexpenses = Math.max(0, parseFloat(formData.pregnancyexpenses.replace(/,/g, '')) || 0);
        if (pregnancyexpenses > 60000) {
            pregnancyexpenses = 60000;
        }
        let parentshealthinsurance = Math.max(0, parseFloat(formData.parentshealthinsurance.replace(/,/g, '')) || 0);
        if (parentshealthinsurance > 15000) {
            parentshealthinsurance = 15000;
        }
        let socialSecurity = Math.max(0, parseFloat(formData.socialSecurity.replace(/,/g, '')) || 0);
        if (socialSecurity > 15600) {
            socialSecurity = 15600;
        }
        let providentfund = Math.max(0, parseFloat((formData.providentfund || "0").replace(/,/g, "")) || 0);
        providentfund = Math.min(providentfund, totalincome * 0.3);
        if (providentfund > 500000) {
            providentfund = 500000
        }

        let healthInsurance = Math.max(0, parseFloat(formData.healthInsurance.replace(/,/g, '')) || 0);
        if (healthInsurance > 25000) {
            healthInsurance = 25000;
        }
        let lifeInsurance = Math.max(0, parseFloat(formData.lifeInsurance.replace(/,/g, '')) || 0);
        if (lifeInsurance > 100000) {
            lifeInsurance = 100000;
        }
        let RMF = Math.max(0, parseFloat((formData.RMF || "0").replace(/,/g, "")) || 0);
        RMF = Math.min(RMF, totalincome * 0.3);
        if (RMF > 500000) {
            RMF = 500000
        }
        let SSF = Math.max(0, parseFloat((formData.SSF || "0").replace(/,/g, "")) || 0);
        SSF = Math.min(SSF, totalincome * 0.3);
        if (SSF > 200000) {
            SSF = 200000
        }
        let homeLoan = Math.max(0, parseFloat(formData.homeLoan.replace(/,/g, '')) || 0);
        if (homeLoan > 100000) {
            homeLoan = 100000;
        }
        let shopping = Math.max(0, parseFloat(formData.shopping.replace(/,/g, '')) || 0);
        if (shopping > 40000) {
            shopping = 40000;
        }
        // คำนวณค่า insurance
        let insurance = lifeInsurance + healthInsurance;
        // จำกัดค่าสูงสุดที่ 100,000
        insurance = Math.min(insurance, 100000);
        // อัปเดตค่าใน state
        setInsurance(insurance);


        let politicalDonations = Math.max(0, parseFloat(formData.politicalDonations.replace(/,/g, '')) || 0);
        if (politicalDonations > 10000) {
            politicalDonations = 10000;
        }















        const deduction = statusValue + calchild + calchildafter + pregnancyexpenses + parentshealthinsurance + parentValue +
            disabledValue + socialSecurity + providentfund + insurance + RMF + SSF + homeLoan + shopping + politicalDonations;
        setDeduction(deduction);



    }, [formData.salary401, formData.bonus401, formData.pension401, formData.salary402, formData.salary403,
    formData.increase404, formData.sell404, formData.cost404, formData.house405, formData.agricutural405, formData.noagricutural405, formData.vehicle405,
    formData.otherasset405, formData.default405, formData.physician406, formData.independent406, formData.salary407, formData.salary408, statusValue, formData.childs, formData.childafter, formData.pregnancyexpenses, formData.parentshealthinsurance,
        parentValue, disabledValue, formData.socialSecurity, formData.providentfund, formData.healthInsurance, formData.lifeInsurance, formData.RMF, formData.SSF, formData.homeLoan, formData.shopping, formData.politicalDonations
    ]);

    const limits = {
        pregnancyexpenses: 60000,
        parentshealthinsurance: 15000,
        socialSecurity: 15600,
        providentfund: 500000,
        healthInsurance: 25000,
        lifeInsurance: 100000,
        RMF: 500000,
        SSF: 200000,
        homeLoan: 100000,
        shopping: 40000,
        politicalDonations: 10000,
    };

    console.log("limits:", limits);
    const handleChange = (e) => {
        const { name, value } = e.target;

        // ตรวจสอบและฟอร์แมตค่าในฟิลด์ที่มีขีดจำกัด
        if (limits[name]) {
            const validatedValue = validateInput(name, value, limits[name]);
            const formattedValue = validatedValue.toLocaleString();
            setFormData(prev => ({ ...prev, [name]: formattedValue }));
        } else {
            const numericValue = value.replace(/[^0-9]/g, ''); // เอาเฉพาะตัวเลข
            const formattedValue = formatNumberWithComma(numericValue);
            setFormData(prev => ({ ...prev, [name]: formattedValue }));
        }

        if (name === 'salary401') {
            const annualValue = parseFloat(value.replace(/,/g, '')) * 12 || 0;
            setAnnualIncome(annualValue);
            localStorage.setItem('annualIncome', annualValue);
        }

        localStorage.setItem(name, value); // เก็บค่าใน localStorage
    };

    const validateInput = (name, value, limit) => {
        const parsedValue = parseFloat(value.replace(/,/g, '')) || 0;
        return Math.min(limit, Math.max(0, parsedValue)); // ตรวจสอบค่าที่ไม่เกินขีดจำกัด
    };


    useEffect(() => {
        const totalExpense =
            (expense401 || 0) + (expense402 || 0) + (expense403 || 0) +
            (expense404 || 0) + (expense405 || 0) + (expense406 || 0) +
            (expense407 || 0) + (expense408 || 0);
        setTotalexpense(totalExpense);
        // ป้องกันค่าติดลบ ถ้าติดลบให้เป็น 0
        const realincome = Math.max(0, (totalincome || 0) - totalExpense);
        setRealincome(realincome);

        const netincome = Math.max(0, realincome - deduction); // คำนวณ netincome
        setNetincome(netincome); // เก็บค่า netincome

        const caltenpercent = Math.max(0, netincome * 0.1);
        setCaltenpercent(caltenpercent)

        let donation = Math.max(0, parseFloat(formData.donation.replace(/,/g, '')) || 0);
        let caldonate = donation;
        if (donation > caltenpercent) {
            caldonate = caltenpercent;
        }
        setCaldonate(caldonate);  // ใช้ caldonate หลังการคำนวณ

        let publicDonations = Math.max(0, parseFloat(formData.publicDonations.replace(/,/g, '')) || 0);
        let calpublicdonate = publicDonations * 2;
        if (calpublicdonate > caltenpercent) {
            calpublicdonate = caltenpercent;
        }
        setCalpublicdonate(calpublicdonate);  // ใช้ calpublicdonate หลังการคำนวณ

        const realnetincome = Math.max(0, netincome - caldonate - calpublicdonate);
        setRealnetincome(realnetincome)






        let calculator = 0; // เริ่มต้นค่า calculator เป็น 0

        if (realnetincome <= 150000) {
            calculator = 0;
        } else if (realnetincome <= 300000) {
            calculator = (realnetincome - 150000) * 0.05;
        } else if (realnetincome <= 500000) {
            calculator = ((realnetincome - 300000) * 0.1) + 7500;
        } else if (realnetincome <= 750000) {
            calculator = ((realnetincome - 500000) * 0.15) + 27500;
        } else if (realnetincome <= 1000000) {
            calculator = ((realnetincome - 750000) * 0.2) + 65000;
        } else if (realnetincome <= 2000000) {
            calculator = ((realnetincome - 1000000) * 0.25) + 115000;
        } else if (realnetincome <= 5000000) {
            calculator = ((realnetincome - 2000000) * 0.3) + 365000;
        } else {
            calculator = ((realnetincome - 5000000) * 0.35) + 1265000;
        }

        setCalculator(calculator);







    }, [expense401, expense402, expense403, expense404, expense405, expense406, expense407, expense408, totalincome, deduction, calculator, realnetincome, calpublicdonate, caldonate, caltenpercent, formData.donation, formData.publicDonations]);

    const formatNumberWithComma = (value) => {
        if (!value) return '';
        let cleanedValue = value.replace(/,/g, '');
        if (!isNaN(cleanedValue) && cleanedValue !== '') {
            return parseInt(cleanedValue).toLocaleString();
        }
        return value;
    };
    // กำหนดขีดจำกัดสูงสุดสำหรับฟิลด์ต่าง ๆ


    //สำหรับแสดงpopup
    const handleIconClick = useCallback(() => {
        setShowPopup(true);
    }, []);

    //สำหรับปิดpopup
    const handleClosePopup = useCallback(() => {
        setShowPopup(false);
    }, []);

    //สำหรับคำสั่งกดเพื่อแสดงฟอร์มเพิ่มเติม
    const handleOptionChange = (event) => {
        setShowAdditionalInfo(event.target.value === 'มี');
    };
    // ฟังก์ชันสำหรับการสลับสถานะการแสดงข้อมูล
    const handleCheckboxChange = (type) => {
        switch (type) {
            case '40_2':
                setShowAdditionalInfo40_2(!showAdditionalInfo40_2);
                break;
            case '40_3':
                setShowAdditionalInfo40_3(!showAdditionalInfo40_3);
                break;
            case '40_4':
                setShowAdditionalInfo40_4(!showAdditionalInfo40_4);
                break;
            case '40_5':
                setShowAdditionalInfo40_5(!showAdditionalInfo40_5);
                break;
            case '40_6':
                setShowAdditionalInfo40_6(!showAdditionalInfo40_6);
                break;
            case '40_7':
                setShowAdditionalInfo40_7(!showAdditionalInfo40_7);
                break;
            case '40_8':
                setShowAdditionalInfo40_8(!showAdditionalInfo40_8);
                break;
            default:
                break;
        }
    };
    return (
        <Main>
            <div className="container">
                <div className="page-format">
                    <div className="header-top text-white kanit-regular" style={{ position: 'relative' }}>
                        รายได้ทั้งหมดของคุณ (เงินได้พึงประเมิน)
                        <button onClick={handleIconClick} className="info-icon" aria-label="info">
                            <i className="fas fa-info-circle" aria-label="info"></i>
                        </button>
                        {showPopup && (
                            <div className="popup">
                                <div className="popup-content">
                                    <button onClick={handleClosePopup} className="floating-close-btn" aria-label="Close">✖</button>
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
                                <input className="box-form" type="text" name="salary401" value={formData.salary401} onChange={handleChange} />
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
                                <input className="box-form" type="text" name="bonus401" value={formData.bonus401} onChange={handleChange} />
                                <span className="kanit-regular text-form-span-content">บาท</span>
                            </div>
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <label className="kanit-regular text-form-leble-content">บำเหน็จ</label>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <input className="box-form" type="text" name="pension401" value={formData.pension401} onChange={handleChange} />
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
                                <span className="kanit-regular text-form-leble-content">คุณมีเงินได้ประเภทอื่นๆ หรือไม่</span>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <label className='kanit-regular text-form-span-content'>
                                        <input type="radio" name="option2" value="มี" onChange={handleOptionChange} /> มี
                                    </label>
                                    <label className='kanit-regular text-form-span-content'>
                                        <input type="radio" name="option2" value="ไม่มี" onChange={handleOptionChange} /> ไม่มี
                                    </label>
                                </div>
                            </div>
                            {showAdditionalInfo && (
                                <div className="additional-info">
                                    <div className="info-header">
                                        <div className="form-check">
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <input type="checkbox" id="checkbox40_2" checked={showAdditionalInfo40_2} onChange={() => handleCheckboxChange('40_2')} />
                                                <label className='kanit-regular text-form-leble-content' htmlFor="checkbox40_2"> 40(2) ค่านายหน้า เบี้ยประชุม หรือเงินได้จากหน้าที่ หรือการรับทำงานให้</label>
                                                {showAdditionalInfo40_2 && (
                                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                        <input className="box-form" type="text" name="salary402" value={formData.salary402} onChange={handleChange} />
                                                        <span className="kanit-regular text-form-span-content">บาท</span>
                                                    </div>
                                                )}
                                            </div>
                                            <br />
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <input type="checkbox" id="checkbox40_3" checked={showAdditionalInfo40_3} onChange={() => handleCheckboxChange('40_3')} />
                                                <label className='kanit-regular text-form-leble-content' htmlFor="checkbox40_3">40(3) เงินได้จากค่าลิขสิทธิ์หรือเงินรายปี</label>
                                                {showAdditionalInfo40_3 && (
                                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                        <input className="box-form" type="text" name="salary403" value={formData.salary403} onChange={handleChange} />
                                                        <span className="kanit-regular text-form-span-content">บาท</span>
                                                    </div>
                                                )}
                                            </div>
                                            <br />
                                            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <input type="checkbox" id="checkbox40_4" checked={showAdditionalInfo40_4} onChange={() => handleCheckboxChange('40_4')} />
                                                    <label className='kanit-regular text-form-leble-content' htmlFor="checkbox40_4" style={{ display: "block" }}>
                                                        40(4) เงินได้จากการออมการลงทุน
                                                    </label>
                                                </div>
                                                {showAdditionalInfo40_4 && (
                                                    <div >
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * เงินได้ที่เป็นดอกเบี้ย เงินปันผล เครดิตภาษีเงินปันผล ฯลฯ
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="increase404" value={formData.increase404} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * เงินค่าขายหน่วยลงทุน LTF / RMF / SSF
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="sell404" value={formData.sell404} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * ต้นทุนที่ซื้อ LTF / RMF / SSF
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="cost404" value={formData.cost404} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <br />
                                            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <input type="checkbox" id="checkbox40_5" checked={showAdditionalInfo40_5} onChange={() => handleCheckboxChange('40_5')} />
                                                    <label className='kanit-regular text-form-leble-content' htmlFor="checkbox40_5" style={{ display: "block" }}>
                                                        40(5) เงินได้หรือประโยชน์จากการให้เช่าทรัพย์สิน
                                                    </label>
                                                </div>
                                                {showAdditionalInfo40_5 && (
                                                    <div >
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * บ้าน โรงเรือน สิ่งปลูกสร้าง หรือเรือนแพ
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="house405" value={formData.house405} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * ที่ดินที่ใช้ในการเกษตรกรรม
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="agricutural405" value={formData.agricutural405} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * ที่ดินที่มิใช้ในการเกษตรกรรม
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="noagricutural405" value={formData.noagricutural405} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                *  ยานพาหนะ
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="vehicle405" value={formData.vehicle405} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * ทรัพย์สินอย่างอื่น
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="otherasset405" value={formData.otherasset405} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * การผิดสัญญาเช่าซื้อทรัพย์สิน หรือซื้อขายเงินผ่อน
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="default405" value={formData.default405} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <br />
                                            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <input type="checkbox" id="checkbox40_6" checked={showAdditionalInfo40_6} onChange={() => handleCheckboxChange('40_6')} />
                                                    <label className='kanit-regular text-form-leble-content' htmlFor="checkbox40_6" style={{ display: "block" }}>
                                                        40(6) เงินได้จากวิชาชีพอิสระ
                                                    </label>
                                                </div>
                                                {showAdditionalInfo40_6 && (
                                                    <div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * การประกอบโรคศิลป (แพทย์)
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="physician406" value={formData.physician406} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                                            <label className='kanit-light text-form-leble-content'>
                                                                * วิชาชีพอิสระอื่นๆ (นักกฎหมาย วิศวกร สถาปนิก นักบัญชี ผู้ผลิตประณีตศิลปกรรม)
                                                            </label>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                                <input className="box-form" type="text" name="independent406" value={formData.independent406} onChange={handleChange} />
                                                                <span className="kanit-regular text-form-span-content">บาท</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>



                                            <br />
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <input type="checkbox" id="checkbox40_7" checked={showAdditionalInfo40_7} onChange={() => handleCheckboxChange('40_7')} />
                                                <label className='kanit-regular text-form-leble-content' htmlFor="checkbox40_7">40(7) เงินได้จากการรับเหมาที่ผู้รับเหมาต้องจัดหาสัมภาระในส่วนสำคัญนอกจากเครื่องมือ</label>
                                                {showAdditionalInfo40_7 && (
                                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                        <input className="box-form" type="text" name="salary407" value={formData.salary407} onChange={handleChange} />
                                                        <span className="kanit-regular text-form-span-content">บาท</span>
                                                    </div>
                                                )}
                                            </div>
                                            <br />
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <input type="checkbox" id="checkbox40_8" checked={showAdditionalInfo40_8} onChange={() => handleCheckboxChange('40_8')} />
                                                <label className='kanit-regular text-form-leble-content' htmlFor="checkbox40_8">40(8) เงินได้อื่นๆ</label>
                                                {showAdditionalInfo40_8 && (
                                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                                                        <input className="box-form" type="text" name="salary408" value={formData.salary408} onChange={handleChange} />
                                                        <span className="kanit-regular text-form-span-content">บาท</span>
                                                    </div>
                                                )}
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="dashed-line">
                                <br />
                                <label className="kanit-regular text-form-leble-content">รวมเงินได้</label>
                                <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                                    {totalincome.toLocaleString()}   บาท
                                </span>
                                <br />

                                <label className="kanit-regular text-form-leble-content">หัก เงินได้ที่ได้รับยกเว้น และค่าใช้จ่ายตามประเภทของเงินได้ (แบบเหมาจ่าย)</label>
                                <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                                    {totalexpense.toLocaleString()} บาท
                                </span>

                                <br />
                                <label className="kanit-regular text-form-leble-content">เงินได้พึงประเมินหลังหักค่าใช้จ่าย  (เหมาจ่าย)</label>
                                <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                                    {realincome.toLocaleString()}   บาท
                                </span>
                            </div>
                            <div className="dashed-line" />
                            <br />
                        </div>
                    </form>

                    <div className="header-top text-white kanit-regular" style={{ position: 'relative' }}>
                        รายการลดหย่อนภาษีพื้นฐาน
                    </div>
                    <form className="incomepage">
                        <div >
                            <div className="row" style={{ paddingTop: '10px', display: "flex", alignItems: "center" }}>
                                <div className="col-4">
                                    <label className="kanit-regular text-form-leble-content ">สถานภาพสมรส</label>

                                </div>
                                <div className="col-4 " style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <button className="dropdown-button kanit-regular text-form-leble-content" onClick={(e) => {
                                        e.preventDefault(); // ป้องกัน submit form
                                        setIsOpen(!isOpen);
                                    }}>
                                        {selectedStatus}
                                    </button>
                                    {isOpen && (
                                        <ul className="dropdown-list">
                                            {options.map((option, index) => (
                                                <li key={index} className="dropdown-item"
                                                    onClick={() => {
                                                        setSelectedStatus(option.status);
                                                        setStatusValue(option.statusvalue);
                                                        setIsOpen(false); // ปิด dropdown เมื่อเลือกค่า
                                                    }}
                                                >
                                                    {option.status}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="col-4"></div>
                            </div>
                            <div >
                                <label className="kanit-regular text-form-leble-content">ผู้มีเงินได้ และ/หรือ คู่สมรส</label>
                                <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                                    {statusValue !== null && (
                                        <div className="selected-value">{statusValue.toLocaleString()} บาท </div>
                                    )}
                                </span>
                                <br />
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "space-between" }}>
                                    <label className="kanit-regular text-form-leble-content">บุตร</label>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span className="kanit-regular text-form-span-content" style={{ margin: '0px 6px 0px 2px' }}>จำนวน</span>
                                        <input className="box-form-for-input" type="text" name="childs" value={formData.childs} onChange={handleChange} />
                                        <span className="kanit-regular text-form-span-content">คน</span>
                                    </div>
                                    <span className="kanit-regular text-form-span-content" style={{ textAlign: 'right' }}>
                                        {calchild.toLocaleString()} บาท
                                    </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "space-between", padding: '10px 0px 0px 0px' }}>
                                    <label className="kanit-regular text-form-leble-content">บุตรตั้งแต่คนที่ 2 เป็นต้นไปที่เกิดในหรือหลังปี พ.ศ. 2561</label>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span className="kanit-regular text-form-span-content" style={{ margin: "0px 6px 0px 2px" }}>จำนวน</span>
                                        <input className="box-form-for-input" type="text" name="childafter" value={formData.childafter} onChange={handleChange} />
                                        <span className="kanit-regular text-form-span-content">คน</span>
                                    </div>
                                    <span className="kanit-regular text-form-span-content" style={{ textAlign: 'right' }}>
                                        {calchildafter.toLocaleString()} บาท
                                    </span>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: '10px 0px 0px 0px' }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <label className="kanit-regular text-form-leble-content">ค่าฝากครรภ์หรือคลอดบุตร (ตั้งแต่ปี พ.ศ. 2561 เป็นต้นไป)</label>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <input className="box-form" type="text" name="pregnancyexpenses" value={formData.pregnancyexpenses} onChange={handleChange} />
                                        <span className="kanit-regular text-form-span-content">บาท</span>
                                    </div>
                                </div>

                                <div className="row" style={{ paddingTop: '10px', display: "flex", alignItems: "center" }}>
                                    <div className="col-4">
                                        <label className="kanit-regular text-form-leble-content ">บิดา และ/หรือ มารดาของผู้มีเงินได้</label>
                                    </div>
                                    <div className="col-4 " style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <button
                                            className="dropdown-button kanit-regular text-form-leble-content"
                                            onClick={(e) => {
                                                e.preventDefault(); // ป้องกัน submit form
                                                setParentisopen(!parentisopen);
                                            }}
                                        >
                                            {selectedparent}
                                        </button>
                                        {parentisopen && (
                                            <ul className="dropdown-list">
                                                {parentoptions.map((parentOption, index) => (
                                                    <li
                                                        key={index}
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            setSelectedParent(parentOption.status);
                                                            setParentValue(parentOption.parentValue);
                                                            setParentisopen(false); // ปิด dropdown เมื่อเลือกค่า
                                                        }}
                                                    >
                                                        {parentOption.status}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="col-4">
                                        <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                                            {parentValue !== null && (
                                                <div className="selected-value">{parentValue.toLocaleString()} บาท </div>
                                            )}
                                        </span></div>
                                </div>

                                <div className="row" style={{ paddingTop: '10px', display: "flex", alignItems: "center" }}>
                                    <div className="col-4">
                                        <label className="kanit-regular text-form-leble-content ">
                                            อุปการะเลี้ยงดูคนพิการหรือทุพพลภาพ
                                        </label>
                                    </div>

                                    <div className="col-4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <button
                                            className="dropdown-button kanit-regular text-form-leble-content"
                                            onClick={(e) => {
                                                e.preventDefault(); // ป้องกัน submit form
                                                setCaredisabledisopen(!caredisabledisopen);
                                            }}
                                        >
                                            {selecteddisabled}
                                        </button>

                                        {caredisabledisopen && (
                                            <ul className="dropdown-list">
                                                {disabledoptions.map((option, index) => (
                                                    <li
                                                        key={index}
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            setSelectedDisabled(option.status);
                                                            setDisabledValue(option.disabledValue);
                                                            setCaredisabledisopen(false); // ปิด dropdown เมื่อเลือกค่า
                                                        }}
                                                    >
                                                        {option.status}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="col-4">
                                        <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                                            {disabledValue !== null && (
                                                <div className="selected-value">{disabledValue.toLocaleString()} บาท</div>
                                            )}
                                        </span>
                                    </div>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: '10px 0px 0px 0px' }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <label className="kanit-regular text-form-leble-content">ประกันสุขภาพบิดามารดาของผู้มีเงินได้และคู่สมรส</label>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <input className="box-form" type="text" name="parentshealthinsurance" value={formData.parentshealthinsurance} onChange={handleChange} />
                                        <span className="kanit-regular text-form-span-content">บาท</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </form>
                    <div className="header-top text-white kanit-regular" style={{ position: 'relative' }}> ค่าลดหย่อนด้านการออมการลงทุน </div>
                    <form className="incomepage">
                        <div >
                            {/* ประกันสังคม */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: '10px 0px 0px 0px' }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <label className="kanit-regular text-form-leble-content">ประกันสังคม</label>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="socialSecurity" value={formData.socialSecurity} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            {/* กองทุนสำรองเลี้ยงชีพ / กบข. */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">กองทุนสำรองเลี้ยงชีพ / กบข.</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="providentfund" value={formData.providentfund} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            <p className='kanit-light popup-text-content-2'>** สามารถนำมาลดหย่อนได้ไม่เกิน 30% ของรายได้ สูงสุดไม่เกิน 500,000.00 บาท</p>
                            {/* ประกันสุขภาพ */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">ประกันสุขภาพ</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="healthInsurance" value={formData.healthInsurance} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            {/* ประกันชีวิต */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">ประกันชีวิต</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="lifeInsurance" value={formData.lifeInsurance} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">ประกันสุขภาพและประกันชีวิตที่สามารถลดหย่อนได้</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                                        {insurance.toLocaleString()}   บาท
                                    </span>
                                </div>
                            </div>
                            {/*กองทุนรวมเพื่อการเลี้ยงชีพ (RMF)*/}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">กองทุนรวมเพื่อการเลี้ยงชีพ (RMF)</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="RMF" value={formData.RMF} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            <p className='kanit-light popup-text-content-2'>** สามารถนำมาลดหย่อนได้ไม่เกิน 30% ของรายได้ สูงสุดไม่เกิน 500,000.00 บาท</p>
                            {/* กองทุนรวมเพื่อการออม (SSF) */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">กองทุนรวมเพื่อการออม (SSF)</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="SSF" value={formData.SSF} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            <p className='kanit-light popup-text-content-2'>** สามารถนำมาลดหย่อนได้ไม่เกิน 30% ของรายได้ สูงสุดไม่เกิน 200,000.00 บาท</p>

                        </div>
                    </form>

                    <div className="header-top text-white kanit-regular" style={{ position: 'relative' }}> ค่าลดหย่อนอื่นๆ และค่าลดหย่อนพิเศษในแต่ละปี (ถ้ามี)
                    </div>
                    <form className="incomepage">
                        <div >
                            {/* ดอกเบี้ยค่าบ้าน */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">ดอกเบี้ยกู้ซื้อบ้าน</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="homeLoan" value={formData.homeLoan} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            {/* ค่าลดหย่อนพิเศษในแต่ละปี เช่น Thai ESG / ช้อปดีมีคืน เป็นต้น */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">ค่าลดหย่อนพิเศษในแต่ละปี เช่น Thai ESG / ช้อปดีมีคืน เป็นต้น </label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="shopping" value={formData.shopping} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br />
                    <div className="header-top text-white kanit-regular" style={{ position: 'relative' }}> ค่าลดหย่อนอื่นๆ และค่าลดหย่อนพิเศษในแต่ละปี (ถ้ามี)
                    </div>
                    <form className="incomepage">
                        <div >
                            {/* เงินบริจาคพรรคการเมือง */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content"> เงินบริจาคพรรคการเมือง </label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="politicalDonations" value={formData.politicalDonations} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            {/* เงินบริจาคสนับสนุนการศึกษา / กีฬา /การพัฒนาสังคม / โรงพยาบาลรัฐ*/}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content"> เงินบริจาคสนับสนุนการศึกษา / กีฬา /การพัฒนาสังคม / โรงพยาบาลรัฐ</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="publicDonations" value={formData.publicDonations} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                            {/* เงินบริจาคทั่วไป */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
                                <label className="kanit-regular text-form-leble-content">ค่าลดหย่อนพิเศษในแต่ละปี เช่น Thai ESG / ช้อปดีมีคืน เป็นต้น </label>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input className="box-form" type="text" name="donation" value={formData.donation} onChange={handleChange} />
                                    <span className="kanit-regular text-form-span-content">บาท</span>
                                </div>
                            </div>
                        </div>
                    </form>




                    <div className="dashed-line">
                        <label className="kanit-regular text-form-leble-content">สามารถลดหย่อนได้</label>
                        <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                            {deduction.toLocaleString()}   บาท
                        </span>
                        <br />
                        <label className="kanit-regular text-form-leble-content">รายได้สุทธิรายได้สุทธิหลังหักค่าลดหย่อน</label>
                        <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                            {netincome.toLocaleString()}   บาท
                        </span>
                        <br /><br />
                        <table className=" table-paytax-details">
                            <tbody>
                                <tr className="kanit-regular about-lower-head-text-content">
                                    <td>เงินได้สุทธิต่อปี</td>
                                    <td>อัตราภาษีเงินได้บุคคลธรรมดา</td>
                                </tr>
                                <tr className="kanit-light about-text-content">
                                    <td>0-150,000</td>
                                    <td>ได้รับการยกเว้น</td>
                                </tr>
                                <tr className="kanit-light about-text-content">
                                    <td>150,001-300,000</td>
                                    <td>5%</td>
                                </tr>
                                <tr className="kanit-light about-text-content">
                                    <td>300,001-500,000</td>
                                    <td>10%</td>
                                </tr>
                                <tr className="kanit-light about-text-content">
                                    <td>500,001-750,000</td>
                                    <td>15%</td>
                                </tr>
                                <tr className="kanit-light about-text-content">
                                    <td>750,001-1,000,000</td>
                                    <td>20%</td>
                                </tr>
                                <tr className="kanit-light about-text-content">
                                    <td>1,000,001-2,000,000</td>
                                    <td>25%</td>
                                </tr>
                                <tr className="kanit-light about-text-content">
                                    <td>2,000,001-5,000,000</td>
                                    <td>30%</td></tr>
                                <tr className="kanit-light about-text-content">
                                    <td>5,000,001 บาทขึ้นไป</td>
                                    <td>35%</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <label className="kanit-regular text-form-leble-content">รายได้สุทธิรายได้สุทธิ</label>
                        <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                            {realnetincome.toLocaleString()}   บาท
                        </span>
                        <br />
                        <label className="kanit-regular text-form-leble-content">ภาษีที่ต้องจ่าย</label>
                        <span className="kanit-regular text-form-span-content" style={{ float: 'right' }}>
                            {calculator.toLocaleString()}   บาท
                        </span>
                    </div>





                </div>
            </div >
        </Main >
    );
};

export default Personcaltex;