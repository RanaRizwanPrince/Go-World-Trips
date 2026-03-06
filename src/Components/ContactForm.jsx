import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: "", type: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.full_name.value;
        const email = form.email.value;
        // 🔴 Validation
        if (!fullName || !email || !phone) {
            setPopup({
                show: true,
                message: "Please fill all required fields ⚠",
                type: "error"
            });
            return;
        }
        setLoading(true);
        emailjs.sendForm(
            "service_fjbm07l",
            "template_axky9nj",
            form,
            "UKFp68Tx1OagQ5KPu"
        )
            .then(() => {
                setLoading(false);
                setPopup({
                    show: true,
                    message: "Message Sent Successfully ✅",
                    type: "success"
                });
                form.reset();
                setPhone("");
            })
            .catch(() => {
                setLoading(false);
                setPopup({
                    show: true,
                    message: "Something went wrong ❌",
                    type: "error"
                });
            });
    };
    return (
        <><br />
            <section className="form1">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 my-3">
                                <label htmlFor="full_name">Full Name *</label>
                                <input type="text" name="full_name" placeholder="Full Name" className='form-control' />
                            </div>
                            <div className="col-lg-6 col-md-6 my-3">
                                <label htmlFor="email">Enter Your Email *</label>
                                <input type="email" name="email" placeholder="Enter Your Email" className='form-control' />
                            </div>
                            <div className="col-lg-6 col-md-6 my-3">
                                <label htmlFor="email">Enter Your Mobile Number *</label>
                                <PhoneInput country={'pk'} value={phone} onChange={setPhone} inputStyle={{ width: '100%', height: '45px' }} />
                                <input type="hidden" name="phone" value={phone} />
                            </div>
                            <div className="col-lg-6 col-md-6 my-3">
                                <label htmlFor="email">What's Your Nationality? *</label>
                                <input type="text" name="nationality" placeholder="What's Your Nationality?" className='form-control' />
                            </div>
                            <div className="col-lg-6 col-md-6 my-3">
                                <label htmlFor="email">Status in UK *</label>
                                <input type="text" name="status_uk" placeholder="Status in UK" className='form-control' />
                            </div>
                            <div className="col-lg-6 col-md-6 my-3">
                                <label htmlFor="email">What is the best time to call you? *</label>
                                <input type="time" name="preferred_time" className='form-control' />
                            </div>
                            <br /><br />
                            <label>Response Preferred By *</label>
                            <div className='Response' style={{ display: 'flex',justifyContent:"space-between", gap: '20px', color: '#FFB800' }}>
                                <label><input type="checkbox" name="response_call" /> By Call</label>
                                <label><input type="checkbox" name="response_email" /> By Email</label>
                                <label><input type="checkbox" name="response_whatsapp" /> By WhatsApp</label>
                            </div><br /><br />
                            <button type='submit' className='link' disabled={loading}>
                                {loading ? <div className="spinner"></div> : "Submit"}
                            </button>

                        </div>
                    </form>
                </div>
            </section>
            {popup.show && (
                <div className="popup-overlay" onClick={() => setPopup({ ...popup, show: false })}>
                    <div className={`popup-box ${popup.type}`}>
                        {popup.message}
                    </div>
                </div>
            )}
        </>
    );
};
export default ContactForm;