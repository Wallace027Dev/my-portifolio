import "./styles/App.css";
import Project from "./components/Project";
import whatsapp from "./images/Whatsapp.svg";
import emBreve from "./images/EmBreve.png";
import react from "./images/React.svg";
import js from "./images/Javascript.svg";
import html from "./images/HTML5.svg";
import css from "./images/CSS3.svg";
import github from "./images/Github.svg";
import git from "./images/Git.svg";
import node from "./images/Nodejs.svg";
import tailwind from "./images/TailwindCSS.svg";
import sass from "./images/Sass.svg";
import mysql from "./images/MySQL.svg";
import docker from "./images/Docker.svg";
import postcss from "./images/PostCSS.svg";
import webpack from "./images/Webpack.svg";
import firebase from "./images/Firebase.svg";
import vercel from "./images/Vercel.svg";
import babel from "./images/Babel.svg";
import c from "./images/C.svg";
import ts from "./images/TypeScript.svg";
import python from "./images/Python.svg";
import php from "./images/PHP.svg";
import java from "./images/Java.svg";
import npm from "./images/npm.svg";
import copy from "./images/copy.svg";
import email from "./images/email.svg";
import arrowUp from "./images/ArrowUp.svg";
import linkedinWhite from "./images/linkedin.svg";
import githubWhite from "./images/github-white.svg";
import authStorage from "./images/projectThumbs/auth-storage.png";
import todoPrint from "./images/projectThumbs/todoPrint.png";
import postsApi from "./images/projectThumbs/postsApi.png";
import Nav from "./components/Nav";
import MainInfo from "./components/MainInfo";
import MyExp from "./components/MyExp";
import AboutMe from "./components/AboutMe";

//FUNCÃO DE COPIAR EMAIL

export default function App() {
  return (
    <>
      <Nav />
      <main className="center col">
        {/* MINHAS INFORMAÇÕES PRINCIPAIS */}
        <MainInfo />
        <div className="line"></div>
        {/* MINHAS EXPERIÊNCIAS */}
        <MyExp />
        <div className="line"></div>
        {/* SOBRE MIM */}
				<AboutMe />
        {/* MEUS PROJETOS */}
        <section id="my-projects" className="my-projects">
          <div>
            <Project
              projectName="Autenticação e Armazenamento"
              subtitle="Nesse projeto foi usado React, Routers e Firebase. Foi um exercício para fixar ferramentas do React e aplicar o Firebase em um projeto."
              skill1="Firebase"
              skill2="React JS"
              skill3="Javascript"
              imageProject={authStorage}
              acess="Autenticação e Armazenamento"
              linkProject="https://autenticacao-e-armazenamento-react.vercel.app/login"
            />
            <Project
              projectName="To Do List"
              subtitle="Uma lista de tarefas desenvolvida com JS puro, manipulando o DOM e Eventos(). No projeto foi usado o pré-processador Tailwind para estilização e transpilado com Babel."
              skill1="Javascript"
              skill2="Babel"
              skill3="Tailwind"
              imageProject={todoPrint}
              acess="To Do List"
              linkProject="https://to-do-olive-six.vercel.app/"
            />
            <Project
              projectName="Media Social"
              subtitle="Projeto de media social, onde posts são sumbetidos, e, enviados e salvos em uma API. Por enquanto essa API só funciona quando executada em uma aplicação local, como explicado no repositório desse projeto no Github. Mas em breve estou adicionando um banco de dados funcional ao projeto."
              skill1="Node"
              skill2="React JS"
              skill3="Fetch API"
              imageProject={postsApi}
              acess="Social Media"
              linkProject="https://consumo-de-api-com-react.vercel.app/"
            />
            <Project
              projectName="Projeto vazio"
              subtitle=" Descrição do meu projeto futuro. Aqui vai ser colocado meu exemplo."
              skill1="Typescript"
              skill2="React JS"
              skill3="Tailwind"
              imageProject={emBreve}
              acess="Projeto de tal"
              linkProject="exemploLink"
            />
          </div>
        </section>
        <div className="line"></div>
        {/* MINHAS TECNOLOGIAS */}
        <section id="my-skills" className="my-skills center">
          <h3 className="section-bar center">🧑‍💻 Skills · Experiências</h3>
          <h2>Tecnologias e habilidades</h2>
          <p>Techs que uso no dia a dia</p>
          <div>
            <img className="transit" src={html} alt="HMTL Image" />
            <img className="transit" src={css} alt="CSS Image" />
            <img className="transit" src={js} alt=" Javascript Image" />
            <img className="transit" src={react} alt="React Image" />
            <img className="transit" src={node} alt="Node Image" />
            <img className="transit" src={tailwind} alt="Tailwind Image" />
            <img className="transit" src={github} alt="Github Image" />
            <img className="transit" src={git} alt="Git Image" />
            <img className="transit" src={sass} alt="Sass Image" />
            <img className="transit" src={mysql} alt="MySQL Image" />
            <img className="transit" src={npm} alt="NPM Image" />
            <img className="transit" src={vercel} alt="Vercel Image" />
            <img className="transit" src={firebase} alt="Firebase" />
          </div>
          <p>Outras techs que já tive experiência</p>
          <div>
            <img className="transit" src={python} alt="Python Image" />
            <img className="transit" src={ts} alt="Typescript Image" />
            <img className="transit" src={java} alt="Java Image" />
            <img className="transit" src={c} alt="C Image" />
            <img className="transit" src={php} alt="PHP Image" />
            <img className="transit" src={docker} alt="Docker Image" />
            <img className="transit" src={postcss} alt="PostCSS Image" />
            <img className="transit" src={babel} alt="Babel Image" />
            <img className="transit" src={webpack} alt="Webpack Image" />
          </div>
        </section>
        <div className="line"></div>
        {/* CONTATOS */}
        <section id="my-contacts" className="my-contacts center">
          <h3 className="section-bar center">📬 Contatos</h3>
          <h2>Vamos conversar!</h2>
          <div className="link-contacts center">
            <img className="transit" src={whatsapp} alt="Meu whatsapp" />
            <div>
              <img className="email-image" src={email} alt="Meu email" />
              <p>wallaceofc@hotmail.com</p>
              <img
                className="copy-image transit"
                src={copy}
                alt="Ícone de copiar"
              />
            </div>
          </div>
          <a href="#">
            Voltar ao topo <img src={arrowUp} alt="Seta para cima" />{" "}
          </a>
        </section>
        {/* RODAPÉ */}
        <footer className="center">
          <div className="foot">
            <p>
              Feito por{" "}
              <a href="https://www.linkedin.com/in/wallace-dev/">
                Wallace Vieira
              </a>{" "}
            </p>
          </div>
          <div className="social-medias-foot">
            <a href="https://www.linkedin.com/in/wallace-dev/">
              <img
                className="transit"
                src={linkedinWhite}
                alt="Social Medias"
              />
            </a>
            <a href="https://github.com/Wallace027Dev">
              <img className="transit" src={githubWhite} alt="Social Medias" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
