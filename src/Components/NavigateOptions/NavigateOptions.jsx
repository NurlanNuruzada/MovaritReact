import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Light from './NavigateOptionsLight.module.css'
import Dark from './NavigateOptionsDark.module.css'

export default function NavigateOptions({ theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    const [selectedOption, setSelectedOption] = useState(theme === 'dark' ? "Digital Art" : "Fine Art");
    const navigate = useNavigate()
    return (
        <div className={currentTheme.OptionContainer}>
            <button
                onClick={() => { setSelectedOption('Fine Art'); navigate('/'); }}
                className={selectedOption === 'Fine Art' ? currentTheme.OptionSelected : currentTheme.Option}
            >
                Fine Art
            </button>
            <button
                onClick={() => { setSelectedOption('Digital Art'); navigate('/dark'); }}
                className={selectedOption === 'Digital Art' ? currentTheme.OptionSelected : currentTheme.Option}
            >
                Digital Art
            </button>
        </div>
    )
}
