import React from 'react';
import '../Styling/CoverTxtHome.css';
export const CoverText = ({ className }) => {
    return (
      <div className={`cover-text ${className}`}>
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
        <button className="btn-instance" grassClassName="design-component-instance-node" text="See pokemons" />
      </div>
    );
  };
