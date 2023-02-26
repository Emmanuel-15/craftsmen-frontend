import React from "react";
import countImg from '../../assets/img/counts-img.svg'

export default function AboutUs() {

    return (
        <main id="main">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>About Us</h2>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>About Us</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container">

                    {/* <div className="section-title" data-aos="fade-up">
                        <h2>About Us</h2>
                    </div> */}

                    <div className="row content">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                            <p>
                                We have embarked on this new journey with a new vision, mission and a new set of core values.
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> “We design solutions that protect, inspire and touch lives everyday”.</li>
                                {/* <li><i className="ri-check-double-line"></i> “We have embarked on this new journey with a new vision, mission and a new set of core values."</li> */}
                                <li><i className="ri-check-double-line"></i> "Our core values are a representation of an enthusiastic group of people, together around a single purpose."</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <p>
                                It takes hard work and passion. It takes commitment and courage. It means marching ahead with fearless innovation.
                                It involves taking risks and celebrating when they work. And going back to the drawing board when they do not.
                                It means being keenly attuned to the needs of the customer. And still being invested in the environment.
                                It requires investing in R and D, in technology, in your workforce.
                            </p>
                            <a href="#" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="counts" className="counts">
                <div className="container">

                    <div className="row">
                        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                            <img src={countImg} alt="" className="img-fluid" />
                        </div>

                        <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                            <div className="content d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-emoji-smile"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter">14</span>
                                            <p><strong>Happy Clients</strong> satisfied by our services.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-journal-richtext"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter">15</span>
                                            <p><strong>Projects</strong> undertaken by Craftsmen.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-clock"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter">1</span>
                                            <p><strong>Years of experience</strong> Craftsmen has been gaining and growing itself.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-award"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">3</span>
                                            <p><strong>Awards</strong> acheived by Craftsmen and it's team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </main>
    );
}