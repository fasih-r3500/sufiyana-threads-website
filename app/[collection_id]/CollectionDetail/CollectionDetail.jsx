"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CollectionDetail.module.css";
import Card from "@/app/utlis/Card/Card";

const categories = ["All", "3-PIECE-SUIT", "2-PIECE-SUIT"];
const ITEMS_PER_PAGE = 8;

export default function Suits({ products = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  // CHANGED: Set default state to 'name-asc' instead of 'default'
  const [sortOption, setSortOption] = useState("name-asc");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Step 1: Filter by category
  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Step 2: Sort results with an alphabetical fallback for ties
  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "price-asc") {
      // If prices are the same, fall back to Alphabetical A-Z
      if (a.price === b.price) {
        return a.name.localeCompare(b.name);
      }
      return a.price - b.price;
    }

    if (sortOption === "price-desc") {
      // If prices are the same, still fall back to Alphabetical A-Z (or Z-A if preferred)
      if (a.price === b.price) {
        return a.name.localeCompare(b.name);
      }
      return b.price - a.price;
    }

    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);

    return 0; // 'default' returns original fetch order
  });

  // Step 3: Slice the sorted results for pagination
  const visibleProducts = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // Reset pagination window when user changes sort
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className={styles.page}>
      <div className={styles.section}>
        <h2 className={styles.heading}>
          {products[0]?.collection_name || "Collection"}
        </h2>

        {/* Controls Bar: Categories & Sorting Selector */}
        <div className={styles.controlsWrap}>
          {/* 1. ADD THIS BACK: It creates an invisible box on the left to perfectly balance the right dropdown */}
          <div className={styles.controlsSpacer}></div>

          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`${styles.catBtn} ${
                  activeCategory === cat ? styles.catActive : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.sortContainer}>
            <label htmlFor="sort" className={styles.sortLabel}>
              Sort By:{" "}
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className={styles.sortSelect}
            >
              <option value="name-asc">Alphabetical: A-Z</option>
              <option value="name-desc">Alphabetical: Z-A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
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
  );
}
