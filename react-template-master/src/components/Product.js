import React from "react";

function Card(props) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src="./assests/images/img1.jpg" alt="img1" />
            </div>
            <div className="card-info">
                <div className="product-name">
                    {props.data.description}
                </div>
                <div className="product-specs">
                    <div className="spec-line">
                        <div className="label">Foxxx Kitsune Mini Black Vintage RCA</div>
                        <div className="value">{props.data.specs.ram}₽</div>
                    </div>
                    <div className="spec-line">
                        <div className="label">ewewew</div>
                        <div className="value">15</div>
                    </div>
                    <div className="spec-line">
                        <div className="label">SSD</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;