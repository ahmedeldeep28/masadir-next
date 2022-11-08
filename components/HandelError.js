import Image from 'next/image'

function HandelError({ text, image }) {
    return (
        <div className="row py-4 d-flex flex-column align-items-center">
            <div className='col-md-6 text-center '>
                <Image src={`/${image}`} layout="responsive" width={400} height={400} alt={text} />
                <h5 className='fs-h2 mt-3'>{text}</h5>
            </div>
        </div>
    )
}

export default HandelError