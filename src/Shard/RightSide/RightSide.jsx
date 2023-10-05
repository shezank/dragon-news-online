import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import QZonePic1 from "../../assets/qZone1.png"
import QZonePic2 from "../../assets/qZone2.png"
import QZonePic3 from "../../assets/qZone3.png"
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const RightSide = () => {
    const { googleLogin, user, githubLogin, twiteerLogin } = useContext(AuthContext);
    const handeleLogin = (auth) => {
        auth()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className=''>
            {user ? "" : <>
                <div className=" mb-7">
                    <h1 className="text-2xl font-bold mb-6"> Login With</h1>
                    <button onClick={() => handeleLogin(googleLogin)} className="btn btn-outline btn-info rounded-md w-full"><FaGoogle></FaGoogle> Google</button>
                    <button onClick={() => handeleLogin(githubLogin)} className="btn btn-outline btn-info rounded-md w-full my-2"><FaGithub></FaGithub> Github</button>
                    <button onClick={() => handeleLogin(twiteerLogin)} className="btn btn-outline btn-info rounded-md w-full"><FaTwitter></FaTwitter> Twiter</button>
                </div>
            </>}
            <div className=''>
                <h1 className='text-2xl font-semibold mb-7'>Find Us On</h1>
                <a className='flex items-center gap-3 font-medium border rounded-t-lg p-4' href=""><FaFacebook></FaFacebook> Facebook</a>
                <a className='flex items-center gap-3 font-medium border-x-2 p-4' href=""><FaTwitter></FaTwitter> Twiter</a>
                <a className='flex items-center gap-3 font-medium border rounded-b-lg p-4' href=""><FaInstagram></FaInstagram> Instagram</a>
            </div>
            <div>
                <h1 className='text-3xl font-semibold my-6'>Q-Zone</h1>
                <img src={QZonePic1} alt="" />
                <img src={QZonePic2} alt="" />
                <img src={QZonePic3} alt="" />
            </div>
        </div>
    );
};

export default RightSide;