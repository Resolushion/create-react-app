import React, { useState, useEffect } from 'react'
import styles from "./watchinput.module.scss";

const WatchInput = ({ setEpisode }) => {
    const [fetchData, updateFetchData] = useState([]);
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const api = `https://rickandmortyapi.com/api/episode`;
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json());
            updateFetchData(data.results);
        })()
    }, [api])
    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
        setEpisode(text);
    }
    const onRefreshHandler = () => {
        setText("");
    }
    const onChangeHandler = (text) => {

        let matches = [];
        if (text.length > 0) {
            matches = fetchData.filter(epd => {
                const regex = new RegExp(`${text}`, "gi");
                return epd.name.match(regex);
            })
        }
        setSuggestions(matches);
        setText(text)
    }

    return (
        <div>
            <input
                name="episode"
                placeholder="Write your episode..."
                type="text" className='form-control'
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                onClick={(e) => onRefreshHandler()} />
            {
                suggestions && suggestions.map((suggestion, i) =>
                    <div key={i}
                        className={`${styles.suggestion} my-1 fs-6 form-control`}
                        onClick={() => onSuggestHandler(suggestion.name)}><span><span className="fw-bold">Name: </span><span className="text-decoration-underline">{suggestion.name}</span> <span className="fw-bold fs-6">- Date of release: </span> {suggestion["air_date"]}</span></div>
                )
            }
        </div>
    )
}

export default WatchInput
