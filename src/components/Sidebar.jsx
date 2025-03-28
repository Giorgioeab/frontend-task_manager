import CustomButton from "./CustomButton";

import './Sidebar.scss'
import logo from "../assets/images/Logo.png"

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Espanhol Essência" />
                <div className="sign-out">
                    <CustomButton>
                        sair
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;