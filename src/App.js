import './Chefs.css';
import Chefs from "./Chefs";

function App() {
        const data =[
            {
                name: "David Beckham",
                image: "https://i.imgur.com/kDeoD1e.png",
                expertise: "English and Irish dinner, breakfast, tea",
                experience: "Worked as a family chef about 20 years",
                location: "Miami, Florida.",
                rate: "35 per hour"
            },
            {
                name: "Angelina Jolie",
                image: "https://i.imgur.com/1ZJOyiC.png",
                expertise: "Asian, American and Japanese food.",
                experience: "Worked as a diner chef for Paramount Pictures about 10 years",
                location: "Los Angeles, California",
                rate: "55 per hour"
            },
            {
                name: "Marcus Means",
                image: "https://i.imgur.com/YPdcsZ5.png",
                expertise: "American, Italian and Nigerian food",
                experience: "Working as a Culinary Consultant since 2000",
                location: "Atlanta, Georgia",
                rate: "80 per hour"
            },
            ]

    return (
        <div className="App">
            {data.map(

                choice => <Chefs
                name={choice.name}
                image={choice.image}
                expertise={choice.expertise}
                experience={choice.experience}
                location={choice.location}
                rate={choice.rate}/>
            )}

        </div>
    );
}

export default App;