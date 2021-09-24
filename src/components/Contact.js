import React from "react";

const Contact = () => {
    return <section className="contact" id="Contacts">
        <div className="container grid">
            <div className="call">
                <h1>با من در تماس باشید :</h1>
                <div className="inf">
                    <h2 >ایمیل</h2>

                    <i className="fas fa-envelope"></i>
                    <a href="mailto:amir.abed.842@gmail.com">
                        amir.abed.842@gmail.com
                    </a>
                </div>
                <div className="inf">
                    <h2 >تلفن</h2>

                    <i className="fas fa-phone"></i>
                    <a href="tel:amir.abed.842@gmail.com">
                        09228599189
                    </a>
                </div>
                <div className="inf">
                    <h2 >آدرس</h2>

                    <div className="address">
                        <i className="fas fa-home"></i>
                        <p>تهران، خ فاطمی ، خ باباطاهر، ک فاطمی، پ 13، ط 3</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default Contact;
