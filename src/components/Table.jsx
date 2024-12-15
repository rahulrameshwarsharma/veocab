import React, { useState } from "react";
import Approve from '../assets/svgs/Approve.svg';
import Reject from '../assets/svgs/Reject.svg';
import ViewIcon from '../assets/svgs/ViewIcon.svg';
import ArrowLeft from '../assets/svgs/ArrowLeft.svg';
import ArrowRight from '../assets/svgs/ArrowRight.svg';


const TableUI = ({ data, rowsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalRows = data.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    const startIndex = (currentPage - 1) * rowsPerPage;
    // const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
    const endIndex = startIndex + rowsPerPage;

    const displayedData = data.slice(startIndex, endIndex);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const maxPagesToShow = 9;
        const startPage = Math.floor((currentPage - 1) / maxPagesToShow) * maxPagesToShow + 1;
        const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return { pages, endPage };  // Return both pages and the last page of the set
    };

    const { pages, endPage } = getPageNumbers();



    return (
        <div className="table-container">
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone No.</th>
                        <th>Email ID</th>
                        <th>Registration Date</th>
                        <th>KYC</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.phone}</td>
                            <td>{row.email}</td>
                            <td>{row.registrationDate}</td>
                            <td className={row.kyc === "Verified" ? "verified" : "not-verified"}>
                                {row.kyc}
                            </td>
                            <td>
                                <div className="action-buttons">
                                    <span className="check">
                                        <img src={Approve} alt="ApproveIcon" style={{ width: 16, height: 16 }} />
                                        <span>Approve</span>
                                    </span>
                                    <span className="cross">
                                        <img src={Reject} alt="RejectIcon" style={{ width: 16, height: 16 }} />

                                        <span>Reject</span>
                                    </span>
                                    <span className="eye">
                                        <img src={ViewIcon} alt="ViewIcon" style={{ width: 24, height: 24 }} />

                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-footer">
                <div className="table-info">
                    Showing {startIndex + 1}-{endIndex} from {totalRows}
                </div>
                <div className="pagination">
                    <span onClick={handlePrevious} className={currentPage === 1 ? "disabled" : ""}>
                        <img src={ArrowLeft} alt="ApproveIcon" style={{ width: 10, height: 10 }} />
                    </span>
                  
                    {/* Display the page numbers */}
                    {pages.map((page) => (
                        <span
                            key={page}
                            onClick={() => handlePageClick(page)}
                            className={currentPage === page ? "active" : ""}
                        >
                            {page}
                        </span>
                    ))}

                    {/* Display "..." if the total pages exceed the current set */}
                    {endPage < totalPages && <span>...</span>}

                    <span onClick={handleNext} className={currentPage === totalPages ? "disabled" : ""}>
                        <img src={ArrowRight} alt="ApproveIcon" style={{ width: 10, height: 10 }} />
                    </span>
                </div>
            </div>
        </div>
    );
};


export default TableUI;
