import Search from './Search';

const Header = ({ title, inputValue, setInputValue, onSearch }) => (
  <nav
    className="navbar navbar-expand-lg"
    style={{ backgroundColor: 'pink', position: 'sticky', top: 0, left: 0, right: 0, zIndex: 1000 }}
  >
    <div className="container-fluid ms-5 me-5">
      <h1 className="mb-0" style={{ color: '#DA1884', fontSize: '24px', fontWeight: 'bold' }}>
        {title}
      </h1>
      <div className="ms-auto">
        <Search inputValue={inputValue} setInputValue={setInputValue} handleSearch={onSearch} />
      </div>
    </div>
  </nav>
);

export default Header;
