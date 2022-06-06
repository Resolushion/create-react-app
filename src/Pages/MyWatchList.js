import React from 'react'
import WatchList from '../components/WarchList/WatchList'

const MyWatchList = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="watchList">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <WatchList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWatchList
