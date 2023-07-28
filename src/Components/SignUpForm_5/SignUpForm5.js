import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUpForm5.module.css'; // Import the CSS module
import Navbar from '../Navbar/Navbar';
import ProgressBar from '../ProgressBar/ProgressBar';

const SignUpFrom5 = () => {
    const [photos, setPhotos] = useState(Array(9).fill(null));

    const handleFileChange = (index, event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const newPhotos = [...photos];
            newPhotos[index] = reader.result;
            setPhotos(newPhotos);
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <Navbar />
            <ProgressBar />
            <div className={styles.app}> {/* Use the styles from the CSS module */}
                <h1>Add Photos</h1>
                <div className={styles.gridContainer}> {/* Use the styles from the CSS module */}
                    {photos.map((photo, index) => (
                        <div key={index} className={styles.box}> {/* Use the styles from the CSS module */}
                            {photo ? (
                                <img src={photo} alt={`Uploaded ${index + 1}`} />
                            ) : (
                                <label className={styles.uploadLabel}> {/* Use the styles from the CSS module */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(index, e)}
                                    />
                                </label>
                            )}
                        </div>
                    ))}
                </div>
                <Link to="/Page6">
                    <button className={styles.nextButton} type="submit" name="submit">
                        Next
                    </button>
                </Link>
            </div>
        </>
    );
};

export default SignUpFrom5;
