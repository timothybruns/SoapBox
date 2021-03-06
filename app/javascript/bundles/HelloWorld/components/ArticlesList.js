import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
  return (
    <div className="articles">
      <h1 className="contentHeader"> Newstand </h1>
      <body>
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
                    <td>"Tech Luminary Peter Thiel Parts Ways With Silicon Valley"</td>
                    <td>The Wall Street Journal</td>
                    <td>Tech</td>
                </tr>
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
                <tr>
                  <td>"The new XFL is going to have several major and surprising differences from the first iteration"</td>
                  <td>Business Insider</td>
                  <td>Sports</td>
                </tr>
                <tr>
                  <td>"Why 68% of people would rather talk about their weight than money"</td>
                  <td>Moneyish.com</td>
                  <td>Lifestyle</td>
                </tr>
                <tr>
                  <td>"Gary Cohn: Trump shared a vision of economic progress in Davos"</td>
                  <td>CNN</td>
                  <td>Politics</td>
                </tr>
                <tr>
                  <td>"Dr Pepper Snapple to Merge With Keurig Green Mountain"</td>
                  <td>The Wall Street Journal</td>
                  <td>Finance</td>
                </tr>
            </tbody>
        </table>
      </body>
    </div>
    );
};

export default ArticlesList;

