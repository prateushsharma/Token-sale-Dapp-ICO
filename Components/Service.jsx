import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacinia nibh, at dignissim libero so"
    },
    {
      title: "Exchange Service",
      description: "jhgcdsuigskj dgsfjhcvxhjdfg jhgwfihvbkjrfhg"
    },
    {
      title: "Investment Project",
      description: "Hello people how r u my name is Prateush Sharma"
    },
    {
      title: "Comfort services",
      description: "sdfgh dfgh dfgh dfgh"
    }
    
  ];

  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet our solution for you
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illo sunt, porro quos autem quibusdam maiores nihil ducimus atque tempora cumque placeat rerum assumenda dolor dolorum facilis ipsa, repudiandae id.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {
            services.map((service, i) => (
              <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
                <div className="box_wrap text-center animation"
                  data-animation="fadeInUp"
                  data-animation-delay={`0.${i + 1}s`}
                >
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Service;
