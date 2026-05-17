import Collection from './components/collection/collection'
import HomeComponent from './components/home/home'
import Suits from './components/suit/Suits'
import { supabase } from '@/lib/supabase/client'
import { getImageUrl } from '@/lib/supabase/getImageURL'

export default async function Home() {
  const { data } = await supabase
    .from('Products')
    .select('*')

  const products = (data || []).map(p => ({
    id: p.sku,
    image: getImageUrl(p.images?.[0]),
    category: p.category,
    name: p.name || p.sku,
    rating: p.rating || 0,
    price: p.price,
  }))

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomeComponent />
      <Collection />
      <Suits products={products} />
    </div>
  )
}
