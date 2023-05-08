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
  const [count, setCount] = useState(3)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Henry",
      cargo: "Dev Node",
      content: "Hello brother and sister, i love you, thank you so much",
    },
    {
      id: 2,
      name: "Paulo",
      cargo: "Dev React",
      content: "Hello brothers",
    },
  ]);

  function HandleNewComment() {
    event?.preventDefault();

    setComments([
      ...comments,
      {
        id: count,
        name: "Henryque",
        cargo: "Dev Typescript",
        content: newComment,
      },      
    ]);
    setNewComment('')
    setCount(count +1)
    //console.log(count)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter( comment => {
      return comment.content !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne)
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
          return <p key={line.content}>{line.content}</p>;
        } else if (line.type === "link") {
          return (
            <p key={line.content}>
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
        required
        />

        <footer>
          <button className={style.publicarButton} type="submit" disabled={newComment.length === 0}>
            Publicar
          </button>
        </footer>
      </form>

      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            cargo={comment.cargo}
            content={comment.content}
            onDeleteComment={deleteComment}
          />
        );
      })}
    </div>
  );
};
