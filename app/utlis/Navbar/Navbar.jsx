'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
  </svg>
)

const AccountIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
)

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.nav}>
          {/* Left — desktop links */}
          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
                <span className={styles.underline} />
              </Link>
            ))}
          </div>

          {/* Center — Logo */}
          <div className={styles.logoWrap}>
            <Link href="/" onClick={closeMenu} className={styles.logoLink}>
              <Image
                src="/logo.png"
                alt="YourBrand logo"
                width={180}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Right — icons */}
          <div className={styles.rightIcons}>
            <Link href="/cart" aria-label="Cart" className={styles.iconBtn}>
              <CartIcon />
              <span className={styles.badge} />
            </Link>

            <Link
              href="/account"
              aria-label="Account"
              className={`${styles.iconBtn} ${styles.desktopOnly}`}
            >
              <AccountIcon />
            </Link>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className={`${styles.iconBtn} ${styles.mobileOnly}`}
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
      >
        <div className={styles.drawerHeader}>
          <Link href="/" onClick={closeMenu} className={styles.logoLink}>
            <Image
              src="/logo.png"
              alt="YourBrand logo"
              width={100}
              height={34}
              priority
            />
          </Link>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className={styles.iconBtn}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`${styles.drawerLink} ${menuOpen ? styles.drawerLinkVisible : ''}`}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}

          <div className={styles.divider} />

          <Link
            href="/account"
            onClick={closeMenu}
            className={`${styles.drawerLink} ${menuOpen ? styles.drawerLinkVisible : ''}`}
            style={{ transitionDelay: menuOpen ? '150ms' : '0ms' }}
          >
            <AccountIcon />
            Account
          </Link>
        </nav>

        <div className={styles.drawerFooter}>
          <p>© 2026 YourBrand</p>
        </div>
      </aside>

      <div className={styles.spacer} />
    </>
  )
}
