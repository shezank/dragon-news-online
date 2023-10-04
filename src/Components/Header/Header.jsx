import moment from "moment/moment";
import logo from "../../../src/assets/logo.png"

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto mt-10" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;