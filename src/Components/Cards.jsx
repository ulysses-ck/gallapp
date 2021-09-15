import React from "react";
import { useFetchImages } from "../hooks/useFetchImages";
import Card from "./Card";
import "./Cards.css";
import FormImg from "./FormImg";
import Loading from "./Loading";

const Cards = () => {
    const [images, loading, handleSubmit] = useFetchImages();

    return (
        <div className="container text-center">
            <FormImg handleSubmit={handleSubmit} />
            <hr />
            {loading && <Loading />}
            <div className="row">
                {images.map((img) => {
                    return (
                        <div className="col card-center m-1" key={img.id}>
                            <Card {...img} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cards;
