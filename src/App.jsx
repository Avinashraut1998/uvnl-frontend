import UserLogin from "./components/UserLogin";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline, MdPassword } from "react-icons/md";

function App() {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                {/* <img className="hidden dark:block"  src={"/src/logo/logohalfcolor.png"} alt="Logo" />
                <img className="dark:hidden" src={"/src/logo/logohalfwhite.png"} alt="Logo" /> */}
              </Link>

              <img
                className="hidden dark:block  "
                src={"/src/logo/logofullwhite.png"}
                alt="Logo"
              />
              <img
                className="dark:hidden"
                src={"/src/logo/logofullcolor.png"}
                alt="Logo"
              />

              {/* <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p> */}

              <span className="mt-15 inline-block">
                <img src={"/src/logo/UVNLBranding.png"} alt="uvnl branding" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <Link className="mb-5.5  flex justify-center " to="/">
                <img
                  className="hidden dark:block w-14 "
                  src={"/src/logo/logohalfwhite.png"}
                  alt="Logo"
                />
                <img
                  className="dark:hidden lg:hidden  block  w-14 "
                  src={"/src/logo/logohalfcolor.png"}
                  alt="Logo"
                />
              </Link>
              <UserLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
