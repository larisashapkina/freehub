import { Component } from "react";
import groupMembers from "../data/groupMembers";

class Card extends Component {
  render() {
    const fellowCards = groupMembers.map((fellow) => {
      return (
        <div className="card">
          <h2 className="name">{fellow.name}</h2>
          <div className="cardPic">
            <img className="selfie" src={fellow.photo} alt={fellow.name} />
          <span className="linksContainer">
            <a className="socialLinks" target="_blank" rel="noreferrer" href={fellow.linkedin}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsx2OVghcTGcZcfkc5XuZcvS4vXP_W3gMYg&usqp=CAU" alt="linkedin"/></a><br /><br /><br />
            <a className="socialLinks" target="_blank" rel="noreferrer" href={fellow.github}><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="github"/></a>
          </span>
          </div>
          <p>{fellow.description}</p>
        </div>
        
      )
    })
    return (
      <div id="teamContainer">
        {fellowCards}
      </div>
    );
  }
}

export default Card;