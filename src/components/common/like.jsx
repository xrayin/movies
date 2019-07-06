import React from 'react';


const Like = (props) => {
    let classes = "fa fa-heart";
    if(!props.Liked) classes += "-o";
    return (
        <div>
            <i onClick={props.onClick} style={{cursor: "pointer"}} className={classes} aria-hidden="true"></i>
        </div>
    );
};

export default Like;