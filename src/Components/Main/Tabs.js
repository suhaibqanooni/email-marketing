import React from "react";
import { Link } from "react-router-dom";
import CreateEmail from "../CreateEmail";
function Tabs(props) {
  const data = [
    {
      image: "assets/img/product-1.jpg",
      product: "Ut inventore ipsa voluptas nulla",
      price: "$64",
      sold: "124",
      revenue: "$5,828",
    },
    {
      image: "assets/img/product-2.jpg",
      product: "Exercitationem similique doloremque",
      price: "$64",
      sold: "124",
      revenue: "$5,828",
    },
    {
      image: "assets/img/product-3.jpg",
      product: "Ut inventore ipsa voluptas nulla",
      price: "$64",
      sold: "124",
      revenue: "$5,828",
    },
    {
      image: "assets/img/product-4.jpg",
      product: "Ut inventore ipsa voluptas nulla",
      price: "$64",
      sold: "124",
      revenue: "$5,828",
    },
  ];
  const recent = [
    {
      id: "#2457",
      customer: "Brandon Jacob",
      product: "At praesentium minu",
      price: 34,
      status: "	Approved",
      statusClass: "badge bg-success",
    },
    {
      id: "#2147",
      customer: "	Bridie Kessler",
      product: "Blanditiis dolor omnis similique",
      price: 56,
      status: "Pending",
      statusClass: "badge bg-warning",
    },
    {
      id: "#2457",
      customer: "Brandon Jacob",
      product: "At praesentium minu",
      price: 33,
      status: "	Approved",
      statusClass: "badge bg-success",
    },
    {
      id: "#2457",
      customer: "Brandon Jacob",
      product: "At praesentium minu",
      price: 23,
      status: "Rejected",
      statusClass: "badge bg-danger",
    },
    {
      id: "#2457",
      customer: "Brandon Jacob",
      product: "At praesentium minu",
      price: 19,
      status: "	Approved",
      statusClass: "badge bg-success",
    },
  ];
  return (
    <div class="card-body">
      <ul
        class="nav nav-tabs nav-tabs-bordered"
        id="borderedTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#bordered-home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Recent
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#bordered-profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Customers
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#bordered-contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Sales
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="email-tab"
            data-bs-toggle="tab"
            data-bs-target="#bordered-email"
            type="button"
            role="tab"
            aria-controls="email"
            aria-selected="false"
          >
            Email Templates
          </button>
        </li>
      </ul>
      <div class="tab-content pt-2" id="borderedTabContent">
        <div
          class="tab-pane fade show active"
          id="bordered-home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="card-body">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Target</th>
                  <th scope="col">Content</th>
                  <th scope="col">Emails</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((item) => {
                  return (
                    <tr>
                      <th scope="row">
                        <a href="/">{item.id}</a>
                      </th>
                      <td>{item.customer}</td>
                      <td>
                        <a href="/" className="text-primary">
                          {item.product}
                        </a>
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <span className={item.statusClass}>{item.status}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Target</th>
                  <th scope="col">Content</th>
                  <th scope="col">Emails</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((item) => {
                  return (
                    <tr>
                      <th scope="row">
                        <a href="/">{item.id}</a>
                      </th>
                      <td>{item.customer}</td>
                      <td>
                        <a href="/" className="text-primary">
                          {item.product}
                        </a>
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <span className={item.statusClass}>{item.status}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="bordered-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="card-body pb-0">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Preview</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr>
                      <th scope="row">
                        <a href="/">
                          <img
                            src={item.image}
                            alt=""
                            style={{ width: 50, height: 50 }}
                          />
                        </a>
                      </th>
                      <td>
                        <a href="/" className="text-primary fw-bold">
                          {item.product}
                        </a>
                      </td>
                      <td>{item.price}</td>
                      <td className="fw-bold">{item.sold}</td>
                      <td>{item.revenue}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="bordered-contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <section className="section dashboard">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <a className="icon" href="/" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a className="dropdown-item" href="/">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Sales <span>| Today</span>
                        </h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart"></i>
                          </div>
                          <div className="ps-3">
                            <h6>145</h6>
                            <span className="text-success small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
                      <div className="filter">
                        <a className="icon" href="/" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a className="dropdown-item" href="/">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Revenue <span>| This Month</span>
                        </h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                          </div>
                          <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">
                              8%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                              increase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="filter">
                        <a className="icon" href="/" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a className="dropdown-item" href="/">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Customers <span>| This Year</span>
                        </h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people"></i>
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">
                              12%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                              decrease
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="/" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a className="dropdown-item" href="/">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Recent Activity <span>| Today</span>
                    </h5>

                    <div className="activity">
                      <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                        <div className="activity-content">
                          Quia quae rerum{" "}
                          <a href="/" className="fw-bold text-dark">
                            explicabo officiis
                          </a>{" "}
                          beatae
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">56 min</div>
                        <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                        <div className="activity-content">
                          Voluptatem blanditiis blanditiis eveniet
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">2 hrs</div>
                        <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                        <div className="activity-content">
                          Voluptates corrupti molestias voluptatem
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">1 day</div>
                        <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                        <div className="activity-content">
                          Tempore autem saepe{" "}
                          <a href="/" className="fw-bold text-dark">
                            occaecati voluptatem
                          </a>{" "}
                          tempore
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">2 days</div>
                        <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                        <div className="activity-content">
                          Est sit eum reiciendis exercitationem
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">4 weeks</div>
                        <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                        <div className="activity-content">
                          Dicta dolorem harum nulla eius. Ut quidem quidem sit
                          quas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          class="tab-pane fade show active"
          id="bordered-email"
          role="tabpanel"
          aria-labelledby="email-tab"
        >
          {/* <CreateEmail /> */}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
