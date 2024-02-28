import React, { useState } from "react";
import Edit from "./Edit"
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const Like = ({ data, setData, i ,item}) => {
  const [like, setlike] = useState(false);
  const [editstate,setEditState]=useState(false)

  const handlelike = () => {
    setlike(!like);
  };
  const handledelete = () => {
    let arr = [...data];
    arr.splice(i, 1);
    setData(arr);
  };
const handleedit=()=>{
    setEditState(true)
}

  return (
    <div>
      <div className="icons_div">
        <span className="like_icon" onClick={handlelike}> {like ? <AiTwotoneHeart color="red" /> : <AiOutlineHeart />} </span>
        {editstate?<Edit setEditState={setEditState} editstate={editstate} data={data} setData={setData} item={item} i={i} />:
         <span className="like_icon"> <MdModeEdit onClick={handleedit} /> </span>}
         <span className="like_icon" onClick={handledelete}> <MdDelete /> </span>
      </div>
    </div>
  );
};

export default Like;
