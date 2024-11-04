import { useState, useEffect } from 'react';

function FormCourtesyPhone({ setTotalCost, setCourtesyData }) {
    // Updated courtesyList with new items
    const courtesyList = [
        { id: 1, type: 'phone', name: 'iphone 10', bond: 275 },
        { id: 2, type: 'phone', name: 'iphone 14', bond: 300 },
        { id: 3, type: 'phone', name: 'iphone 16', bond: 500 },
        { id: 4, type: 'phone', name: 'samsung galaxy', bond: 200 },
        { id: 5, type: 'phone', name: 'nokia', bond: 150 },
        { id: 6, type: 'phone', name: 'xiaomi', bond: 100 },
        { id: 7, type: 'charger', name: 'iphone charger', bond: 45 },
        { id: 8, type: 'charger', name: 'samsung charger', bond: 30 },
        { id: 9, type: 'charger', name: 'nokia charger', bond: 25 },
        { id: 10, type: 'charger', name: 'xiaomi', bond: 25 },
    ];

    // Declare state for phone and charger selection
    const [phoneBorrow, setPhoneBorrow] = useState(0);
    const [chargerBorrow, setChargerBorrow] = useState(0);

    // Calculate the total cost whenever phone or charger selection changes
    useEffect(() => {
        const phoneItem = courtesyList.find((item) => item.id === phoneBorrow);
        const chargerItem = courtesyList.find((item) => item.id === chargerBorrow);

        const phoneCost = phoneItem ? phoneItem.bond : 0;
        const chargerCost = chargerItem ? chargerItem.bond : 0;
        const totalCost = phoneCost + chargerCost;

        // Update total cost in the parent component
        setTotalCost(totalCost);

        // Prepare courtesy data to pass back to Home.js
        const courtesyData = {
            phoneItem,
            chargerItem,
            totalCost,
        };

        setCourtesyData(courtesyData);
    }, [phoneBorrow, chargerBorrow, courtesyList, setTotalCost, setCourtesyData]);

    return (
        <>
            <h2>Courtesy Phone</h2>
            {/* Choose a phone */}
            <div className="row mt-2 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Choose a Phone</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    value={phoneBorrow}
                    onChange={(e) => setPhoneBorrow(Number(e.target.value) || 0)}
                >
                    <option value="0">None</option>
                    <option value="1">iphone 10</option>
                    <option value="2">iphone 14</option>
                    <option value="3">iphone 16</option>
                    <option value="4">samsung galaxy</option>
                    <option value="5">nokia</option>
                    <option value="6">xiaomi</option>
                </select>
            </div>

            {/* Choose a charger */}
            <div className="row mt-2 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Choose a Charger</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    value={chargerBorrow}
                    onChange={(e) => setChargerBorrow(Number(e.target.value) || 0)}
                >
                    <option value="0">None</option>
                    <option value="7">iphone charger</option>
                    <option value="8">samsung charger</option>
                    <option value="9">nokia charger</option>
                    <option value="10">xiaomi</option>
                </select>
            </div>

            {/* Table of added Courtesy items */}
            <div className="row mt-2 ms-3 me-3 bg-white">
                <table className="table table-bordered" id="borrowItems">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Bond</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Display selected phone */}
                        {phoneBorrow !== 0 && (
                            <tr>
                                <td>{courtesyList.find((item) => item.id === phoneBorrow).name}</td>
                                <td>${courtesyList.find((item) => item.id === phoneBorrow).bond}</td>
                            </tr>
                        )}
                        {/* Display selected charger */}
                        {chargerBorrow !== 0 && (
                            <tr>
                                <td>{courtesyList.find((item) => item.id === chargerBorrow).name}</td>
                                <td>${courtesyList.find((item) => item.id === chargerBorrow).bond}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FormCourtesyPhone;
