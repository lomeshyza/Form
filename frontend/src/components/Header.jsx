import { Link, Routes, Route } from 'react-router-dom';

function Header({email}) {
  return (
    <header className="header">
    
    <Routes>
      <Route path="/" element={
        <Link to='/signin' className="header__sign-link">Войти</Link>
      }>
      </Route>
            
      <Route path="/" element={
        <div className="header__container">
          <p className="header__email">{email}</p>
          <Link to='/signup' className="header__sign-link">Выйти</Link>
        </div>
      }>
      </Route>
    </Routes>
    </header>
  );
}

export default Header;
