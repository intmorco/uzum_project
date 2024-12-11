export function Header() {
const header_cont = document.createElement('div')
const right = document.createElement('div')
const logo_img = document.createElement('a')
const catalogue = document.createElement('button')
const middle = document.createElement('div')
const search_inp = document.createElement('input')
const lens = document.createElement('img')
const left = document.createElement('div')
const profile = document.createElement('div')
const profile_img = document.createElement('img')
const profile_name = document.createElement('a')
const profile_fav = document.createElement('div')
const fav_img = document.createElement('img')
const favorites = document.createElement('a')
const profile_bin = document.createElement('div')
const busket_img = document.createElement('img')
const busket = document.createElement('a')
const count = document.createElement('span')

catalogue.innerHTML = "Каталог"
search_inp.placeholder = "Искать товары"
search_inp.type = "text"
lens.src = "/icons/lens_icon.svg"
profile_img.src = "/icons/profile_icon.svg"
profile_name.innerHTML = "Шахзод"
fav_img.src = "/icons/favorite_icon.svg"
favorites.innerHTML = "Избранное"
busket_img.src = "/icons/bag.svg"
busket.innerHTML = "Корзина"
count.innerHTML = "3"
logo_img.href = "/dashboard"


header_cont.classList.add('header_cont')
right.classList.add('right')
logo_img.classList.add('logo_img')
catalogue.classList.add('catalogue')
middle.classList.add('middle')
search_inp.classList.add('search_inp')
lens.classList.add('lens')
left.classList.add('left')
profile.classList.add('profile')
// profile_img.classList.add('profile_img')
// profile_name.classList.add('profile_name')
profile_fav.classList.add('profile')
// fav_img.classList.add('fav_img')
favorites.classList.add('favorites')
profile_bin.classList.add('profile')
// busket_img.classList.add('busket_img')
busket.classList.add('busket')
count.classList.add('count')


header_cont.append(right, middle, left)
right.append(logo_img, catalogue)
middle.append(search_inp, lens)
left.append(profile, profile_fav, profile_bin)
profile.append(profile_img, profile_name)
profile_fav.append(fav_img, favorites)
profile_bin.append(busket_img, busket)
busket.append(count)

profile_fav.onclick = () => {
    window.location.href = '/pages/favorites/'
}
profile_bin.onclick = () => {
    window.location.href = '/pages/cart/'
}

const header = document.querySelector('header')

header.append(header_cont)
}