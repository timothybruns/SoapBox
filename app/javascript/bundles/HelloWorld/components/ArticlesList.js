import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
  return (
    <div className="articles">
      <h1> Newstand </h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Source</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>"Dollar Resumes Slide After Rallying on Trump's Comments"</td>
                    <td>The Wall Street Journal</td>
                    <td>Finance</td>
                </tr>
                <tr>
                    <td>"7 Lessons from 7 self-taught coders who now work full time as software developers"</td>
                    <td>freeCodeCamp</td>
                    <td>Tech</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default ArticlesList;

