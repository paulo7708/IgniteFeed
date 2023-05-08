import { ThumbsUp, Trash } from "@phosphor-icons/react";
import style from "./Comment.module.css";
import image from "../../assets/cracha3.png";
import { Avatar } from "../avatar/Avatar";

interface Comm {
  name: string;
  cargo: string;
  comment: string;
}

export const Comment = (props: Comm) => {
  return (
    <div className={style.content}>
      <Avatar hasBorder={false} image={image} />
      <div className={style.head}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.cargo}</p>
        </div>
        <button title="Deletar comment">
          <Trash size={20} />
        </button>
        <div className="comment">
          <p>{props.comment}</p> 👋
        </div>
      </div>
      <div className={style.like}>
        <ThumbsUp />
        <p>Aplaudir</p>
        <p>. 03</p>
      </div>
    </div>
  );
};
