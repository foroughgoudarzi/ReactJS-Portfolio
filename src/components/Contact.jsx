import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./ContactForm";

// This component renders the contact page 
function Contact() {
  return (
    <div>
      <ContactForm />

      <p className="text-left ms-3">
        <i className="fa fa-envelope" /> Email: <i>foroughg@yahoo.com</i>
      </p>
      <p className="text-left ms-3">
        <i className="fa fa-envelope" /> Phone: <i>+445555555555</i>
      </p>
      <p className="text-left ms-3">
        <i className="d-inline fa fa-github-square">
          <a className="me-3" href="https://github.com/foroughgoudarzi">
            {" "}
            GitHub
          </a>
        </i>
        <i className="d-inline fa fa-linkedin-square">
          <a
            className="me-3"
            href="https://www.linkedin.com/in/forough-goudarzi-29946280/"
          >
            {" "}
            LinkedIn
          </a>
        </i>
        <i className="d-inline fa fa-file-pdf-o">
          <a
            className="me-3"
            href=""
          >
            {" "}
            CV
          </a>
        </i>
      </p>
    </div>
  );
}

export default Contact;
