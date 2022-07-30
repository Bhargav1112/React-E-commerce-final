import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuHandler = () => {
        setOpenMenu((prevState) => !prevState);
    };

    const collapseClass = openMenu
        ? "collapse navbar-collapse pt-2 show"
        : "collapse navbar-collapse pt-2";

    return (
        <header>
            <nav className="navbar navbar-expand-md flex-column position-relative">
                <div className="container justify-content-between pb-2">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={openMenuHandler}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Link to="/home" className="navbar-brand fw-bold fs-2">
                        <img
                            src="images/logo.png"
                            alt="logo"
                            className="img-fluid"
                        />
                    </Link>
                    <form className="d-md-flex d-none" role="search">
                        <input
                            className="form-control rounded-0 rounded-start search"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-primary rounded-0 rounded-end"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <div className="header-buttons position-relative">
                        <button className="btn btn-primary d-md-none me-2">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                        <a
                            href="javascript:void(0)"
                            className="btn btn-primary me-2"
                            id="account"
                        >
                            <i className="fa-solid fa-user me-lg-2" />
                            <span className="d-none d-lg-inline-block">
                                Account
                                <i className="fa-solid fa-angle-down ms-1" />
                            </span>
                        </a>
                        <Link
                            to="/cart"
                            className="btn btn-primary position-relative me-2"
                        >
                            <i className="fa-solid fa-cart-shopping me-2" />
                            <span className="d-none d-lg-inline-block">
                                Cart
                            </span>
                            <span className="badge">0</span>
                        </Link>
                        <button className="btn btn-primary d-none d-lg-inline-block position-relative">
                            <i className="fa-solid fa-heart me-2" />
                            <span className="d-none d-lg-inline-block">
                                Whishlist
                            </span>
                            <span className="badge">0</span>
                        </button>
                        {/* account drop */}
                        <div className="account-menu shadow">
                            <ul className="mb-0 list-unstyled">
                                <li>
                                    <a href="javascript:void(0)">Login</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Signup</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        My Whishlist
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hr d-none d-md-block" />
                <div className="nav-menu container align-self-start">
                    <div className={collapseClass} id="navbarSupportedContent">
                        <ul className="navbar-nav gap-md-4 mb-lg-0 ">
                            <li className="nav-item ">
                                <NavLink
                                    className="nav-link fw-bold text-uppercase"
                                    activeClassName="active"
                                    aria-current="page"
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link fw-bold text-uppercase"
                                    href="javascript:void(0)"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link fw-bold text-uppercase"
                                    activeClassName="active"
                                    to="/products"
                                >
                                    Shop
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="shop.html"
                                        >
                                            Shop page
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                        >
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                        >
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link fw-bold text-uppercase"
                                    href="javascript:void(0)"
                                >
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                        >
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                        >
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="javascript:void(0)"
                                        >
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link fw-bold text-uppercase"
                                    href="javascript:void(0)"
                                >
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
