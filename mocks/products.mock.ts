import { Product } from '../models/product.interface';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    name: 'Мясная Делюкс',
    description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    image: 'images/pizza1.png'
  },
  {
    id: 2,
    name: 'Морская Премиум',
    description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    image: 'images/pizza2.png'
  },
  {
    id: 3,
    name: 'Бекон и Сосиски',
    description: 'Бекон, сыр, сосиски, ананас, томатная паста',
    image: 'images/pizza3.png'
  },
  {
    id: 4,
    name: 'Куриная Делюкс',
    description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    image: 'images/pizza4.png'
  },
  {
    id: 5,
    name: 'Барбекю Премиум',
    description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    image: 'images/pizza5.png'
  },
  {
    id: 6,
    name: 'Пепперони Дабл',
    description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    image: 'images/pizza6.png'
  },
  {
    id: 7,
    name: 'Куриное трио',
    description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    image: 'images/pizza7.png'
  },
  {
    id: 8,
    name: 'Сырная',
    description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    image: 'images/pizza8.png'
  }
];