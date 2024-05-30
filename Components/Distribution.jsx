import React from "react";

const Distribution = () => {
  return <section className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 res_md_mb 40">
        <div className="title_default_light
        title_border text-center">
          <h4 className="animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
          >
            Token Sale proceeds
          </h4>
        </div>
        <div className="lg_pt_20 res_sm_pt_0 text-center animation"
        data-animation="fadeInRight"
        data-animation-delay="0.2s"
        >
          <img 
          src="assets/images/sale-proceeds3.png"
         alt="" 
         className="sale-proceeds3"
         />
        </div>
        <div className="divider small_divider">
        </div>
        <ul className="list_none list_chart text-center">
          <li>
            <span className="chart_bx color1"></span>
            <span>Marketting</span>
          </li>
          <li>
            <span className="chart_bx color2"></span>
            <span>Public sale</span>
          </li>
          <li>
            <span className="chart_bx color3"></span>
            <span>Pre Sale</span>
          </li>
          <li>
            <span className="chart_bx color4"></span>
            <span>Project</span>
          </li>
        </ul>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="title_default_light title_border text-center">
          <h4 className="animation"
          data-animation="fadeInRight"
          data-animation-delay="0.2s"
          >
            Token Distribution  
          </h4>
        </div>
        <div
        className="lg_pt_20 res_sm_pt_0 text-center animation"
        data-animation="fadeInRight"
        data-animation-delay="0.2s"
        >
          <img 
          src="assets/images/distribution3.png"
           alt=""/>
        </div>
        <div className="divider small_divider">
        </div>
        
      </div>
    </div>
  </section>
};

export default Distribution;
