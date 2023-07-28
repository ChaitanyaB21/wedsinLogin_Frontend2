import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';
import styles from '../SignUpForm_1/SignUpForm.module.css';
import Navbar from "../Navbar/Navbar";
import ProgressBar from '../ProgressBar/ProgressBar';
import userService from '../../service/user.service';

const SignUpForm2 = () => {

    const navigate = useNavigate();


    const allCountries = Country.getAllCountries();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);


    const handleCountrySelect = (event) => {
        const { value } = event.target;
        setSelectedCountry(value);
        setSelectedState(''); // Reset selected state when country changes
        setStates(State.getStatesOfCountry(value)); // Fetch states based on the selected country
    }

    const handleStateSelect = (event) => {
        const { value } = event.target;
        setSelectedState(value);
        setCities(City.getCitiesOfState(selectedCountry, value)); // Fetch cities based on the selected state
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form2UserData = {
            country : event.target.Country.value,
            state: event.target.State.value,
            city: event.target.City.value
        }
        console.log(form2UserData)

        userService.form2Data(form2UserData).then((response) => {
            console.log(response);
            navigate('/Page3');
        }).catch((error) => {
            console.log(error);
        });
        
    };

    const activeSection = 'Location_Details';

    return (
        <>
            <Navbar />
            <ProgressBar activeSection={activeSection} />
            <div className={styles.mainDiv} >
                <div className={styles.container}>
                    <h1>Great! You are about to join a league of your own.</h1>
                    <div className={styles.mandatory}>*Mandatory</div>
                    <form onSubmit={handleFormSubmit}>
                        <div className={styles.inputs}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="Country" mandatory>Country*</label>
                                <select required name='Country' id="Country" onChange={handleCountrySelect} value={selectedCountry}>
                                    <option>Select or type</option>
                                    {allCountries.map((country) => (
                                        <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="State" mandatory>State*</label>
                                <select required  name='State' id="State" onChange={handleStateSelect} value={selectedState}>
                                    <option>Select or type</option>
                                    {states.map((state) => (
                                        <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="City" mandatory>City*</label>
                                <select required name='City' id="City">
                                    <option>Select or type</option>
                                    {cities.map((city) => (
                                        <option key={city.name} value={city.name}>{city.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="City" mandatory>Pincode*</label>
                                <input type="number" name="HeightValue" id="HeightValue" />
                            </div>
                            <button className={styles.NextButton} type="submit" name='submit' >Next</button> 
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUpForm2;
