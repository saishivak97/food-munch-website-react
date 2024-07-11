import React, { useState } from "react";
import "./ThankYou.css";

const ThankingCustomers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="thanking-customers-section">
      <div className="custom-container">
        <div className="thanking-customers-custom-row">
          <div className="thanking-customers-inner-container">
            <h1 className="thanking-customers-section-heading">
              Thank you for being a valuable customer to us.
            </h1>
            <p className="thanking-customers-section-description">
              We have a surprise gift for you
            </p>
            <div className="custom-d-md-none">
              <img
                src="./images/thanking-customers-section-img.png"
                className="thanking-customers-section-img"
                alt="gift"
              />
            </div>
            <div>
              <button
                type="button"
                className="custom-button"
                onClick={handleOpenModal}
              >
                Redeem Gift
              </button>
              {isModalOpen && (
                <div
                  className="custom-modal custom-fade custom-show"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: 'block' }}
                >
                  <div className="custom-modal-dialog mt-5">
                    <div className="custom-modal-content">
                      <div className="custom-modal-header">
                        <h5
                          className="modal-title thanking-customers-section-modal-title"
                          id="exampleModalLabel"
                        >
                          Gift Voucher
                        </h5>
                        <button
                          type="button"
                          className="custom-close"
                          onClick={handleCloseModal}
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="custom-modal-body">
                        <img
                          src="./images/gift-voucher-img.png" alt ="gift-voucher"
                          className="custom-w-100"
                        />
                      </div>
                      <div className="custom-modal-footer">
                        <button
                          type="button"
                          className="custom-btn custom-btn-secondary"
                          onClick={handleCloseModal}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="custom-col-12 custom-col-md-5 custom-d-none custom-d-md-block">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" alt ="gift"
              className="thanking-customers-section-img" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankingCustomers;
