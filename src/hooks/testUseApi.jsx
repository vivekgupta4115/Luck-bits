import React, { useEffect, useState } from 'react';
import useApi from './hooks/useApi';

const UserList = () => {
  const { get, post, put, del, loading, error } = useApi('https://api.example.com');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get('/users')
      .then(data => setUsers(data))
      .catch(console.error);
  }, [get]);

  const createUser = () => {
    post('/users', { name: 'Kuldeep', email: 'kuldeep@example.com' })
      .then(newUser => setUsers(prev => [...prev, newUser]))
      .catch(console.error);
  };

  const updateUser = (id) => {
    put(`/users/${id}`, { name: 'Updated Name' })
      .then(updated => console.log(updated))
      .catch(console.error);
  };

  const deleteUser = (id) => {
    del(`/users/${id}`)
      .then(() => setUsers(prev => prev.filter(u => u.id !== id)))
      .catch(console.error);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{JSON.stringify(error)}</p>;

  return (
    <div>
      <h1>User List</h1>
      <button onClick={createUser}>Add User</button>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} <button onClick={() => updateUser(u.id)}>Edit</button> <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
