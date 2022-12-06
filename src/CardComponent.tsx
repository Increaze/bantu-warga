  import React from "react";
  
  const Card = (icon: any, title: string, text: string) => {
    return
        <div>
            <span>{icon}</span>
            <h4>{title}</h4>
            <span>{text}</span>
        </div>
}
export default Card;