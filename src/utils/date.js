export function formatYear(pattern) {
    //pattern is assumed to be of type String
    if (!pattern) return;
    const yearRegex = /\d{4}/gm;
    return String(pattern).match(yearRegex).join();
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