import React, { useState, useContext, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getHistory } from '../utilities'
import { Link } from "react-router-dom"
import { dataContext } from '../App';

export const History = () => {
    const [history, setHistory] = useState(null);
    const [data, setData] = useContext(dataContext);

    const userHistory = async () => {
        setHistory(await getHistory());
    };

    useEffect(() => {
        userHistory();
    }, []);

    return (
        <Table class='table' bordered style={{ color: 'white' }}>
          <thead>
            <tr>
              <th>Workout Name</th>
              <th>Workout Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {history && history.map((result) => (
                <tr>
                    <td>{result.fields.name}</td>
                    <td>{result.fields.date}</td>
                    <td><Link to={"/LogRecord/"} onClick={ () => setData(result)}><Button>View Workout</Button></Link></td>
                </tr>
            ))}
          </tbody>
        </Table>
      );
};