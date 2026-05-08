const Preloader = () => {
  return (
    <>
      <div className="preloader">
        <div className="loader">
          <img src="/images/loader.gif" alt="Loader" />
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
    </>
  );
};

export default Preloader;
