import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../SignUpForm_1/SignUpForm.module.css';
import Navbar from '../Navbar/Navbar';
import ProgressBar from '../ProgressBar/ProgressBar';
import userService from '../../service/user.service';

const SignUpForm3 = () => {

    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form3UserData = {
            degree: event.target.Highest_Degree.value,
            employed: event.target.Employed_In.value,
            occupation: event.target.Occupation.value,
            works: event.target.Works.value,
            school: event.target.High_School.value,
            college: event.target.College.value,
            income: event.target.Annual_Income.value,
        };

        userService.form3Data(form3UserData).then((response) => {
            console.log(response);
            navigate('/Page4');
        }).catch((error) => {
            console.log(error);
        });
    };

    const activeSection = 'Lifestyle_Details';

    return (
        <>
            <Navbar />
            <ProgressBar activeSection={activeSection} />
            <div className={styles.mainDiv} >
                <div className={styles.container}>
                    <h1>Great! You are about to join a league of your own.</h1>
                    <div className={styles.mandatory}>*Mandatory</div>
                    <form onSubmit={handleFormSubmit} >
                        <div className={styles.inputs}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Highest_Degree" mandatory>Highest Degree*</label>
                                <select required name='Highest_Degree' id="Highest_Degree">
                                    <option>Select or type</option>
                                    <option>BE/BTech</option>
                                    <option>B.Pharma</option>
                                    <option>M.E/M.Tech</option>
                                    <option>M.Pharma</option>
                                    <option>M.S</option>
                                    <option>B.Arch</option>
                                    <option>M.Arch</option>
                                    <option>B.Des</option>
                                    <option>M.Des</option>
                                    <option>MCA</option>
                                    <option>BCA</option>
                                    <option>B.IT</option>
                                    <option>B.Com</option>
                                    <option>CA</option>
                                    <option>CS</option>
                                    <option>ICWA</option>
                                    <option>m.Com</option>
                                    <option>CFA</option>
                                    <option>MBA/PGDM</option>
                                    <option>BBA</option>
                                    <option>BHM</option>
                                    <option>MBBS</option>
                                    <option>M.D.</option>
                                    <option>BAMS</option>
                                    <option>BHMS</option>
                                    <option>BDS</option>
                                    <option>M.S.(Medicine)</option>
                                    <option>MVSc.</option>
                                    <option>BVSc.</option>
                                    <option>MDS</option>
                                    <option>BPT</option>
                                    <option>MPT</option>
                                    <option>DM</option>
                                    <option>MCh</option>
                                    <option>L.L.B</option>
                                    <option>L.L.M</option>
                                    <option>B.A</option>
                                    <option>B.Sc</option>
                                    <option>M.A</option>
                                    <option>M.Sc</option>
                                    <option>B.Ed</option>
                                    <option>M.Ed</option>
                                    <option>MSW</option>
                                    <option>BFA</option>
                                    <option>MFA</option>
                                    <option>BJMC</option>
                                    <option>MJMC</option>
                                    <option>PhD</option>
                                    <option>M.Phil</option>
                                    <option>Diploma</option>
                                    <option>Hign School</option>
                                    <option>Trade School</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Employed_In" mandatory>Employed In*</label>
                                <select required name='Employed_In' id="Employed_In">
                                    <option>Select or type</option>
                                    <option>Private Sector</option>
                                    <option>Government/Public</option>
                                    <option>Civil Services</option>
                                    <option>Defence</option>
                                    <option>Business/Self Employed</option>
                                    <option>Not Working</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Occupation" mandatory>Occupation*</label>
                                <select required name='Occupation' id="Occupation">
                                    <option>Select or type</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Works" mandatory>Works@</label>
                                <select name='Works' id="Works">
                                    <option>Select or type</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="High_School" mandatory>High School*</label>
                                <select required name='High_School' id="High_School">
                                    <option>Select or type</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="College" mandatory>College</label>
                                <select name='College' id="College">
                                    <option>Select or type</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Annual_Income">Annual Income*</label>
                                <div>
                                    <input type="number" name="Annual_Income" id="Annual_Income" required style={{ width: 'auto', marginRight: '5px' }} />
                                    <select name="IncomeUnit" id="IncomeUnit" style={{ width: 'auto' }}>
                                        <option value="INR">INR</option>
                                        <option value="Doller">Dollar</option>
                                    </select>
                                </div>
                            </div>
                            <button className={styles.NextButton} type="submit" name='submit' >Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUpForm3;
