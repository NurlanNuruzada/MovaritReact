import React, { useState } from 'react';
import Styles from './Filter.module.css';

export default function Filter({ SellectOptions }) {
    const [selectedOption, setSelectedOption] = useState("All");
    return (
            <div className={Styles.OptionContainer}>
                {SellectOptions.map((value, key) => (
                    <button
                        key={key}
                        onClick={() => setSelectedOption(value)}
                        className={selectedOption === value ? Styles.OptionSelected : Styles.Option}
                    >
                        {value}
                    </button>
                    
                ))}
        </div>
    );
}
