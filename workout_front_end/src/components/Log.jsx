import React, { useState, useContext } from 'react';
import { ExerciseLogContext, UserContext, dataContext } from '../App';
import { Link } from 'react-router-dom';
import { submitLog } from '../utilities';

export const Log = () => {
    const [user, setUser] = useContext(UserContext);
    const [exerciseLog, setExerciseLog] = useContext(ExerciseLogContext);
    const [data, setData] = useContext(dataContext);
    const [workoutData, setWorkoutData] = useState({
        workoutName: "",
        workoutDate: "",
        exercises: []
    });

    return (
        <div class="row">
            <h1>Workout Log</h1>
            <input  id="workout-name"
                    type="text" 
                    class="form-control" 
                    placeholder="Enter Workout Name"
                    onChange={(e) =>
                    setWorkoutData({
                        ...workoutData,
                        workoutName: e.target.value
                    })}
                required
            />
            <input  id="workout-date"
                    type="text" 
                    class="form-control" 
                    placeholder="Enter Workout Date"
                    onChange={(e) =>
                    setWorkoutData({
                        ...workoutData,
                        workoutDate: e.target.value
                    })}
                required
            />
            {Array.isArray(exerciseLog) && exerciseLog.map((result) => (
                <div>
                    <div class="col-auto">
                        <label for="sets" class="form-label">{result.name}</label>
                        <input id="sets" 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Sets"
                        onChange={(e) =>
                        setWorkoutData({
                            ...workoutData,
                            exercises : {
                                ...workoutData.exercises,
                                [result.name]: {
                                    ...workoutData.exercises[result.name],
                                    sets: e.target.value
                                }
                            }
                        })}
                        required
                        />
                    </div>
                    <div class="col-auto">
                    <input id="weight" 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Weight"
                        onChange={(e) =>
                            setWorkoutData({
                                ...workoutData,
                                exercises : {
                                    ...workoutData.exercises,
                                    [result.name]: {
                                        ...workoutData.exercises[result.name],
                                        weight: e.target.value
                                    }
                                }
                            })}
                        required
                        />
                    </div>
                    <div class="col-auto">
                    <input id="reps" 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Rep Range"
                        onChange={(e) =>
                            setWorkoutData({
                                ...workoutData,
                                exercises : {
                                    ...workoutData.exercises,
                                    [result.name]: {
                                        ...workoutData.exercises[result.name],
                                        rep_range: e.target.value
                                    }
                                }
                            })}
                        required
                        />
                    </div>
                    <Link 
                    onClick={setData(result)} 
                    to={`/exercise/${result.name}`}
                    >
                        View Exercise
                    </Link>
                </div>
            ))}
            <button type="submit" class="btn btn-dark" onClick={() => submitLog(workoutData)}>Submit Log</button>
        </div>     
    );
};