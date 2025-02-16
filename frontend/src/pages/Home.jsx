import React from "react";

const Home = () => {
  return (
    <div>
      <img
        className="w-16 absolute top-1 left-2"
        src="https://logospng.org/download/uber/logo-uber-4096.png"
        alt="uber"
      ></img>
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/R.2b6b6c31e9c26e93180ab83eb58dc018?rik=6gulESQ4Qq2x%2fw&riu=http%3a%2f%2fwww.technewsworld.com%2farticle_images%2f2015%2f82763_620x330.jpg&ehk=W5GcbLegEcnGDMsjlC7ZY9iUf44hOr9ip4utoE2weRc%3d&risl=&pid=ImgRaw&r=0"
          alt="uber"
        />
      </div>
      <div>
        <h4>Find trip</h4>
        <form>
          <input type="text" placeholder="Add a pickup location" />
          <input type="text" placeholder="Enter your dest" />
        </form>
      </div>
    </div>
  );
};

export default Home;
