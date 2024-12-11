import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Poster } from "../../components/poster";
import { Product } from "../../components/product";
import { getData } from "../../lib/http.request";
import { reload } from "../../lib/utils";


Header()
Footer()

const icons = {
    u_bank: '/public/icons/u_bank.svg',
    u_nasiya: '/public/icons/u_nasiya.svg',
    uzcard: '/public/icons/uzcard.svg',
    humo: '/public/icons/humo.svg',
    visa: '/public/icons/visa.svg',
    mastercard: '/public/icons/mastercard.svg',
    cash: '/public/icons/cash.svg',
};

for (const [name, url] of Object.entries(icons)) {
    const element = document.querySelector(`.${name}`);
    if (element) {
        element.style.backgroundImage = `url(${url})`;
    }
    else {
        console.error(`Element with class ${className} not found.`);
    }
}



