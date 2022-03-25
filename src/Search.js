import {useState} from 'react';
import {data} from "autoprefixer";
import{supabase} from "./supabase";

const Search = () => {
    const [query, setQuery] = useState("chefs");
    const [todo, setTodo] = useState("no chefs found")

    const handleSearch = () => {
        fetch(`https://nxxhwovqhoieqaecujqv.supabase.co/${query}`)
        .then((res) => res.json())
        .then((data) => {
            setTodo(`${data.expertise} | ${data.location} | ${data.rate}`)
    });
};
    return (
        <div>
            <p>Search chefs</p>

            <input type="text" value={query}
            placeholder="enter search..."
            onChange={ (evt) => setQuery(evt.target.value)}
            />
            <button
                onClick={handleSearch}
                >Go</button>
                <br/>
            <h4>{todo} </h4>
        </div>
    );
};
export default Search;