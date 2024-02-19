import React from 'react';
import { Link } from 'react-scroll';

interface LinkProps {
    to: string;
    label: string;
}

const SmoothLink = ({ to, label }: LinkProps) => {
    return <Link to={to} smooth={true} duration={800}>{label}</Link>
}

export default SmoothLink