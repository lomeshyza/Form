import { Link, Routes, Route } from 'react-router-dom';

function Header({email}) {
  return (
    <header className="header">
    
    <Routes>
      <Route path="/" element={
        <Link to='/signin' className="header__sign-link">Войти</Link>
      }>
      </Route>
            
    </Routes>
    </header>
  );
}

export default Header;
