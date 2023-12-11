import cl from "./ContactsRow.module.css"
import { DiGithubBadge } from "react-icons/di";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";

const ContactsRow = () => {
    return (
        <div className={cl.container}>
            <div className={cl.contacts__item}>
                <BiLogoGmail />
                <a target='_blank' rel='noopener noreferrer' href="mailto:roomen817@gmail.com">roomen817@gmail.com</a>
            </div>
            <div className={cl.contacts__item}>
                <DiGithubBadge />
                <a target='_blank' rel='noopener noreferrer' href="https://github.com/RomanLobko231">Github</a>
            </div >
            <div className={cl.contacts__item}>
                <MdLocalPhone/>
                <h4>+4793944025</h4>
            </div>


        </div>
    );
};

export default ContactsRow;
