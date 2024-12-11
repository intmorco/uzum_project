import Swiper from "swiper"
import { Billboard } from "./components/billboard"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Poster } from "./components/poster"
import { Product } from "./components/product"
import { getData } from "./lib/http.request"
import { reload } from "./lib/utils"
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Header()
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const div_cards = document.querySelector('.div_cards')
const products_res = await getData("/products/")
const top_rated = products_res.data.sort((a,b) => b.rating - a.rating)

console.log(products_res);
reload(top_rated.slice(0, 5), Product, div_cards)

const show_all = document.querySelector('.show_all')

let itemsToShow = 5;

show_all.onclick = () => {
    reload(products_res.data.slice(0, itemsToShow), Product, div_cards);

    itemsToShow += 10;
};


const categories = [...new Set(products_res.data.map(product => product.category))];
Poster(categories)

categories.forEach(category => {
    const container = document.querySelector(`.${category}_products .div_cards`);
    if (container) {
        reload(products_res.data, Product, container, category);
        // console.log(container);
    }

});

// console.log(categories);

const footer = document.querySelector('.footer')
footer.append(Footer())

const billboard = document.querySelector('.swiper-wrapper')
reload(products_res.data, Billboard, billboard)


