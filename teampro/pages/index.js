import Card from "../components/PortfolioCard"

export default function Home() {
  const data = {
    img: "https://www.brainvire.com/wp/wp-content/uploads/2021/01/PF__CS_thumbnail_Geepas.jpg",
    type: "Programming",
    name: "New Shopping Web Site from TeamPro",
    discription: "Brainvire’s professionals upgraded the eCommerce website with the latest Magento version...",
    technology:[
        {
            img: "https://www.brainvire.com/wp/wp-content/uploads/2020/11/AWS.png"
        },
        {
            img: "https://www.brainvire.com/wp/wp-content/uploads/2020/06/Jira.png"
        },
        {
            img: "https://www.brainvire.com/wp/wp-content/uploads/2020/06/Android.png"
        },
        {
            img: "https://www.brainvire.com/wp/wp-content/uploads/2020/06/native.png"
        }
    ]
}
  return (
    <div>
      <Card data={data}/>
    </div>
  )
}
