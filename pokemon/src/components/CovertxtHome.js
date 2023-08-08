import React from 'react';
import '../Styling/CoverTxtHome.css';
import { Link } from 'react-router-dom';


export const CoverText = () => {
    return (
      <div className="cover-text">
        <p className="find-all-your">
          <span className="text-wrapper">Find</span>
          <span className="span">
            {" "}
            all your <br />
            favorite{" "}
          </span>
          <span className="text-wrapper">Pokemon</span>
        </p>
        <p className="you-can-know-the">You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <div className="btnDiv">
        <button className="btn-instance"  ><Link to="/pokedex">See Pokemons</Link></button>
       </div>
        {/* <div className="big-image">
      <img src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png "alt="Image" />
    </div> */}
      </div>
    );
  };
