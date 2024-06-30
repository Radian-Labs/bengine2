
import Link from "next/link"
import Image from "next/image"

function ArtLinks({ width, height, links }) {
  const imgPrefix = "/images/"
  const imgName = ( path: string ) => path.replace(/_/g, ' ' ).split('.')[ 0 ]
  return (
    <div className="mb-[10px] max-w-[1200px] h-[350px] m-auto flex flex-wrap justify-center items-center overflow-auto">
      { links && links.map(( link, idx ) => 
        <Link
          key={ idx }
          href={`/sketches/${ link.path }`}
          className="hover:scale-110 transform duration-400 ease-in-out cursor-pointer p-4">
          <Image 
            loading="lazy"
            src={ imgPrefix + link.path } 
            alt={ link.path } 
            width={ width }
            height={ height }
            className="max-w-[150px] h-[160px] rounded shadow-lg"  />
            <p className=" p-1 max-w-[150px] tracking-widest text-xs">{ imgName( link.path )}</p>
        </Link>   
      )}
    </div>
  )
}

export default ArtLinks
