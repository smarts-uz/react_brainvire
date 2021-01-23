import Link from "next/link"
import { MdMail } from 'react-icons/md';
import {ImPhone} from "react-icons/im"

const links = [
    {
        id:1,
        name: "Insights",
        link: "#"
    },
    {
        id:2,
        name: "Newsroom",
        link: "#"
    },
    {
        id:3,
        name: "Blogs",
        link: "#"
    },
    {
        id:4,
        name: "Careers",
        link: "#"
    },
    {
        id:5,
        name: "Locate Us",
        link: "#"
    },
]

export default function HeaderLink(){
    return(
        <div className="py-2 px-8 flex items-center justify-between bg-gray-100">
            <div className="flex">
                <span className="flex items-center text-gray-500"><MdMail className="text-xl text-gray-700 mr-1"/>teampro@gmail.com</span>
                <span className="flex items-center text-gray-500 ml-5"><ImPhone className="text-lg text-gray-700 mr-1"/> +998 66 123 45 67</span>
            </div>
            <div>
                {links.map(data=>(
                    <Link key={data.id} href={data.link}>
                        <a className="ml-10 text-gray-500 duration-200 hover:text-blue-400">
                            {data.name}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}