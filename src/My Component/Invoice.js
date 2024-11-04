import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Invoice() {
    const location = useLocation();
    const navigate = useNavigate();
    const { customerData, costData, repairData, courtesyData } = location.state || {};

    // Set booking date as the current date
    const [bookingDate] = useState(new Date());
    // Set payment due date as 5 days after the booking date
    const [paymentDueDate] = useState(new Date(bookingDate.getTime() + 5 * 24 * 60 * 60 * 1000));

    useEffect(() => {
        if (!customerData || !costData || !repairData) {
            // Redirect to home page if data is missing
            navigate('/');
        }
    }, [customerData, costData, repairData, navigate]);

    // Format date as "Month Day, Year" without time
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        });
    };

    return (
        <div className="container my-5 p-4 border border-secondary">
            <div className="row mb-4">
                <div className="col-8">
                    <h2 className="text-uppercase">Repair Booking</h2>
                </div>
                <div className="col-4 text-end">
                    <p className="mb-1">Amount Due</p>
                    <h3>${costData ? costData.totalWithGst.toFixed(2) : '0.00'}</h3>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <h4>Customer</h4>
                    <p><strong>{customerData.title} {customerData.firstName} {customerData.lastName}</strong></p>
                    <p>{customerData.street}</p>
                    <p>{customerData.suburb}, {customerData.city} {customerData.postCode}</p>
                    <p>{customerData.phoneNumber}</p>
                    <p>{customerData.email}</p>
                </div>
                <div className="col text-end">
                    <h4>Repair Job</h4>
                    <p><strong>Job Number:</strong> 3001</p>
                    <p><strong>Booking Date:</strong> {formatDate(bookingDate)}</p>
                    <p><strong>Payment Due:</strong> {formatDate(paymentDueDate)}</p>
                </div>
            </div>

            <div className="row mb-4 border-top pt-3">
                <h4>Repair Details</h4>
                <div className="col">
                    <p><strong>Purchase Date:</strong> {repairData.purchaseDate}</p>
                    <p><strong>Repair Date:</strong> {repairData.repairDate}</p>
                    <p><strong>Under Warranty:</strong> {repairData.warranty ? 'Yes' : 'No'}</p>
                    <p><strong>IMEI Number:</strong> {repairData.imei}</p>
                    <p><strong>Device Maker:</strong> {repairData.make}</p>
                    <p><strong>Model Number:</strong> {repairData.modelNumber}</p>
                    <p><strong>Fault Category:</strong> {repairData.faultCategory}</p>
                    <p><strong>Description:</strong> {repairData.description}</p>
                </div>
            </div>

            {courtesyData && (courtesyData.phoneItem || courtesyData.chargerItem) && (
                <div className="row mb-4 border-top pt-3">
                    <h4>Courtesy Loan Device Details</h4>
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Item</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courtesyData.phoneItem && (
                                <tr>
                                    <td>{courtesyData.phoneItem.name}</td>
                                    <td>${courtesyData.phoneItem.bond}</td>
                                </tr>
                            )}
                            {courtesyData.chargerItem && (
                                <tr>
                                    <td>{courtesyData.chargerItem.name}</td>
                                    <td>${courtesyData.chargerItem.bond}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="row mb-4 border-top pt-3">
                <h4>Totals</h4>
                <div className="col-6 offset-6">
                    <div className="d-flex justify-content-between">
                        <span>Bond:</span>
                        <span>${costData ? costData.bond.toFixed(2) : '0.00'}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Service Fee:</span>
                        <span>${costData ? costData.serviceFee.toFixed(2) : '0.00'}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Total (Excl. GST):</span>
                        <span>${costData ? costData.total.toFixed(2) : '0.00'}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>GST (15%):</span>
                        <span>${costData ? costData.gst.toFixed(2) : '0.00'}</span>
                    </div>
                    <div className="d-flex justify-content-between fw-bold">
                        <span>Total (Incl. GST):</span>
                        <span>${costData ? costData.totalWithGst.toFixed(2) : '0.00'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
