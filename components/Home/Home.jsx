import Banner from "./Banner/Banner";
import Image from "next/image";
import watchImg from "@/public/assets/image/categories/watch.png";
import shoImg1 from "@/public/assets/image/shoes/shoe-1.png";
import shoImg2 from "@/public/assets/image/shoes/shoe-2.png";
import shoImg3 from "@/public/assets/image/shoes/shoe-3.png";
import bag1 from "@/public/assets/image/bags/bag-1.png";
import bag2 from "@/public/assets/image/bags/bag-2.png";
import bag3 from "@/public/assets/image/bags/bag-3.png";


const Home = () => {
    return (
      <>
        <Banner></Banner>
        <section className="categorie_area container my-5">
          <div className="row mx-1">
            <h1 className="h2 fw-bold">Categories</h1>
            <div className="col- col-md-4">
              <div className="single_cat yellow d-flex justify-content-around align-items-center rounded-3 my-sm-2">
                <h1 className="cat_h fs-1 text-light">Watch</h1>
                <Image
                 
                  src={watchImg}
                  alt=""
                  className="img-fluid w-25 py-2"
                ></Image>
              </div>
            </div>
            <div className="col- col-md-4 ">
              <div className="single_cat pink d-flex justify-content-around align-items-center rounded-3 my-sm-2">
                <h1 className="cat_h fs-1 text-light">Bag</h1>
                <Image
                
                  src={watchImg}
                  alt=""
                  className="img-fluid w-25 py-2"
                ></Image>
              </div>
            </div>
            <div className="col- col-md-4 ">
              <div className="single_cat blue d-flex justify-content-around align-items-center rounded-3 my-sm-2">
                <h1 className="cat_h fs-1 text-light">Shoes</h1>
                <Image
                 
                  src={watchImg}
                  alt=""
                  className="img-fluid w-25 py-2"
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="shoe_catalouge bg-light pb-5">
          <div className="container">
            <div className="row my-5 py-5 ms-1">
              <h1 className="h2 fw-bold">Shoes</h1>
              <div className="col- col-md-6 col-lg-4 g-4">
                <div className="card each_s_cat border-0 rounded-4 shadow p-3">
                  <Image
                   
                    src={shoImg1}
                    alt=""
                    className="img-fluid"
                  ></Image>
                  <h1 className="h4 fw-bold text-center text-capitalize card-title mt-4">
                    Reebok dart men's shoes
                  </h1>
                  <p className="card-text text-center my-2 px-2 text-muted fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                  </p>
                  <p className="h3 text-center fw-bold">$699</p>
                  <button className="btn btn-dark text-uppercase m-auto px-4 py-3 my-2">
                    buy now <i className="fa fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              <div className="col- col-md-6 col-lg-4 g-4">
                <div className="card each_s_cat border-0 rounded-4 shadow p-3">
                  <Image
                  
                    src={shoImg2}
                    alt=""
                    className="img-fluid"
                  ></Image>
                  <h1 className="h4 fw-bold text-center text-capitalize card-title mt-4">
                    Reebok Pump
                  </h1>
                  <p className="card-text text-center my-2 px-2 text-muted fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                  </p>
                  <p className="h3 text-center fw-bold">$699</p>
                  <button className="btn btn-dark text-uppercase m-auto px-4 py-3 my-2">
                    buy now <i className="fa fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              <div className="col- col-md-6 col-lg-4 g-4">
                <div className="card each_s_cat border-0 rounded-4 shadow p-3">
                  <Image
                    
                    src={shoImg3}
                    alt=""
                    className="img-fluid"
                  ></Image>
                  <h1 className="h4 fw-bold text-center text-capitalize card-title mt-4">
                    Reebok All Terrain
                  </h1>
                  <p className="card-text text-center my-2 px-2 text-muted fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                  </p>
                  <p className="h3 text-center fw-bold">$699</p>
                  <button className="btn btn-dark text-uppercase m-auto px-4 py-3 my-2">
                    buy now <i className="fa fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="row my-5 mx-1">
              <h1 className="h2 fw-bold">Backpack</h1>
              <div className="col- col-md-6 col-lg-4 g-4">
                <div className="card each_s_cat border-0 rounded-4 shadow p-3">
                  <Image
                   
                    src={bag1}
                    alt=""
                    className="img-fluid"
                  ></Image>
                  <h1 className="h4 fw-bold text-center text-capitalize card-title mt-4">
                    Reebok dart men's shoes
                  </h1>
                  <p className="card-text text-center my-2 px-2 text-muted fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                  </p>
                  <p className="h3 text-center fw-bold">$699</p>
                  <button className="btn btn-dark text-uppercase m-auto px-4 py-3 my-2">
                    buy now <i className="fa fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              <div className="col- col-md-6 col-lg-4 g-4">
                <div className="card each_s_cat border-0 rounded-4 shadow p-3">
                  <Image
                   
                    src={bag2}
                    alt=""
                    className="img-fluid"
                  ></Image>
                  <h1 className="h4 fw-bold text-center text-capitalize card-title mt-4">
                    Reebok dart men's shoes
                  </h1>
                  <p className="card-text text-center my-2 px-2 text-muted fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                  </p>
                  <p className="h3 text-center fw-bold">$699</p>
                  <button className="btn btn-dark text-uppercase m-auto px-4 py-3 my-2">
                    buy now <i className="fa fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              <div className="col- col-md-6 col-lg-4 g-4">
                <div className="card each_s_cat border-0 rounded-4 shadow p-3">
                  <Image
                   
                    src={bag3}
                    alt=""
                    className="img-fluid"
                  ></Image>
                  <h1 className="h4 fw-bold text-center text-capitalize card-title mt-4">
                    Reebok dart men's shoes
                  </h1>
                  <p className="card-text text-center my-2 px-2 text-muted fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                  </p>
                  <p className="h3 text-center fw-bold">$699</p>
                  <button className="btn btn-dark text-uppercase m-auto px-4 py-3 my-2">
                    buy now <i className="fa fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="footer_top bg-white py-4 my-5">
            <div class="container text-center py-5 rounded-4" style={{background:'#FCEAE8'}}>
                <h1 class="h1 text-uppercase pt-5 mt-4">Let's stay Int Touch</h1>
                <p class="text-muted text-center fs-5">Get updates on sales specials and more</p>
                <div class="email_area d-flex justify-content-center mb-5 pb-3">
                    <input type="email" name="" id="" class="email text-muted fs-4 p-3 pe-5 rounded-start border-0 me-0"
                        value="Enter your  email"/>
                    <button class="submit rounded-end p-3 border-0  pink fs-4 text-light ms-0 ">Submited</button>
                </div>

            </div>
        </section>
      </>
    );
};

export default Home;