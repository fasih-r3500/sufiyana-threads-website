  // When you add an API, fetch product data here using the id param
  // and pass it down to ProductDetail as props
  import { supabase } from '@/lib/supabase/client'
  import ProductDetail from './ProductDetail/ProductDetail'

//   // ── Demo data — replace this with your API call later
//   const getProduct = (id) => ({
//   id,
//   name: 'Embroidered Lawn Suit',
//   category: 'Suits',
//   price: 8500,
//   description:
//     'A beautifully handcrafted embroidered lawn suit made by skilled Pakistani artisans. This piece combines traditional craftsmanship with modern elegance, featuring intricate threadwork and premium quality fabric that ensures both comfort and style.',
//   rating: 4,
//   reviewCount: 24,
//   images: ['/suit.png', '/suit.png', '/suit.png', '/suit.png'],
//   sizes: ['XS', 'S', 'M', 'L', 'XL'],
//   colors: ['#c8a97e', '#2c2c2c', '#8b5e3c', '#ffffff'],
// })

  export default async function ProductPage({ params }) {
    const { id } = await params

    // console.log(params)

    // const formattedProduct = getProduct(id) // replace with API data later

    const { data: product, error } = await supabase
    .from('Products')
    .select('*')
    .eq('sku', id)
    .single()

      if (error) {
      console.log('Product not found:', error)
      console.log('Product ID:', id)
      return <div>Product not found</div>
      
    }

    const images = product.images.map((path) => {
    const { data } = supabase.storage
      .from('product-images')
      .getPublicUrl(path)

    return data.publicUrl
  })

    // reshape DB data into frontend-friendly format
    const formatted_product = {
      id: product.id,
      sku: product.sku,
      name: product.sku, // using SKU as name
      category: product.category,
      collection_name: product.collection_name,
      collection_code: product.collection_code,
      price: product.price,
      description: product.description,
      rating: product.rating,
      reviewCount: product.review_count,

      // assuming media is stored as jsonb array
      images: images || [],

      sizes: product.sizes || [],
    }

    return <ProductDetail product={formatted_product} />
  }
