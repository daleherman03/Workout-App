import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ExerciseLogContext, UserContext, dataContext } from '../App';

export const Exercise = () => {
    const [user, setUser] = useContext(UserContext)
    const [exerciseLog, setExerciseLog] = useContext(ExerciseLogContext);
    const [data, setData] = useContext(dataContext);
    const existingExercise = exerciseLog.find(exercise => exercise.name === data.name);

    const handleAddToLog = (exerciseData) => {
        if (!existingExercise) {
            setExerciseLog((prevExerciseLog) => [...prevExerciseLog, exerciseData])
        }
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div class="card" style={{width: '35rem'}}>
                <img src={data.gifUrl} class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">{data.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Major Muscle Area: {data.bodyPart}</li>
                    <li class="list-group-item">Targeted Muscle: {data.target}</li>
                    <li class="list-group-item">Equipment Needed: {data.equipment}</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-dark" onClick={() => handleAddToLog(data)}>Add to Log</button>
                </div>
            </div>
        </div>
    );
};