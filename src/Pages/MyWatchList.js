import React, { useState, useEffect } from 'react'
import Card from '../components/cards/Card';
import Pagination from '../components/pagination/Pagination';
import Episodes from '../components/WarchList/Episodes';
import InputChoose from '../components/WarchList/InputChoose';

const MyWatchList = () => {
    let [fetchData, updateFetchData] = useState([]);
    let [pageNumber, setPageNumber] = useState(1);
    let [episodeLength, setEpisodeLength] = useState([]);
    let { info, results } = fetchData;
    // console.log(episodes);
    let api = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}`;
    console.log(results);
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json());
            updateFetchData(data);
        })();
    }, [api])
    return (
        <div className="container">
            <div className="row">
                <div className="watchList">
                    <h2 className="text-center">My Watch List</h2>
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <h3>Series</h3>
                            <Episodes episodes={results} />
                        </div>
                    </div>
                    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
                </div>
            </div>
        </div>
    )
}

export default MyWatchList
