import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSide from "../../Shard/LeftSide/LeftSide";
import RightSide from "../../Shard/RightSide/RightSide";
import LatestNews from "./LatestNews";
import News from "./News";
import { useState } from "react";


const Home = () => {
    const [catagoryNews , setCatagoryNews] = useState([]);
    
    const newses = useLoaderData();

    const handleCatagoryId = id =>{
        console.log(id);
        const catagorys = newses.filter(news => news.category_id == id);
        console.log(catagorys);
        setCatagoryNews(catagorys);
    }
    
       
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-6">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            </div>
            
            <div className="grid grid-cols-4 gap-6">
                <div className="">
                    <LeftSide handleCatagoryId={handleCatagoryId}></LeftSide>
                </div>
                <div className="col-span-2 ">
                { catagoryNews.length === 0?
                    newses.map(news => <News key={news._id} news={news}></News> ):
                    catagoryNews.map(news => <News key={news._id} news={news}></News> )
                    
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