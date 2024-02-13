"use client"

import Image from "next/image"

type props ={
    params:{sample:string}
}

type Route = {
    page: string;
    route: string;
    path: string[];
  };


export default function Lmao({params}:props) {
    const route = params.sample
    const data = require('../routes.json')
    return (
        <div className="py-2">
            {data.routes.map((obj:Route) => (
                <span key={obj.page}>
                    {obj.route=="/"+route &&
                        obj.path.map((p,index) => (
                            <span key={index}>
                                <div className="py-2" >
                                    <Image src={p} width="0" height="0" sizes="100%" className="w-[100vh] h-auto m-auto" alt="FP" />
                                </div>
                            </span>
                        ))
                    }
                </span>
            ))}
        </div>
    )
}
