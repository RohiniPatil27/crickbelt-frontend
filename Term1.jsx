import React from "react";


import Header from "../Component/Header";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";

import "../Css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const TermsAndConditions = () => {
  return (
    <div>
      <Header />
      <Nav />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>

          <div className="col-md-10 p-4">
            <div className="container my-4 p-4 border rounded bg-white shadow-sm" style={{ maxWidth: 1100 }}>
<h4 className="fw-bold mb-3" style={{ color: "#ffd900" }}>
  Terms & Conditions
</h4>


              <h5 className="fw-semibold mb-2">Description:</h5>
              <p className="text-muted">
                Initial Terms and Conditions replacing general rules.
              </p>

              <h5 className="fw-semibold mt-4 mb-2">Introduction</h5>
              <p>
                These terms and conditions and the documents referred and linked to below (the “Terms”) set out the
                basis upon which the website operated under the Website and its related or connected services
                (collectively, the “Service”) will be provided to you.
              </p>
              <p>
                Please read these terms very carefully as they form a binding legal agreement between you - our
                customer (the “Customer”) - and us. By opening an account (the “Account”) and using the Service you
                agree to be bound by these terms, together with any amendment which may be published from time to time.
              </p>

              <h5 className="fw-semibold mt-4 mb-2">General Terms</h5>
              <p>
                We reserve the right to amend the terms (including to any documents referred and linked to below) at
                any time. When such amendment is not substantial, we may not provide you with prior notice. You will be
                notified in advance for material changes to the terms and may require you to re-confirm acceptance to
                the updated terms before the changes come into effect. If you object to any such changes, you must
                immediately stop using the service and the termination provisions below will apply. Continued use of
                the service indicates your agreement to be bound by such changes. Any bets not settled prior to the
                changed terms taking effect will be subject to the pre-existing terms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
