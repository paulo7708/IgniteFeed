import style from "./Post.module.css";
//import image from "../../assets/cracha3.png";
import { Comment } from "../comment/Comment";
import { Avatar } from "../avatar/Avatar";
import { useState } from "react";

interface User {
  avatarUrl: string;
  name: string;
  role: string;
  content: object;
}

export const Post = (props: User) => {
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Henry",
      cargo: "Dev Node",
      comment: "Hello brother and sister, i love you, thank you so much",
    },
    {
      id: 2,
      name: "Paulo",
      cargo: "Dev React",
      comment: "Hello brothers",
    },
  ]);

  function HandleNewComment() {
    event?.preventDefault();


    setComments([
      ...comments,
      {
        id: 3,
        name: "Henryque",
        cargo: "Dev React",
        comment: newComment,
      },
    ]);
    setNewComment('')
  }

  const str = Object.values(props.content);
  return (
    <div className={style.content}>
      <div className={style.head}>
        <Avatar hasBorder={true} image={props.avatarUrl} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.role}</p>
        </div>
        <time title="4 de Maio de 2023" dateTime="2023-05-04 08:00:00">
          Publicado há 1h
        </time>
      </div>

      {str.map((line) => {
        if (line.type === "paragraph") {
          return <p>{line.content}</p>;
        } else if (line.type === "link") {
          return (
            <p>
              <a href="#">{line.content}</a>
            </p>
          );
        }
      })}
      <hr />

      <form onSubmit={HandleNewComment} className={style.commentForm}>
        Deixe seu FeedBack
        <textarea name="comment"
        placeholder="De sua opinião"
        onChange={(event) => {
          setNewComment(event.target.value)
        }}
        value={newComment}
        />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      {comments.map((comment) => {
        return (
          <Comment
            name={comment.name}
            cargo={comment.cargo}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
};
