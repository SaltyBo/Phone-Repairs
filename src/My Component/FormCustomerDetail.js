import { useState, useEffect } from 'react';

// Define the CustomerData class
class CustomerData {
    constructor(customerType, title, firstName, lastName, street, suburb, city, postCode, phoneNumber, email) {
        this.customerType = customerType;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.suburb = suburb;
        this.city = city;
        this.postCode = postCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

function FormCustomerDetail({ setCustomerType, setCustomerData }) {
    // State variables for each input field
    const [customerType, setCustomerTypeLocal] = useState('customer');
    const [title, setTitle] = useState('Mr');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [suburb, setSuburb] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleCustomerTypeChange = (e) => {
        const selectedType = e.target.value;
        setCustomerTypeLocal(selectedType);
        setCustomerType(selectedType); // Pass the change to parent component
    };

    // Update the customer data whenever any input changes
    useEffect(() => {
        const customerData = new CustomerData(
            customerType,
            title,
            firstName,
            lastName,
            street,
            suburb,
            city,
            postCode,
            phoneNumber,
            email
        );
        setCustomerData(customerData);
    }, [customerType, title, firstName, lastName, street, suburb, city, postCode, phoneNumber, email, setCustomerData]);

    // Component UI: HTML Rendering
    return (
        <>
            <h2>Customer Details</h2>
            {/* Customer type */}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend className="col-11 float-none w-auto">Customer type *</legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Customer</label>
                        <input
                            type="radio"
                            name="customer-type"
                            value="customer"
                            checked={customerType === 'customer'}
                            onChange={handleCustomerTypeChange}
                        />
                    </div>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Business</label>
                        <input
                            type="radio"
                            name="customer-type"
                            value="business"
                            checked={customerType === 'business'}
                            onChange={handleCustomerTypeChange}
                        />
                    </div>
                </fieldset>
            </div>
            {/* Other Customer Details */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4">Title *</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">First Name *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="fname"
                    required
                    pattern="[A-Za-z\s\-]+"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Last Name *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="lname"
                    required
                    pattern="[A-Za-z\s\-]+"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Street *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="street"
                    required
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Suburb</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="suburb"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">City *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="City"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Post Code *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="postCode"
                    required
                    pattern="\d{4}"
                    title="Must be a proper Post Code"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Phone Number *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="phoneNumber"
                    required
                    pattern="[\d\s\(\)\-\+]+"
                    title="Must be a proper Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Email</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </>
    );
}

export default FormCustomerDetail;
