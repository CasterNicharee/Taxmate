import React from "react";
import Main from "../component/main";
import './Style.css'; // Adjust the path if necessary
import { Button } from "bootstrap";

function Home() {
    return (
        <Main>

            <div className="row mb-6 align-items-center">
                <div className="col-6">
                    <img className="img-fluid img-full-col" src="./asset/homepage1.jpg" alt="homepage example" />
                </div>
                <div className="col-6">
                    <h3 className="kanit-bold text-bodyhome">ภาษีเงินได้บุคคลธรรมดา</h3>
                    <p className="kanit-light bordered-paragraph">
                        ภาษีบุคคลธรรมดากำหนดยื่นแบบแสดงรายการภาษีช่วง มกราคม - มีนาคม
                        <br />
                        ภาษีเงินได้บุคคลธรรมดา คือ ภาษีที่จัดเก็บจากบุคคลทั่วไปที่มีรายได้ไม่ว่าจะเป็นประเภทใดก็ตาม หากไม่มีกฎหมายกำหนดข้อยกเว้น รายได้เหล่านั้นจะต้องถูกนำมาคำนวณเพื่อเสียภาษี ภาษีเงินได้บุคคลธรรมดานี้ถูกจัดเก็บเป็นรายปี
                        โดยผู้มีรายได้ในแต่ละปีจะต้องยื่นแบบแสดงรายการภาษีเงินได้ภายในช่วงเดือนมกราคมถึงมีนาคมของปีถัดไป รายได้ที่ต้องเสียภาษีรวมถึงเงินเดือน ค่าจ้าง โบนัส หรือรายได้จากการประกอบธุรกิจต่าง ๆ
                        ในบางกรณี กฎหมายกำหนดให้ผู้มีรายได้ต้องยื่นแบบภาษีและชำระภาษีล่วงหน้าครึ่งปีแรก เช่น ในกรณีของผู้ประกอบธุรกิจส่วนตัวหรือบุคคลที่มีรายได้เสริมจากแหล่งอื่น ๆ การยื่นภาษีครึ่งปีช่วยลดภาระในการชำระภาษีเป็นก้อนใหญ่ในช่วงสิ้นปี และเป็นการทยอยชำระภาษีตามรายได้ที่เกิดขึ้นระหว่างปี
                        นอกจากนี้ กฎหมายยังมีการกำหนดให้ผู้จ่ายเงิน เช่น นายจ้าง หักภาษี ณ ที่จ่ายจากเงินเดือนหรือรายได้ที่จ่ายให้พนักงานหรือผู้รับเงินอื่น ๆ การหักภาษี ณ ที่จ่ายช่วยให้การชำระภาษีเป็นไปอย่างต่อเนื่องและลดภาระของผู้เสียภาษีในการจัดการภาษีเองทั้งหมด
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="text-center ">
                    <div className="col-md-8 p-lg-5 mx-auto my-5 ">
                        <p className=" kanit-light ">

                        </p>

                    </div>

                </div>
            </div>



        </Main >
    );
}

export default Home;