export default function getYearFormat(pattern) {
        if (!pattern) return;
        const yearRegex = /\d{4}/gm;
        return pattern.match(yearRegex)
    }