import React from "react"
import "./Paginate.style.scss"
import ReactPaginate from "react-paginate"
const Paginate = props => {
  console.log("PAGINATE", props)
  return (
    <div className="Paginate">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={500}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={e => props.pageChange(e.selected)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        forcePage={props.currentPage}
      />
    </div>
  )
}

export default Paginate
