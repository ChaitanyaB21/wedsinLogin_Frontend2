import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.css';
import Navbar from "../Navbar/Navbar";
import ProgressBar from '../ProgressBar/ProgressBar';
import userService from '../../service/user.service';

const SignUpForm1 = () => {

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const form1UserData = {
            Name: event.target.Name.value,
            Gender: event.target.Gender.value,
            LookingFor: event.target.LookingFor.value,
            date: event.target.date.value,
            Religion: event.target.Religion.value,
            Cast: event.target.Cast.value,
            MotherTongue: event.target.MotherTongue.value,
            MaritalStatus: event.target.MaritalStatus.value,
            Height: event.target.HeightValue.value
        }

        userService.form1Data(form1UserData).then((response) => {
            console.log(response);
            navigate('/Page2');
        }).catch((error) => {
            console.log(error);
        });

    };


    const activeSection = "Profile_Details";

    return (


        <>
            <Navbar />
            <ProgressBar activeSection={activeSection} />
            <div className={styles.mainDiv} >
                <div className={styles.container}>
                    <h1>Hi! You are joining a new wave of matchmaking.</h1>
                    <div className={styles.mandatory}>*Mandatory</div>
                    <form onSubmit={handleFormSubmit} >
                        <div className={styles.inputs}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Name">Name*</label>
                                <input required name='Name' type="text" id="Name" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Gender" mandatory>Gender*</label>
                                <select required name='Gender' id="Gender">
                                    <option>Select or type</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="LookingFor" mandatory>Looking for*</label>
                                <select required name='LookingFor' id="LookingFor">
                                    <option>Select or type</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="date" mandatory>Date of birth*</label>
                                <input required name='date' type="date" id="Date" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Religion" mandatory>Religion*</label>
                                <select required name='Religion' id="Religion">
                                    <option>Select or type</option>
                                    <option>Hindu</option>
                                    <option>Muslim</option>
                                    <option>Sikh</option>
                                    <option>Christian</option>
                                    <option>Budhhism</option>
                                    <option>Jain</option>
                                    <option>Parsi</option>
                                    <option>Jewish</option>
                                    <option>Bahai</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Cast">Caste (Optional)</label>
                                <select name='Cast' id="Cast">
                                    <option>Select or type</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="MotherTongue" mandatory>Mother Tongue*</label>
                                <select required name='MotherTongue' id="MotherTongue">
                                    <option>Select or type</option>
                                    <option>Hindi-Delhi</option>
                                    <option>Hindi-MP/CG</option>
                                    <option>Hindi-UP/UK</option>
                                    <option>Punjabi</option>
                                    <option>Hindi-Bihar/Jharkhand</option>
                                    <option>Hindi-Rajasthan</option>
                                    <option>Haryanavi</option>
                                    <option>Himachali</option>
                                    <option>Kashmiri</option>
                                    <option>Sindu</option>
                                    <option>Mrathi</option>
                                    <option>Gujarati</option>
                                    <option>Kutchi</option>
                                    <option>Konkani </option>
                                    <option>Sindhi</option>
                                    <option>Tamil</option>
                                    <option>Telugu</option>
                                    <option>Kannada</option>
                                    <option>Malayalam</option>
                                    <option>Tulu</option>
                                    <option>Bengali</option>
                                    <option>Oriya</option>
                                    <option>Assamese</option>
                                    <option>Sikkim/Nepali</option>
                                    <option>Urdu</option>
                                    <option>English</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="MaritalStatus" mandatory>Marital status*</label>
                                <select required name='MaritalStatus' id="MaritalStatus">
                                    <option>Select or type</option>
                                    <option>Never Married</option>
                                    <option>Awaiting Divorce</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                    <option>Annulled</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Height">Height*</label>
                                <div style={{ display: 'flex' }}>
                                    <input required type="number" name="HeightValue" id="HeightValue" style={{ width: 'auto', marginRight: '5px' }} />
                                    <select name="HeightUnit" id="HeightUnit" style={{ width: 'auto' }}>
                                        <option value="feet">Feet</option>
                                        <option value="cm">CM</option>
                                    </select>
                                </div>
                            </div>
                            <button className={styles.NextButton} type="submit" name='submit' >Next</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div>
                <SignUpForm2/>
            </div> */}
        </>

    );
}

export default SignUpForm1;
