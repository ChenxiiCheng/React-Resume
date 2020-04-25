import React, { Fragment, useState } from 'react';
import ReactRotatinText from 'react-rotating-text';
import cookingUrl from '../../images/cooking-react.jpeg';
import redditUrl from '../../images/reddit-vue.png';
import adminreactUrl from '../../images/admin-react.png';
import myPic from '../../images/mypic.png';
import githubUrl from '../../images/github.png';
import permissionsAdmin from '../../images/user.png';
import bootcampUrl from '../../images/bootcamp.jpg';
import './style.scss';

const Header = () => {
  return (
    <Fragment>
      <section className="home">
        <div className="info">
          <div className="avatar">
            <a
              href="https://github.com/ChenxiiCheng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={myPic} alt="" />
            </a>
          </div>
          <h1 className="name">Hi, I'm Chenxi Cheng</h1>
          <div className="text">
            <span className="based">I'm currently looking for </span>
            <span className="position-title">
              <ReactRotatinText
                items={[
                  'Front End Position',
                  'Full Stack Position',
                  'Web Designer',
                ]}
              />
            </span>
            <p>
              Hi, I am currently a master student majoring in Computer
              Engineering at NYU. I'm interested in <strong>Front End</strong>{' '}
              and <strong>Full Stack Web</strong> development. I am looking for
              a <strong>Full Time</strong> position now and I will graduate in
              May 2020. If you have any position please feel free to contact me!
            </p>
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
              <a
                href="https://www.yuque.com/dashboard/books"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="library" size="large"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChenxiiCheng/Resume/blob/master/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="document-text" size="large"></ion-icon>
              </a>
            </li>

            <div className="side-project">Side Projects</div>
          </div>
        </div>

        {/** 展示项目卡片 */}
        <div className="display-project">
          <div className="card-list">
            <div className="card">
              <a
                href="https://github.com/ChenxiiCheng/React-Permissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={permissionsAdmin} alt="" />
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
                href="https://cooking.chenxii.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={cookingUrl} alt="" />
              </a>
            </div>
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
                href="https://cms.chenxii.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={adminreactUrl} alt="" />
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
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
