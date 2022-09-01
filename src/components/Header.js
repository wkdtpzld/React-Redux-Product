import React from "react";
import styles from "../assets/css/Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={ styles.ui }>
                <h2>FakeShop</h2>
                <div className={ styles.uiContainer }>
                    <ul>
                        <li><Link to="/" >Home </Link></li>
                        <li><Link to="#" >Profile </Link></li>
                    </ul>
                    <div className={styles.btn}>
                        Login
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;