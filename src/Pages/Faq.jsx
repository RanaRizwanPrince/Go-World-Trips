import React from 'react'
import { RiShieldStarFill } from "react-icons/ri";
const Faq = () => {
    return (
        <>
            <section className="About1">
                <div className="container">
                    <div className="content">
                        <h1>FAQ</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae iusto corrupti incidunt veritatis eius quisquam? Aspernatur similique unde doloremque. <br /> Dolorem amet, aut labore dicta odio quo quidem aliquid ipsam cum!</p>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="faq1">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-5">
                            <img src="https://ex-coders.com/html/visaway/assets/img/home-2/feature/02.png" className="img-fluid" />
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <h6>Your Travel Made Easy</h6>
                            <h1>Smooth Visa Journey Guaranteed</h1>
                            <p>We provide expert guidance for every visa application, ensuring smooth processing, personalized support, and reliable assistance</p>
                            <div className="box">
                                <h3><RiShieldStarFill /> Expert Consultants</h3>
                                <p>Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.</p>
                            </div>
                            <div className="box">
                                <h3><RiShieldStarFill /> Personalized Support</h3>
                                <p>Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.</p>
                            </div>
                            <div className="box">
                                <h3><RiShieldStarFill /> Transparent Process</h3>
                                <p>Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq