import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GridView from "../components/products/GridView";
import ListView from "../components/products/ListView";

function Shop(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isViewList = searchParams.get("view") === "list";

    const changeViewHandler = () => {
        navigate(`${location.pathname}?view=${isViewList ? "grid" : "list"}`);
    };

    return (
        <main>
            {/* navigation */}
            <section className="navigation">
                <div className="container">
                    <nav
                        aria-label="breadcrumb"
                        className="d-flex flex-column align-items-center"
                    >
                        <h2 className="text-white">Shop</h2>
                        <ol className=" breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <Link to={"/home"}>Home</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Shop
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* products */}
            <section className="shop">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-3 px-2 border py-3 rounded">
                            <div className="filter rounded">
                                <p className="text-uppercase text-primary fw-bold">
                                    Filter:
                                </p>
                                <div
                                    className="accordion accordion-flush"
                                    id="accordionFlushExample"
                                >
                                    <div className="accordion-item border-top">
                                        <h2
                                            className="accordion-header"
                                            id="flush-headingOne"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                Color
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingOne"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="red"
                                                            defaultValue="red"
                                                            id="red"
                                                        />
                                                        <label htmlFor="red">
                                                            Red
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="blue"
                                                            id="blue"
                                                        />
                                                        <label htmlFor="blue">
                                                            Blue
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="green"
                                                            id="green"
                                                        />
                                                        <label htmlFor="green">
                                                            Green
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="yellow"
                                                            id="yellow"
                                                        />
                                                        <label htmlFor="yellow">
                                                            Yellow
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="flush-headingTwo"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseTwo"
                                            >
                                                Size
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingTwo"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="small"
                                                            id="small"
                                                        />
                                                        <label htmlFor="small">
                                                            Small (S)
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="medium"
                                                            id="medium"
                                                        />
                                                        <label htmlFor="medium">
                                                            Medium (M)
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="large"
                                                            id="large"
                                                        />
                                                        <label htmlFor="large">
                                                            Large (lg)
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="extraLarge"
                                                            id="extraLarge"
                                                        />
                                                        <label htmlFor="extraLarge">
                                                            Extra Large (xl)
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="extraExtraLarge"
                                                            id="extraExtraLarge"
                                                        />
                                                        <label htmlFor="extraExtraLarge">
                                                            {" "}
                                                            Extra Extra Large
                                                            (xxl)
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom">
                                        <h2
                                            className="accordion-header"
                                            id="flush-headingThree"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseThree"
                                            >
                                                Price
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseThree"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="flush-headingThree"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="one"
                                                            id="one"
                                                        />
                                                        <label htmlFor="one">
                                                            {" "}
                                                            below $100.00
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="one_tow"
                                                            id="one_tow"
                                                        />
                                                        <label htmlFor="one_tow">
                                                            $100 - $200
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="two_three"
                                                            id="two_three"
                                                        />
                                                        <label htmlFor="two_three">
                                                            $200 - $300
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="three_four"
                                                            id="three_four"
                                                        />
                                                        <label htmlFor="three_four">
                                                            $300 - $400
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="four_five"
                                                            id="four_five"
                                                        />
                                                        <label htmlFor="four_five">
                                                            $400 - $500
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="five-six"
                                                            id="five-six"
                                                        />
                                                        <label htmlFor="five-six">
                                                            $500 - $600
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="six_seven"
                                                            id="six_seven"
                                                        />
                                                        <label htmlFor="six_seven">
                                                            $600 - $700
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="seven_eight"
                                                            id="seven_eight"
                                                        />
                                                        <label htmlFor="seven_eight">
                                                            $700 - $800
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            name="eight"
                                                            id="eight"
                                                        />
                                                        <label htmlFor="eight">
                                                            above $800
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 px-2 py-3 border border-start-0 rounded">
                            <div className="categ mb-3">
                                <div className="tabs">
                                    <div
                                        className="tab active"
                                        title="view"
                                        onClick={changeViewHandler}
                                    >
                                        {isViewList ? (
                                            <i className="fa-solid fa-border-all" />
                                        ) : (
                                            <i className="fa-solid fa-list" />
                                        )}
                                    </div>
                                    {/* <div className="tab" title="List">
                                        <i className="fa-solid fa-list" />
                                    </div> */}
                                </div>
                                <select
                                    name="select"
                                    id="select"
                                    className="p-2 rounded shadow"
                                >
                                    <option value selected disabled>
                                        Select Category
                                    </option>
                                    <option value="all">All</option>
                                    <option value="men shirt">
                                        Men's Shirt
                                    </option>
                                    <option value="men t-shirt">
                                        Men's T-Shirt
                                    </option>
                                    <option value="men lowers">
                                        Men's Lowers
                                    </option>
                                    <option value="men trowsers">
                                        Men's Trowsers
                                    </option>
                                    <option value="women top">
                                        Women's Top
                                    </option>
                                    <option value="women ethenic">
                                        Women's Ethenic Wears
                                    </option>
                                    <option value="women scirts">
                                        Women's Scirts
                                    </option>
                                    <option value="women wedding">
                                        Women's Wedding Collection
                                    </option>
                                    <option value="kids">Kids</option>
                                </select>
                                <select
                                    name="sort"
                                    id="sort"
                                    className="p-2 rounded shadow border-0"
                                >
                                    <option value selected disabled>
                                        Sort by
                                    </option>
                                    <option value="priceLow">
                                        Price Low to High
                                    </option>
                                    <option value="priceHigh">
                                        Price High to Low
                                    </option>
                                </select>
                            </div>
                            <div className="products">
                                <div className="tab-content">
                                    {isViewList ? (
                                        <div className="tab-info">
                                            <div className="row justify-content-center ">
                                                {new Array(6)
                                                    .fill(0)
                                                    .map((item, i) => (
                                                        <ListView key={i} />
                                                    ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="tab-info">
                                            <div className="row">
                                                {new Array(6)
                                                    .fill(0)
                                                    .map((item, i) => (
                                                        <GridView key={i} />
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="pages">
                                <nav className="d-flex justify-content-center">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <span className="page-link">
                                                Previous
                                            </span>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li
                                            className="page-item active"
                                            aria-current="page"
                                        >
                                            <span className="page-link">2</span>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Shop;
