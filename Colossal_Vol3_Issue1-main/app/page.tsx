import home from "/public/home.jpg"
import Image from "next/image"


export default function Home() {
  return (
    <div className="py-2">
      <Image src={home} width="0" height="0" sizes="100%" className="w-[100vh] h-auto m-auto" alt="FP" />
    </div>
  )
}
