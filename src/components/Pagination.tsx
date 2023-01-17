import React from 'react'
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';

const Pagination = ({ count, nextPage, prevPage }: { count:number, nextPage:any, prevPage:any }) => {

    return (
        <div className="nav">
            <div className="nav_container">
                <p className="nav_container-prev" onClick={prevPage}><CgArrowLeftR /></p>
                <p>{count}</p>
                <p className="nav_container-next" onClick={nextPage}><CgArrowRightR /></p>
            </div>
        </div>
    )
}

export default Pagination