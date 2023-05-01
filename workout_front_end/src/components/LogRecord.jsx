import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../App';
import { getLog } from '../utilities';
import Table from 'react-bootstrap/Table';

export const LogRecord = () => {
    const [data, setData] = useContext(dataContext);
    const [log, setLog] = useState(null);
   
    const logData = async () => {
        setLog(await getLog(data.pk));
    };

    useEffect(() => {
        logData();
    }, []);

    console.log(log)

    return (
        <>
            <Table bordered style={{ color: 'white' }}>
            <thead>
                <tr>
                <th>Exercise Name</th>
                <th>Sets</th>
                <th>Weight</th>
                <th>Rep Range</th>
                </tr>
            </thead>
            <tbody>
                {log && log.map((result) => (
                    <tr>
                        <td>{result.fields.exercise_name}</td>
                        <td>{result.fields.sets}</td>
                        <td>{result.fields.weight}</td>
                        <td>{result.fields.rep_range}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </>
    );
};