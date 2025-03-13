import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import pr from "../assets/skills/pr.png"
import flutter from "../assets/skills/flutter.png"
import ae from "../assets/skills/ae.png"
import vt from "../assets/skills/vt.png"
import C from "../assets/skills/C#.png"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Vitual Studio" experience="1 years" img={vt} />
                <SkillCard name="Flutter" experience="2 years" img={flutter} />
                <SkillCard name="C#" experience="3 years" img={C} />
                <SkillCard name="Adobe Premiere Pro" experience="2 years" img={pr} />
                <SkillCard name="Adobe After Effect" experience="2 years" img={ae} />
                </Slider>
            </div>
        </div>
    )
}