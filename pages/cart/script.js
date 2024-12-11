import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Product } from "../../components/product";
import { getData } from "../../lib/http.request";
import { reload } from "../../lib/utils";


const div_cards = document.querySelector('.div_cards')
const products_res = await getData("/products/")
const top_rated = products_res.data.sort((a,b) => b.rating - a.rating)

reload(top_rated.slice(0, 5), Product, div_cards)


Header()
Footer()