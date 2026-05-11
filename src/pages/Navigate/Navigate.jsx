//react libraries and components
import { useEffect } from 'react';
import { useNavigate } from "react-router";

export default function Navigate({ to, replace }) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(to, { replace });
    }, []);

    return null;
}