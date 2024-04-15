import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Styles from './NavigateOptions.module.css'

export default function NavigateOptions({ theme }) {
    const [selectedOption, setSelectedOption] = useState(theme === 'dark' ? "Digital Art" : "Fine Art");
    const navigate = useNavigate()
    return (
        <div className={Styles.OptionContainer}>
            <button
                onClick={() => { setSelectedOption('Fine Art'); navigate('/'); }}
                className={selectedOption === 'Fine Art' ? Styles.OptionSelected : Styles.Option}
            >
                Fine Art
            </button>
            <button
                onClick={() => { setSelectedOption('Digital Art'); navigate('/dark'); }}
                className={selectedOption === 'Digital Art' ? Styles.OptionSelected : Styles.Option}
            >
                Digital Art
            </button>
        </div>
    )
}
