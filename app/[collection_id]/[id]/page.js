import { supabase } from '@/lib/supabase/client'
import ProductDetail from './ProductDetail/ProductDetail'


  export default async function ProductPage({ params }) {
    const { id } = await params

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
      collection_id: product.collection_id,
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
