export function Billboard(item) {
    const billboard_description = document.createElement('div')
    const swiper_info = document.createElement('div')
    const description = document.createElement('p')
    const discount = document.createElement('div')
    const discount_price = document.createElement('p')
    const discount_percentage = document.createElement('p')
    const price_num = document.createElement('p')
    const billboard_img = document.createElement('div')

    description.innerHTML = item.title
    discount_price.innerHTML = formatNumber(item) + " сум"
    discount_percentage.innerHTML = "-" + item.discountPercentage + " %"
    price_num.innerHTML = priceDiscount(item) + " сум"
    billboard_img.style.backgroundImage = `url(${item.images[0]})`

    

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

    billboard_description.classList.add('swiper-slide')
    swiper_info.classList.add('swiper_info')
    description.classList.add('description')
    discount.classList.add('discount')
    discount_price.classList.add('discount_price')
    discount_percentage.classList.add('discount_percentage')
    price_num.classList.add('price_num')
    billboard_img.classList.add('billboard_img')

    billboard_description.append( swiper_info, billboard_img)
    swiper_info.append(description, discount, price_num)
    discount.append(discount_price, discount_percentage)

    return billboard_description
}