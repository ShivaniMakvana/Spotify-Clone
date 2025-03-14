/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div
        onClick={() => navigate(`/album/${id}`)}
        className="min-w-[180] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      >
        <img className="rounded" src={image} alt={id} />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
      </div>
    </React.Fragment>
  );
};

export default AlbumItem;
