import Link from "next/link"

export default function PortfolioCard ({data}){
    
    return(
        <div className="m-10 w-96">
            <Link href="#">
            <div className="overflow-hidden rounded-xl">
                <img src={data.img}/>
            </div>
            </Link>
            <p className="text-blue-400 text-base mt-5 mb-3">{data.type}</p>
            <Link href="#">
            <a
            className="hover:text-blue-500 font-bold text-2xl duration-200"
            >{data.name}</a>
            </Link>
            <p className="text-lg my-5">{data.discription}</p>
            <div className="flex flex-row">
                {data.technology.map(tech=>(
                    <div className="w-20 mr-5 rounded-2xl border-gray-400 border-2 flex justify-center align-center" >
                    <img className="w-2/5" src={tech.img}/>
                    </div>
    ))}
            </div>
        </div>
    )
}