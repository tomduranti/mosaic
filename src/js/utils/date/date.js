export function formatYear(pattern) {
    if (!pattern) return;
    const yearRegex = /\d{4}/gm;
    return pattern.match(yearRegex)
}

export function formatRuntime(runtime) {

    if (!runtime) return;

    if (runtime < 60) {
        return `${runtime}m`;
    }

    const remainder = runtime % 60;
    const hours = (runtime - remainder) / 60;

    if (remainder === 0) {
        return `${hours}h`;
    } 
    
    return `${hours}h ${remainder}m`;
}