const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const bucket = 'product-images'

export function getImageUrl(path) {
  if (!path) return '/suit.png'
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`
}