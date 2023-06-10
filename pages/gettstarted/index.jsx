import React, { useEffect, useState } from 'react';
import styles from '../../styles/Initial.module.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import axios from 'axios';
import sendEmail from '@/utils/MailAlert';
const Index = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [receiveTextMessages, setReceiveTextMessages] = useState(false);
    const [services, setServices] = useState('');
    const [industryExperience, setIndustryExperience] = useState('');
    const [licenseInfo, setLicenseInfo] = useState({
        licenseDate: '',
        isLicenseValid: false,
        licenseNumber: '',
    });
    const [leaseTiming, setLeaseTiming] = useState('');
    const [hearAboutUs, setHearAboutUs] = useState('');
    const [formError, setFormError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            name &&
            address &&
            email &&
            telephone &&
            services &&
            industryExperience &&
            leaseTiming &&
            hearAboutUs
        ) {
            const data = {
                name,
                address,
                email,
                telephone,
                receiveTextMessages,
                services,
                industryExperience,
                licenseInfo,
                leaseTiming,
                hearAboutUs,
            };

            try {
                const response = await axios.post('/api/tenantapplication', data);
                // Handle success response if needed
                await axios.post('/api/sendEmail', {
                    applicant: {
                        name,
                        address,
                        email,
                        telephone,
                    },
                });
                setIsSubmitted(true);
                setFormError(false);
                setName('');
                setAddress('');
                setEmail('');
                setTelephone('');
                setReceiveTextMessages(false);
                setServices('');
                setIndustryExperience('');
                setLicenseInfo({
                    licenseDate: '',
                    isLicenseValid: false,
                    licenseNumber: '',
                });
                setLeaseTiming('');
                setHearAboutUs('');
                // Call the sendEmail function with the applicant detail

                console.log(response)
            } catch (error) {
                // Handle error if needed
                console.error(error);
            }
        } else {
            setFormError(true);
        }
    };


    useEffect(() => {
        if (isSubmitted) {
            setTimeout(() => {
                setIsSubmitted(false);
                setLicenseInfo({ licenseNumber: '', isLicenseValid: false });
            }, 3000);
        }
    }, [isSubmitted]);

    return (
        <>
            <NavBar />
            <div className={styles.gradientBackground}>
                <div className={styles.container}>
                    <h1 className={styles.mytitle}>Tenant Initial Application</h1>
                    {isSubmitted && (
                        <div className={styles.success_message}>
                            <p>Form submitted successfully!</p>
                        </div>
                    )}
                    <form className={styles.myForm} onSubmit={handleSubmit}>
                        <div className={styles.form_row}>
                            <div className={styles.form_field}>
                                <label className={styles.formLabel}>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.form_field}>
                                <label className={styles.formLabel}>Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.form_row}>
                            <div className={styles.form_field}>
                                <label className={styles.formLabel}>Email Address:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.form_field}>
                                <label className={styles.formLabel}>Preferred Telephone Number:</label>
                                <input
                                    type="number"
                                    name="telephone"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.form_row}>
                            <div className={styles.form_field}>
                                <label className={styles.formLabel}>How long have you been in your industry?</label>
                                <input
                                    type="number"
                                    name="industryExperience"
                                    value={industryExperience}
                                    onChange={(e) => setIndustryExperience(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.form_field}>
                                <label className={styles.formLabel}>When did you get your license?</label>
                                <input
                                    type="date"
                                    name="licenseDate"
                                    value={licenseInfo.licenseDate}
                                    onChange={(e) => setLicenseInfo({ ...licenseInfo, licenseDate: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className={`${styles.form_fields} ${styles.mobileView}`}>
                            <label className={styles.formLabel}>Can you receive text messages?</label>
                            <div className={styles.checkbox_container}>
                                <label className={styles.checkbox_label}>
                                    <input
                                        type="checkbox"
                                        name="receiveTextMessages"
                                        checked={receiveTextMessages}
                                        onChange={() => setReceiveTextMessages(true)}
                                    />
                                    Yes
                                </label>
                                <label className={styles.checkbox_label}>
                                    <input
                                        type="checkbox"
                                        name="receiveTextMessages"
                                        checked={!receiveTextMessages}
                                        onChange={() => setReceiveTextMessages(false)}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        <div className={styles.form_fiel}>
                            <label className={styles.formLabel}>Types of Services you provide:</label>
                            <textarea
                                className={styles.mytextArea}
                                name="services"
                                value={services}
                                onChange={(e) => setServices(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.form_row}>
                            <div className={`${styles.form_field} ${styles.license_field}`}>
                                <label className={styles.formLabel}>License Number:</label>
                                <input
                                    type="text"
                                    name="licenseNumber"
                                    value={licenseInfo.licenseNumber}
                                    onChange={(e) => setLicenseInfo({ ...licenseInfo, licenseNumber: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.form_row}>
                            <div className={`${styles.form_fields} ${styles.mobileView}`}>
                                <label className={styles.formLabel}>Is your license currently valid?</label>
                                <div className={styles.checkbox_container}>
                                    <label className={styles.checkbox_label}>
                                        <input
                                            type="checkbox"
                                            name="isLicenseValid"
                                            checked={licenseInfo.isLicenseValid}
                                            onChange={() => setLicenseInfo({ ...licenseInfo, isLicenseValid: true })}
                                        />
                                        Yes
                                    </label>
                                    <label className={styles.checkbox_label}>
                                        <input
                                            type="checkbox"
                                            name="isLicenseValid"
                                            checked={!licenseInfo.isLicenseValid}
                                            onChange={() => setLicenseInfo({ ...licenseInfo, isLicenseValid: false })}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.form_field}>
                            <label className={styles.formLabel}>How soon would you like to begin leasing a suite from us?</label>
                            <input
                                type="text"
                                name="leaseTiming"
                                value={leaseTiming}
                                onChange={(e) => setLeaseTiming(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.form_field}>
                            <label className={styles.formLabel}>How did you hear about us?</label>
                            <input
                                type="text"
                                name="hearAboutUs"
                                value={hearAboutUs}
                                onChange={(e) => setHearAboutUs(e.target.value)}
                                required
                            />
                        </div>
                        {formError && <p className={styles.error_message}>Please fill in all required fields.</p>}
                        <button
                            className={styles.mybtn}
                            type="submit"
                            disabled={
                                !name ||
                                !address ||
                                !email ||
                                !telephone ||
                                !services ||
                                !industryExperience ||
                                !leaseTiming ||
                                !hearAboutUs
                            }
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Index;

const AlertMail = async (applicant) => {
    // Create a transporter using your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
        host: "zendorasalon.com",
        port: 465,
        secure: true,
        auth: {
            user: "info@zendorasalon.com",
            pass: "zendora123",
        },
    });
    // Create the email message
    const message = {
        from: `${applicant.email}`, // Sender's email address
        to: "info@zendorasalon.com", // Recipient's email address
        subject: "New Tenant Application Submitted",
        text: `A new tenant application has been submitted with the following details:\n\nName: ${applicant.name}\nEmail: ${applicant.email}\nAddress: ${applicant.address}\nTelephone: ${applicant.telephone}\n\nPlease review it promptly.`,
    };

    try {
        // Send the email
        const info = await transporter.sendMail(message);
        console.log("Email sent:", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
