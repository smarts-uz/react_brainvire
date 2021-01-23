//Quvonchbek Yunusov
function VerticalCard({data}) {
    return (
        <div 
        style={{width: 292, height: 578}}
        className={`p-8 rounded-lg border-2 m-16 hover:shadow-2xl transform ${data.scale?'hover:scale-y-110':''} ${data.scale?'hover:pb-12':''} duration-300 ease-in-out hover:border-0`}>
            <div className="pb-4"><img 
            src={data.imgUrl}
            alt={data.imgAlt} 
            style={{width:65, height: 65}}
            /></div>
            <b className="font-bold text-xl font-sans">{data.title}</b>
            <p className="text-lg font-sans py-2">
            {data.context}
            </p>
        </div>
    )
}

export default VerticalCard
