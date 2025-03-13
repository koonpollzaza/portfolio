import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Honors & Awards</h1>
            <p className="font-light text-gray-400">Here are some of my honors and awards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="งานคหกรรมศิลปหัตถกรรม รางวัลชนะเลิศเหรียญทอง" issued="สำนักงานเขตพื้นที่การศึกษามัธยมศึกษา เขต 17" desc="Web Application ระดับชั้น ม.4 - ม.6" />
                <HonorCard name="3rd Freashy Basketball KMUTNB" issued="KMUTNB" desc="KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
