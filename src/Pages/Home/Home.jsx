import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSide from "../../Shard/LeftSide/LeftSide";
import RightSide from "../../Shard/RightSide/RightSide";
import LatestNews from "./LatestNews";
import News from "./News";


const Home = () => {

    const newses = useLoaderData();
    
   
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-6">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            </div>
            
            <div className="grid grid-cols-4 gap-6">
                <div className="">
                    <LeftSide></LeftSide>
                </div>
                <div className="col-span-2 ">
                {
                    newses.map(news => <News key={news._id} news={news}></News> )
                }
                </div>
                <div className="">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;