import React from "react";

const Nobel = ({ nobel }) => {
  return (
    <div className="profile bg-light">
      {nobel.laureates && (
        <h4>
          {nobel.laureates.map(item => (
            <span key={item.id}>{item.firstname + ", "}</span>
          ))}
        </h4>
      )}
      <h4>{nobel.year}</h4>
      <h4>{nobel.category}</h4>
    </div>
  );
};
export default Nobel;
