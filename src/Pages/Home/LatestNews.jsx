import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest</button>
            <Marquee>
            Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as..., I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default LatestNews;