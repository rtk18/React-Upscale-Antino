// TableComponent.js
import React, { useState, useEffect } from 'react';
import api from '../api.js'; // Import the axios instance

const TableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('/posts')
            .then(response => {
                setData(response);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const tableContainerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f5f5f5',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const tableHeadingStyle = {
        color: '#0099CC',
        marginBottom: '10px',
    };

    const dataTableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
    };

    const tableHeaderCellStyle = {
        backgroundColor: '#0099CC',
        color: 'white',
    };

    const tableCellStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    };

    return (
        <div style={tableContainerStyle}>
            <h2 style={tableHeadingStyle}>Table Component</h2>
            <table style={dataTableStyle}>
                <thead>
                    <tr>
                        <th style={tableHeaderCellStyle}>ID</th>
                        <th style={tableHeaderCellStyle}>Title</th>
                        <th style={tableHeaderCellStyle}>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td style={tableCellStyle}>{item.id}</td>
                            <td style={tableCellStyle}>{item.title}</td>
                            <td style={tableCellStyle}>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
