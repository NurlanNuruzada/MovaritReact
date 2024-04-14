import React, { useState } from 'react'
import Styles from './NavigateOptions.module.css'

export default function NavigateOptions() { 
    const [selectedOption, setSelectedOption] = useState("Fine Art");
    return (
        <div className={Styles.OptionContainer}>
            <button
                onClick={() => setSelectedOption('Fine Art')}
                className={selectedOption === 'Fine Art' ? Styles.OptionSelected : Styles.Option}
            >
                Fine Art
            </button>
            <button
                onClick={() => setSelectedOption('Digital Art')}
                className={selectedOption === 'Digital Art' ? Styles.OptionSelected : Styles.Option}
            >
                Digital Art
            </button>
        </div>
    )
}
