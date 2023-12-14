import React from 'react';
import {BsArrowLeft} from "react-icons/bs";
import {Link} from "@inertiajs/react";

const BackButton = ({href}) => {
    return (
        <Link href={href} className={'p-2 inline-block'}>
            <BsArrowLeft className={'text-3xl'}/>
        </Link>
    );
};

export default BackButton;

