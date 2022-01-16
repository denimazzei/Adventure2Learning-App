import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import PageHeader from "../components/PageHeader/PageHeader.js";
import Footer from "../components/Footer/Footer";

// sections for this page/view
//import Navbars from "views/IndexSections/Navbars.js";
//import Pagination from "views/IndexSections/Pagination.js";
//import Signup from "views/IndexSections/Signup.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main"></div>
        <Footer />
      </div>
    </>
  );
}
