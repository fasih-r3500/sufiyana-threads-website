'use client'

import { useState } from 'react'
import styles from './Suits.module.css'
import Card from '@/app/utlis/Card/Card'

const categories = ['All', 'Suits', 'Shawl']

const allProducts = [
  {
    id: "ST-NB-001",
    image: '/suit.png',
    category: 'Suits',
    name: 'Embroidered Lawn Suit',
    rating: 4,
    price: 8500,
  },
  {
    id: 2,
    image: '/suit.png',
    category: 'Shawl',
    name: 'Kashmiri Wool Shawl',
    rating: 5,
    price: 12000,
  },
  {
    id: 3,
    image: '/suit.png',
    category: 'Suits',
    name: 'Printed Chiffon Suit',
    rating: 3,
    price: 7200,
  },
  {
    id: 4,
    image: '/suit.png',
    category: 'Shawl',
    name: 'Pashmina Shawl',
    rating: 5,
    price: 15000,
  },
  {
    id: 5,
    image: '/suit.png',
    category: 'Suits',
    name: 'Silk Embroidered Suit',
    rating: 4,
    price: 11000,
  },
  {
    id: 6,
    image: '/suit.png',
    category: 'Suits',
    name: 'Cotton Printed Suit',
    rating: 3,
    price: 5500,
  },
  {
    id: 7,
    image: '/suit.png',
    category: 'Shawl',
    name: 'Woven Silk Shawl',
    rating: 4,
    price: 9800,
  },
  {
    id: 8,
    image: '/suit.png',
    category: 'Suits',
    name: 'Organza Formal Suit',
    rating: 5,
    price: 18500,
  },
  {
    id: 9,
    image: '/suit.png',
    category: 'Suits',
    name: 'Organza Formal Suit',
    rating: 5,
    price: 18500,
  },
  {
    id: 10,
    image: '/suit.png',
    category: 'Suits',
    name: 'Organza Formal Suit',
    rating: 5,
    price: 18500,
  },
]

const ITEMS_PER_PAGE = 8

export default function Suits() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const filtered =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory)

  const visibleProducts = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Products</h2>

      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`${styles.catBtn} ${activeCategory === cat ? styles.catActive : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visibleProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            category={product.category}
            name={product.name}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>

      {hasMore && (
        <div className={styles.loadMoreWrap}>
          <button onClick={loadMore} className={styles.loadMoreBtn}>
            Load More
          </button>
        </div>
      )}
    </section>
  )
}
