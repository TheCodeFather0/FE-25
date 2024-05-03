import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

const Home = () => {
  const data = useContext(UserContext)
  return (
    <div style={{margin:'20px'}}>
      <div>
        <img src={data.image} alt="" style={{width:'50px',height:'50px'}}/>
        <h3>{data.username}</h3>
        <h3>{data.name} {data.surname}</h3>
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit cumque facere, voluptates, veniam nulla, numquam sint incidunt sequi adipisci saepe sit modi nostrum? Maxime iste veniam neque praesentium ipsam.
      </p> */}

      {/* <Text>
        <h1>salam</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit obcaecati omnis quam ullam eos a dolores, sapiente expedita quo quos eius atque voluptatem accusantium. Molestias excepturi dicta quas consequatur sapiente!
        </p>
      </Text> */}
    </div>
  )
}

export default Home