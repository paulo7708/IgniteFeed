import style from "./Sidebar.module.css";
import image from "../../assets/cracha3.png";
import { PencilSimpleLine } from "@phosphor-icons/react";
import { Avatar } from "../avatar/Avatar";

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Avatar hasBorder={true} image={image} />
      <h3>Paulo Henrique</h3>
      Designer Engineering
      <hr />
      <a href="#">
        <PencilSimpleLine />
        Editar Perfil
      </a>
      
    </div>
  );
};
