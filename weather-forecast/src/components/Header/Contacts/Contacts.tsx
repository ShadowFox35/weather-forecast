import React from 'react';
import './Contacts.scss';

import github from '../../../assets/icons/github.svg';
import linkedin from '../../../assets/icons/linkedin.svg';

const Contacts: React.FC = () => {
  return (
    <section className="contacts">
      <a className="contacts_link" target="blank" href="https://github.com/ShadowFox35">
        <img className="contacts_link_icon" src={github} alt="github ShadowFox35" />
      </a>
      <a className="contacts_link" target="blank" href="https://linkedin.com/in/anastasia-chernova-dev">
        <img className="contacts_link_icon" src={linkedin} alt="LinkedIn Anastasia Chernova" />
      </a>
    </section>
  );
};

export default Contacts;
