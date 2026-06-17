//react libraries and components
import { useState } from 'react';
import { ClipLoader } from "react-spinners";

//sass
import variables from '../../../sass/abstract/_export.module.scss';

export default function Loading() {
    const [isLoading] = useState(true);
    const color = useState(variables.white);

    const override = {
        display: "block",
        marginInline: "auto",
    };

    return <ClipLoader color={color} loading={isLoading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
}