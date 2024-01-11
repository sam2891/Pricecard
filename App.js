import React from "react";
import "./App.css";
//Importing bootstrap and other modules
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <section>
          <div class="container py-3">
            <header class="text-center mb-5 text-white">
              <div class="row">
                <div class="col-lg-5 mx-auto">
                  <h1>Reactjs pricing table</h1>
                  <p></p>
                </div>
              </div>
            </header>

            <div class="row text-center align-items-end">
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Free</h1>
                  <h2 class="h1 font-weight-bold">
                    $0
                    <span class="h1 font-weight-bold">/ month</span>
                  </h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Single User
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>50 Gb Storage
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Umlimited
                      Public Projects
                    </li>
                    <li class="mb-3">
                      <i class="fa check mr-2 text primary"></i>Community access
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Unlimited Private Projects</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Dedicated Phone Support</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Free Subdomain</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Monthly Status Report</del>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    disabled
                  >
                    Button
                  </button>
                </div>
              </div>

              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Plus</h1>
                  <h2 class="h1 font-weight-bold">
                    $9
                    <span class="h1 font-weight-bold">/ month</span>
                  </h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 5 User
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 50 GB
                      Storage
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Unlimited
                      Public Projects
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Community
                      Acess
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited
                      Private Projects
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Dedicated
                      Phone Support
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Free
                      SubDomain
                    </li>

                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Monthly Status Report</del>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    disabled
                  >
                    Button
                  </button>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                  <h2 class="h1 font-weight-bold">
                    $49
                    <span class="h1 font-weight-bold">/ month</span>
                  </h2>

                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited
                      User
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 50Gb Storage
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Unlimited
                      Public Projects
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community
                      Access
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Unlimited
                      Private Projects
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Dedicated
                      Phone Support
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Free
                      SubDomain
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> MOnthly
                      Status Report
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-outline-primary .active "
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
