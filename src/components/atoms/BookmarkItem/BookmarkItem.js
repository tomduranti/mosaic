export function clickHandler(setter, idNumber, typeOfMedia) {
    //toggle the useState of the id
    setter(value => !value);
    //toggle localStorage ids
    toggleLocalStorage(idNumber, typeOfMedia);
}

export function getIdFromLocalStorage(idNumber) {
    const arr = JSON.parse(localStorage.getItem("storedId"));
    if (!arr) return false;

    return arr.some(obj => Number(obj.id) === Number(idNumber));
}

function toggleLocalStorage(idNumber, typeOfMedia) {

    let localArr = JSON.parse(localStorage.getItem("storedId")) || [];

    if (getIdFromLocalStorage(idNumber)) {
        //delete that id
        localArr = localArr.filter(obj => Number(obj.id) !== Number(idNumber));
    } else {
        //push that id & type to localArr
        localArr.push({ id: idNumber, type: typeOfMedia })
    }

    //push the modified localArr to localStorage
    localStorage.setItem("storedId", JSON.stringify(localArr));
}
