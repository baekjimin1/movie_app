import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {//router라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러옴
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation;