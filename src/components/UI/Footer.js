import React from "react";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="footer-part mb-4 mb-md-0">
                            <a
                                href="javascript:void(0)"
                                className="text-white d-block mb-2 text-center fw-bold text-decoration-none fs-2"
                            >
                                Cloth-HUNT
                            </a>
                            <div className="footer-info d-flex justify-content-center flex-column gap-2">
                                <div className=" footer-contact d-flex gap-2 align-items-center">
                                    <div className="icon text-primary">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div className="footer-text">
                                        <a
                                            href="tel:9879898798"
                                            className="d-inline-block fs-6 text-decoration-none text-white"
                                        >
                                            +91-9879898798,
                                        </a>
                                        <a
                                            href="tel:9879898798"
                                            className="d-inline-block fs-6 text-decoration-none text-white"
                                        >
                                            +91-9879898798
                                        </a>
                                    </div>
                                </div>
                                <div className="footer-contact d-flex gap-2 align-items-center">
                                    <div className="icon text-primary">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="footer-text">
                                        <a
                                            href="mailto:clothhunt.shop@gmail.com"
                                            className="d-inline-block fs-6 text-decoration-none text-white"
                                        >
                                            clothhunt.shop@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="footer-contact d-flex gap-2 align-items-center">
                                    <div className="icon text-primary">
                                        <i className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="footer-text ">
                                        <p className="text-white mb-0 ">
                                            A-52, Ground floor, Saurastra soc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-2 mb-4 mb-md-0 text-white">
                        <h4 className="text-uppercase fw-bold mb-3">
                            categories
                        </h4>
                        <ul className="footer-menu list-unstyled d-flex flex-column gap-3">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="footer-link"
                                >
                                    Men
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="footer-link"
                                >
                                    Women
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="footer-link"
                                >
                                    Kids
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-4 mb-md-0 text-white">
                        <h4 className="text-uppercase fw-bold mb-3">
                            quick links
                        </h4>
                        <ul className="footer-menu list-unstyled d-flex flex-column gap-3">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="footer-link"
                                >
                                    Duties &amp; Texes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="footer-link"
                                >
                                    shipping info
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="footer-link"
                                >
                                    privacy policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="footer-link"
                                >
                                    tearms &amp; conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 text-white">
                        <h4 className="text-uppercase fw-bold mb-3">
                            news letter
                        </h4>
                        <p className="text-uppercase">
                            new products and sales directly to your inbox
                        </p>
                        <form>
                            <input
                                type="text"
                                name="footerEmail"
                                id="footerEmail"
                                className="d-block p-1"
                            />
                            <button
                                type="submit"
                                className="btn btn-outline-light"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="hr mt-4 mb-3" />
                    <div className="copyright d-flex justify-content-between align-items-center mb-3">
                        <p className="text-white">
                            Cloth-HUNT © Created by: Fresh-Team
                        </p>
                        <button type="button" className="btn btn-outline-light">
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
