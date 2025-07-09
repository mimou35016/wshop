import HomeCarousel from '@/components/shared/home/home-carousel'

import data from '@/lib/data'

export default function Home() {
  return (
    <div className=''>
      <HomeCarousel items={data.carousels} />
    </div>
  )
}
