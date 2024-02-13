"use client"

import Image from "next/image"

type props ={
    params:{article:string}
}

type Route = {
    page: string;
    route: string;
    path: string[];
  };


export default function Lmao({params}:props) {
    const route = params.article
    const data = require('../../routes.json')
    return (
        <div className="py-2">
            {data.routes.map((obj:Route) => (
                <span key={obj.route}>
                    {obj.route=="/articles/"+route &&
                        obj.path.map((p) => (
                            <span key={p}>
                                <div className="py-2">
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
