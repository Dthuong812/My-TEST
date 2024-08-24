import React from "react";
import SideBar from "../layout/SideBar";
import PagePost from "../posts/PagePost";


const Profile =() =>{
    return(
        <div className="grid grid-cols-4">
             <SideBar></SideBar>
             <PagePost></PagePost>
        </div>
    )
}
export default Profile