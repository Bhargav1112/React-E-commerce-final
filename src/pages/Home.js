import React from "react";
import { Carousel } from "react-responsive-carousel";

function Home(props) {
    return (
        <main>
            {/* hero */}
            <section className="hero">
                <div className="hero-slider owl-carousel owl-theme">
                    <div className="item item--1 d-flex justify-content-end align-items-center">
                        <div className="container px-5">
                            <div className="row align-items-center justify-content-lg-end justify-content-center">
                                <div className="col-12 col-md-10 col-xl-6">
                                    <div className="hero-title text-white">
                                        <h1 className="title-heading mb-2 mb-md-4">
                                            Welcome to our fashion shop
                                        </h1>
                                        <p className="hero-text mb-2 mb-md-4">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Modi,
                                            libero. Lorem ipsum dolor sit amet.
                                        </p>
                                        <a
                                            href="javascript:void(0)"
                                            className="hero-btn btn btn-primary"
                                        >
                                            Shop now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item item--2 d-flex align-items-center justify-content-start">
                        <div className="container px-5">
                            <div className="row align-items-center justify-content-lg-start justify-content-center">
                                <div className="col-12 col-md-10 col-xl-6">
                                    <div className="hero-title text-white">
                                        <h1 className="title-heading mb-2 mb-md-4">
                                            Welcome to our fashion shop
                                        </h1>
                                        <p className="hero-text mb-2 mb-md-4">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Modi,
                                            libero. Lorem ipsum dolor sit amet.
                                        </p>
                                        <a
                                            href=" javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            Shop now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item item--3 d-flex align-items-center">
                        <div className="container px-5">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 col-md-10 col-xl-6">
                                    <div className="hero-title text-white">
                                        <h1 className="title-heading mb-2 mb-md-4">
                                            Welcome to our fashion shop
                                        </h1>
                                        <p className="hero-text mb-2 mb-md-4">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Modi,
                                            libero. Lorem ipsum dolor sit amet.
                                        </p>
                                        <a
                                            href=" javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            Shop now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services */}
            <section className="service pb-0">
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-6 col-md-3 mb-4 mb-md-0 text-center">
                            <div className="service-card border border-2 rounded p-3">
                                <div className="icon fs-1 mb-2">
                                    <i className="fa-solid fa-truck-fast" />
                                </div>
                                <h6 className="text-uppercase text-primary">
                                    free delivery
                                </h6>
                                <p>
                                    Get free delivery on min order value of 700
                                    Rs.
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 text-center mb-4 mb-md-0">
                            <div className="service-card border border-2 rounded p-3">
                                <div className="icon fs-1 mb-2">
                                    <i className="fa-solid fa-clock-rotate-left" />
                                </div>
                                <h6 className="text-uppercase text-primary">
                                    30 Days Return
                                </h6>
                                <p>
                                    You can return or replace product before 30
                                    days of delivered. *Terms and conditions
                                    apply
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 text-center ">
                            <div className="service-card border border-2 rounded p-3">
                                <div className="icon fs-1 mb-2">
                                    <i className="fa-solid fa-shield-halved" />
                                </div>
                                <h6 className="text-uppercase text-primary">
                                    secure payment
                                </h6>
                                <p>
                                    All of your payments are sequred by required
                                    policy.
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <div className="service-card border border-2 rounded p-3">
                                <div className="icon fs-1 mb-2">
                                    <i className="fa-solid fa-message" />
                                </div>
                                <h6 className="text-uppercase text-primary">
                                    24/7 support
                                </h6>
                                <p>
                                    We are available at any time. You can
                                    contact us for any queries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* offers */}
            <section className="offers pb-0">
                <div className="container">
                    <div className="row gap-4 gap-md-0 justify-content-center">
                        <div className=" col-8 col-lg-4">
                            <div className="offer offer--1">
                                <h3 className="offer-text fw-bold text-center text-white">
                                    Men's Soft Dress
                                    <span className="d-block display-4 fw-bold">
                                        40%
                                    </span>
                                    Off Everything
                                </h3>
                            </div>
                        </div>
                        <div className="col-8 col-lg-4">
                            <div className="offer offer--2">
                                <h3 className="offer-text fw-bold text-center text-white">
                                    Men's Soft Dress
                                    <span className="d-block display-4 fw-bold">
                                        40%
                                    </span>
                                    Off Everything
                                </h3>
                            </div>
                        </div>
                        <div className="col-8 col-lg-4">
                            <div className="offer offer--3">
                                <h3 className="offer-text fw-bold text-center text-white">
                                    Men's Soft Dress
                                    <span className="d-block display-4 fw-bold">
                                        40%
                                    </span>
                                    Off Everything
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Category */}
            <section className="category pb-0">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <div className="title text-center mb-4">
                                <h2 className="title-text px-4">Categories</h2>
                            </div>
                        </div>
                        <div className="col-8 col-md-3 text-end">
                            <div className="category-card rounded">
                                <div className="cat-img position-relative rounded">
                                    <img
                                        src="images/catag-1.gif"
                                        alt="image of man"
                                        className="img-fluid rounded"
                                    />
                                    <div className="overlay text-white">
                                        <p>200+ Products</p>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            View Collection
                                        </a>
                                    </div>
                                </div>
                                <p className="text-center">Men</p>
                            </div>
                        </div>
                        <div className="col-8 col-md-3">
                            <div className="category-card rounded">
                                <div className="cat-img position-relative rounded">
                                    <img
                                        src="images/catag-3.jpg"
                                        alt="image of kids"
                                        className="img-fluid rounded"
                                    />
                                    <div className="overlay text-white">
                                        <p>250+ Products</p>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            View Collection
                                        </a>
                                    </div>
                                </div>
                                <p className="text-center">Kids</p>
                            </div>
                        </div>
                        <div className="col-8 col-md-3 text-start">
                            <div className="category-card rounded">
                                <div className="cat-img position-relative rounded">
                                    <img
                                        src="images/catag-2.gif"
                                        alt="image of woman"
                                        className="img-fluid rounded"
                                    />
                                    <div className="overlay text-white">
                                        <p>300+ Products</p>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            View Collection
                                        </a>
                                    </div>
                                </div>
                                <p className="text-center">Men</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* best sellers */}
            <section className="best-sellers">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center mb-4">
                                <h2 className="title-text px-4">
                                    Best Sellers
                                </h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card product-card p-2">
                                <div className="card-img mb-2 position-relative">
                                    <img
                                        src="images/products/product-1.jpg"
                                        className="card-img-top"
                                        alt="product-image"
                                    />
                                    <div
                                        href="javascript:void(0)"
                                        className="wish-list-icon"
                                    >
                                        <i className="bi bi-suit-heart" />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6 text-center">
                                        Women Tops- blue color
                                    </h5>
                                    <p className="card-text price m-0 text-center">
                                        $123.00{" "}
                                        <span className="sub-price">
                                            <del>$150</del>
                                        </span>{" "}
                                    </p>
                                    <div className="rating mb-2 text-center">
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <div className="card-btn d-flex justify-content-lg-evenly justify-content-between">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-eye me-2" />
                                            View
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-cart-shopping me-2" />
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card product-card p-2">
                                <div className="card-img mb-2 position-relative">
                                    <img
                                        src="images/products/product-13-1.jpg"
                                        className="card-img-top"
                                        alt="product-image"
                                    />
                                    <div
                                        href="javascript:void(0)"
                                        className="wish-list-icon"
                                    >
                                        <i className="bi bi-suit-heart" />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6 text-center">
                                        Women Tops- blue color
                                    </h5>
                                    <p className="card-text price m-0 text-center">
                                        $123.00{" "}
                                        <span className="sub-price">
                                            <del>$150</del>
                                        </span>{" "}
                                    </p>
                                    <div className="rating mb-2 text-center">
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <div className="card-btn d-flex justify-content-lg-evenly justify-content-between">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-eye me-2" />
                                            View
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-cart-shopping me-2" />
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card product-card p-2">
                                <div className="card-img mb-2 position-relative">
                                    <img
                                        src="images/products/product-12-1.jpg"
                                        className="card-img-top"
                                        alt="product-image"
                                    />
                                    <div
                                        href="javascript:void(0)"
                                        className="wish-list-icon"
                                    >
                                        <i className="bi bi-suit-heart" />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6 text-center">
                                        Women Tops- blue color
                                    </h5>
                                    <p className="card-text price m-0 text-center">
                                        $123.00{" "}
                                        <span className="sub-price">
                                            <del>$150</del>
                                        </span>{" "}
                                    </p>
                                    <div className="rating mb-2 text-center">
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <div className="card-btn d-flex justify-content-lg-evenly justify-content-between">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-eye me-2" />
                                            View
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-cart-shopping me-2" />
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card product-card p-2">
                                <div className="card-img mb-2 position-relative">
                                    <img
                                        src="images/products/product-11-1.jpg"
                                        className="card-img-top"
                                        alt="product-image"
                                    />
                                    <div
                                        href="javascript:void(0)"
                                        className="wish-list-icon"
                                    >
                                        <i className="bi bi-suit-heart" />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6 text-center">
                                        Women Tops- blue color
                                    </h5>
                                    <p className="card-text price m-0 text-center">
                                        $123.00{" "}
                                        <span className="sub-price">
                                            <del>$150</del>
                                        </span>{" "}
                                    </p>
                                    <div className="rating mb-2 text-center">
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <div className="card-btn d-flex justify-content-lg-evenly justify-content-between">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-eye me-2" />
                                            View
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-cart-shopping me-2" />
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card product-card p-2">
                                <div className="card-img mb-2 position-relative">
                                    <img
                                        src="images/product1.png"
                                        className="card-img-top"
                                        alt="product-image"
                                    />
                                    <div
                                        href="javascript:void(0)"
                                        className="wish-list-icon"
                                    >
                                        <i className="bi bi-suit-heart" />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6 text-center">
                                        Women Tops- blue color
                                    </h5>
                                    <p className="card-text price m-0 text-center">
                                        $123.00{" "}
                                        <span className="sub-price">
                                            <del>$150</del>
                                        </span>{" "}
                                    </p>
                                    <div className="rating mb-2 text-center">
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <div className="card-btn d-flex justify-content-lg-evenly justify-content-between">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-eye me-2" />
                                            View
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-cart-shopping me-2" />
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card product-card p-2">
                                <div className="card-img mb-2 position-relative">
                                    <img
                                        src="images/product1.png"
                                        className="card-img-top"
                                        alt="product-image"
                                    />
                                    <div
                                        href="javascript:void(0)"
                                        className="wish-list-icon"
                                    >
                                        <i className="bi bi-suit-heart" />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6 text-center">
                                        Women Tops- blue color
                                    </h5>
                                    <p className="card-text price m-0 text-center">
                                        $123.00{" "}
                                        <span className="sub-price">
                                            <del>$150</del>
                                        </span>{" "}
                                    </p>
                                    <div className="rating mb-2 text-center">
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <div className="card-btn d-flex justify-content-lg-evenly justify-content-between">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-eye me-2" />
                                            View
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-cart-shopping me-2" />
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card product-card p-2">
                                <div className="card-img mb-2 position-relative">
                                    <img
                                        src="images/product1.png"
                                        className="card-img-top"
                                        alt="product-image"
                                    />
                                    <div
                                        href="javascript:void(0)"
                                        className="wish-list-icon"
                                    >
                                        <i className="bi bi-suit-heart" />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6 text-center">
                                        Women Tops- blue color
                                    </h5>
                                    <p className="card-text price m-0 text-center">
                                        $123.00{" "}
                                        <span className="sub-price">
                                            <del>$150</del>
                                        </span>{" "}
                                    </p>
                                    <div className="rating mb-2 text-center">
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <div className="card-btn d-flex justify-content-lg-evenly justify-content-between">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-eye me-2" />
                                            View
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-cart-shopping me-2" />
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card product-card p-2">
                                <div className="card-img mb-2 position-relative">
                                    <img
                                        src="images/product1.png"
                                        className="card-img-top"
                                        alt="product-image"
                                    />
                                    <div
                                        href="javascript:void(0)"
                                        className="wish-list-icon"
                                    >
                                        <i className="bi bi-suit-heart" />
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6 text-center">
                                        Women Tops- blue color
                                    </h5>
                                    <p className="card-text price m-0 text-center">
                                        $123.00{" "}
                                        <span className="sub-price">
                                            <del>$150</del>
                                        </span>{" "}
                                    </p>
                                    <div className="rating mb-2 text-center">
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star-fill me-1" />
                                        <i className="bi bi-star" />
                                    </div>
                                    <div className="card-btn d-flex justify-content-lg-evenly justify-content-between">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-eye me-2" />
                                            View
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-primary"
                                        >
                                            <i className="fa-solid fa-cart-shopping me-2" />
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sale */}
            <section className="sale py-0">
                <div className="container">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-4">
                            <img
                                src="images/sale.png"
                                alt="man and woman having enjoyable shopping togather"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-8 col-md-6">
                            <p className="sale-text text-primary">
                                Sale Get up to 50% off
                            </p>
                            <h3 className="sale-heading">
                                Best Summer Collection
                            </h3>
                            <p className="sale-text">New Season trends!</p>
                            <a
                                href="javascript:void(0)"
                                className="btn btn-primary mt-3"
                            >
                                Shop now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonials */}
            <section className="testimonials pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center mb-4">
                                <h2 className="title-text px-4">
                                    Testimonials
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel owl-carousel-testimonials owl-theme px-5">
                    <div className="item">
                        <div className="testimonials-card m-4 shadow p-3">
                            <div className="author">
                                <div className="auth-img">
                                    <img
                                        src="images/testimonial-1.jpg"
                                        className="img-fluid"
                                        alt="author"
                                    />
                                </div>
                                <h5>Ana Nichita</h5>
                            </div>
                            <div className="testimonials-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat, asperiores. Rem
                                    voluptate cumque distinctio ea tenetur,
                                    debitis recusandae minus sequi esse, sint
                                    possimus ratione dolorum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card m-4 shadow p-3">
                            <div className="author">
                                <div className="auth-img">
                                    <img
                                        src="images/testimonial-2.jpg"
                                        className="img-fluid"
                                        alt="author"
                                    />
                                </div>
                                <h5>Ana Nichita</h5>
                            </div>
                            <div className="testimonials-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat, asperiores. Rem
                                    voluptate cumque distinctio ea tenetur,
                                    debitis recusandae minus sequi esse, sint
                                    possimus ratione dolorum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card m-4 shadow p-3">
                            <div className="author">
                                <div className="auth-img">
                                    <img
                                        src="images/testimonial-3.jpg"
                                        className="img-fluid"
                                        alt="author"
                                    />
                                </div>
                                <h5>Ana Nichita</h5>
                            </div>
                            <div className="testimonials-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat, asperiores. Rem
                                    voluptate cumque distinctio ea tenetur,
                                    debitis recusandae minus sequi esse, sint
                                    possimus ratione dolorum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card m-4 shadow p-3">
                            <div className="author">
                                <div className="auth-img">
                                    <img
                                        src="images/testimonial-4.jpg"
                                        className="img-fluid"
                                        alt="author"
                                    />
                                </div>
                                <h5>Ana Nichita</h5>
                            </div>
                            <div className="testimonials-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat, asperiores. Rem
                                    voluptate cumque distinctio ea tenetur,
                                    debitis recusandae minus sequi esse, sint
                                    possimus ratione dolorum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-card m-4 shadow p-3">
                            <div className="author">
                                <div className="auth-img">
                                    <img
                                        src="images/testimonial-5.jpg"
                                        className="img-fluid"
                                        alt="author"
                                    />
                                </div>
                                <h5>Ana Nichita</h5>
                            </div>
                            <div className="testimonials-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat, asperiores. Rem
                                    voluptate cumque distinctio ea tenetur,
                                    debitis recusandae minus sequi esse, sint
                                    possimus ratione dolorum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog */}
            <section className="blog">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="title text-center mb-4">
                                <h2 className="title-text px-4">
                                    Latest Blogs
                                </h2>
                            </div>
                        </div>
                        <div className="col-8 col-lg-4">
                            <div className="card border-0">
                                <img
                                    src="images/blog-1.gif"
                                    className="card-img-top"
                                    alt="woman feeling some good wibes"
                                />
                                <div className="card-body">
                                    <p className="card-text text-primary fw-semibold">
                                        <span className="text-uppercase">
                                            collection
                                        </span>{" "}
                                        - 25 Apr, 2022
                                    </p>
                                    <h5 className="card-title fw-bold">
                                        The best product that shape fashion
                                    </h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Facere rem impedit
                                        quis sequi asperiores ea dignissimos
                                        architecto quod.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-lg-4">
                            <div className="card border-0">
                                <img
                                    src="images/blog-2.gif"
                                    className="card-img-top"
                                    alt="some cloths are hanging"
                                />
                                <div className="card-body">
                                    <p className="card-text fw-semibold text-primary">
                                        <span className="text-uppercase">
                                            collection
                                        </span>{" "}
                                        - 11 Apr, 2022
                                    </p>
                                    <h5 className="card-title fw-bold">
                                        The new finds
                                    </h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Facere rem impedit
                                        quis sequi asperiores ea dignissimos
                                        architecto quod.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-lg-4">
                            <div className="card border-0">
                                <img
                                    src="images/blog-3.jpg"
                                    className="card-img-top"
                                    alt="A man going some where"
                                />
                                <div className="card-body">
                                    <p className="card-text fw-semibold text-primary">
                                        <span className="text-uppercase">
                                            collection
                                        </span>{" "}
                                        - 25 Apr, 2022
                                    </p>
                                    <h5 className="card-title fw-bold">
                                        The sunset set from saks
                                    </h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Facere rem impedit
                                        quis sequi asperiores ea dignissimos
                                        architecto quod.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
