const Header = ({ pageName, desc }) => {
  return (
    <header className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">{pageName}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{desc}</p>
      </div>
    </header>
  );
};

export default Header;
