import React from 'react';
import {Tab} from "@material-ui/core"
import {TabList, TabContext, TabPanel} from "@material-ui/lab"




const data = [
  {
    name: "Shopping Market",
    discription: "We develop programs and strategies to enable the top-level executive to increase the value of the organization as a whole and equip it for the future."
  },
  {
    name: "Online Market",
    discription: "Improve key business processes and create smarter workflows to increase efficiency and boost productivity for employees and management alike."
  },
  {
    name: "Programming",
    discription: "We formulate strategies to reinvent existing solutions and technological tools to allow CIOs in creating a digitally-advanced enterprise."
  }
]



export default function TabsWrappedLabel() {

  const [value, setValue] = React.useState(data[0].discription);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="bg-gray-200 mx-8 my-10 rounded-lg">
      <TabContext value={value}>
          <TabList
          onChange={handleChange}
          centered
          aria-label="simple tabs example">
            {data.map(i=>(
              <Tab
              className="focus:outline-none bg-black"
              key={i.name}
              label={i.name}
              value={i.discription} />
            ))}
          </TabList>
        {data.map(i=>(
          <TabPanel
          className="text-center text-lg w-4/5 m-auto"
          key={i.name}
          value={i.discription}>{i.discription}</TabPanel>
        ))}
      </TabContext>
    </div>
  );
}
