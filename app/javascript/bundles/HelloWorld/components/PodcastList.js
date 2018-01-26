import React from 'react';
import { Link } from 'react-router-dom';

const PodcastList = () => {
  return (
    <div className="podcasts">
      <h1> Podcast Corner </h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Episode</th>
                    <th>Genre/Topic</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The Tim Ferriss Show</td>
                    <td>"The Quiet Master of Cryptocurrency"</td>
                    <td>Finance</td>
                </tr>
                <tr>
                    <td>The Joe Rogan Experience</td>
                    <td>"Bill Burr"</td>
                    <td>Comedy</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default PodcastList;

