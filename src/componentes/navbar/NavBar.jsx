import './NavBar.css';

//npm install react-icons --save
//npm install @react-icons/all-files --save
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiArchive} from "react-icons/bi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

export default function NavBar(){

    return <div className='navigation'>
        <a href='#home'>
            <AiOutlineHome className="icon active-nav"/>
        </a>
        <a href="#about">
            <AiOutlineUser className="icon" />
        </a>
        <a href="#proyects">
            <BiArchive className="icon" />
        </a>
        <a href="#contact">
            <BiMessageRoundedDots className="icon" />
        </a>
        <a href="#footer">
            <BsArrowDownCircle className="icon" />
        </a>

    </div>
}