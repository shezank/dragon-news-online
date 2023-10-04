import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import RightSide from "../../Shard/RightSide/RightSide";


const NewsDetails = () => {
    const {id} = useParams();
    console.log('myparamid', id);

    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1>New Details Comming</h1>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;