import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1> This is the dashboard </h1>
      <form>
        <input className="bookTitle" type="text" name="title" placeholder="Title"/>
        <br />
        <input className="bookAuthor" type="text" name="author" placeholder="Author" />
        <br />
      </form>
    </div>
    );
};

export default Dashboard;
