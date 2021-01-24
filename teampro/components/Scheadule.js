import CheckBox from "./CheckBox"

const data = [
    {
        id:1,
        name:"E-COMMERCE"
    },
    {
        id:2,
        name:"CRM"
    },
    {
        id:3,
        name:"WEB"
    },
    {
        id:4,
        name:"DISIGN"
    },
    {
        id:5,
        name:"MOBILE APPS"
    },
    {
        id:6,
        name:"OTHERS"
    },
]

export default function Scheadule(){
    return(
        <div className="shadow-lg rounded-lg w-full lg:w-3/5 py-4 px-10">
            <h1 className="text-center md:text-left text-3xl font-bold">Schedule a Consultation</h1>
            <form className="grid md:flex md:flex-wrap md:flex-row">
                <div className="grid md:w-1/2 w-full py-5 px-2">
                    <label className="py-1 text-lg text-gray-800">Name</label>
                    <input type="text" name="name" required className="rounded focus:outline-none border border-gray-500 focus:border-blue-500 duration-500 py-2 px-5"/>
                </div>
                <div className="grid md:w-1/2  w-full py-5 px-2">
                    <label className="py-1 text-lg text-gray-800">Email</label>
                    <input type="text" required name="email" className="rounded focus:outline-none border border-gray-500 focus:border-blue-500 duration-500 py-2 px-5"/>
                </div>
                <div className="grid md:w-1/2  w-full py-5 px-2">
                    <label className="py-1 text-lg text-gray-800">Phone Number</label>
                    <div className="flex overflow-hidden rounded border border-gray-500 focus:border-blue-500 duration-500 items-center ">
                        <div className="flex justify-around items-center text-center bg-gray-200 py-2 px-2 border-r border-black">
                            <img className="w-6 mr-2" src="https://www.flaticon.com/svg/vstatic/svg/197/197416.svg?token=exp=1611312759~hmac=8bfa652daab67fc7b112e6185d9de29c"/>
                            <span>+998</span>    
                        </div>
                        <input type="text" maxLength="9" name="phone" required className="py-2 px-2 focus:outline-none"/>
                    </div>
                </div>
                <div className="grid md:w-1/2  w-full py-5 px-2">
                    <label className="py-1 text-lg text-gray-800">Skype ID / Whatsapp Number</label>
                    <input name="social" required className="rounded focus:outline-none border border-gray-500 focus:border-blue-500 duration-500 py-2 px-5"/>
                </div>
                <div className="grid md:w-1/2  w-full py-5 px-2">
                    <label className="py-1 text-lg text-gray-800">Project Discription</label>
                    <textarea
                    name="discription"
                    className="p-3 h-32 resize-none focus:outline-none rounded border border-gray-500 focus:border-blue-500 duration-500 w-full text-sm"
                    ></textarea>
                </div>
                <div className="md:w-1/2  w-full py-5 px-2 grid-rows-1">
                    <label className="py-1 text-lg text-gray-800">Select The Services You Are Interested In:</label>
                    <div className="flex flex-wrap flex-row py-2">
                        {data.map(i=>(
                            <CheckBox key={i.id} name={i.name}/>
                        ))}
                    </div>
                </div>
                <button type="submit" className="py-2 focus:outline-none rounded-lg text-lg px-8 bg-blue-400 hover:bg-blue-500 duration-300 text-white">Submit</button>
            </form>
        </div>
    )
}