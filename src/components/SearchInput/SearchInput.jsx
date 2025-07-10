import "./SearchInput.css";
export const SearchInput = ({ city, setCity }) => {
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Nombre de ciudad..."
            value={city}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};
export default SearchInput;
