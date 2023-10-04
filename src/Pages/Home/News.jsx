import { Link } from "react-router-dom";


const News = ({ news }) => {
    const { title, image_url, thumbnail_url, details, category_id, _id } = news;
    return (
        <div className="card  mb-4">
            <figure><img className="rounded-none" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-medium"> Read More</Link></p> :
                        <p>{details}</p>
                }

            </div>
        </div>
    );
};

export default News;