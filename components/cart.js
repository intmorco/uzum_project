   function Cart(item) {
    const product_info = document.createElement('div')
    const product_name = document.createElement('h1')
    const reviews = document.createElement('div')
    const rating_div = document.createElement('div')
    const rating_img = document.createElement('img')
    const rating_num = document.createElement('span')
    const review_num = document.createElement('span')
    const product_imgs = document.createElement('div')
    const vertical_imgs = document.createElement('div')
    const vertical_img = document.createElement('img')
    const horizontal_imgs = document.createElement('div')
    const horizontal_img = document.createElement('img')

    product_info.classList.add('product_info')
    reviews.classList.add('reviews')
    rating_div.classList.add('rating_div')
    rating_img.classList.add('rating_img')
    rating_num.classList.add('rating_num')
    review_num.classList.add('review_num')
    product_imgs.classList.add('product_imgs')
    vertical_imgs.classList.add('vertical_imgs')
    horizontal_imgs.classList.add('horizontal_imgs')

    product_name.innerHTML = item.title
    rating_img.src = "/public/icons/star.svg"
    rating_num.innerHTML = item.rating
    review_num.innerHTML = `(${item.reviews.length} отзывов)`
    vertical_img.src = "/public/img/product.png"
    horizontal_img.src = "/public/img/product.png"

    product_info.append(product_name, reviews, product_imgs)
    reviews.append(rating_div)
    rating_div.append(rating_img, rating_num, review_num)
    product_imgs.append(vertical_imgs, horizontal_imgs)
    vertical_imgs.append(vertical_img)
    horizontal_imgs.append(horizontal_img)

    return product_info
}