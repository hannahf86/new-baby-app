// ICONS
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";

const Nav = () => {
  const styles = {
    background: "flex justify-between items-center bg-teal-400 w-screen",
    title: "text-white pl-20 py-8 font-bold text-xl",
    container: "flex pr-20",
    link: "flex items-center pl-12 text-white",
    icon: "pr-2",
  };

  return (
    <div className={styles.background}>
      <div>
        <h1 className={styles.title}>LOGO</h1>
      </div>

      <div className={styles.container}>
        <a href="/" className={styles.link}>
          <GoHomeFill size={25} color="white" className={styles.icon} />
          Home
        </a>
        <a href="/#about" className={styles.link}>
          <FaUser size={25} color="white" className={styles.icon} />
          Profile
        </a>
      </div>
    </div>
  );
};

export default Nav;
