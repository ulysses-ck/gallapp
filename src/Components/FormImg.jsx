import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="w-75 px-2">
                    Buscar:
                    <input
                        className="w-100"
                        type="text"
                        name="inputText"
                        placeholder="Type here. Press 'Enter' to search it "
                    />
                </label>
                <button type="submit" className="btn btn-dark">
                    <span className="m-1">Search</span>
                    <svg
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </form>
        </>
    );
};

FormImg.propTypes = {
    handleSubmit: PropTypes.func,
};

export default FormImg;
