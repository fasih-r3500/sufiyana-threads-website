'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './CollectionDetail.module.css'
import Card from '@/app/utlis/Card/Card'

const categories = ['All', '3-PIECE-SUIT', '2-PIECE-SUIT']
const ITEMS_PER_PAGE = 8

export default function Suits({ products = [] }) {
    const [activeCategory, setActiveCategory] = useState('All')
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

    const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

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
    <div className={styles.page}>
        <div className={styles.section}>
            <h2 className={styles.heading}>{products[0].collection_name}</h2>

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
                    collection_id={product.collection_id}
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
        </div>
    </div>
  )
}