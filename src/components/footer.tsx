import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="p-4 bg-tertiary">
            <aside>
                <p className="p text-center text-white">Copyright © {currentYear} - Design og utvikling - Mats Gundersen</p>
            </aside>
        </footer>
    );
}

export default Footer;