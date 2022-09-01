import React from "react";
import { Oval } from "react-loader-spinner";
import styles from "../assets/css/LoadBar.module.scss";

const Loader = () => {
    return (
        <div className={styles.LoadBar}>
            <Oval 
                height={300}
                width={300}
            />
        </div>
    )
}

export default Loader;