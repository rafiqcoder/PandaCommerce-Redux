import Image from "next/image";
import headphone from "@/public/assets/image/banner-images/headphone.png";
import tvImg from "@/public/assets/image/banner-images/tv.png";
import xboxImg from "@/public/assets/image/banner-images/xbox.png";
const Banner = () => {
    return (
      <section className="hero_slider container mt-5">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-inner rounded-4"
            style={{ background: "#FCEAE8" }}
          >
            <div className="carousel-item active ">
              <div className="carousel_container d-flex justify-content-center align-items-center py-5   ">
                <div className="d-block w-100  px-5">
                  <h2 className="slider_h h1 fw-bold ">Cool Due Headephone</h2>
                  <p className="mt-2">
                    Lorem ipsum dol or sit amet consectetur adipisicing elit.
                    Iste, odit debitis quam dolorum neque inventore nesciunt in
                    eius praesentium temporibus.
                  </p>
                  <p className="h1 text-danger" style={{ color: "#FF136F" }}>
                    $300
                  </p>
                  <button className="btn pink px-4 mt-2 text-light">Buy</button>
                </div>
                <div className="right_img">
                  <Image src={headphone} alt="" className="img-fluid"></Image>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel_container d-flex justify-content-center align-items-center py-5   ">
                <div className="d-block w-100  px-5">
                  <h2 className="slider_h h1 fw-bold ">Cool Due Headephone</h2>
                  <p className="mt-2">
                    Lorem ipsum dol or sit amet consectetur adipisicing elit.
                    Iste, odit debitis quam dolorum neque inventore nesciunt in
                    eius praesentium temporibus.
                  </p>
                  <p className="h1 text-danger" style={{ color: "#FF136F" }}>
                    $300
                  </p>
                  <button className="btn px-4 mt-2 pink text-light">Buy</button>
                </div>
                <div className="right_img">
                  <Image
                    src={tvImg}
                    alt=""
                    className="img-fluid"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel_container d-flex justify-content-center align-items-center py-5   ">
                <div className="d-block w-100  px-5">
                  <h2 className="slider_h h1 fw-bold ">Cool Due Headephone</h2>
                  <p className="mt-2">
                    Lorem ipsum dol or sit amet consectetur adipisicing elit.
                    Iste, odit debitis quam dolorum neque inventore nesciunt in
                    eius praesentium temporibus.
                  </p>
                  <p className="h1 text-danger" style={{ color: "#FF136F" }}>
                    $300
                  </p>
                  <button className="btn px-4 mt-2 pink text-light">Buy</button>
                </div>
                <div className="right_img">
                  <Image
                    src={xboxImg}
                    alt=""
                    className="img-fluid"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev h-25 m-auto"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next h-25 m-auto"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    );
};

export default Banner;