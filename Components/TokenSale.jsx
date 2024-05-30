import React, { useState } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from 'react-icons/fa';
import { SiRipple, SiLitecoin } from 'react-icons/si';

const TokenSale = ({ buyToken, tokenSale }) => {
  const [nToken, setNToken] = useState(1);

  const percentage = ((tokenSale?.tokenSold || 0) / (tokenSale?.tokenSaleBalance || 1)) * 100;
  const showPercentage = percentage.toFixed(2);

  return (
    <section
      id="token"
      className="section_token token_sale bg_light_dark"
      data-parallax="scroll"
      data-image-src="assets/images/token_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <div className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                <h4>Token Sale</h4>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                 ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi sit fuga reiciendis similique saepe harum veritatis alias, assumenda accusantium, a repudiandae? Quae ex, a numquam quibusdam consectetur nihil sint!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Starting time:
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                July 23, 2023 (Mon 10:00 am)
              </p>
            </div>
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Ending time:
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Dec 23, 2023 (Mon 10:00 am)
              </p>
            </div>
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Token exchange rate:
              </h6>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                1 ETH = 1 TBC, 1 ECC = 1 TBC
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div
                className="animation tk_count text-center token_countdown_bg"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <div className="field_form">
                  <div className="row">
                    <input
                      type="number"
                      required
                      placeholder="1"
                      id="first-name"
                      min={1}
                      className="form-control"
                      onChange={(e) => setNToken(e.target.value)}
                      name="token"
                    />
                  </div>
                </div>
              </div>
              <div className="tk_counter_inner">
                <div className="progress animation"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
                >
                  <div className="progress-bar progress-bar-striped gradient"
                  role="progressbar"
                  aria-valuenow={`${percentage}`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: `${percentage}%`,
                  }}
                  >
                    {showPercentage}%
                  </div>
                  <span className="progress_label bg-white inline_style_1">
                    <strong>{tokenSale?.tokenSold} TBS</strong>
                  </span>
                  <span className="progress_label bg-white inline_style_2">
                    <strong>{tokenSale?.tokenBalance} TBS</strong>
                  </span>
                  <span className="progress_min_val">
                    Sale Raised
                  </span>
                  <span className="progress_max_val">
                    Soft Caps
                  </span>
                </div>
                <button
                  className="btn btn-default btn-radius animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.1s"
                  onClick={() => buyToken(nToken)}
                >
                  Buy Token <BsArrowRight />
                </button>
                <ul className="icon_list list_none d-flex justify-content-center">
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                    <FaEthereum />
                  </li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                    <BsCurrencyBitcoin />
                  </li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                    <SiRipple />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
               Totale Token Sale
              </h6>
              <p>
                {tokenSale?.tokenSold} TBC {showPercentage.slice(0,4)}
              </p>
            </div>
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Token exchange rate:
              </h6>
            </div>
            <div className="pr_box">
              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Token exchange rate:
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
