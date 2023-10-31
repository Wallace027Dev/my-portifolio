import styled from 'styled-components';

import github from '../images/Github.svg';
import site from '../images/site.svg';

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 1.6rem;

  .container {
    margin: 1rem;
    width: 22.5rem;
    height: 28.75rem;
    border: 1px solid var(--primary);
    border-radius: 1rem;
    padding: 1.6rem 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;

      img {
        height: 1.6rem;
        margin-left: 1rem;
      }
    }

    .project-image {
      width: 22rem;
      height: 12.5rem;
      border-radius: 0.5rem;
    }

    p {
      font-size: 0.875rem;
      color: var(--tertiary);
    }

    h3 {
      font-weight: 700;
      font-size: 1.25rem;
    }

    .cont-skills {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 1.5rem;

      h4 {
        background-color: var(--secondary);
        width: 6.625rem;
        height: 1.875rem;
        border-radius: 0.5rem;
        color: var(--primary);
        font-weight: 700;
        font-size: 1rem;
        margin-right: 0.5rem;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .container {
      margin: 1rem;
      width: 18rem;
      height: 20rem;
      padding: 0 0 0.75rem 0;

      .title {
        margin-top: 0.5rem;
        flex-direction: column;

        img {
          margin: 0 0.5rem;
        }
      }

      p {
        font-size: 0.75rem;
        padding-bottom: 0rem;
      }
      .project-image {
        width: 16rem;
        height: 9rem;
      }
      h3 {
        font-size: 1.25rem;
        padding-bottom: 0.75rem;
        text-align: center;
      }
      .cont-skills {
        h4 {
          display: none;
        }
      }
    }
  }
`;

export default function ProjectModule(props) {
  return (
    <Project className="tranformThis">
      <div className="container">
        <div>
          <div className="title">
            <h3>{props.projectName}</h3>
            <div>
              {props.linkProject && (
                <a target="blank" href={props.linkProject}>
                  <img className="transit" src={github} alt="Github link" />
                </a>
              )}
              {props.linkSite && (
                <a target="blank" className="transit" href={props.linkSite}>
                  <img className="transit" src={site} alt="Site link" />
                </a>
              )}
            </div>
          </div>
          <p>{props.subtitle}</p>
        </div>
        <div>
          <div className="cont-skills">
            <h4 className="center">{props.skill1}</h4>
            <h4 className="center">{props.skill2}</h4>
            <h4 className="center">{props.skill3}</h4>
          </div>
          <div>
            <img
              className="project-image"
              src={props.imageProject}
              alt={props.acess}
            />
          </div>
        </div>
      </div>
    </Project>
  );
}
