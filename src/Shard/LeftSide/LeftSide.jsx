import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSide = () => {
    const [catagorys, setCatagorys] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatagorys(data))
    }, [])

    return (
        <div className="space-y-7">
            <h1 className="font-semibold">All Caterogy</h1>
            {
                catagorys.map( catagory => <li className="list-none font-semibold pl-10" key={catagory.id}><NavLink to={`/catagory/${catagory.id}`} >{catagory.name}</NavLink></li>)
            }

        </div>
    );
};

export default LeftSide;