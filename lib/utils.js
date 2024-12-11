// export function reload(arr, component, place) {
//     place.innerHTML = ""

//     for(let item of arr) {
//         const elem = component(item)
//         place.append(elem)
//     }
// }

export function reload(arr, component, place, category) {
    
    place.innerHTML = "";

    const filtered = category ? arr.filter(item => item.category === category) : arr;

    for (let item of filtered) {
        const elem = component(item);
        place.append(elem);
    }
}
