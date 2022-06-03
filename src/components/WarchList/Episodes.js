import React from 'react'
import Episode from './Episode';

const Episodes = ({ episodes }) => {
    let display;
    if (episodes) {
        display = episodes.map(episodeItem => {
            let { id, name, air_date, episode } = episodeItem;
            return (
                <div key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative">
                    <Episode name={name} air_date={air_date} episode={episode} />
                </div >
            );

        })
    } else {
        display = "No Episodes Found ;/";
    }
    return <>{display}</>;
}

export default Episodes
