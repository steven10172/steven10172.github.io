import React  from 'react';
import './Home.css';

const App = () => (
    <div>
        <div className='container'>
            <div className="icon">
                <span className="brace">{'{'}</span>SB<span className="brace">{'}'}</span>
            </div>
            <div className="text">
                <div className="top">
                    <span className="caret">{'<'}</span><span className="primary-color">engineer</span><span> type="</span><span className="primary-color">software</span><span>"</span><span> focus="</span><span className="primary-color">web</span><span>"</span><span className="caret">{' />'}</span>
                </div>
                <h1>Steven Brice</h1>
                <div className="personal-links">
                    <a href="https://codepen.io/steven10172/">CodePen</a>
                    <a href="https://github.com/steven10172">GitHub</a>
                    <a href="https://www.linkedin.com/in/stevenbrice/">LinkedIn</a>
                    {/*<a href="https://stevenbrice.com/labs">Labs & Projects</a>*/}
                </div>
            </div>
        </div>
    </div>
);

export default App;
