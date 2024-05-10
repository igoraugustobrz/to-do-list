import logotipo from '../../../assets/logotipo.png';

const Navbar = () => {
  return (
    <>
      <nav className="max-w-[360px] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl  mx-auto">
        <div className="flex justify-between items-center p-5">
          <img
            src={logotipo}
            alt="Logotipo"
            className="w-20 sm:w-24"
          />
          <div className="flex gap-3 sm:gap-5">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
