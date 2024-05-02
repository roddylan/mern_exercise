import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';



export const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/exercises')
    .then((response) => {
      setExercises(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }, []);
  
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Exercise List</h1>
        <Link to="/exercises/create">
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thread>
            <th className='border border-slate-600 rounded-md'>Name</th>
            <th className='border border-slate-600 rounded-md'>Weight</th>
            <th className='border border-slate-600 rounded-md'>Rep Count</th>
            <th className='border border-slate-600 rounded-md' max-md:hidden>Notes</th>
            <th className='border border-slate-600 rounded-md'>P[eratopms</th>
          </thread>
          <tbody>
            {exercises.map((exercise, idx) => {
              <tr key={exercise._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {idx + 1}
                </td>
              </tr>
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
