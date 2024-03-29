import cvWallace from '../images/CV-WallaceVieira.jpg';
import cvDown from '../images/CVDownload.svg';
import fotoPerfil from '../images/logo-perfil.svg';
import linkedinWhite from '../images/linkedin.svg';
import githubWhite from '../images/github-white.svg';
import whatsapp from '../images/Whatsapp.svg';
import styled from 'styled-components';
import handleWhatsAppRedirect from '../utils/handleWhatsAppRedirect';
import SectionBar from './SectionBar';

const Main = styled.section`
  margin-top: 8rem;

  .profile {
    gap: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .my-paint {
    width: 40rem;
    animation: pulse 4s ease-in-out infinite;
  }

  .my-info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h1 {
      font-weight: 800;
      font-size: 3.25rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: var(--tertiary);
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    img {
      height: 2.125rem;
      margin-right: 1rem;
    }
  }

  .my-cv {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    cursor: pointer;

    .cvDown {
      width: 5.95rem;
      margin-bottom: 0.5rem;
    }

    .whatsapp {
      width: 12.25rem;
    }
  }

  @media screen and (max-width: 1366px) {
    margin-top: 0rem;

    .profile {
      gap: 10%;
    }

    .my-paint {
      width: 32rem;
    }
  }

  @media screen and (max-width: 1145px) {
    margin-top: 2rem;

    .profile {
      flex-direction: column;
    }

    .my-paint {
      width: 28rem;
    }

    .my-info {
      display: flex;
      align-items: center;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    }

    .my-cv {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .cvDown {
        width: 4rem;
        margin-right: 1rem;
        margin-bottom: 0;
      }

      .whatsapp {
        width: 9rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    gap: 10%;
    .my-paint {
      width: 24rem;
    }

    .my-info {
      display: flex;
      align-items: center;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-align: center;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    }

    .my-cv {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 2rem;

      .cvDown {
        width: 4rem;
        margin-right: 1rem;
        margin-bottom: 0;
      }

      .whatsapp {
        width: 9rem;
      }
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 6rem;
    gap: 5%;

    .my-paint {
      width: 18rem;
    }
    .my-info {
      display: flex;
      align-items: center;

      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 0.875rem;
        margin-bottom: 1rem;
      }

      img {
        height: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 480px) {
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05); /* Aumenta em 10% */
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default function MainInfo() {
  return (
    <Main id="home">
      <div className="profile fade-and-fall">
        <div className="my-info">
          <SectionBar icon="👋" text="Saudações!" />
          <h1>
            Wallace <br />
            Vieira
          </h1>
          <p>Desenvolvedor</p>
          <div>
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
        </div>
        <div>
          <img className="my-paint " src={fotoPerfil} alt="Wallace" />
        </div>
        <div className="my-cv">
          <a href={cvWallace} download="CV-Wallace">
            <img className="cvDown transit" src={cvDown} alt="Download my CV" />
          </a>
          <button
            type="button"
            className="remove-effect-button"
            onClick={handleWhatsAppRedirect}
          >
            <img
              className="whatsapp transit"
              src={whatsapp}
              alt="Tell me in whatsapp"
            />
          </button>
        </div>
      </div>
    </Main>
  );
}
