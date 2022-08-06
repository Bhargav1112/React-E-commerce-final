import React from "react";

function GridView(props) {
    return (
        <div className="col-6 col-lg-4 mb-4">
            <div className="card product-card p-2">
                <div className="card-img mb-2 position-relative">
                    <img
                        src="images/products/product-1.jpg"
                        className="card-img-top"
                        alt="product-image"
                    />
                    <div href="javascript:void(0)" className="wish-list-icon">
                        <i className="bi bi-suit-heart" />
                    </div>
                </div>
                <div className="card-body p-0">
                    <h5 className="card-title fs-6 text-center">
                        Women Tops- blue color
                    </h5>
                    <p className="card-text price m-0 text-center">
                        $123.00
                        <span className="sub-price">
                            <del>$150</del>
                        </span>
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
    );
}

export default GridView;
