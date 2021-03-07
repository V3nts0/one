import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <hr />
        <div className="social-links">
          <ul>
            <li>
              <a href="https://github.com/V3nts0" target="_blank" rel="noreferrer" >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ventsislav-georgiev-600454184/" target="_blank" rel="noreferrer" >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/vencislav.georgiev.562" target="_blank" rel="noreferrer" >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} -
          <a href="https://github.com/V3nts0" target="_blank" rel="noopener noreferrer">
            Ventsislav Georgiev
          </a>
        </p>
        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
