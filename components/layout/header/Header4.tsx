import Link from "next/link";

export default function Header4({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
}: any) {
  return (
    <>
      <header>
        <div
          className={`header-area homepage4 header header-sticky d-none d-lg-block ${scroll ? "sticky" : ""}`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/assets/img/logo/logo3.png" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <ul>
                      <li>
                        <Link href="/about">About Event</Link>
                      </li>
                      <li>
                        <Link href="/#">
                          Speakers <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link href="/speakers">Speakers</Link>
                          </li>
                          <li>
                            <Link href="/speakers-single">
                              Speakers Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/#">
                          Schedule <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link href="/event">Our Event</Link>
                          </li>
                          <li>
                            <Link href="/event-schedule">Event Schedule</Link>
                          </li>
                          <li>
                            <Link href="/event-single">Event Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/#">
                          Blogs <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link href="/blog">Our Blog</Link>
                          </li>
                          <li>
                            <Link href="/blog-single">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/#">
                          Pages <i className="fa-solid fa-angle-down" />
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link href="/memories">Our Memories</Link>
                          </li>
                          <li>
                            <Link href="/pricing-plan">Pricing Plan</Link>
                          </li>
                          <li>
                            <Link href="/faq">FAQ,s</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-area">
                    <div
                      className="search-icon header__search header-search-btn"
                      onClick={handleSearch}
                    >
                      <a>
                        <img src="/assets/img/icons/search1.svg" alt="" />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <Link href="/#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#" className="m-0">
                          <i className="fa-brands fa-pinterest-p" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`header-search-form-wrapper ${isSearch ? "open" : ""}`}
                  >
                    <div
                      className="tx-search-close tx-close"
                      onClick={handleSearch}
                    >
                      <i className="fa-solid fa-xmark" />
                    </div>
                    <div className="header-search-container">
                      <form role="search" className="search-form">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search …"
                          name="s"
                        />
                        <button type="submit" className="search-submit">
                          <img src="/assets/img/icons/search1.svg" alt="" />
                        </button>
                      </form>
                    </div>
                  </div>
                  {isSearch && (
                    <div
                      className="body-overlay active"
                      onClick={handleSearch}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
