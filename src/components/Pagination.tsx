import React, { MouseEventHandler } from 'react'
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';

const Pagination = ({ count, nextPage, prevPage }: {
    count: number, nextPage: MouseEventHandler<HTMLParagraphElement>,
    prevPage: MouseEventHandler<HTMLParagraphElement>
}) => {

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