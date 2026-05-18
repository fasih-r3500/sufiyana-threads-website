import Image from 'next/image'
import styles from './Card.module.css'
import Link from 'next/link'

export default function Card({ id, image, category, collection_id, name, rating, price }) {
  return (
    <Link href={`/${collection_id}/${id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={image} alt={name} fill className={styles.image} />
      </div>
      <div className={styles.info}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < rating ? styles.starFilled : styles.starEmpty}
            >
              ★
            </span>
          ))}
        </div>
        <p className={styles.price}>PKR {price.toLocaleString()}</p>
      </div>
    </Link>
  )
}
