import React, { useState, useEffect } from "react";
import styles from "@/styles/ContactForm.module.css";
import Form from "react-bootstrap/Form";
// import DatePicker from "react-datepicker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import InputGroup from "react-bootstrap/InputGroup";
import Axios from "axios";
import { BASEURL } from "@/configs/constants";
import SweetAlert from 'react-bootstrap-sweetalert';
import DatePicker from 'react-date-picker';
import { ColorRing } from 'react-loader-spinner'

export default function ContactForm() {
    const [dob, setDob] = useState();
    const [input, setInput] = useState({});
    const [gender, setGender] = useState("");
    const [businessAge, setBusinessAge] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        // console.log("full name:", input.fullName);
        // console.log("email:", input.email);
        // console.log("whatsapp number:", input.whatsappNumber);
        // console.log("phone number:", input.phoneNumber);
        // console.log("dob:", dob);
        // console.log("gender:", gender);
        // console.log("business name:", input.businessName);
        // console.log("business age:", businessAge);
        // console.log("monthly revenue:", input.monthlyRevenue);
        // console.log("yearly revenue:", input.yearlyRevenue);
        // console.log("website link:", input.websiteLink);
        // console.log("instagram name:", input.instagramUsername);
        // console.log("youtube handle:", input.youtubeHandle);
        // console.log("other link:", input.otherLink);
        // console.log("about Business:", input.aboutBusiness);
        // console.log("address:", input.address);
        // console.log("city:", input.city);
        // console.log("state:", input.state);
        // console.log("pincode:", input.pincode);

        try {
            await Axios.post(`${BASEURL}api/enquiry`, {
                fullName: input.fullName,
                email: input.email,
                whatsappNumber: input.whatsappNumber,
                phoneNumber: input.phoneNumber,
                dob: dob,
                gender: gender,
                businessName: input.businessName,
                businessAge: businessAge,
                monthlyRevenue: input.monthlyRevenue,
                yearlyRevenue: input.yearlyRevenue,
                websiteLink: input.instagramUsername,
                youtubeHandle: input.youtubeHandle,
                otherLink: input.otherLink,
                aboutBusiness: input.aboutBusiness,
                address: input.address,
                city: input.city,
                state: input.state,
                pincode: input.pincode

            }).then(data => {
                if (data.data.errorcode === 0) {
                    setShowAlert(true);
                    setIsLoading(false)
                    setDob('')
                    setInput({})
                    setGender('')
                    setBusinessAge('')

                }
                else if (data.data.errorcode === 2) {
                    setShowErrorAlert(true)
                    setIsLoading(false)
                }
            })

        } catch (error) {
            console.log(error);
        }
    };

    const handleHideAlert = () => {
        setShowAlert(false);
        setShowErrorAlert(false)
    };

    return (
        <>
            <SweetAlert
                success
                show={showAlert}
                title="Thank You"
                onConfirm={handleHideAlert}
            >
                <p>Your registration process is done successfully </p>
                <br />
                <p>Our team will contact you shortly for more details.</p>
            </SweetAlert>
            <SweetAlert
                danger
                show={showErrorAlert}
                title="Ohh!"
                onConfirm={handleHideAlert}
            >
                <p>This Email Id aleady in use </p>
            </SweetAlert>
            <div id="contact">
                <section className="container-fluid p-0">
                    <div className={styles.contactBg} id="contactBg">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <div className={styles.contactTitle} id="contactTitle">
                                        <h2>Register Now, For the Upcoming Podcast</h2>
                                        <p>
                                            Fill out the complete Registrations and serves your successful business stories in front of the digital world
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                    <div className={styles.contactForm} id="contactForm">
                                        <Form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className={styles.contactFormTitle}>
                                                        <h4>Personal Details</h4>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Full Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="fullName"
                                                                id="fullName"
                                                                value={input.fullName}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Email Address</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                value={input.email}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Whatsapp Number</Form.Label>
                                                            <Form.Control
                                                                type="number"
                                                                name="whatsappNumber"
                                                                id="whatsappNumber"
                                                                value={input.whatsappNumber}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Phone Number</Form.Label>
                                                            <Form.Control
                                                                type="number"
                                                                name="phoneNumber"
                                                                id="phoneNumber"
                                                                value={input.phoneNumber}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormDate}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Date of Birth</Form.Label>
                                                            <div>
                                                                <DatePicker
                                                                    name="dob"
                                                                    id="dob"
                                                                    // selected={dob}
                                                                    value={dob}
                                                                    onChange={(e) => setDob(e)}
                                                                />
                                                            </div>

                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormRadio}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Gender </Form.Label>
                                                            {["radio"].map((type) => (
                                                                <div key={`inline-${type}`} className="mb-3">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Male"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`inline-${type}-1`}
                                                                        value="male"
                                                                        onChange={(e) => setGender(e.target.value)}
                                                                    />
                                                                    <Form.Check
                                                                        inline
                                                                        label="Female"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`inline-${type}-2`}
                                                                        value="female"
                                                                        onChange={(e) => setGender(e.target.value)}
                                                                    />
                                                                    <Form.Check
                                                                        inline
                                                                        label="Other"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`inline-${type}-3`}
                                                                        value="other"
                                                                        onChange={(e) => setGender(e.target.value)}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className={styles.contactFormTitle}>
                                                        <h4>Business Details</h4>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Business Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="businessName"
                                                                id="businessName"
                                                                value={input.businessName}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className={styles.contactFormDate}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Business Since From</Form.Label>
                                                            <div>
                                                                <DatePicker
                                                                    name="businessAge"
                                                                    id="businessAge"
                                                                    value={businessAge}
                                                                    onChange={(e) => setBusinessAge(e)}
                                                                />
                                                            </div>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Average Monthly Revenue</Form.Label>
                                                            <InputGroup className="mb-3">
                                                                <InputGroup.Text>₹</InputGroup.Text>
                                                                <Form.Control
                                                                    name="monthlyRevenue"
                                                                    id="monthlyRevenue"
                                                                    value={input.monthlyRevenue}
                                                                    onChange={handleChange}
                                                                />
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Average Yearly Revenue </Form.Label>
                                                            <InputGroup className="mb-3">
                                                                <InputGroup.Text>₹</InputGroup.Text>
                                                                <Form.Control
                                                                    name="yearlyRevenue"
                                                                    id="yearlyRevenue"
                                                                    value={input.yearlyRevenue}
                                                                    onChange={handleChange}
                                                                />
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Website Link</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="websiteLink"
                                                                id="websiteLink"
                                                                value={input.websiteLink}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Instagram Username </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="instagramUsername"
                                                                id="instagramUsername"
                                                                value={input.instagramUsername}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>YouTube Handle</Form.Label>
                                                            <InputGroup className="mb-3">
                                                                <InputGroup.Text id="basic-addon1">
                                                                    @
                                                                </InputGroup.Text>
                                                                <Form.Control
                                                                    name="youtubeHandle"
                                                                    id="youtubeHandle"
                                                                    value={input.youtubeHandle}
                                                                    onChange={handleChange}
                                                                />
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Other Link </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="otherLink"
                                                                id="otherLink"
                                                                value={input.otherLink}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>
                                                                Write Short Description About Your Business
                                                            </Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={3}
                                                                name="aboutBusiness"
                                                                id="aboutBusiness"
                                                                value={input.aboutBusiness}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className={styles.contactFormTitle}>
                                                        <h4>Other Details</h4>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Address</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="address"
                                                                id="address"
                                                                value={input.address}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>City</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="city"
                                                                id="city"
                                                                value={input.city}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>State </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="state"
                                                                id="state"
                                                                value={input.state}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className={styles.contactFormInput}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Pincode </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="pincode"
                                                                id="pincode"
                                                                value={input.pincode}
                                                                onChange={handleChange}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className={styles.contactFormBtn}>
                                                        <button onClick={handleSubmit} type="button">
                                                            {isLoading ?
                                                                <ColorRing
                                                                    visible={true}
                                                                    height="40"
                                                                    width="40"
                                                                    ariaLabel="blocks-loading"
                                                                    wrapperStyle={{}}
                                                                    wrapperClass="blocks-wrapper"
                                                                    colors={['#000000']}
                                                                />
                                                                :
                                                                "Submit"
                                                            }
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
