export function Product(item) {
    const card = document.createElement('div')
    const card_img = document.createElement('div')
    const like = document.createElement('div')
    const card_desk = document.createElement('div')
    const description = document.createElement('p')
    const reviews = document.createElement('div')
    const rating_div = document.createElement('div')
    const rating_img = document.createElement('img')
    const rating_num = document.createElement('span')
    const review_num = document.createElement('span')
    const price = document.createElement('div')
    const price_num = document.createElement('p')
    const card_busket = document.createElement('div')
    const discount_price = document.createElement('span')

    card.classList.add('card')
    card_img.classList.add('card_img')
    like.classList.add('like')
    card_desk.classList.add('card_desk')
    // description.classList.add('description')
    reviews.classList.add('reviews')
    rating_div.classList.add('rating_div')
    rating_img.classList.add('rating_img')
    rating_num.classList.add('rating_num')
    review_num.classList.add('review_num')
    price.classList.add('price')
    // price_num.classList.add('price_num')
    card_busket.classList.add('card_busket')
    discount_price.classList.add('discount_price')

    card_img.style.backgroundImage = `url(${item.images[0]})`
    description.innerHTML = item.title
    rating_img.src = "/public/icons/star.svg"
    rating_num.innerHTML = item.rating
    review_num.innerHTML = `(${item.reviews.length} отзывов)`
    price_num.innerHTML = priceDiscount(item) + " сум"
    discount_price.innerHTML = formatNumber(item) + " сум"



    function priceDiscount(item) {
        let item_price = (Math.round(`${(item.price * 12700).toFixed()}` / 1000) * 1000 - 1)
        let discounted = ((item_price * (100 - item.discountPercentage)) / 100)
        let replaced = (Math.round(`${(discounted)}`)).toString()

        return replaced.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    }

    function formatNumber(item) {
        let item_price = (Math.round(`${(item.price * 12700).toFixed()}` / 1000) * 1000 - 1)
        let stringed = item_price.toString()

        return stringed.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

    }

    card.append(card_img, card_desk)
    card_img.append(like)
    card_desk.append(description, reviews, discount_price, price)
    reviews.append(rating_div)
    price.append(price_num, card_busket)
    rating_div.append(rating_img, rating_num, review_num)

    // console.log(item.discountPercentage);

    like.onclick = (e) => {
        const current_btn = like.style.backgroundImage;
        e.stopPropagation()
    
        if (current_btn.includes('/icons/like_icon.svg')) {
            like.style.backgroundImage = 'url(/icons/like_icon_colored.svg)';
        } else {
            like.style.backgroundImage = 'url(/icons/like_icon.svg)';
        }
    };

    card.onclick = () => {
        window.location.href = '/pages/product/'
    }

    return card
}