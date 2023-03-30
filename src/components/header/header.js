import './header.css';

const Header = ({employees, increased}) => {
    return (
        <header>
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </header>
    )
}

export default Header;