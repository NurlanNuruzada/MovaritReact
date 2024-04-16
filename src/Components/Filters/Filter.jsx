import React, { useState } from 'react';
import Styles from './Filter.module.css';
import { theme } from '@chakra-ui/react';

export default function Filter({ SellectOptions, Default, theme }) {
    const [selectedOption, setSelectedOption] = useState(Default);
    console.log(Default);
    return (
        <div className={`${Styles.OptionContainer} ${theme === "dark" && Styles.OptionContainerDark}`}>
            {SellectOptions.map((value, key) => (
                <button
                    key={key}
                    onClick={() => setSelectedOption(value)}
                    className={`${selectedOption === value ? (theme === "dark" ? (Styles.OptionSelectedDark) : (Styles.OptionSelected)) : Styles.Option}`}
                >
                    {value}
                </button>

            ))}
        </div>
    );
}
