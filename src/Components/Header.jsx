import React from "react";
function Header() {
  return (
    <>
      <section className="header ">
        <nav className="navbar container navbar-expand  ">
          <div className="d-flex  align-items-center justify-content-between">
            <a className="navbar-brand f-gv" href="#">
              Millar & Aliza
            </a>

            <div class="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav f-ds text-uppercase">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Couple
                </a>
                <a className="nav-link" href="#">
                  Story
                </a>
                <a className="nav-link" href="#">
                  Events
                </a>
                <a className="nav-link" href="#">
                  People
                </a>
                <a className="nav-link" href="#">
                  Gallery
                </a>
                <a className="nav-link" href="#">
                  Rsvp
                </a>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Blog With Sidebar
                      </a>
                    </li>
                    <li className="dropend">
                      <a
                        class="dropdown-item dropdown-toggle "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Blog Details
                      </a>
                      <ul class="dropdown-sub dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Blog With Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
