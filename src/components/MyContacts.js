import whatsapp from '../images/Whatsapp.svg';
import copy from '../images/copy.svg';
import email from '../images/email.svg';
import arrowUp from '../images/ArrowUp.svg';

import styled from 'styled-components';
import SectionBar from '../components/SectionBar';

import scrollToSection from '../utils/scrollToSection';
import handleWhatsAppRedirect from '../utils/handleWhatsAppRedirect';

const Contacts = styled.section`
  flex-direction: column;
  margin-bottom: 6rem;

  h1 {
    font-weight: 800;
    font-size: 3rem;
  }

  button {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--primary);
    display: flex;
    align-items: center;
  }

  .link-contacts {
    > img {
      height: 3.75rem;
      margin-right: 2.5rem;
      cursor: pointer;
    }

    margin: 3rem 0;

    flex-direction: column;
    font-size: 1.25rem;
    color: var(--tertiary);

    div {
      flex-direction: column;

      .email-image {
        height: 4.5rem;
      }

      .copy-image {
        height: 2rem;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 320px) {
    text-align: center;

    h1 {
      padding: 0 1rem;
    }

    a {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .link-contacts {
      > img {
        height: 3rem;
        margin-right: 2.5rem;
      }

      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    .link-contacts {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      div {
        margin-top: 0;
        flex-direction: row;
        align-items: center;

        .email-image {
          height: 3rem;
          margin: 0 0.5rem 0 3rem;
        }

        .copy-image {
          height: 1.5rem;
          margin-top: 0;
          margin-right: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    a {
      margin-bottom: 6rem;
    }
  }
`;

export default function MyContacts() {
  return (
    <Contacts id="my-contacts" className="center">
      <SectionBar icon="📬" text="Contatos!" />
      <h1>Vamos conversar!</h1>
      <div className="link-contacts center">
        <button
          type="button"
          className="remove-effect-button"
          onClick={handleWhatsAppRedirect}
        >
          <img className="transit" src={whatsapp} alt="Meu whatsapp" />
        </button>
        <div className="center">
          <img className="email-image" src={email} alt="Meu email" />
          <p>wallaceofc@hotmail.com</p>
          <img
            className="copy-image transit"
            src={copy}
            alt="Ícone de copiar"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => scrollToSection('nav')}
          className="transit remove-effect-button"
        >
          Voltar ao topo <img src={arrowUp} alt="Seta para cima" />{' '}
        </button>
      </div>
    </Contacts>
  );
}
