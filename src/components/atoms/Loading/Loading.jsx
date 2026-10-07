//react libraries and components
import { ClipLoader } from "react-spinners";

//sass
import variables from '@abstract/_export.module.scss';

export default function Loading() {
    let isLoading = true;
    const color = variables.white;

    const override = {
        display: "block",
        marginInline: "auto",
    };

    return <ClipLoader color={color} loading={isLoading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
}