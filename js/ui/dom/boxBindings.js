export const show = (id) => {
    return function () {
        document.getElementById(id).style.display = "block";
    }
}

export const hide = (id) => {
    return function () {
        document.getElementById(id).style.display = "none";
    }
}