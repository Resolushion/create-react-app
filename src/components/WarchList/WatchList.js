import React, { useState, useEffect } from "react";
import WatchInput from "./WatchInput";

export default function WatchList() {
    const [episode, setEpisode] = useState("");
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("watchList")) {
            const storedList = JSON.parse(localStorage.getItem("watchList"));
            setEpisodes(storedList);
        }
    }, []);

    const AddToList = (e) => {
        if (episode) {
            const newEpisode = { id: new Date().getTime().toString(), title: episode };
            setEpisodes([...episodes, newEpisode]);
            localStorage.setItem("watchList", JSON.stringify([...episodes, newEpisode]));
            setEpisode("");
        }
    };

    const removeEpisode = (episode) => {
        const deleted = episodes.filter((epd) => epd.id !== episode.id);
        setEpisodes(deleted);
        localStorage.setItem("watchList", JSON.stringify(deleted))
    }

    const removeAll = () => {
        setEpisodes([]);
        localStorage.removeItem("watchList");
    }
    return (
        <div className="container row mt-3">
            <div className="badge text-dark">
                <h5>
                    You have
                    {!episodes.length
                        ? " no episodes to watch"
                        : episodes.length === 1
                            ? " 1 episode to watch"
                            : episodes.length > 1
                                ? ` ${episodes.length} episodes to watch`
                                : null}
                </h5>
            </div>
            <div className="col-12">
                <WatchInput setEpisode={setEpisode} />
            </div>
            <div className="col-lg-12 col-12 mt-2">
                <button
                    className="btn btn-primary form-control"
                    onClick={AddToList}
                >
                    add to list
                </button>
            </div>

            {episodes.map((episode) => (
                <div className="d-flex justify-content-left col-12" key={episode.id}>
                    <div className="col-8">
                        <span className="form-control bg-white btn mt-2"
                            style={{ textAlign: "left", fontWeight: "bold" }}>
                            {episode.title}
                        </span>
                    </div>
                    <div className="col-1">
                        <button
                            className="mt-2 mx-3 btn btn-warning"
                            onClick={() => removeEpisode(episode)}
                        ><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            ))
            }
            {
                !episodes.length ? null : (
                    <div>
                        <button className="btn btn-secondary mt-4 mb-4" onClick={() => removeAll()}>
                            Remove all
                        </button>
                    </div>
                )
            }
        </div >
    );
}
