import cl from "./ContactsRow.module.css"
import { DiGithubBadge } from "react-icons/di";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";

const ContactsRow = () => {
    return (
        <div className={cl.container}>
            <div className={cl.contacts__item}>
                <BiLogoGmail />
                <h4>roomen817@gmail.com</h4>
            </div>
            <div className={cl.contacts__item}>
                <DiGithubBadge />
                <h4>github.link</h4>
            </div >
            <div className={cl.contacts__item}>
                <MdLocalPhone/>
                <h4>+4793944025</h4>
            </div>


        </div>
    );
};

export default ContactsRow;
