import React, { useState, useEffect } from 'react';

function FormRepairDetail({ passDataToParent, setRepairData }) {
    const today = new Date().toISOString().split("T")[0];

    // State to manage all repair details
    const [purchaseDate, setPurchaseDate] = useState('');
    const [repairDate, setRepairDate] = useState('');
    const [isWarrantyEligible, setIsWarrantyEligible] = useState(false);
    const [warrantyChecked, setWarrantyChecked] = useState(false);
    const [imei, setImei] = useState('');
    const [make, setMake] = useState('Apple');
    const [modelNumber, setModelNumber] = useState('');
    const [faultCategory, setFaultCategory] = useState('Battery');
    const [description, setDescription] = useState('');

    // Handle purchase date change and check warranty eligibility
    const handlePurchaseDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setPurchaseDate(e.target.value);

        // Check if the purchase date is within 2 years
        const twoYearsAgo = new Date();
        twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

        if (selectedDate >= twoYearsAgo && e.target.value !== "") {
            setIsWarrantyEligible(true);
        } else {
            setIsWarrantyEligible(false);
            setWarrantyChecked(false);
            passDataToParent(false);
        }
    };

    // Handle warranty checkbox change and pass data to parent
    const handleWarrantyChange = (e) => {
        setWarrantyChecked(e.target.checked);
        passDataToParent(e.target.checked);
    };

    // Collect repair data and pass it back to Home.js
    useEffect(() => {
        const repairData = {
            purchaseDate,
            repairDate,
            warranty: warrantyChecked,
            imei,
            make,
            modelNumber,
            faultCategory,
            description,
        };
        setRepairData(repairData);
    }, [
        purchaseDate,
        repairDate,
        warrantyChecked,
        imei,
        make,
        modelNumber,
        faultCategory,
        description,
        setRepairData,
    ]);

    // Component UI: HTML Rendering
    return (
        <>
            <h2>Repair Details</h2>
            {/* Purchase Date */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Purchase Date *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="purchaseDate"
                    required
                    max={today}
                    value={purchaseDate}
                    onChange={handlePurchaseDateChange}
                />
            </div>
            {/* Repair Date */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Repair Date *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="repairDate"
                    required
                    min={today}
                    value={repairDate}
                    onChange={(e) => setRepairDate(e.target.value)}
                />
            </div>
            {/* Under Warranty */}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                    <legend className="col-11 float-none w-auto">Under Warranty</legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Warranty</label>
                        <input
                            type="checkbox"
                            id="warranty"
                            disabled={!isWarrantyEligible} // Disable by default, enable if eligible
                            checked={warrantyChecked}
                            onChange={handleWarrantyChange}
                        />
                    </div>
                </fieldset>
            </div>
            {/* IMEI */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">IMEI *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="imei"
                    required
                    pattern="\d{15}"
                    placeholder="Enter 15-digit IMEI number"
                    value={imei}
                    onChange={(e) => setImei(e.target.value)}
                />
            </div>
            {/* Make */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4">Make *</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                >
                    <option value="Apple">Apple</option>
                    <option value="LG">LG</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Sony">Sony</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            {/* Model Number */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Model Number</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="modelNumber"
                    value={modelNumber}
                    onChange={(e) => setModelNumber(e.target.value)}
                />
            </div>
            {/* Fault Category */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4">Fault Category *</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    value={faultCategory}
                    onChange={(e) => setFaultCategory(e.target.value)}
                >
                    <option value="Battery">Battery</option>
                    <option value="Charging">Charging</option>
                    <option value="Screen">Screen</option>
                    <option value="SD-storage">SD-storage</option>
                    <option value="Software">Software</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            {/* Description */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Description</label>
                <textarea
                    className="col-12 col-md-12 col-lg-7"
                    rows="5"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
        </>
    );
}

export default FormRepairDetail;
