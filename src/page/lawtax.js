import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Main from "../component/main";
import './abouttax.css'; // Adjust the path if necessary
import Modal from "react-bootstrap/Modal"; // ถ้าใช้ Bootstrap

const Lawtax = () => {
    // อาร์เรย์ของภาพที่ต้องการแสดง
    const images = [
        { src: '/asset/Taxpayers.jpg', alt: 'First slide' },
        { src: '/asset/Type-of-income-1.jpg', alt: 'Second slide' },
        { src: '/asset/Type-of-income-2.jpg', alt: 'Third slide' },
        { src: '/asset/Deductible-Items-1.jpg', alt: 'Fourth slide' },
        { src: '/asset/Deductible-Items-2.jpg', alt: 'Fifth slide' }
    ];

    // ตัวเลือกของ Slick carousel
    const settings = {
        autoplay: true,        // ✅ เปิดให้เลื่อนอัตโนมัติ
        autoplaySpeed: 2000,   // ⏳ ความเร็วในการเลื่อน (3 วินาที)
        infinite: true,        // 🔄 เลื่อนได้ต่อเนื่อง
        slidesToShow: 3,
        slidesToScroll: 1,     // ✅ แก้เป็น 1 เพื่อเลื่อนได้ลื่นไหลขึ้น
        dots: true,
        arrows: false,
        speed: 500,
        draggable: true,
        swipeToSlide: false,
    };


    const [selectedImage, setSelectedImage] = useState(null);
    const [show, setShow] = useState(false);

    const handleShow = (image) => {
        setSelectedImage(image);
        setShow(true);
    };

    const handleClose = () => setShow(false);


    return (
        <Main>
            <img className="slider" src="/asset/slider-2.png" alt="" />
            <div className="container aboutpageformat">
                <div style={{ padding: '50px 0px 50px 0px' }}>
                    <p className="kanit-semibold about-upper-head-text-content">ภาษีเงินได้บุคคลธรรมดาคืออะไร</p>
                    <p className="about-text-content kanit-light"> "ภาษีที่จัดเก็บจากบุคคลทั่วไปที่มีเงินได้ไม่ว่าประเภทใด ชนิดใดถ้าไม่มีกฎหมายยกเว้นให้แล้วก็อยู่ในข่ายต้องเสียภาษี หรือคือ
                        ภาษีที่จัดเก็บจากหน่วยภาษีที่มีลักษณะพิเศษตามที่กฎหมายกำหนดและมีรายได้เกิดขึ้นตามเกณฑ์ที่กำหนด ซึ่งโดยปกติจัดเก็บเป็นรายปีรายได้ที่ได้รับในปีใด ๆ
                        ผู้มีเงินได้มีหน้าที่ต้องนำไปแสดงรายการด้วยตนเองตามแบบแสดงรายการภาษีที่กำหนดภายในเดือนมกราคมถึงเดือนมีนาคมของปีถัดไปผู้มีเงินได้บางกรณีกฎหมายยังกำหนดให้ยื่นแบบฯเสียภาษี
                        ตอนครึ่งปีสำหรับรายได้ที่เกิดขึ้นจริงในช่วงครึ่งปีแรกเพื่อเป็นการบรรเทาภาระภาษีที่ต้องชำระและเงินได้บางกรณีกฎหมายยังกำหนดให้ผู้จ่ายทำหน้าที่หักภาษีณ ที่จ่ายจากเงินได้ที่จ่ายเพื่อให้มีการทยอยชำระภาษีด้วย"
                    </p>
                </div>


                <p className="kanit-semibold about-upper-head-text-content">ใครมีหน้าที่เสียภาษีเงินได้บุคคลธรรมดา ??</p>
                <p className="about-text-content kanit-light"> "ตามกฎหมายประมวลรัษฎากรกำหนดให้บุคคลธรรมดาที่มีเงินได้มีหน้าที่ต้องเสียภาษีโดยได้กำหนดหน่วยภาษีเงินได้ไว้ ได้แก่"</p>
                <p className="about-text-content kanit-light">
                    <ol>
                        <li>บุคคลธรรมดา</li>
                        <li>ห้างหุ้นส่วนสามัญที่ไม่ใช่นิติบุคคล</li>
                        <li>คณะบุคคลที่ไม่ใช่นิติบุคคล</li>
                        <li>กองมรดกที่ยังไม่ได้แบ่ง</li>
                        <li>ผู้ถึงแก่ความตายระหว่างปีภาษี</li>
                    </ol>
                </p>
                <br />
                <div>
                    <h4 className="kanit-semibold about-upper-head-text-content">หลักการจัดเก็บภาษีเงินได้บุคคลธรรมดา</h4>
                    <p className="about-text-content kanit-light"> การจัดเก็บภาษีเงินได้บุคคลธรรมดามีหลักการจัดเก็บ แบ่งเป็น 2 หลักการ ได้แก่ </p>
                    <div style={{ padding: "0px 0px 0px 20px" }}>
                        <h5 className="kanit-regular about-lower-head-text-content">หลักแหล่งเงินได้ (Source Rule) </h5>
                        <p className="about-text-content kanit-light">สำหรับเงินได้ที่เกิดขึ้นในประเทศไทย เนื่องจากหน้าที่งาน หรือกิจการที่ทำในประเทศไทย หรือกิจการของนายจ้างในประเทศไทย หรือ ทรัพย์สินที่อยู่ในประเทศไทย</p>
                        <h5 className="kanit-regular about-lower-head-text-content">หลักถิ่นที่อยู่ (Resident Rule)  </h5>
                        <p className="about-text-content kanit-light">สำหรับผู้ที่มีถิ่นที่อยู่ในประเทศไทยรวมกันถึง 180 วัน ในปีภาษีใดและมีเงินได้จากแหล่งเงินได้ในต่างประเทศ เนื่องจากหน้าที่งานหรือกิจการที่ทำในต่างประเทศ หรือเนื่องจากทรัพย์สินที่อยู่ในต่างประเทศ
                            และผู้มีเงินได้นำเงินได้นั้นเข้ามาในประเทศไทยภายในปีภาษีเดียวกับปีที่เกิดเงินได้นั้น
                        </p>
                    </div>
                </div><br />
                <div>
                    <h4 className="kanit-semibold about-upper-head-text-content">ประเภทภาษีเงินได้บุคคลธรรมดา</h4>
                    <p className="about-text-content kanit-light"> เงินได้ที่ต้องเสียภาษีเงินได้บุคคลธรรมดา เรียกว่า เงินได้พึงประเมิน หมายถึง เงินได้อันเข้าลักษณะพึงต้องเสียภาษีเงินได้ ซึ่งเกิดจากหน้าที่งานที่ทำกิจการที่ทำ
                        หรือเนื่องจากทรัพย์สิน ได้แก่ เงิน ทรัพย์สิน  ประโยชน์อื่นใดที่คำนวณได้เป็นตัวเงิน  เงินภาษีที่ผู้จ่ายออกแทน หรือเครดิตภาษีตามที่กฎหมายกำหนด ซึ่งปัจจุบันประมวลรัษฎากรแบ่งประเภท เงินได้พึงประเมิน เป็น 8 ประเภท ได้แก่
                    </p>
                    <div style={{ padding: "0px 0px 0px 20px" }}>
                        <h5 className="kanit-regular about-lower-head-text-content">เงินได้ประเภทที่ 1</h5>
                        <p className="about-text-content kanit-light">ได้แก่ เงินได้จากการจ้างแรงงาน เช่น เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส บำเหน็จบำนาญ เงินค่าเช่าบ้าน ฯลฯ</p>
                        <h5 className="kanit-regular about-lower-head-text-content">เงินได้ประเภทที่ 2</h5>
                        <p className="about-text-content kanit-light">ได้แก่ เงินได้เนื่องจากหน้าที่หรือตำแหน่งงานที่ทำ
                            หรือ จากการรับทำงานให้ เช่น ค่าธรรมเนียม ค่านายหน้า ส่วนลด เบี้ยประชุม บำเหน็จ โบนัส ฯลฯ
                        </p>
                        <h5 className="kanit-regular about-lower-head-text-content">เงินได้ประเภทที่ 3</h5>
                        <p className="about-text-content kanit-light">ได้แก่ ค่าแห่งกู๊ดวิลล์ ค่าแห่งลิขสิทธิ์ หรือสิทธิอย่างอื่น เงินปี หรือเงินได้
                            ทีมีลักษณะเป็นเงินรายอันได้มาจากพินัยกรรม นิติกรรมอย่างอื่น หรือคำพิพากษาของศาล
                        </p>
                        <h5 className="kanit-regular about-lower-head-text-content">เงินได้ประเภทที่ 4</h5>
                        <p className="about-text-content kanit-light">ได้แก่ ดอกเบี้ย เงินปันผล เงินส่วนแบ่งกำไร เงินลดทุน เงินเพิ่มทุน ผลประโยชน์ที่ได้จากการโอนหุ้น ฯลฯ
                        </p>
                        <h5 className="kanit-regular about-lower-head-text-content">เงินได้ประเภทที่ 5</h5>
                        <p className="about-text-content kanit-light">ได้แก่ เงินหรือผลประโยชน์อื่นที่ได้จากการให้เช่าทรัพย์สิน การผิดสัญญาเช่าซื้อ ทรัพย์สิน หรือการผิดสัญญาซื้อขายเงินผ่อน</p>
                        <h5 className="kanit-regular about-lower-head-text-content">เงินได้ประเภทที่ 6</h5>
                        <p className="about-text-content kanit-light">ได้แก่ เงินได้จากวิชาชีพอิสระ เช่น วิชาชีพกฎหมาย การประกอบโรคศิลปะ (แพทย์) วิศวกรรม สถาปัตยกรรม การบัญชี ประณีตศิลปกรรม หรือวิชาชีพอื่นซึ่งจะได้มีพระราชกฤษฎีกากำหนดไว้</p>
                        <h5 className="kanit-regular about-lower-head-text-content">เงินได้ประเภทที่ 7</h5>
                        <p className="about-text-content kanit-light">ได้แก่ เงินได้จากการรับเหมา ที่ผู้รับเหมาต้องลงทุนด้วยการจัดหาสัมภาระ ในส่วนสำคัญนอกจากเครื่องมือ เช่น การรับเหมา ก่อสร้าง</p>
                        <h5 className="kanit-regular about-lower-head-text-content">เงินได้ประเภทที่ 8</h5>
                        <p className="about-text-content kanit-light">ได้แก่ เงินได้จากการธุรกิจ การพาณิชย์ การเกษตร การอุตสาหกรรม การขนส่ง การขายอสังหาริมทรัพย์ หรือเงินได้จากการอื่น ที่ไม่ได้ระบุไว้ในเงินได้ประเภทที่ 1 ถึงประเภทที่ 7</p>
                    </div>
                </div><br />
                <div>
                    <p className="kanit-semibold about-upper-head-text-content">หักค่าใช้จ่ายอะไรได้บ้าง</p>
                    <p className="about-text-content kanit-light"> ในการคำนวณภาษีเงินได้บุคคลธรรมดา กฎหมายกำหนดให้เงินได้แต่ละประเภท สามารถหักค่าใช้จ่าย (ต้นทุน) ออกก่อนแล้วจึงนำเงินได้ที่หักค่าใช้จ่ายแล้วทั้งหมดไปหักลดหย่อน
                        เพื่อให้ได้เงินได้สุทธิไปคำนวณภาษีตามบัญชีอัตราภาษีเงินได้บุคคลธรรมดา   โดยเงินได้พึงประเมินที่จะนำมาใช้ในการคำนวณภาษี แบ่งออกเป็น 8 ประเภท (มาตรา 40 (1) - (8)) เงินได้แต่ละประเภท มีการหักค่าใช้จ่ายในอัตราที่แตกต่างกัน โดยผู้มีเงินได้สามารถเลือกหักค่าใช้จ่ายได้ 2 แบบ คือ
                    </p>
                    <p className="about-text-content kanit-light">
                        <ol>
                            <li>การหักค่าใช้จ่ายเหมา กำหนดไว้เป็นอัตราร้อยละตามที่กฎหมายกำหนด</li>
                            <li>การหักค่าใช้จ่าย ตามความจำเป็นและสมควร</li>
                        </ol>
                    </p>
                    <table className=" table-abouttax-details">
                        <tbody>
                            <tr className="kanit-regular about-lower-head-text-content"><td>ประเภทเงินได้</td><td>หักค่าใช้จ่าย</td></tr>
                            <tr className="kanit-light about-text-content">
                                <td>เงินได้จากการจ้างแรงงาน เช่น เงินเดือน ค่าจ้าง โบนัส เบี้ยเลี้ยง ฯลฯ</td>
                                <td rowSpan={2}>50% แต่ไม่เกิน 100,000 บาท หากมีเงินได้ประเภทที่ 1 และ 2 ให้นำเงินได้ทั้ง 2 ประเภทรวมกันหักค่าใช้จ่ายได้ 50% แต่รวมกันไม่เกิน 100,000 บาท</td>
                            </tr>
                            <tr className="kanit-light about-text-content">
                                <td>เงินได้จากหน้าที่หรือตำแหน่งที่ทำ หรือจากกการรับทำงานให้ เช่น ค่าธรรมเนียม ค่านายหน้า ฯลฯ</td>
                            </tr>
                            <tr className="kanit-light about-text-content"><td>ค่าแห่งกู๊ดวิลล์ ค่าแห่งลิขสิทธิ์ หรือสิทธิอย่างอื่น</td><td>50% แต่รวมกันไม่เกิน 100,000 บาท หรือตามที่จ่ายจริง</td></tr>
                            <tr className="kanit-light about-text-content"><td>ดอกเบี้ย เงินปันผล ส่วนแบ่งกำไร ฯลฯ</td><td>หักค่าใช้จ่ายไม่ได้</td></tr>
                            <tr className="kanit-light about-text-content">
                                <td>ดอกเบี้ยจากการให้เช่าทรัพย์สิน
                                    <li>บ้าน โรงเรียน สิ่งปลูกสร้าง แพ</li>
                                    <li>ที่ดินที่ใช้ในการเกษตร</li>
                                    <li>ที่ดินที่ไม่ใช้ในการเกษตร</li>
                                    <li>ยานพาหนะ</li>
                                    <li>ทรัพย์สินอื่น</li>
                                    การผิดสัญญาเช่าซื้อ การผิดสัญญาซื้อขายเงินผ่อน
                                </td>
                                <td>ตามจริงหรืออัตราเหมา
                                    <li>30%</li>
                                    <li>20%</li>
                                    <li>15%</li>
                                    <li>30%</li>
                                    <li>10%</li>
                                    หักเป็นการเหมาได้ 20% วิธีเดียว
                                </td>
                            </tr>
                            <tr className="kanit-light about-text-content">
                                <td>วิชาชีพอิสระ
                                    <li>การประกอบโรคศิลปะ</li>
                                    <li>วิชาชีพกฎหมาย วิศวกรรม สถาปัตยกรรม การบัญชี ประณีตศิลปกรรม</li>
                                </td>
                                <td>ตามจริงหรืออัตราเหมา
                                    <li>60%</li>
                                    <li>30%</li>
                                </td></tr>
                            <tr className="kanit-light about-text-content"><td>เงินได้จากการรับเหมา (ผู้รับเหมาต้องลงทุนจัดหาสัมภาระสำคัญนอกจากเครื่องมือ)</td><td>ตามจริงหรืออัตราเหมา 60%</td></tr>
                            <tr className="kanit-light about-text-content"><td>รายได้อื่น นอกเหนือจาก 1-7</td><td>ตามจริงหรืออัตราเหมา 40% และ 60%</td></tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
                <div>
                    <h4 className="kanit-semibold about-upper-head-text-content">หักค่าลดหย่อนและยกเว้นอะไรได้บ้าง</h4>
                    <p className="about-text-content kanit-light"> ค่าลดหย่อนและยกเว้นเป็นอีกหนึ่งองค์ประกอบในการคำนวณภาษี | กฎหมายกำหนดให้นำไปหักออกจากเงินได้ได้อีกหลักหักค่าใช้จ่ายแล้ว โดยมีการหักลดหย่อนกรณีต่างๆ
                        แตกต่างกันออกไป สรุปได้ดังนี้
                    </p>
                    <h5 className="kanit-regular about-lower-head-text-content">กรณีบุคคลธรรมดา หรือผู้ถึงแก่ความตายระหว่างปีภาษี</h5>
                    <div style={{ padding: "0px 0px 0px 20px" }}>
                        <span className="kanit-regular span-about-lower-head-text-detail">1. ผู้มีเงินได้</span>
                        <span className="span-about-text-detail kanit-light">60,000 บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">2. คู่สมรส (ไม่มีเงินได้)</span>
                        <span className="span-about-text-detail kanit-light">60,000 บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">3. ผู้มีเงินได้หรือคู่สมรส</span>
                        <span className="span-about-text-detail kanit-light">ต่างฝ่ายต่างมีเงินได้ให้หักลดหย่อนรวมกันได้ไม่เกิน 120,000 บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">4. บุตรชอบด้วยกฎหมายและบุตรบุญธรรม</span>
                        <span className="span-about-text-detail kanit-light">คนละ 30,000 บาท (บุตรชอบด้วยกฎหมายหักได้ไม่จำกัดจำนวน หากนำบุตรบุญธรรมมาหักรวมกับบุตรชอบด้วยกฎหมาย รวมกันต้องไม่เกิน 3 คน)</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">5. ค่าอุปการะเลี้ยงดูบิดามารดาที่มีอายุ 60 ปีขึ้นไป</span>
                        <span className="span-about-text-detail kanit-light">และอยู่ในความอุปการะเลี้ยงดูของผู้มีเงินได้ โดยบิดามารดาต้องมีเงินได้พึงประเมินในปีภาษีที่ขอหักลดหย่อนไม่เกิน 30,000บาท หักค่าลดหย่อนคนละ 30,000บาท และสามารถหักลดหย่อนสำหรับบิดามารดาของคู่สมรสได้อีกคนละ 30,000บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">6. ค่าอุปการะเลี้ยงดูคนพิการหรือคนทุพพลภาพ</span>
                        <span className="span-about-text-detail kanit-light">หักค่าลดหย่อนคนละ 60,000บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">7. ค่าเบี้ยประกันชีวิต (กรมธรรม์อายุ 10 ปีขึ้นไป)</span>
                        <span className="span-about-text-detail kanit-light">ของผู้มีเงินได้หักค่าลดหย่อนและได้รับการยกเว้นภาษีเงินได้สำหรับเงินได้เท่าที่จ่ายจริงแต่ไม่เกิน 100,000บาท ทั้งนี้หากคู่สมรสมีการประกันชีวิตและความเป็นสามีภริยาได้มีอยู่ตลอดปีภาษีผู้มีเงินได้มีสิทธิหักลดหย่อน สำหรับเบี้ยประกันชีวิตของคู่สมรสที่ไม่มีเงินได้ตามจำนวนที่จ่ายจริง แต่ไม่เกิน 10,000บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">8. ค่าเบี้ยประกันสุขภาพบิดามารดาของผู้มีเงินได้ และคู่สมรส</span>
                        <span className="span-about-text-detail kanit-light">หักค่าลดหย่อนเท่าที่จ่ายจริง แต่ไม่เกิน 15,000บาท ทั้งนี้ บิดามารดาของผู้มีเงินได้และคู่สมรสต้องไม่มี เงินได้พึงประเมินในปีภาษีที่ใช้สิทธิยกเว้นภาษีเงินได้ เกิน 30,000 บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">9. เงินสะสมที่จ่ายเข้ากองทุนสำรองเลี้ยงชีพ</span>
                        <span className="span-about-text-detail kanit-light">หักลดหย่อนได้ตามจำนวนที่ได้จ่ายไปจริงในปีภาษี แต่ไม่เกิน 10,000บาท ส่วนที่เกิน 10,000บาท แต่ไม่เกิน 490,000 บาท ซึ่งไม่เกินร้อยละ 15 ของค่าจ้างให้หักจากเงินได้</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">10. เงินค่าซื้อหน่วยลงทุนในกองทุนรวมเพื่อการเลี้ยงชีพ (RMF)</span>
                        <span className="span-about-text-detail kanit-light">ได้รับยกเว้นเท่าที่จ่ายเงินค่าซื้อหน่วยลงทุนในกองทุนรวม เพื่อการเลี้ยงชีพตามกฎหมายว่าด้วยหลักทรัพย์และ ตลาดหลักทรัพย์ ในอัตราไม่เกินร้อยละ 15 ของเงินได้ พึงประเมินที่ได้รับซึ่งต้องเสียภาษีเงินได้ในปีภาษีนั้น และเมื่อ รวมกับเบี้ยประกันชีวิตแบบบำนาญ เงินสะสมเข้ากองทุน สำรองเลี้ยงชีพ เงินสะสมเข้ากองทุนบำเหน็จบำนาญ
                            ข้าราชการ เงินสะสมเข้ากองทุนสงเคราะห์ตามกฎหมาย ว่าด้วยโรงเรียนเอกชน และเงินสะสมเข้ากองทุนการออม แห่งชาติแล้ว ต้องไม่เกิน 500,000 บาท
                        </span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">11. ค่าเบี้ยประกันชีวิตแบบบำนาญ </span>
                        <span className="span-about-text-detail kanit-light">หักค่าลดหย่อนในอัตราร้อยละ 15 ของเงินได้ที่นำมาเสียภาษีเงินได้ในแต่ละปี แต่ไม่เกิน 200,000 บาทต่อปี ทั้งนี้ต้องเป็นค่าเบี้ยประกันชีวิตแบบบำนาญความคุ้มครองตั้งแต่ 10 ปีขึ้นไปและจ่ายผลประโยชน์เงินบำนาญเมื่อผู้มีเงินได้อายุตั้งแต่ 55 ปีขึ้นไปถึงอายุ 85 ปีหรือกว่านั้นและเมื่อรวมกับเงินสะสมเข้ากองทุนสำองเลี้ยงชีพ เงินสะสมเข้ากองทุน
                            บำเหน็จบำนาญข้าราชการ (กบข.) เงินสะสมเข้ากองทุนสงเคราะห์ ตามกฎหมายว่าด้วยโรงเรียนเอกชนเงินที่ซื้อหน่วยลงทุนในกองทุนรวมเพื่อการเลี้ยงชีพ (RMF)และเงินสะสมเข้ากองทุนการออมแห่งชาติต้องไม่เกิน 500,000 บาท
                        </span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">12. เงินสะสมกองทุนการออมแห่งชาติ</span>
                        <span className="span-about-text-detail kanit-light">ตามจำนวนที่จ่ายจริงแต่ไม่เกิน 500,000 บาท และเมื่อรวมกับเบี้ยประกันชีวิตแบบบำนาญ เงินสะสมเข้า กองทุนสำรองเลี้ยงชีพ เงินสะสมเข้ากองทุนบำเหน็จบำนาญ ข้าราชการ เงินสะสมเข้ากองทุนสงเคราะห์ตามกฎหมายว่าด้วยโรงเรียนเอกชนและเงินที่ซื้อหน่วยลงทุนในกองทุนรวมเพื่อการเลี้ยงชีพ (RMF) แล้วต้องไม่เกิน 500,000 บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">13. ค่าซื้อหน่วยลงทุนในกองทุนรวมหุ้นระยะยาว (LTF)</span>
                        <span className="span-about-text-detail kanit-light">หักค่าลดหย่อนเท่าที่จ่ายจริงแต่ไม่เกินร้อยละ 15 ของ เงินได้พึงประเมินที่ได้รับซึ่งต้องเสียภาษีเงินได้ในปีนั้นแต่ไม่เกิน 500,000 บาทและต้องถือหน่วยลงทุนในกองทุนรวมระยะยาว (LTF) ต่อเนื่องกันไม่น้อยกว่า 7 ปีปฏิทินแต่ไม่รวมถึงกรณีผู้มีเงินได้ไถ่ถอนหน่วยลงทุนรวมหุ้นระยะยาวเพราะทุพพลภาพหรือตาย</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">14. ดอกเบี้ยกู้ยืมที่จ่ายให้แก่ธนาคารหรือสถาบันการเงินอื่น</span>
                        <span className="span-about-text-detail kanit-light">บริษัทประกันชีวิต สหกรณ์ หรือนายจ้าง สำหรับการกู้ยืมเงินเพื่อซื้อ เช่าซื้อ หรือสร้างอาคารอยู่อาศัย โดยจำนองอาคารที่ซื้อหรือสร้างเป็นประกันการกู้ยืมหักค่าลดหย่อนตามจำนวนเท่าที่จ่ายจริงแต่ไม่เกิน 100,000 บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">15. เงินสมทบกองทุนประกันสังคม</span>
                        <span className="span-about-text-detail kanit-light">หักค่าลดหย่อนเท่าที่จ่ายจริง</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">16. ค่าเบี้ยประกันสุขภาพ</span>
                        <span className="span-about-text-detail kanit-light">หักค่าลดหย่อนเท่าที่จ่ายจริงแต่ไม่เกิน 15,000 บาท แต่เมื่อรวมเบี้ยประกันชีวิตต้องไม่เกิน 100,000 บาท</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">17. เงินบริจาค เงินบริจาคสนับสนุนการศึกษา การกีฬาและอื่นๆ </span>
                        <span className="span-about-text-detail kanit-light">หักได้ 2 เท่าของที่จ่ายจริงแต่ไม่เกินร้อยละ 10 ของเงินได้หลังหักค่าใช้จ่ายและค่าลดหย่อนอื่นๆ เงินบริจาคหักได้เท่าที่จ่ายจริงแต่ไม่เกินร้อยละ 10 ของเงินได้หลังหักค่าใช้จ่ายและค่าลดหย่อน</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">18. ค่าอุปการะเลี้ยงดูคนพิการหรือคนทุพพลภาพ</span>
                        <span className="span-about-text-detail kanit-light">หักค่าลดหย่อนคนละ 60,000บาท</span><br />
                        <span className="span-about-text-detail kanit-light">ยกเว้นเงินได้ 190,000 บาท สำหรับ 1.ผู้มีเงินได้ซึ่งเป็นคนพิการและมีอายุไม่เกิน 65 ปีบริบูรณ์ 2.ผู้มีเงินได้ที่มีอายุตั้งแต่ 65 ปีบริบูรณ์ขึ้นไป</span><br />
                    </div><br />
                    <h5 className="kanit-regular about-lower-head-text-content">กรณีห้างหุ้นส่วนสามัญที่ไม่ใช่นิติบุคคลหรือคณะบุคคลที่ไม่ใช่นิติบุคคล</h5>
                    <h6 className="span-about-text-detail kanit-light">หักค่าลดหย่อนได้คนละ 60,000บาท แต่รวมกันต้องไม่เกิน 120,000บาท</h6>
                    <div style={{ padding: "0px 0px 0px 20px" }}>
                        <span className="kanit-regular span-about-lower-head-text-detail">1. เงินบริจาคสนับสนุนการศึกษาและการกีฬา</span>
                        <span className="span-about-text-detail kanit-light">หักได้ 2 เท่าของที่จ่ายจริงแต่ไม่เกินร้อยละ 10 ของเงินได้หลังหักค่าใช้จ่ายและค่าลดหย่อน</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">2. เงินบริจาค</span>
                        <span className="span-about-text-detail kanit-light">หักได้เท่าที่จ่ายจริง แต่ไม่เกินร้อยละ 10 ของเงินได้หลังหักค่าใช้จ่ายและค่าลดหย่อน</span><br />
                    </div>
                    <br />
                    <h5 className="kanit-regular about-lower-head-text-content">กรณีกองมรดกที่ยังไม่ได้แบ่ง</h5>
                    <h6 className="span-about-text-detail kanit-light">หักค่าลดหย่อนได้คนละ 60,000บาท</h6>
                    <div style={{ padding: "0px 0px 0px 20px" }}>
                        <span className="kanit-regular span-about-lower-head-text-detail">1. เงินบริจาคสนับสนุนการศึกษาและการกีฬา</span>
                        <span className="span-about-text-detail kanit-light">หักได้ 2 เท่าของที่จ่ายจริงแต่ไม่เกินร้อยละ 10 ของเงินได้หลังหักค่าใช้จ่ายและค่าลดหย่อน</span><br />
                        <span className="kanit-regular span-about-lower-head-text-detail">2. เงินบริจาค</span>
                        <span className="span-about-text-detail kanit-light">หักได้เท่าที่จ่ายจริง แต่ไม่เกินร้อยละ 10 ของเงินได้หลังหักค่าใช้จ่ายและค่าลดหย่อน</span><br />
                    </div> <br />

                </div>



                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                    <div className="quote-container">
                        <p className="quote-text kanit-regular ">
                            จ่ายภาษีด้วยความรับผิดชอบ ดีกว่าต้องจ่ายค่าปรับด้วยความเสียดาย
                        </p>
                        <div className="author">
                            <img src="/logo192.png" alt="User" className="author-img" />
                            <div className="author-info">
                                <p className="author-name">TAXMATE เพื่อนคู่คิดเรื่องภาษี</p>
                                <p className="author-role">Taxmate Admin</p>
                            </div>
                        </div>
                        <span className=" quote-symbol">”</span>
                    </div>

                </div>
            </div>

            <div className="container aboutpageformat">
                <br />
                <div>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="col-5 " style={{ padding: "10px" }} >
                                <img src={image.src} className="d-block abouttax-slider-img" alt={image.alt} onClick={() => handleShow(image.src)} // เมื่อคลิกให้เปิด Modal
                                    style={{ cursor: "pointer" }} // เปลี่ยนเป็น cursor แบบ pointer
                                />
                            </div>
                        ))}
                    </Slider>
                    {/* size="lg" → Modal ขนาดใหญ่
                                    size="xl" → Modal ใหญ่พิเศษ
                                    fullscreen → Modal เต็มจอ  */}
                    <Modal show={show} onHide={handleClose} centered size="lg">
                        <Modal.Body className="text-center">
                            {selectedImage && <img src={selectedImage} className="abouttax-modal-img" alt="Expanded" />}
                        </Modal.Body>
                    </Modal>

                </div>
                <br /><br />

            </div>


        </Main >
    );
}


export default Lawtax;