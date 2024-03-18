// ICONS
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const styles = {
    background: "grid grid-col-3 bg-teal-400 w-screen text-white",
  };

  return (
    <>
      <div className={styles.background}>
        <div className="col-start-1">
          <h3>Lets keep in touch!</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button>Send</button>
          </form>
        </div>

        <div className="col-start-2">
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaYoutube />
        </div>

        <div className="col-start-3">
          <h3>Contact</h3>
          <p>765 Corporate Road</p>
          <p>Corporate Hill</p>
          <p>Corp</p>
          <p>904759 728374</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
