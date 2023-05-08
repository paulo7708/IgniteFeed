import style from "./avatar.module.css";

interface Av {
  image: string;
  hasBorder: boolean;
}
export const Avatar = (props: Av) => {
  return (
    <img
      className={props.hasBorder ? style.avatarWithBorder : style.avatar}
      src={props.image}
      alt="foto"
    />
  );
};
