import React, { useState, useEffect } from 'react';

function Settings({ onColorChange, onFontSizeChange }) {
    // Initialize state with values from localStorage or defaults
    const [color, setColor] = useState(() => localStorage.getItem('backgroundColor') || '#f8f9fa');
    const [fontSize, setFontSize] = useState(() => localStorage.getItem('fontSize') || 'medium');

    // Update color and save to localStorage
    const handleColorChange = (e) => {
        const selectedColor = e.target.value;
        setColor(selectedColor);
        localStorage.setItem('backgroundColor', selectedColor); // Save to localStorage immediately
        onColorChange(selectedColor); // Pass up to parent
    };

    // Update font size and save to localStorage
    const handleFontSizeChange = (e) => {
        const selectedFontSize = e.target.value;
        setFontSize(selectedFontSize);
        localStorage.setItem('fontSize', selectedFontSize); // Save to localStorage immediately
        onFontSizeChange(selectedFontSize); // Pass up to parent
    };

    // Effect to load initial settings into the parent component
    useEffect(() => {
        onColorChange(color);
        onFontSizeChange(fontSize);
    }, [color, fontSize, onColorChange, onFontSizeChange]);

    return (
        <div>
            <h3>Settings</h3>
            <label htmlFor="backgroundColor">Select Background Color: </label>
            <select id="backgroundColor" value={color} onChange={handleColorChange} style={{ marginLeft: '10px' }}>
                <option value="#f8f9fa">Light Gray (Default)</option>
                <option value="#d3d3d3">Gray</option>
                <option value="#aed6f1">Sky Blue</option>
                <option value="#a9dfbf">Soft Green</option>
                <option value="#ffe0b2">Peach</option>
            </select>

            <div style={{ marginTop: '15px' }}>
                <label htmlFor="fontSize">Select Font Size: </label>
                <select id="fontSize" value={fontSize} onChange={handleFontSizeChange} style={{ marginLeft: '10px' }}>
                    <option value="small">Small</option>
                    <option value="medium">Medium (Default)</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    );
}

export default Settings;
