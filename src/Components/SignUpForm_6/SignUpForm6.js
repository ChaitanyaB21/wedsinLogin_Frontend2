import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUpForm6.module.css'; // Import the CSS module
import Navbar from '../Navbar/Navbar';
import ProgressBar from '../ProgressBar/ProgressBar';

const App = () => {
    const [document, setDocument] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setDocument(reader.result);
        };
        reader.readAsDataURL(file);
    };


    return (
        <>
            <Navbar />
            <ProgressBar />
            <div className={styles.app}> {/* Use the styles from the CSS module */}
                <h1>Add any of the govt. IDs below</h1>
                <div className={styles.gridContainer}> {/* Use the styles from the CSS module */}
                    {document ? (
                        <div className={styles.box}> {/* Use the styles from the CSS module */}
                            <embed src={document} type="application/pdf" width="100%" height="500px" />
                        </div>
                    ) : (
                        <div className={styles.box}> {/* Use the styles from the CSS module */}
                            <label className={styles.uploadLabel}> {/* Use the styles from the CSS module */}
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleFileChange}
                                />
                                <span>Click to upload PDF</span>
                                <span>Aadhar Card</span>
                                <span>Voter ID</span>
                                <span>Driving License</span>
                            </label>
                        </div>
                    )}
                </div>
                <Link to="/Page7">
                    <button className={styles.nextButton} type="submit" name="submit">
                        Next
                    </button>
                </Link>
            </div>
        </>
    );
};

export default App;
