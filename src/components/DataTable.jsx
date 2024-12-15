import React, { useState } from "react";

const DataTable = ({ data, rowsPerPage }) => {
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

    return (
        <div style={{ padding: "10px", marginTop: "40px" }}>
            <table className="table-with-gap" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead className="dashboard__table__head">
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th key={key} style={{ padding: "10px", marginBottom: "20px" }}>
                                {key}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map((row, index) => (
                        <tr key={index}>
                            {Object.keys(row).map((key) => (
                                <td
                                    key={key}
                                    style={{
                                        borderBottom: "1px solid #ddd",
                                        padding: "15px 10px",
                                        textAlign: key === "KYC" || key === "Action" ? "center" : "left",
                                    }}
                                >
                                    {key === "KYC" ? (
                                        <span
                                            style={{
                                                color: row[key] === "Verified" ? "green" : "red",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {row[key]}
                                        </span>
                                    ) : key === "Action" ? (
                                        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                                            <button
                                                style={{
                                                    padding: "5px 10px",
                                                    border: "none",
                                                    borderRadius: "4px",
                                                    backgroundColor: "#4CAF50",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Approve
                                            </button>
                                            <button
                                                style={{
                                                    padding: "5px 10px",
                                                    border: "none",
                                                    borderRadius: "4px",
                                                    backgroundColor: "#f44336",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Reject
                                            </button>
                                            <button
                                                style={{
                                                    padding: "5px 10px",
                                                    border: "none",
                                                    borderRadius: "4px",
                                                    backgroundColor: "#2196F3",
                                                    color: "white",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                View
                                            </button>
                                        </div>
                                    ) : (
                                        row[key] || "-"
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Section */}
            <div style={paginationContainerStyle}>
                <div>
                    Showing {startIndex + 1}-{Math.min(endIndex, totalRows)} from {totalRows}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <button onClick={handlePrevious} disabled={currentPage === 1} style={arrowButtonStyle}>
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            style={{
                                ...pageButtonStyle,
                                backgroundColor: currentPage === index + 1 ? "#0079FF" : "#fff",
                                color: currentPage === index + 1 ? "#fff" : "#000",
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={handleNext} disabled={currentPage === totalPages} style={arrowButtonStyle}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

// Styles
const paginationContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
};

const pageButtonStyle = {
    border: "1px solid #ddd",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
};

const arrowButtonStyle = {
    ...pageButtonStyle,
    backgroundColor: "#f1f1f1",
};

export default DataTable;
