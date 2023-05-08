import { Header } from "./Components/Headers/Header";
import { Sidebar } from "./Components/sidebar/Sidebar";
import { Post } from "./Components/Post/Post.tsx";
import style from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/paulo7708.png",
      name: "Paulo henrique",
      role: "Dono do Mundo",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Paulo henrique",
      role: "Dono do Mundo",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
  },
];
function App() {
  return (
    <div>
      <Header />
      <div className={style.layout}>
        <Sidebar />

        <div>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                avatarUrl={post.author.avatarUrl}
                name={post.author.name}
                role={post.author.role}
                content={post.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
