// Import all dependencies, other Components
import FormCustomerDetail from './FormCustomerDetail';
import FormRepairDetail from './FormRepairDetail';
import FormCourtesyPhone from './FormCourtesyPhone';
import FormCost from './FormCost';
import FormButtons from './FormButtons';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Home() {
    const navigate = useNavigate();

    // State to hold the total cost from FormCourtesyPhone
    const [courtesyTotalCost, setCourtesyTotalCost] = useState(0.0);

    // State to hold customer type (customer or business)
    const [customerType, setCustomerType] = useState('customer');

    // State to hold warranty status
    const [isWarranty, setIsWarranty] = useState(false);

    // State to hold customer data from FormCustomerDetail
    const [customerData, setCustomerData] = useState(null);

    // State to hold repair data from FormRepairDetail
    const [repairData, setRepairData] = useState(null);

    // State to hold cost data from FormCost
    const [costData, setCostData] = useState(null);

    // State to hold courtesy data from FormCourtesyPhone
    const [courtesyData, setCourtesyData] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault(); // prevent browser from sending data to server
        try {
            // Prepare data to pass to Invoice
            const dataToPass = {
                customerData,
                repairData,
                costData,
                courtesyData,
            };
            navigate("/Invoice", { state: dataToPass });
        } catch (e) {
            alert('ERROR!!!');
        }
    };

    return (
        <>
            <form className="row" style={{ minHeight: '60vh' }} onSubmit={onSubmit}>
                {/* Customer Details */}
                <div className="col-12 col-lg-4 p-4 m-0" style={{ minHeight: '30vh', backgroundColor: '#FCF3CF' }}>
                    <FormCustomerDetail setCustomerType={setCustomerType} setCustomerData={setCustomerData} />
                </div>
                {/* Repair Details */}
                <div className="col-12 col-lg-4 p-4 m-0" style={{ minHeight: '30vh', backgroundColor: '#D5F5E3' }}>
                    <FormRepairDetail passDataToParent={setIsWarranty} setRepairData={setRepairData} />
                </div>
                {/* Courtesy Phone & Cost */}
                <div className="col-12 col-lg-4 p-0 m-0">
                    <div className="p-4" style={{ minHeight: '30vh', backgroundColor: '#2874A6' }}>
                        <FormCourtesyPhone setTotalCost={setCourtesyTotalCost} setCourtesyData={setCourtesyData} />
                    </div>
                    <div className="p-4" style={{ minHeight: '20vh', backgroundColor: '#EDBB99' }}>
                        {/* Pass bond, customerType, and warranty status */}
                        <FormCost
                            bond={courtesyTotalCost}
                            customerType={customerType}
                            isWarranty={isWarranty}
                            setCostData={setCostData}
                        />
                    </div>
                </div>
                {/* Button area */}
                <div className="p-4 text-center" style={{ minHeight: '10vh', backgroundColor: '#EDBB99' }}>
                    <FormButtons />
                </div>
            </form>
        </>
    );
}

export default Home;
