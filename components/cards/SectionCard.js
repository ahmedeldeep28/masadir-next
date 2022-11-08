import Link from 'next/link'
import Image from 'next/image'
import {baseUrl} from '../../utils/handelApi'

function SectionCard({ name, image }) {
  return (
    <Link href={`sections/${name}`}>
      <div className="section-card">
        <Image
          layout="responsive"
          width={350}
          height={250}
          src={`${baseUrl}/images/${image}`}
          blurDataURL={`${baseUrl}/images/${image}`}
          placeholder="blur"
          alt={name}
        />
        <h4 className='fs-h6 text-black mt-1 text-center'>{name}</h4>
      </div>
    </Link>
  )
}

export default SectionCard