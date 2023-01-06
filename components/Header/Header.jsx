import Logo from '@/public/logo.png';
import Image from 'next/image';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
const Header = () => {
    return (
      <header className="container-fluid shadow-sm sticky-top bg-white">
        <nav className="container navbar navbar-expand-lg bg-white py-4">
          <div className="container-fluid ">
            <a className="navbar-brand w-25" href="#">
              <Image src={Logo} alt=""></Image>
            </a>
            <form
              className="d-flex bg-light border rounded-pill ps-3 flex-lg-grow-1 ms-auto justify-content-end align-items-center border-0"
              role="search"
            >
              <input
                className="form-control border-0 bg-light rounded-pill text-muted"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn rounded-circle text-muted " type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  ms-sm-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <div className="mb-2">
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        as={ButtonGroup}
                        key={idx}
                        id={`dropdown-button-drop-${idx}`}
                        size="lg"
                        title="cart"
                      >
                        <div>
                                Helo
                        </div>
                      </DropdownType>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
};

export default Header;