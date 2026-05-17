'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './ProductDetail.module.css'

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className={styles.page}>
      <div className={styles.collection} onClick={() => window.location.href = `/${product.collection_code}`}>
        ← To {product.collection_name}
      </div>

      <div className={styles.container}>
        {/* ── Left — Image gallery ── */}
        <div className={styles.gallery}>
          {/* Thumbnails */}
          <div className={styles.thumbnails}>
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`${styles.thumb} ${selectedImage === i ? styles.thumbActive : ''}`}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  fill
                  className={styles.thumbImg}
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className={styles.mainImage}>
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className={styles.mainImg}
              priority
            />
          </div>
        </div>

        {/* ── Right — Product info ── */}
        <div className={styles.info}>
          {/* Category & Name */}
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.name}>{product.name}</h1>

          {/* Rating */}
          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < product.rating ? styles.starFilled : styles.starEmpty
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className={styles.reviewCount}>
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <p className={styles.price}>PKR {product.price.toLocaleString()}</p>

          <div className={styles.divider} />

          {/* Color selector */}
          {/* <div className={styles.selectorGroup}>
            <p className={styles.selectorLabel}>
              Color{' '}
              <span className={styles.selectorValue}>
                {selectedColor ?? 'Select a color'}
              </span>
            </p>
            <div className={styles.colors}>
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`${styles.colorSwatch} ${selectedColor === color ? styles.colorActive : ''}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div> */}

          {/* Size selector */}
          <div className={styles.selectorGroup}>
            <p className={styles.selectorLabel}>
              Size{' '}
              <span className={styles.selectorValue}>
                {selectedSize ?? 'Select a size'}
              </span>
            </p>
            <div className={styles.sizes}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeActive : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          {/* Quantity */}
          <div className={styles.selectorGroup}>
            <p className={styles.selectorLabel}>Quantity</p>
            <div className={styles.quantity}>
              <button
                className={styles.qtyBtn}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button
                className={styles.qtyBtn}
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Add to Cart</button>
            <button className={styles.btnSecondary}>Buy Now</button>
          </div>

          <div className={styles.divider} />

          {/* Description */}
          <div className={styles.descGroup}>
            <h3 className={styles.descHeading}>Product Description</h3>
            <p className={styles.description}>{product.description}</p>
          </div>
        </div>
      </div>

      {/* ── Reviews section ── */}
      <div className={styles.reviews}>
        <h2 className={styles.reviewsHeading}>Customer Reviews</h2>

        <div className={styles.reviewSummary}>
          <div className={styles.reviewScore}>
            <span className={styles.scoreBig}>{product.rating}.0</span>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < product.rating ? styles.starFilled : styles.starEmpty
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className={styles.reviewCount}>
              {product.reviewCount} reviews
            </span>
          </div>
        </div>

        {/* Demo reviews — replace with API data later */}
        <div className={styles.reviewList}>
          {[
            {
              name: 'Ayesha K.',
              rating: 5,
              comment:
                'Absolutely beautiful suit. The embroidery is stunning and the fabric quality is excellent.',
              date: 'April 2026',
            },
            {
              name: 'Sana M.',
              rating: 4,
              comment:
                'Loved the design and stitching. Delivery was on time. Would definitely order again.',
              date: 'March 2026',
            },
            {
              name: 'Fatima R.',
              rating: 4,
              comment:
                'Great quality for the price. The color is exactly as shown in the pictures.',
              date: 'March 2026',
            },
          ].map((review, i) => (
            <div key={i} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInitial}>{review.name[0]}</div>
                <div>
                  <p className={styles.reviewerName}>{review.name}</p>
                  <p className={styles.reviewDate}>{review.date}</p>
                </div>
                <div className={styles.reviewStars}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span
                      key={j}
                      className={
                        j < review.rating ? styles.starFilled : styles.starEmpty
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className={styles.reviewComment}>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
