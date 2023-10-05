import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import RightSide from "../../Shard/RightSide/RightSide";


const NewsDetails = () => {
    
    const {id} = useParams();
    const newses = useLoaderData();
    const newsDetail = newses.find(news => news._id === id);
    console.log(newsDetail);
    

    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid gap-6 md:grid-cols-4">
                <div className="col-span-3">
                    <div className="space-y-3">
                        <img className="w-full" src={newsDetail.image_url} alt="" />
                        <h1 className="text-2xl font-bold">{newsDetail.title}</h1>
                        <p>{newsDetail.details}</p>
                    </div>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;