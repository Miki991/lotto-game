import React from 'react';
import './Error.scss';
import { Link } from 'react-router-dom';

const Error = () => (
    <div className="error-page">
        <p className="non-existing-page">This page does not exist.</p>
        <Link to="/" exact="true">
            &laquo; Back to Homepage
        </Link>
    </div>
)

export default React.memo(Error);