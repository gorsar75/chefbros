import './Chefs.css';

function Chefs({name, image, expertise, experience, location, rate}){
    return  (
            <div>
                <h2>ChefBros</h2>

            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <img src={image} alt=""/>
            <div>
            <p>{name}</p>
            <p>{expertise}</p>
            <p>{experience}</p>
            <p>{location}</p>
            <p>{rate}</p>
            </div>
            </div>
            </div>
    )

}

export default Chefs;