import Image from 'next/image'
import Link from 'next/link'
import styles from './Collections.module.css'

const collections = [
  {
    id: 1,
    title: "",
    href: '/NB',
    image: '/collection-banner-NB.png',
  },
  {
    id: 2,
    title: "",
    href: '/AT',
    image: '/collection-banner-AT.png',
  },
  {
    id: 3,
    title: "",
    href: '/JN',
    image: '/collection-banner-JN.png',
  },
  {
    id: 4,
    title: "",
    href: '/SC26',
    image: '/ST-SC26-CollectionBanner.jpg',
  },
]

export default function Collection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Collections</h2>

      <div className={styles.grid}>
        {collections.map((col) => (
          <Link key={col.id} href={col.href} className={styles.card}>
            {/* Image */}
            <Image
              src={col.image}
              alt={col.title}
              fill
              className={styles.image}
            />

            {/* Grayscale overlay */}
            <div className={styles.overlay} />

            {/* Text content */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{col.title}</h3>
              <span className={styles.exploreLink}>Explore More</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
