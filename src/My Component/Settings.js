import React, { useState, useEffect } from 'react';

function Settings({ onColorChange, onFontSizeChange }) {
    // Load saved settings from localStorage or set defaults
    const [color, setColor] = useState(localStorage.getItem('backgroundColor') || '#f8f9fa');
    const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'medium');

    useEffect(() => {
        // Update parent components and localStorage when color changes
        onColorChange(color);
        localStorage.setItem('backgroundColor', color);
    }, [color, onColorChange]);

    useEffect(() => {
        // Update parent components and localStorage when font size changes
        onFontSizeChange(fontSize);
        localStorage.setItem('fontSize', fontSize);
    }, [fontSize, onFontSizeChange]);

    const handleColorChange = (e) => {
        const selectedColor = e.target.value;
        setColor(selectedColor);
    };

    const handleFontSizeChange = (e) => {
        const selectedFontSize = e.target.value;
        setFontSize(selectedFontSize);
    };

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
