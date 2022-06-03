import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    let [width, setWidth] = useState(window.innerWidth);
    let updateDimension = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimension)
        return () => window.removeEventListener("resize", updateDimension)
    }, [])

    return (
        <>
            <style jsx="true">
                {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
            </style>

            <ReactPaginate
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                className="pagination justify-content-center gap-4 my-4"
                nextLabel="Next"
                previousLabel="Prev"
                nextClassName="btn btn-light next"
                previousClassName="btn btn-light prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                onPageChange={(data) => { setPageNumber(data.selected + 1); }}
                pageCount={info?.pages ? info.pages : 1} />
        </>
    );
}

export default Pagination;
