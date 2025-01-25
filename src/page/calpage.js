import Main from "../component/main";
import './Style.css'; // Adjust the path if necessary

import React, { useState } from "react";

function TaxCalculator() {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [costpb, setCostpb] = useState(0); // ค่าใช้จ่ายบวกกลับ
    const [costlb, setCostlb] = useState(0); // ค่าใช้จ่ายหักกลับ
    const [taxResult, setTaxResult] = useState(null); // ใช้สำหรับเก็บข้อมูลที่คำนวณแล้ว

    // ฟังก์ชันสำหรับการแปลงตัวเลขให้มีคั่นหลักพัน
    const formatNumber = (num) => {
        return parseFloat(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const calculateTax = () => {
        const profit = (income - expenses).toFixed(2); // กำไรก่อนภาษี
        const realprofit = (parseFloat(profit) + parseFloat(costpb)).toFixed(2); // กำไรสุทธิตามประมวลรัษฎากร
        let finaltax = 0;
        let tax = 0;
        let message = "";
        let secondtax = 0;


        if (realprofit <= 300000) {
            message = "คุณได้รับการยกเว้นภาษี";
        } else if (realprofit <= 3000000) {
            const x = (realprofit - 300000).toFixed(2);
            tax = (x * 0.15).toFixed(2);
            finaltax = (tax - costlb).toFixed(2);
            if (tax < costlb) {
                secondtax = (costlb - tax).toFixed(2);
                message = `ภาษีที่คุณชำระไว้เกิน   ${formatNumber(secondtax)} บาท`;
            } else
                message = `คุณต้องจ่ายภาษีจำนวน   ${formatNumber(finaltax)} บาท`;
        } else if (realprofit > 3000000) {
            const a = (realprofit - 3000000).toFixed(2);
            const b = (2700000 * 0.15).toFixed(2);
            const c = (a * 0.2).toFixed(2);
            tax = (parseFloat(b) + parseFloat(c)).toFixed(2);
            finaltax = (tax - costlb).toFixed(2);
            if (tax < costlb) {
                secondtax = (costlb - tax).toFixed(2);
                message = `ภาษีที่คุณชำระไว้เกิน   ${formatNumber(secondtax)} บาท`;
            } else
                message = `คุณต้องจ่ายภาษีจำนวน   ${formatNumber(finaltax)} บาท`;
        }

        // จัดเก็บข้อมูลทั้งหมดใน taxResult
        setTaxResult({
            income: formatNumber(income),
            expenses: formatNumber(expenses),
            profit: formatNumber(profit),
            realprofit: formatNumber(realprofit),
            tax: formatNumber(tax),
            message: message
        });
    };

    return (
        <Main>
            <div className="container">

                <h1 className="kanit-bold"> คำนวณภาษีนิติบุคคล </h1>

                <br />
                <form className="form-container">
                    <div className="form-group">
                        <label className="kanit-semibold">รายได้ทั้งหมด</label>
                        <input type="number" className="form-control" placeholder="กรุณากรอกรายได้ทั้งหมด"
                            value={income} onChange={(e) => setIncome(parseFloat(e.target.value))} />
                    </div>
                    <div className="form-group">
                        <label className="kanit-semibold">รายจ่ายทั้งหมด</label>
                        <input type="number" className="form-control" placeholder="กรุณากรอกรายจ่ายทั้งหมด"
                            value={expenses} onChange={(e) => setExpenses(parseFloat(e.target.value))} />
                    </div>
                </form>
                <form className="form-container">
                    <div className="form-group">
                        <label className="kanit-semibold">ค่าใช้จ่ายบวกกลับ</label>
                        <input type="number" className="form-control" placeholder="กรุณากรอกค่าใช้จ่ายบวกกลับทั้งหมด"
                            value={costpb} onChange={(e) => setCostpb(parseFloat(e.target.value))} />
                    </div>
                    <div className="form-group">
                        <label className="kanit-semibold">ค่าใช้จ่ายหักกลับ</label>
                        <input type="number" className="form-control" placeholder="กรุณากรอกค่าใช้จ่ายหักกลับทั้งหมด"
                            value={costlb} onChange={(e) => setCostlb(parseFloat(e.target.value))} />
                    </div>
                </form>
                <br />
                <button className="calbutton kanit-bold btn-lg" onClick={calculateTax}> คำนวณ </button>

                {/* ส่วนแสดงผลการคำนวณ */}
                {taxResult && (
                    <div className="result">
                        <h2 className="kanit-bold headresult">ผลลัพธ์การคำนวณภาษี</h2>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <p style={{ marginRight: '100px' }}><b>รายได้ทั้งหมด:</b> {taxResult.income} บาท</p>
                            <p><b>รายจ่ายทั้งหมด:</b> {taxResult.expenses} บาท</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <p style={{ marginRight: '100px' }}><b>กำไรก่อนค่าใช้จ่ายภาษีเงินได้:</b> {taxResult.profit} บาท</p>
                            <p><b>กำไรสุทธิตามประมวลรัษฎากร:</b> {taxResult.realprofit} บาท</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <p><b>ภาษีเงินได้:</b> {taxResult.tax} บาท</p>
                        </div>
                        <h5 className=" kanit-bold headresult "><b>{taxResult.message}</b></h5>
                    </div>
                )}
            </div>
        </Main>
    );
}

export default TaxCalculator;
