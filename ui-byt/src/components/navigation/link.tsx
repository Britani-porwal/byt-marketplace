import React from 'react';
import Link from 'next/link';

interface LinkProps {
    label: string;
    path: string;
}

const SmoothLink = ({ label, path }: LinkProps) => {

    return <Link href={path} scroll={false}>{label}</Link>
}

export default SmoothLink