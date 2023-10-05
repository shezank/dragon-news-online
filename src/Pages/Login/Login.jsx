import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Shard/AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";


const Login = () => {

    const { singIn, googleLogin, githubLogin, twiteerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        singIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handeleSocialLogin = auth => {
        auth()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="max-w-6xl mx-auto">

            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login your account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Do not Have An Account ? <Link className="text-red-600" to={"/register"}>Register</Link></p>
                        </form>
                        <div className="mb-7 px-8">
                            <hr />
                            <button onClick={() => handeleSocialLogin(googleLogin)} className="btn btn-outline btn-info rounded-md w-full"><FaGoogle></FaGoogle> Google</button>
                            <button onClick={() => handeleSocialLogin(githubLogin)} className="btn btn-outline btn-info rounded-md w-full my-2"><FaGithub></FaGithub> Github</button>
                            <button onClick={() => handeleSocialLogin(twiteerLogin)} className="btn btn-outline btn-info rounded-md w-full"><FaTwitter></FaTwitter> Twiter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;