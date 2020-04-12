import React, { Component } from 'react';
import './main.css';
import './themes.dark.css';
import avatar from '../../assets/images/avatar.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div class="c-preloader js-preloader">
          <div class="c-preloader__spinner t-preloader__spinner"></div>
        </div>
        <div class="c-main-container js-main-container">
          <section class="o-section o-section--header t-section t-section--header">
            <div class="c-header">
              <div class="o-section__header-bg t-section__header"></div>
              <div class="o-section__content-bg t-section__content"></div>
              <div class="o-container">
                <div class="o-section__container">
                  <header class="o-section__header c-header__header t-section__header">
                    <div class="c-header__inner-header">
                      <div class="c-header__avatar">
                        <div class="a-header c-avatar">
                          <img class="c-avatar__img" src={avatar} alt="My Avatar" />
                        </div>
                      </div>
                    </div>
                  </header>

                  <div class="o-section__content c-header__content t-section__content">
                    <div class="c-header__inner-content">
                      <div class="c-header__top">
                        <div class="c-header__brand">
                          <div class="c-brand">
                            <h1 class="c-brand__title t-title">
                              <span class="c-brand__sizer">
                                <span class="a-header c-brand__first-word t-title__first-word">Ralfi</span>
                                <span class="a-header c-brand__second-word t-title__second-word">Salhon</span>
                              </span>
                            </h1>

                            <h2 class="a-header c-brand__sub-title t-sub-title">
                              <span class="c-brand__sizer">Mobile, Front-End Developer</span>
                            </h2>

                            <h4 class="a-header c-brand__sub-title t-sub-title">
                              <span class="c-brand__sizer--sm">
                                <a href="assets/RRS_Resume_Mar_2020_V2.pdf" target="_blank">
                                  Resume
                                </a>
                              </span>
                              <span> | </span>
                              <span class="c-brand__sizer--sm">
                                <a href="assets/projects.pdf" target="_blank">
                                  Projects
                                </a>
                              </span>
                            </h4>

                            <h4 class="a-header c-brand__sub-title t-sub-title">
                              <span class="c-brand__sizer--sm">
                                <span id="before"></span>
                                <a id="result" href="#" onclick="clickCounter();return false;"></a>
                                <span id="after"></span>
                                <a id="after2" href="#" onclick="hideCounter();return false;"></a>
                              </span>
                            </h4>
                          </div>
                        </div>

                        <ul class="c-header__social-buttons c-social-buttons">
                          <li class="a-header">
                            <a
                              href="https://github.com/ralfisalhon"
                              target="_blank"
                              class="c-social-button t-social-button"
                            >
                              <i class="fa fa-lg fa-github"></i>
                            </a>
                          </li>

                          <li class="a-header">
                            <a
                              href="https://www.linkedin.com/in/ralfisalhon/"
                              target="_blank"
                              class="c-social-button t-social-button"
                            >
                              <i class="fa fa-lg fa-linkedin"></i>
                            </a>
                          </li>

                          <li class="a-header">
                            <a
                              href="https://medium.com/@ralfisalhon"
                              target="_blank"
                              class="c-social-button t-social-button"
                            >
                              <i class="fa fa-lg fa-medium"></i>
                            </a>
                          </li>

                          <li class="a-header">
                            <a
                              href="https://www.youtube.com/channel/UCZOm0qLlSm19QyvAc_rsOmQ?view_as=subscriber"
                              target="_blank"
                              class="c-social-button t-social-button"
                            >
                              <i class="fa fa-lg fa-youtube-play"></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="c-header__contact">
                        <hr class="a-header c-header__contact-divider" />
                        <div class="o-grid">
                          <div class="o-grid__col-md-3 o-grid__col-sm-6">
                            <div class="a-header o-content">
                              <div class="o-content__body">
                                <h4>Location</h4>
                                <p>Somerville, MA</p>
                              </div>
                            </div>
                          </div>

                          <div class="o-grid__col-md-3 o-grid__col-sm-6">
                            <div class="a-header o-content">
                              <div class="o-content__body">
                                <a href="https://www.github.com/ralfisalhon/" target="_blank" class="t-link-container">
                                  <h4>Github</h4>
                                  <p>
                                    <span class="t-link-container__item--blended">/ralfisalhon</span>
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div class="o-grid__col-md-3 o-grid__col-sm-6">
                            <div class="a-header o-content">
                              <div class="o-content__body">
                                <a
                                  href="https://www.linkedin.com/in/ralfisalhon/"
                                  target="_blank"
                                  class="t-link-container"
                                >
                                  <h4>LinkedIn</h4>
                                  <p>
                                    <span class="t-link-container__item--blended">/in/ralfisalhon</span>
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div class="o-grid__col-md-3 o-grid__col-sm-6">
                            <div class="a-header o-content">
                              <div class="o-content__body">
                                <a href="mailto:ralfisalhon@gmail.com" target="_blank" class="t-link-container">
                                  <h4>Contact</h4>
                                  <p>
                                    <span class="t-link-container__item--blended">ralfisalhon@gmail.com</span>
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomePage;
