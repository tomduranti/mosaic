export function getItemFromLocalStorage() {
    const localStr = localStorage.getItem('storedId');
    return JSON.parse(localStr);
}