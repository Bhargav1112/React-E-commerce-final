import React from "react";

function ListView(props) {
    return (
        <div className="col-10">
            <div className="list-card border rounded p-2 mb-3 d-flex align-items-center gap-3">
                <div className="list-img">
                    <img
                        src="images/products/product-1-1.jpg"
                        alt="product"
                        className="img-fluid"
                    />
                </div>
                <div className="list-body">
                    <h5 className="list-title">Women Tops- blue color</h5>
                    <p className="list-info d-none d-md-block">
                        synthetic cloth, smooth, shiny, washable, etc.
                    </p>
                    <p className="card-text price m-0 fs-md-5">
                        ₹123.00{" "}
                        <span className="sub-price fs-6">
                            <del>₹150.00</del>
                        </span>
                    </p>
                    <p className="save mb-0 mb-md-2">You save ₹27</p>
                    <div className="rating mb-2">
                        <span>Rating:</span>
                        &nbsp;
                        <i className="bi bi-star-fill me-1" />
                        <i className="bi bi-star-fill me-1" />
                        <i className="bi bi-star-fill me-1" />
                        <i className="bi bi-star-fill me-1" />
                        <i className="bi bi-star" />
                    </div>
                    <div className="list-btn">
                        <a
                            href="javascript:void(0)"
                            className="btn btn-primary"
                        >
                            <i className="fa-solid fa-cart-shopping" />
                            Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListView;
