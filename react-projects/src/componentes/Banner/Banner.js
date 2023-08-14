import bannerImage from '../Banner/banner.png'
import './Banner.css'

function Banner () {
  return (
    <header className='banner'>
      <img src={bannerImage} alt="Imagem do Banner" />
    </header>
  )
}

export default Banner