import React from "react";

function ShoppingCart(props) {
    return (
        <main>
            {/* navigation */}
            <section className="navigation">
                <div className="container">
                    <nav
                        aria-label="breadcrumb"
                        className="d-flex flex-column align-items-center"
                    >
                        <h2 className="text-white">Cart</h2>
                        <ol className=" breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Cart
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* cart */}
            <section className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mb-3 mb-lg-0">
                            <div className="cart-list-wrapper border border-secondary rounded">
                                <table className="table ">
                                    <thead>
                                        <tr className="table-primary">
                                            <th style={{ maxWidth: 50 }}>
                                                Sr.No.
                                            </th>
                                            <th style={{ maxWidth: 300 }}>
                                                Detail
                                            </th>
                                            <th style={{ maxWidth: 75 }}>
                                                Price
                                            </th>
                                            <th style={{ maxWidth: 120 }}>
                                                Qty
                                            </th>
                                            <th style={{ maxWidth: 100 }}>
                                                Sub Total
                                            </th>
                                            <th style={{ maxWidth: 75 }}>
                                                Remove
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className="detail">
                                                <div className="cart-product">
                                                    <img
                                                        src="images/products/product-1-1.jpg"
                                                        alt="woman"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <h6>Women's top red</h6>
                                            </td>
                                            <td className="product-price">
                                                ₹123
                                            </td>
                                            <td className="product-qty">
                                                <div className="cart-qty-btns">
                                                    <button className="qty-btn">
                                                        +
                                                    </button>
                                                    <span className="qty">
                                                        2
                                                    </span>
                                                    <button className="qty-btn">
                                                        -
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                ₹246
                                            </td>
                                            <td className="product-remove">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary rounded-circle"
                                                >
                                                    <i className="fa-solid fa-xmark" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className="detail">
                                                <div className="cart-product">
                                                    <img
                                                        src="images/products/product-2-1.jpg"
                                                        alt="woman"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <h6>Women's top red</h6>
                                            </td>
                                            <td className="product-price">
                                                ₹123
                                            </td>
                                            <td className="product-qty">
                                                <div className="cart-qty-btns">
                                                    <button className="qty-btn">
                                                        +
                                                    </button>
                                                    <span className="qty">
                                                        2
                                                    </span>
                                                    <button className="qty-btn">
                                                        -
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                ₹246
                                            </td>
                                            <td className="product-remove">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary rounded-circle"
                                                >
                                                    <i className="fa-solid fa-xmark" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={6}>
                                                <button className="btn btn-outline-primary">
                                                    Shop More
                                                </button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="availability mb-3">
                                <form>
                                    <label
                                        htmlFor="pincode"
                                        className=" d-block mb-2"
                                    >
                                        Enter pincode
                                    </label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        id="pincode"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Check Availability
                                    </button>
                                </form>
                            </div>
                            <div className="order-price">
                                <div className="sub-total">
                                    <span>Sub Total</span>
                                    <span className="text-primary fw-semibold">
                                        ₹246
                                    </span>
                                </div>
                                <div className="tax">
                                    <span>Tax</span>
                                    <span className="text-primary fw-semibold">
                                        ₹10
                                    </span>
                                </div>
                                <div className="shipping">
                                    <span>Shipping</span>
                                    <span className="text-primary fw-semibold opacity-75">
                                        <em>free shipping</em>
                                    </span>
                                </div>
                                <div className="grand-total mb-2">
                                    <span className="fw-bold">GRAND TOTAL</span>
                                    <span className="text-primary fw-bold">
                                        ₹256
                                    </span>
                                </div>
                                <p>
                                    Shipping &amp; Taxes calculated in checkout
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-primary w-100"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ShoppingCart;
