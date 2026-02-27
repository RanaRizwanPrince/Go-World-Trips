import React from 'react';
import { Link } from 'react-router-dom';
const UnderConstruction = () => {
    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>🚧 We are Polishing This Page for You! 🚧</h1>
                <p>Thank you for your patience. We are currently enhancing our website to provide you with a better digital experience. This particular section is undergoing essential maintenance and will be launched shortly. In the meantime, please feel free to browse our other services or contact our support team if you require any immediate assistance.</p>
                <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Home</Link>
            </div>
        </div>
    );
};
export default UnderConstruction;