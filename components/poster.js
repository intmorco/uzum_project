export function Poster(categories) {

    const categories_products = document.querySelector('.categories')

    categories.forEach(category => {
        const category_div = document.createElement('div');
        category_div.classList.add(category + '_products', 'container')

        categories_products.append(category_div);
        

        const poster = document.createElement('div')
        const poster_left = document.createElement('div')
        const h2 = document.createElement('h2')
        const arrow = document.createElement('div')
        const div_cards = document.createElement('div')

        h2.innerHTML = category.charAt(0).toUpperCase() + category.slice(1)
        // div_cards.innerHTML = "hello"


        poster.classList.add('poster')
        poster_left.classList.add('poster_left')
        arrow.classList.add('arrow')
        div_cards.classList.add('div_cards')

        category_div.append(poster, div_cards)
        poster.append(poster_left)
        poster_left.append(h2, arrow)

        return category_div
    });
}