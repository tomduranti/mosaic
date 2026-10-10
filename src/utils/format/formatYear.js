export function formatYear(pattern) {
    //pattern is assumed to be of type String
    if (!pattern) return;
    const yearRegex = /\d{4}/gm;
    return String(pattern).match(yearRegex).join();
}