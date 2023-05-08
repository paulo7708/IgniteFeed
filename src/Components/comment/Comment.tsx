import { ThumbsUp, Trash } from "@phosphor-icons/react";
import style from "./Comment.module.css";
import image from "../../assets/cracha3.png";
import { Avatar } from "../avatar/Avatar";
import { useState } from 'react';

interface Comm {
  key: string | number
  name: string;
  cargo: string;
  content: string;
  onDeleteComment: Function;
}

export const Comment = (props: Comm) => {
  const [like, setLike] = useState(0);

  function handleLike() {
    return setLike(like +1)
  }
  function handleDeleteComment(){
    console.log('deletar')

    props.onDeleteComment(props.content)
  }
  return (
    <div className={style.content}>
      <Avatar hasBorder={false} image={image} />
      <div className={style.head}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.cargo}</p>
        </div>
        <button className="trash" onClick={handleDeleteComment} title="Deletar comment">
          <Trash size={20} />
        </button>
        <div className="comment">
          <p>{props.content}</p> 👋
        </div>
      </div>
      <button onClick={handleLike} className={style.like}>
        <ThumbsUp />
        <p>Aplaudir</p>
        <p>{like}</p>
      </button>
    </div>
  );
};
