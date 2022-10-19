import Navbar from '../Navbar'
import React, { Component } from 'react';

import '../FrontPages/Home.css'
import Logo from "../Images/logo.png";


function Home() {
  return (
    <div>
      <Navbar />

        <section className="rooms sec-width" id="rooms">
          <div className="title">
            <h2>rooms</h2>
          </div>
          <div className="rooms-container">
            {/* <!-- single room --> */}
            <article className="room">
              <div className="room-image">
               
              </div>
              <div className="room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                <p className="rate">
                  <span>Rs.5000.00 /</span> Per Night
                </p>
              <a href='/Button'> <button type="button" className="btn">Book now</button></a>
              </div>
            </article>
            {/* <!-- end of single room -->
        <!-- single room --> */}
            <article className="room">
              <div className="room-image">
                
              </div>
              <div className="room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                <p className="rate">
                  <span>Rs.5000.00/</span> Per Night
                </p>
              <a href='/Button'> <button type="button" className="btn">Book now</button></a>
              </div>
            </article>
            {/* <!-- end of single room -->
        <!-- single room --> */}
            <article className="room">
              <div className="room-image">
               
              </div>
              <div className="room-text">
                <h3>Luxury Rooms</h3>
                <ul>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                <p className="rate">
                  <span>Rs.5000.00 /</span> Per Night
                </p>
              <a href='/Button'> <button type="button" className="btn">Book now</button></a>
              </div>
            </article>
            {/* <!-- end of single room --> */}
          </div>
        </section>


        <section className="customers" id="customers">
          <div className="sec-width">
            <div className="title">
              <h2>customers</h2>
            </div>
            <div className="customers-container">
              {/* <!-- single customer --> */}
              <div className="customer">
                <div className="rating">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="far fa-star"></i></span>
                </div>
                <h3>We Loved it</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                <img src={Logo} alt="customer image" />
                <span>Customer Name, Country</span>
              </div>
              {/* <!-- end of single customer -->
          <!-- single customer --> */}
              <div className="customer">
                <div className="rating">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="far fa-star"></i></span>
                </div>
                <h3>Comfortable Living</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                <img src={Logo} alt="customer image" />
                <span>Customer Name, Country</span>
              </div>
              {/* <!-- end of single customer -->
          <!-- single customer --> */}
              <div className="customer">
                <div className="rating">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="far fa-star"></i></span>
                </div>
                <h3>Nice Place</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                <img src={Logo} alt="customer image" />
                <span>Customer Name, Country</span>
              </div>
              {/* <!-- end of single customer --> */}
            </div>
          </div>
        </section>
        {/* <!-- end of body content -->

    <!-- footer --> */}
        <div className="footer">
          <div className="footer-container">
            <div>
              <h2>About Us </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente mollitia doloribus provident? Eos quisquam aliquid vel dolorum, impedit culpa.</p>
              {/* <ul className="social-icons">
            <li className="flex">
              <i className="fa fa-twitter fa-2x"></i>
            </li>
            <li className="flex">
              <i className="fa fa-facebook fa-2x"></i>
            </li>
            <li className="flex">
              <i className="fa fa-instagram fa-2x"></i>
            </li>
          </ul> */}
            </div>

            <div>
              <h2>Useful Links</h2>
              <a href="#">facebook</a>
              <a href="#">Rooms</a>
              <a href="#">Subscription</a>
              <a href="#">Gift Card</a>
            </div>

            <div>
              <h2>Privacy</h2>
              <a href="#">Career</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Services</a>
            </div>

            <div>
              <h2>Have A Question</h2>
              <div className="contact-item">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>
                  Rajampet , Annamayya dist , Andhra Pradesh 
                </span>
              </div>
              <div className="contact-item">
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span>
                  +xxxxxxxxxxxxxxxxx
                </span>
              </div>
              <div className="contact-item">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <span>
                  maniprasad123@gmail.com
                </span>
             
              </div>

            </div>
          </div>
        </div>
      <div className="footer-bottom">
        <p>copyright &copy; <a href="#"> Mani Prasad</a>  </p>
       
      </div>

      </div>
      
   
  )
}

export default Home;