import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ activeSection }) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.progressItem} ${activeSection === "Profile_Details" ? styles.active : ""}`} id="Profile_Details">Profile details</div>
            <div className={`${styles.progressItem} ${activeSection === "Location_Details" ? styles.active : ""}`} id="Location_Details">Location Details</div>
            <div className={`${styles.progressItem} ${activeSection === "Lifestyle_Details" ? styles.active : ""}`} id="Lifestyle_Details">Lifestyles details</div>
            <div className={`${styles.progressItem} ${activeSection === "Family_Details" ? styles.active : ""}`} id="Family_Details">Family Details</div>
            <div className={`${styles.progressItem} ${activeSection === "Photos" ? styles.active : ""}`} id="Photos">Photos</div>
            <div className={`${styles.progressItem} ${activeSection === "Government_ID" ? styles.active : ""}`} id="Government_ID">Government id</div>
        </div>
    );
}

export default ProgressBar;
