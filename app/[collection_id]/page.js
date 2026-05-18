import { supabase } from '@/lib/supabase/client'
import { getImageUrl } from '@/lib/supabase/getImageURL'
import CollectionDetail from './CollectionDetail/CollectionDetail'

export default async function CollectionPage({ params }) {
  const { collection_id } = await params

  const { data } = await supabase
    .from('Products')
    .select('*')
    .eq('collection_id', collection_id)

    console.log(data)

  const products = (data || []).map(p => ({
    id: p.sku,
    image: getImageUrl(p.images?.[0]),
    category: p.category,
    collection_name: p.collection_name,
    collection_id: p.collection_id,
    name: p.name || p.sku,
    rating: p.rating || 0,
    price: p.price,
  }))

  return ( <CollectionDetail products={products}/> )
}