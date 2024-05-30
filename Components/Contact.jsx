import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedIn,
  FaYoutube
} from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs';

const Contact = () => {
  return <section id="contact"
  className="contract-section small_pt"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 offset-lg-2">
          <div className="title-default_light title_border text-center">
            <h4
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
  Get in Touch with PRATEUSH
            </h4>
          </div>
        </div>
      </div>
      <div className="row align-items-center small_space">
        <div className="col-lg-4 col-md-6 offset-lg-2">
          <div className="bg_light_dark contact_box_s2 animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
          >
            <div className="contact_title">
              <h5
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
                Contact with PRATEUSH SHARMA
              </h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aspernatur quod beatae natus, ipsa odio voluptates delectus? Facere commodi, debitis odit qui non et reiciendis illum ducimus. Ea, recusandae mollitia?</p>
            </div>
            <ul className="list_none contact_info mt-margin">
              <li
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
           <div className="contact_detail">
            <span>Address</span>
            <p>INDIAN INSTITUTE OF TECHNOLOGY (ISM) DHANBAD</p>

           </div>
              </li>
              <li
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
           <div className="contact_detail">
            <span>Email-id</span>
            <p>prateushsharma@gmail.com</p>
           </div>
              </li>

            </ul>
            <div className="contct_follow pt-2 pt-md-4">
              <span
              className="text-uppercase animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
                Follow me
              </span>
              <up className="list_none social_icon">
                <li
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
                >
                  <a href=""
                  className="icon_color">
                    <FaFacebookF
                    className="icon_color"
/>
                  </a>
                </li>
    
              </up>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="pt-4 pt-md-0 animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
          >
            <form action=""
            method="post"
            className="field_form"
            name="enq"
            >
              <div className="form-group col-md-12 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
                <input type="text"
                required
                id="name"
                placeholder="Enter name"
                className="form-control"
                name="name"
                />
              </div>
              <div className="form-group col-md-12 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
                <input type="text"
                required
                id="email"
                placeholder="Enter email"
                className="form-control"
                name="name"
                />
              </div>
              <div className="form-group col-md-12 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
                <input type="text"
                required
                id="subject"
                placeholder="Enter subject"
                className="form-control"
                name="name"
                />
              </div>
              <div className="form-group col-md-12 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
                <textarea type="text"
                required
                id="description"
                placeholder="Message name"
                className="form-control"
                name="description"
                role="2"
                />
              </div>
              <div className="col-md-12 text-center
              animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              >
                <button type="submit" title="Submit ypur message"
                className="btn btn-default
                btn-radius btn-block"
                id="submit"
                value={"Submit"}
                >
                  Submit <BsArrowRight />
                </button>
              </div>
              <div className="col-md-12">
                <div id=""></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default Contact;

