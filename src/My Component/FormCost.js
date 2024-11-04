import { useEffect } from 'react';

function FormCost({ bond, customerType, isWarranty, setCostData }) {
    // Calculate GST and total with GST
    const serviceFee = isWarranty ? 0 : 85.0;

    // Set bond to 0 if customer type is business
    const effectiveBond = customerType === 'business' ? 0 : bond;

    const total = effectiveBond + serviceFee;
    const gst = total * 0.15;
    const totalWithGst = total + gst;

    // Prepare cost data
    const costData = {
        bond: effectiveBond,
        serviceFee,
        total,
        gst,
        totalWithGst,
    };

    // Pass cost data back to Home component
    useEffect(() => {
        setCostData(costData);
    }, [bond, customerType, isWarranty, setCostData]);

    return (
        <>
            <h2>Cost</h2>
            <div className="row mt-2 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Bond ($)</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={effectiveBond.toFixed(2)} readOnly />
            </div>
            <div className="row mt-1 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={serviceFee.toFixed(2)} readOnly />
            </div>
            <div className="row mt-1 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Total ($)</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={total.toFixed(2)} readOnly />
            </div>
            <div className="row mt-1 ms-3">
                <label className="col-12 col-md-12 col-lg-4">GST ($)</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={gst.toFixed(2)} readOnly />
            </div>
            <div className="row mt-1 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Total (+GST) ($)</label>
                <input className="col-12 col-md-12 col-lg-7" type="number" value={totalWithGst.toFixed(2)} readOnly />
            </div>
        </>
    );
}

export default FormCost;
