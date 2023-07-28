import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.css';
import Navbar from '../Navbar/Navbar';
import ProgressBar from '../ProgressBar/ProgressBar';
import userService from '../../service/user.service';

const SignUpForm4 = () => {

    const navigate = useNavigate();

    const [smokeOption, setSmokeOption] = useState(null);
    const [drinkOption, setDrinkOption] = useState(null);
    const [foodOption, setFoodOption] = useState(null);
    const [workoutOption, setWorkoutOption] = useState(null);
    const [childrenOption, setChildrenOption] = useState(null);

    const handleButtonClick = (event, optionSetter, optionValue) => {
        event.preventDefault();
        optionSetter(optionValue);
    };

    const activeSection = 'Family_Details';

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form4UserData = {
            smokeOption: smokeOption,
            drinkOption: drinkOption,
            foodOption:foodOption,
            workoutOption:workoutOption,
            childrenOption:childrenOption
        }
        // console.log(form4Data);
        userService.form3Data(form4UserData).then((response) => {
            console.log(response);
            navigate('/Page5');
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
            <Navbar />
            <ProgressBar activeSection={activeSection} />
            <div className={styles.mainDiv}>
                <div className={styles.container}>
                    <h1>Please give a little insight into your life.</h1>
                    <div className={styles.mandatory}>*Mandatory</div>
                    <form onSubmit={handleFormSubmit}>
                        <div className={styles.inputs}>
                            {/* Smoke input group */}
                            <div className={styles.inputGroup} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <label  htmlFor="Smoke" mandatory>Smoke*</label>
                                <div style={{ flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={smokeOption === 'Yes' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setSmokeOption, 'Yes')}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            className={smokeOption === 'No' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setSmokeOption, 'No')}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '540px', flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={smokeOption === 'Trying to quit' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setSmokeOption, 'Trying to quit')}
                                        >
                                            Trying to quit
                                        </button>
                                        <button
                                            className={smokeOption === 'Occasionally' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setSmokeOption, 'Occasionally')}
                                        >
                                            Occasionally
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Drink input group */}
                            <div className={styles.inputGroup} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <label htmlFor="Drink" mandatory>Drink*</label>
                                <div style={{ flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={drinkOption === 'Yes' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setDrinkOption, 'Yes')}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            className={drinkOption === 'No' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setDrinkOption, 'No')}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '540px', flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={drinkOption === 'Trying to quit' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setDrinkOption, 'Trying to quit')}
                                        >
                                            Trying to quit
                                        </button>
                                        <button
                                            className={drinkOption === 'Occasionally' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setDrinkOption, 'Occasionally')}
                                        >
                                            Occasionally
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Food input group */}
                            <div className={styles.inputGroup} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <label htmlFor="Food" mandatory>Food*</label>
                                <div style={{ flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={foodOption === 'Vegeterian' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setFoodOption, 'Vegeterian')}
                                        >
                                            Vegeterian
                                        </button>
                                        <button
                                            className={foodOption === 'Eggetarian' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setFoodOption, 'Eggetarian')}
                                        >
                                            Eggetarian
                                        </button>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '540px', flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={foodOption === 'Vegan' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setFoodOption, 'Vegan')}
                                        >
                                            Vegan
                                        </button>
                                        <button
                                            className={foodOption === 'Non-Vegeterian' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setFoodOption, 'Non-Vegeterian')}
                                        >
                                            Non-Vegeterian
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Workout input group */}
                            <div className={styles.inputGroup} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <label htmlFor="Workout" mandatory>Workout*</label>
                                <div style={{ flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={workoutOption === 'Regularly' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setWorkoutOption, 'Regularly')}
                                        >
                                            Regularly
                                        </button>
                                        <button
                                            className={workoutOption === 'No' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setWorkoutOption, 'No')}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '540px', flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={workoutOption === 'Sometimes' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setWorkoutOption, 'Sometimes')}
                                        >
                                            Sometimes
                                        </button>
                                        <button
                                            className={workoutOption === 'I walk regularly' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setWorkoutOption, 'I walk regularly')}
                                        >
                                            I walk regularly
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Children input group */}
                            <div className={styles.inputGroup} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <label htmlFor="Children" mandatory>Do you have children*</label>
                                <div style={{ flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={childrenOption === 'Yes' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setChildrenOption, 'Yes')}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            className={childrenOption === 'No' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setChildrenOption, 'No')}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '540px', flex: '1 0 50%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <button
                                            className={childrenOption === 'Want CHildren' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setChildrenOption, 'Want CHildren')}
                                        >
                                            Want Children
                                        </button>
                                        <button
                                            className={childrenOption === 'Prefer Not Say' ? styles.selectedOption : ''}
                                            onClick={(event) => handleButtonClick(event, setChildrenOption, 'Prefer Not Say')}
                                        >
                                            Prefer Not Say
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={styles.NextButton} type="submit" name="submit">
                            Next
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUpForm4;
