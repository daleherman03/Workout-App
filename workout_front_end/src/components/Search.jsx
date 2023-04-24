import { useContext, useState } from "react";
import { searchByName, searchByMuscle } from "../utilities";

export const Search = () => {
    const [searchName, setSearchName] = useState("");
    const [searchMuscle, setSearchMuscle] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchByName = async (e) => {
        e.preventDefault();
        const results = await searchByName(searchName);
        setSearchResults(results);
        setSearchName("");
        setSearchMuscle("");
    };

    const handleSearchByMuscle = async (e) => {
        e.preventDefault();
        const results = await searchByMuscle(searchMuscle);
        setSearchResults(results);
        console.log(results);
        setSearchName("");
        setSearchMuscle("");
      };

    return (
        <>
            <h3>Search Exercise by Exercise Name</h3>
            <form onSubmit={handleSearchByName}>
                <input
                    placeholder="Enter Exercise Name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>

            <h3>Search Exercise by Target Muscle</h3>
            <h5>List of Target Muscles</h5>
            <ul>
                <li>abductors</li>
                <li>abs</li>
                <li>adductors</li>
                <li>biceps</li>
                <li>calves</li>
                <li>cardiovascular system</li>
                <li>delts</li>
                <li>forearms</li>
                <li>glutes</li>
                <li>hamstrings</li>
                <li>lats</li>
                <li>levator scapulae</li>
                <li>pectorals</li>
                <li>quads</li>
                <li>serratus anterior</li>
                <li>spine</li>
                <li>traps</li>
                <li>triceps</li>
                <li>upper back</li>
            </ul>
            <form onSubmit={handleSearchByMuscle}>
                <input
                    placeholder="Enter Muscle"
                    value={searchMuscle}
                    onChange={(e) => setSearchMuscle(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>

            {searchResults.length > 0 && (
                <>
                    <h3>Search Results</h3>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>{result.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};