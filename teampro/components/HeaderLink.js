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
        <div className="py-2 px-8 grid text-center justify-center md:flex md:items-center md:justify-between bg-gray-100">
            <div className="flex justify-center">
                <span className="flex items-center text-gray-500 md:text-base text-sm"><MdMail className="md:text-xl text-sm text-gray-700 mr-1"/>teampro@gmail.com</span>
                <span className="flex items-center text-gray-500 md:text-base text-sm ml-2"><ImPhone className="md:text-xl text-sm text-gray-700 mr-1"/> +998 66 123 45 67</span>
            </div>
            <div>
                {links.map(data=>(
                    <Link key={data.id} href={data.link}>
                        <a className="md:ml-10 mx-1 md:text-base text-sm text-gray-500 duration-200 hover:text-blue-400">
                            {data.name}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}