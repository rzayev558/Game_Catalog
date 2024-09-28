import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className=" flex justify-center items-center cursor-pointer p-4 transition-colors duration-300 hover:bg-orange-500 ">
      <img src={logo} alt="logo" className="w-24 h-auto" />
    </nav>
  );
};

export default Navbar;
