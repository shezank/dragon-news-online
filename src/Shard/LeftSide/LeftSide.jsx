import { useEffect, useState } from "react";



const LeftSide = ({handleCatagoryId}) => {
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
                catagorys.map( catagory => <li className="list-none font-semibold pl-10" key={catagory.id}> <button onClick={()=>handleCatagoryId(catagory.id)}>{catagory.name}</button></li>)
            }

        </div>
    );
};

export default LeftSide;