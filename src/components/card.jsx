import { Link } from "react-router-dom";
import "../css/post.css";

export const Card = ({ title, body, userId, path, button, editButton, removeBtn, editButtonLink, removeBtnLink }) => {
    return (
        <div className="card" >
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="card-button" >
                <p>
                    By <span> {userId} </span> | <span>
                        <Link to={path} >{button}</Link></span>
                </p>

                {editButton && <Link className="edit" to={editButtonLink} >Edit</Link>}
                {removeBtn && <Link onClick={removeBtnLink}  >Remove</Link>}
            </div>
        </div>
    );
}
