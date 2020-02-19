import React, { Component, Fragment } from 'react';
import ReactRotatinText from 'react-rotating-text';
import cookingUrl from '../../images/cooking-react.jpeg';
import redditUrl from '../../images/reddit-vue.png';
import adminreactUrl from '../../images/admin-react.png';
import myPic from '../../images/mypic.png';
import githubUrl from '../../images/github.png';
import contactUrl from '../../images/contact.png';
import bootcampUrl from '../../images/bootcamp.jpg';

import './style.scss';

class Header extends Component {
  state = {
    showAvatar: true,
    showEmail: false
  };

  render() {
    return (
      <Fragment>
        <section className="home">
          <div className="info">
            <div
              className="ripple-loader"
              onClick={() => {
                this.setState({
                  showAvatar: !this.state.showAvatar
                });
              }}
            >
              <div></div>
              <div></div>
            </div>
            {this.state.showAvatar && (
              <div className="avatar">
                <a
                  href="https://github.com/ChenxiiCheng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={myPic} alt="" />
                </a>
              </div>
            )}
            <h1 className="name">Hi, I'm Chenxi Cheng</h1>
            <div className="text">
              <span className="based">I'm a New York based </span>
              <span className="position-title">
                <ReactRotatinText
                  items={[
                    'Front End Engineer',
                    'Full Stack Engineer',
                    'Web Designer'
                  ]}
                />
              </span>
              <p>
                Hi, I am currently a master student, majoring in Computer
                Engineering at NYU. I am looking for a{' '}
                <strong>full time position</strong> now and I will graduate in{' '}
                <strong>May 2020</strong>. If you have any position please feel
                free to contact me!
              </p>
              {/* <p>
                <ReactRotatinText
                  items={['Do have faith in what you love -- Chenxii']}
                  color={'#f9d5bb'}
                />
              </p> */}
            </div>
            <hr />
            <div className="social">
              <li>
                <a
                  href="https://github.com/ChenxiiCheng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chenxi-cheng-42a564159/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-linkedin" size="large"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="list-box" size="large"></ion-icon>
                </a>
              </li>
              {/* <li>
                <span
                  className="email"
                  onClick={() => {
                    this.setState({
                      showEmail: !this.state.showEmail
                    });
                  }}
                >
                  <ion-icon name="mail-unread" size="large"></ion-icon>
                </span>
                {this.state.showEmail && (
                  <span className="showEmail">chenxic1011@gmail.com</span>
                )}
              </li> */}

              <div className="side-project">Side Projects</div>
            </div>
          </div>

          {/** 展示项目卡片 */}
          <div className="display-project">
            <div className="card-list">
              <div className="card">
                <a
                  href="https://github.com/ChenxiiCheng/Bootcamp-Express-Api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={bootcampUrl} alt="" />
                </a>
              </div>
              <div className="card">
                <a
                  href="http://github.chenxii.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubUrl} alt="" />
                </a>
              </div>
              <div className="card">
                <a
                  href="http://contact.chenxii.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={contactUrl} alt="" />
                </a>
              </div>
              <div className="card">
                <a
                  href="https://cooking.chenxii.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={cookingUrl} alt="" />
                </a>
              </div>

              <div className="card">
                <a
                  href="https://reddit.chenxii.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={redditUrl} alt="" />
                </a>
              </div>
              <div className="card">
                <a
                  href="https://cms.chenxii.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={adminreactUrl} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Header;
