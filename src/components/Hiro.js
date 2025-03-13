import {useState} from 'react'

import profile from '../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="5"  src={profile} alt="profile" onLoad={() => setLoaded(false)} width={500} height={300} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Tanapon Traitanasombat</h1>
                    <p class="text-xl font-bold text-gray-300">Electronics Computer Teachnology</p>
                    <p className="text-md font-light text-gray-400 ">Bringing knowledge to develop professional skills in Computer Technology  and using the opportunity to learn real-world work processes. This includes practicing teamwork, coordination, and various collaborative tasks in a real working environment.
</p>
                </div> 
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/koonpollzaza' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://instagram.com/tnp_pon' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
