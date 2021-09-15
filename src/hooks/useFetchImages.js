import { useCallback, useEffect, useState } from "react";

export const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);

    const myRequest = useCallback(async () => {
        // get the key in your personal account at https://unsplash.com/oauth/applications
        const key = "your-client-id";
        let route = `https://api.unsplash.com/photos/?${key}`;
        if (input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
                input
            )}&per_page=30&${key}`;
        }

        setLoading(true);

        const res = await fetch(route);
        const data = await res.json();

        if (data.results) {
            setImages(data.results);
        } else {
            setImages(data);
        }

        setLoading(false);
    }, [input]);

    useEffect(() => {
        myRequest();
        setInput("");
    }, [myRequest]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        setInput(text);
    };

    return [images, loading, handleSubmit];
};
