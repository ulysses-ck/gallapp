import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ urls, alt_description, description, links }) => {
    return (
        <div className="card border border-2 rounded rounded-3 border-custom">
            <img
                className="card-img-top"
                src={urls.regular}
                alt={alt_description}
            ></img>
            <div>
                {/* TODO Fix description for take the correct position */}
                <i>{description}</i>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string,
    urls: PropTypes.object,
    alt_description: PropTypes.string,
    description: PropTypes.string,
};

export default Card;
