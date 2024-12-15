import React, { useState } from "react";
import ViewIcon from '../assets/svgs/ViewIcon.svg';
import ArrowLeft from '../assets/svgs/ArrowLeft.svg';
import ArrowRight from '../assets/svgs/ArrowRight.svg';

const RentedCardTableData = ({ data, rowsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalRows = data.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    const startIndex = (currentPage - 1) * rowsPerPage;
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
                        <th>Image</th>
                        <th>Owner Name</th>
                        <th>Car</th>
                        <th>Documentation</th>
                        <th>Total Revenue</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map((row, index) => {
                        const [ownerName, ownerId] = row.ownerName.split(" #");
                        return (
                            <tr key={index}>
                                <td><img src={row.image} alt="Car" style={{ width: 80, height: 50, objectFit: 'contain' }} /></td>
                                <td><div className="displayColumn">
                                    <span>{ownerName}</span>
                                    <span className="smallText">#{ownerId}</span>

                                </div></td>
                                <td>{row.car}</td>
                                <td>{row.documentation}</td>
                                <td>
                                    <span
                                        style={{
                                            color: row["Total Revenue"].startsWith("+") ? "green" : "red"
                                        }}
                                    >
                                        {row["Total Revenue"]}
                                    </span>
                                </td>
                                <td>{row.Status}</td>
                                <td>
                                    <div className="action-buttons">
                                        <span className="eye">
                                            <img src={ViewIcon} alt="ViewIcon" style={{ width: 24, height: 24 }} />
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="table-footer">
                <div className="table-info">
                    Showing {startIndex + 1}-{endIndex} from {totalRows}
                </div>
                <div className="pagination">
                    <span onClick={handlePrevious} className={currentPage === 1 ? "disabled" : ""}>
                        <img src={ArrowLeft} alt="ArrowLeft" style={{ width: 10, height: 10 }} />
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
                        <img src={ArrowRight} alt="ArrowRight" style={{ width: 10, height: 10 }} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RentedCardTableData;
