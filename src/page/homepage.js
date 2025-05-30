import Main from "../component/main";
import './Style.css'; // ใช้ CSS เดิมที่คุณมี



function Home() {


    return (
        <Main>
            {/* สำหรับสไลด์ */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/asset/Slide-1.png" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/asset/Slide-2.png" className="d-block w-100" alt="Slide 2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> <br /><br />

            {/* เนื้อหาในเว็บ */}
            <div className="container">
                <div className="headstep-format">
                    <h4 className="kanit-bold homepage-head-text">ภาษีอยู่รอบตัว ไม่รู้ไม่ได้ ไม่จ่ายไม่รอด</h4>
                    <p className="kanit-light homepage-paragraph-head-text" style={{ padding: "10px 20px 0px 20px" }}>
                        ภาษีไม่ใช่แค่เรื่องของนักบัญชีหรือเจ้าของธุรกิจ แต่เป็นเรื่องของทุกคน เพราะทุกบาทที่เราใช้ ทุกรายได้ที่เราได้รับ ล้วนเกี่ยวข้องกับภาษีหากไม่รู้เรื่องภาษี อาจจ่ายมากเกินความจำเป็นเสียสิทธิ์ทางกฎหมาย หรือแม้แต่เผลอทำผิดโดยไม่ตั้งใจแต่หากเข้าใจภาษีอย่างถูกต้อง เราสามารถใช้สิทธิประโยชน์ ลดภาระและวางแผนการเงินได้อย่างชาญฉลาด
                        <br />" อย่าปล่อยให้ภาษีเป็นเรื่องไกลตัว เรียนรู้วันนี้ เพื่อความมั่นคงทางการเงินของคุณในอนาคต ! "
                    </p><br />
                    <div className="line"></div>
                </div><br /><br />

                <section id="about" className="introduction scrollto">
                    <div className="row clearfix">
                        {/* คอลัมน์แรก */}
                        <div className="col-3">
                            <div className="section-heading">
                                <h3 className="kanit-semibold">TAXMATE</h3>
                                <h2 className="section-title kanit-regular">เว็บไซต์เพื่อนคู่คิดเรื่องภาษี</h2>
                                <p className="kanit-light section-subtitle">
                                    เว็บไซต์ช่วยให้คุณเข้าใจเรื่องภาษีได้ง่ายขึ้น พร้อมฟีเจอร์คำนวณภาษีที่แม่นยำและสะดวกสบาย อีกทั้งยังมีข้อมูลเกี่ยวกับกฎหมายภาษีที่ครบถ้วน ช่วยให้คุณสามารถวางแผนภาษีได้อย่างมั่นใจและถูกต้อง
                                </p>
                            </div>
                        </div>

                        {/* คอลัมน์ที่สองซึ่งมี Icon Block ซ้อนกัน */}
                        <div className="col-2-3">
                            <div className="row">
                                {/* Icon Block 1 */}
                                <a href="/abouttax" className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="icon">
                                        <i className="bi bi-book-fill"></i>
                                    </div>
                                    <div className="icon-block-description">
                                        <h4 className="kanit-semibold home-text-head">เกี่ยวกับภาษี</h4>
                                        <p className="kanit-light home-text-paragraph">ให้ความรู้เกี่ยวกับภาษีบุคคลธรรมดาที่คุณควรทราบ เพื่อเสริมสร้างความเข้าใจในข้อกำหนดและกฎระเบียบภาษี</p>
                                    </div>
                                </a>


                                {/* Icon Block 2 */}
                                <a href="/persontax" className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="icon">
                                        <i class="bi bi-calculator"></i>
                                    </div>
                                    <div className="icon-block-description">
                                        <h4 className="kanit-semibold home-text-head">บุคคลธรรมดา</h4>
                                        <p className="kanit-light home-text-paragraph">บริการคำนวณภาษีที่แม่นยำและรวดเร็ว ช่วยให้คุณสามารถวางแผนการจัดการภาษีได้อย่างมีประสิทธิภาพ</p>
                                    </div>
                                </a>
                            </div>

                            <div className="row">
                                {/* Icon Block 3 */}
                                <a href="/taxlaw" className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="icon">
                                        <i class="bi bi-shield-lock-fill"></i>
                                    </div>
                                    <div className="icon-block-description">
                                        <h4 className="kanit-semibold home-text-head">กฎหมาย</h4>
                                        <p className="kanit-light home-text-paragraph">รวบรวมกฎหมายที่เกี่ยวข้องกับภาษีบุคคลธรรมดาที่คุณควรทราบ เพื่อให้คุณสามารถปฏิบัติตามกฎหมายได้อย่างถูกต้องและมีประสิทธิภาพในการวางแผนภาษี</p>
                                    </div>
                                </a>

                                {/* Icon Block 4 */}
                                <a href="https://www.hatyaiaccounting.com/" className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="icon">
                                        <i class="bi bi-envelope-paper-fill"></i>
                                    </div>
                                    <div className="icon-block-description">
                                        <h4 className="kanit-semibold home-text-head">เกี่ยวกับเรา</h4>
                                        <p className="kanit-light home-text-paragraph">ติดต่อหรือสอบถามเพิ่มเติม เรายินดีให้คำแนะนำและช่วยเหลือคุณในการวางแผนภาษีอย่างมืออาชีพ</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>




                <div className="row">
                    <div className="col-7">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header kanit-semibold">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                        ใครบ้างที่ต้องยื่นภาษี และต้องยื่นเมื่อไหร่ ?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                                    <div className="accordion-body kanit-light">
                                        บุคคลที่ต้องยื่นภาษีเงินได้บุคคลธรรมดาคือผู้ที่มี <strong>รายได้ถึงเกณฑ์ที่กฎหมายกำหนด</strong> ได้แก่ <br />
                                        <p className="kanit-light"> <strong>บุคคลธรรมดาทั่วไป</strong>
                                            <ol>
                                                <li>มีรายได้จากเงินเดือน (มาตรา 40(1)) ตั้งแต่ 120,000 บาทขึ้นไปต่อปี (สำหรับโสด) หรือ 220,000 บาทขึ้นไปต่อปี (สำหรับคู่สมรสที่มีรายได้)</li>
                                                <li>มีรายได้จากทางอื่น เช่น ค่าจ้างอิสระ ค่าคอมมิชชั่น ค่าเช่า ดอกเบี้ย เงินปันผล ฯลฯ (มาตรา 40(2) - 40(8)) ตั้งแต่ 60,000 บาทขึ้นไปต่อปี</li>
                                            </ol>
                                            <strong>คณะบุคคลหรือห้างหุ้นส่วนที่ไม่ใช่นิติบุคคล </strong>ที่มีรายได้ต้องเสียภาษี <br />
                                            <strong>ชาวต่างชาติที่มีรายได้จากแหล่งเงินได้ในประเทศไทย</strong><br />
                                        </p>
                                        <p className="kanit-light"> <strong>กำหนดเวลายื่นภาษี</strong>
                                            <ol>
                                                <li>ภ.ง.ด. 90/91 (ภาษีเงินได้บุคคลธรรมดา) → ต้องยื่นภายใน 31 มีนาคม ของปีถัดไป</li>
                                                <li>หากยื่นออนไลน์ <a href="https://efiling.rd.go.th/rd-cms/">ผ่านเว็บไซต์สรรพากร</a> สามารถยื่นได้ถึง 8 เมษายน</li>
                                            </ol>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header kanit-semibold">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        หากยื่นภาษีช้าหรือยื่นผิดพลาด จะมีผลกระทบอย่างไร ?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body kanit-light">
                                        <strong>หากยื่นล่าช้า</strong> → ต้องเสียค่าปรับวันละ 200 บาท และหากมีภาษีที่ต้องจ่ายจะถูกคิดดอกเบี้ย <code className="kanit-regular">1.5% ต่อเดือน</code><br />
                                        <strong>หากยื่นผิดแล้วไม่แก้ไข</strong> → อาจถูกสรรพากรเรียกตรวจสอบ และอาจถูกปรับเพิ่มสูงสุด <code className="kanit-regular">100% ของภาษีที่ต้องจ่าย</code><br />
                                        <strong>หากยื่นภาษีไม่ถูกต้องโดยเจตนาเลี่ยงภาษี</strong> → อาจถูกดำเนินคดีอาญา ตามประมวลรัษฎากร<br />
                                        <code className="kanit-semibold">  สามารถยื่นแก้ไขภาษีได้ภายใน 3 ปี นับจากวันที่ยื่นแบบเดิม โดยไม่ต้องเสียค่าปรับ</code>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header kanit-semibold">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        ทำไมบางคนได้เงินคืนภาษี ในขณะที่บางคนต้องจ่ายเพิ่ม ?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body kanit-light">
                                        การคำนวณภาษีขึ้นอยู่กับ <strong>การหักภาษี ณ ที่จ่าย</strong> และ <strong>ค่าลดหย่อนภาษีที่ใช้</strong><br />
                                        <ol>
                                            <li>หากนายจ้างหักภาษี ณ ที่จ่ายไว้<strong>มากกว่า</strong>ที่ควรเสียจริง → สามารถขอคืนภาษีได้<br /></li>
                                            <li>หากมี<strong>ค่าลดหย่อนและเครดิตภาษีจำนวนมาก</strong> → อาจได้คืนภาษี<br /></li>
                                            <li>หากมีรายได้<strong>ที่ไม่ได้ถูกหักภาษี ณ ที่จ่ายไว้</strong>เช่น รายได้จากฟรีแลนซ์ ค่าเช่า ฯลฯ → อาจต้องจ่ายเพิ่มเมื่อคำนวณภาษี<br /></li>
                                        </ol>
                                        <strong>กรณีขอคืนภาษี</strong> → หากมีสิทธิได้รับเงินคืน สามารถแจ้งเลขบัญชีธนาคารเพื่อรับเงินคืนผ่านพร้อมเพย์ (ผูกกับเลขบัตรประชาชน)
                                        ซึ่งโดยปกติจะได้รับคืนภายใน 2-3 สัปดาห์
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header kanit-semibold">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        ภาษีหัก ณ ที่จ่ายคืออะไร และใครบ้างต้องถูกหักภาษี ณ ที่จ่าย ?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body kanit-light">
                                        ภาษีหัก ณ ที่จ่าย คือ<strong> การที่ผู้จ่ายเงินได้หักภาษีไว้ล่วงหน้า</strong>ก่อนจ่ายเงินให้ผู้รับรายได้ เพื่อลดความเสี่ยงของรัฐในการจัดเก็บภาษี ตัวอย่างเช่น
                                        <ol>
                                            <li><strong>พนักงานประจำ</strong> → นายจ้างหักภาษีจากเงินเดือนและนำส่งกรมสรรพากร </li>
                                            <li><strong>ฟรีแลนซ์ หรือ ผู้รับจ้าง</strong> → ลูกค้าหักภาษี ณ ที่จ่าย เช่น<code className="kanit-regular"> 3% หรือ 5% </code>และนำส่งให้สรรพากร </li>
                                            <li><strong>ดอกเบี้ยเงินฝาก หรือ เงินปันผล</strong> → ธนาคารหรือบริษัทหักภาษี ณ ที่จ่าย <code className="kanit-regular"> 10-15% </code></li>
                                        </ol>
                                        <code className="kanit-semibold">หากถูกหักภาษี ณ ที่จ่ายไว้เกินกว่าภาษีที่ต้องจ่ายจริง สามารถขอคืนภาษีได้</code>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header kanit-semibold">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        ถ้าไม่เคยยื่นภาษีมาก่อน จะมีผลอะไรหรือไม่?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body kanit-light">
                                        <ol>
                                            <li>หากมีรายได้ถึงเกณฑ์แต่ไม่ยื่นภาษี <strong>ถือว่ามีความผิดทางกฎหมาย</strong> อาจถูกกรมสรรพากรเรียกตรวจสอบย้อนหลังได้</li>
                                            <li>หากไม่เคยยื่นและต้องการเริ่มยื่น<strong>สามารถยื่นย้อนหลังได้ 3 ปี</strong>โดยไม่มีโทษปรับ</li>
                                            <li>หากถูกตรวจพบว่า<strong>เลี่ยงภาษีโดยเจตนา</strong>อาจถูกเรียกปรับย้อนหลังสูงสุด <code className="kanit-regular"> 100% ของภาษีที่ต้องจ่าย </code>และอาจถูกดำเนินคดี</li>
                                        </ol>
                                        <code className="kanit-semibold">ตามประมวลรัษฎากร มาตรา 37 หากจงใจหลีกเลี่ยงภาษี อาจถูกจำคุกไม่เกิน 1 ปี หรือปรับไม่เกิน 200,000 บาท หรือทั้งจำทั้งปรับ</code>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header kanit-semibold">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        ถ้าไม่จ่ายภาษีจะเกิดอะไรขึ้น? (โทษของการเลี่ยงภาษี)
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body kanit-light">
                                        <ol>
                                            <li><strong>หากไม่ยื่นแบบภาษี</strong> → ต้องเสียค่าปรับและดอกเบี้ย 1.5% ต่อเดือนของภาษีที่ต้องจ่าย </li>
                                            <li><strong>หากแจ้งรายได้ต่ำกว่าความเป็นจริง</strong> → อาจถูกตรวจสอบและถูกปรับสูงสุด 100% ของภาษีที่ต้องจ่าย</li>
                                            <li><strong>หากเจตนาเลี่ยงภาษีหรือปลอมแปลงเอกสาร</strong> →  ตาม มาตรา 37 และ 90 แห่งประมวลรัษฎากร อาจถูกจำคุกไม่เกิน 7 ปี หรือปรับสูงสุด 200,000 บาท หรือทั้งจำทั้งปรับ</li>
                                        </ol>
                                        <code className="kanit-semibold">หากถูกเรียกตรวจสอบภาษีและพิสูจน์ได้ว่าไม่ได้เจตนา สามารถเจรจาขอลดโทษหรือผ่อนชำระได้</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="section-heading">
                            <h2 className="section-title kanit-regular">คำถามที่พบบ่อย</h2>
                            <p className="kanit-light section-subtitle">
                                เพื่อให้คุณเข้าใจภาษีได้ง่ายขึ้น เว็บไซต์ TAXMATE ได้รวบรวม "คำถามที่พบบ่อยเกี่ยวกับภาษี" ไว้ในที่เดียว ค้นหาคำตอบได้ง่ายๆ ที่นี่ เพื่อให้คุณจัดการภาษีได้อย่างมั่นใจและไม่พลาดสิทธิประโยชน์ที่ควรได้รับ!
                            </p>
                        </div>
                    </div>
                </div><br /><br /><br />
            </div >

            <div className="abouttaxbg">
                <div className="container">

                    <h2 className="section-title kanit-bold" style={{ paddingTop: "40px", color: "#004F70" }}>หน่วยงานที่เกี่ยวข้อง</h2>
                    <div
                        className="row"
                        style={{
                            display: 'flex',
                            justifyContent: 'center', // จัดกึ่งกลางในแนวนอน
                            alignItems: 'center',     // จัดกึ่งกลางในแนวตั้ง
                            minHeight: '30vh',       // ให้ความสูงเต็มหน้าจอ
                            width: '100%'             // ให้ขยายเต็มความกว้าง
                        }}
                    >
                        <a href="/https://www.rd.go.th/" className="col-5 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                            <img src="/asset/Logo-TRD.png" alt="Logo TRD" />
                        </a>
                        <a href="/https://www.hatyaiaccounting.com/" className="col-5 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                            <img src="/asset/Logo-HACC.png" alt="Logo HACC" />
                        </a>
                    </div>
                </div>
            </div>













            <br />

        </Main >
    );
}

export default Home;