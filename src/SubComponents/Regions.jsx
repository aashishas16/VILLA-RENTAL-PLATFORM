import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR REGIONS</h1>
        <p>Welcome to the wild and wonderful world of Top Pick Villas regions! Buckle up and prepare for a laugh-filled tour 
          through the most luxurious and downright hilarious vacation spots on the planet.
           Whether you’re looking for sun, sand, or a sprinkle of absurdity, we’ve got a region that’s just right for you. </p>
        <div className="region_container">
        <div className="card">
         <img src="/region1.jpg" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="/region2.jpg" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
