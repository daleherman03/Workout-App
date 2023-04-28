import { useContext, useState } from "react";
import { searchByName, searchByMuscle, searchByBodyPart } from "../utilities";
import { Link } from "react-router-dom";
import { UserContext, dataContext } from '../App';

export const Search = () => {
    const [searchName, setSearchName] = useState("");
    const [searchMuscle, setSearchMuscle] = useState("");
    const [searchBodyPart, setSearchBodyPart] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [user, setUser] = useContext(UserContext)
    const [data, setData] = useContext(dataContext);

    const handleSearchByName = async (e) => {
        e.preventDefault();
        const results = await searchByName(searchName);
        setSearchResults(results);
        setSearchName("");
    };

    const handleSearchByMuscle = async (e) => {
        e.preventDefault();
        const results = await searchByMuscle(searchMuscle);
        setSearchResults(results);
        setSearchMuscle("");
    };

    const handleSearchByBodyPart = async (e) => {
        e.preventDefault();
        const results = await searchByBodyPart(searchBodyPart);
        setSearchResults(results);
        setSearchBodyPart("");
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

            <h3>Search Exercise by Major Muscle Area</h3>
            <h5>List of Major Muscle Areas</h5>
            <ul>
                <li>back</li>
                <li>cardio</li>
                <li>chest</li>
                <li>lower arms</li>
                <li>lower legs</li>
                <li>neck</li>
                <li>shoulders</li>
                <li>upper arms</li>
                <li>upper legs</li>
                <li>waist</li>
            </ul>
            <form onSubmit={handleSearchByBodyPart}>
                <input
                    placeholder="Enter Body Part"
                    value={searchBodyPart}
                    onChange={(e) => setSearchBodyPart(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>

            {searchResults.length > 0 && (
                <>
                    <h3>Search Results</h3>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>
                                <Link 
                                onClick={() => setData(result)}
                                to={`/exercise/${result.name}`}
                                >
                                    {result.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};