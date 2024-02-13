import Marquee from "react-fast-marquee"
import Image from "next/image"

const dir=['/img0.jpg','/img1.jpg','/img2.jpg','/img3.jpg','/img4.jpg','/img5.jpg','/img6.jpg','/img7.jpg','/img8.jpg','/img9.jpg']

export default function Footer(){
    return(
        <div className="p-4">
            <Marquee speed={75}>
                {dir.map((item)=>(
                    <>
                        <Image src={item} width="0" height="0" sizes="100%" className="w-[125px] h-[100px] block m-auto rounded-lg mb-2 mr-40" alt={item}/>
                    </>
                ))}
            </Marquee>
        </div>
    )
}