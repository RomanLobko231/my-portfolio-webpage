import cl from "./ContactsRow.module.css"
import { DiGithubBadge } from "react-icons/di";
import { BiLogoGmail, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";

const ContactsRow = () => {
    return (
        <div className={cl.container}>
            <div className={cl.contacts__item}>
                <BiLogoGmail />
                <h3>roomen817@gmail.com</h3>
            </div>
            <div className={cl.contacts__item}>
                <MdLocalPhone/>
                <h3>+4793944025</h3>
            </div>
            <div className={cl.contacts__item}>
                <DiGithubBadge />
                <a target='_blank' rel='noopener noreferrer' href="https://github.com/RomanLobko231">Github</a>
            </div >
            <div className={cl.contacts__item}>
                <BiLogoLinkedinSquare />
                <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/roman-lobko-dev">LinkedIn</a>
            </div >

        </div>
    );
};

export default ContactsRow;
