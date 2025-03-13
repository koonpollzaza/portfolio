import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import cert1 from "../assets/certs/1.jpg"
import cert2 from "../assets/certs/2.jpg"
import cert3 from "../assets/certs/3.jpg"
import cert4 from "../assets/certs/4.jpg"
import cart5 from "../assets/certs/5.jpg"
import cart6 from "../assets/certs/6.jpg"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="งานคหกรรมความสามารถทางศิลปหัตถกรรม" img={cert1} issued="รางวัลชนะเลิศเหรียญทอง" date="ประจำปี 2561" />
                <CertCard name="งานคหกรรมความสามารถทางศิลปหัตถกรรม ระดับชาติ " img={cert2} issued="รางวัล เข้าร่วม" date="ประจำปี 2561" />
                <CertCard name="Mobile Application in Comcamp" img={cert3} issued="เข้าร่วม" date="ประจำปี 2561" />
                <CertCard name="กิจกรรมการทำเทคนิคพิเศษภาพดิจิทัศน์" img={cert4} issued="เข้าร่วม" date="ประจำปี 2563" />
                <CertCard name="ค่ายติว CAMPUS ติวถึงเเก่น เตรียมสอบเข้ามหาลัยในฝัน" img={cart5} issued="เข้าร่วม" date="ประจำปี 2562" />
                <CertCard name="รางวัลนักเรียนดีเด่นด้านวิชาการภายนอกโรงเรียน" img={cart6} date="ประจำปี 2563" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
