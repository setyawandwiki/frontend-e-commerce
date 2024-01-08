import "./App.css";
import "./css/navbar.css";
import "./css/homepage.css";
import "./css/landingpage.css";

function App() {
  return (
    <>
      <nav className="w-100 navbar navbar-expand-lg my-0 d-flex justify-content-around layout-navbar-left">
        <div className="container layout-navbar-menus d-flex justify-content-start">
          <a className="navbar-brand" href="#">
            ZALORI
          </a>
          <form
            className="d-flex my-3 justify-content-start navbar-search-margin-left w-50"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <nav className="w-100 border-bottom border-3 navbar navbar-expand-lg my-0 layout-navbar-left">
        <div className="container layout-navbar-menus">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-50 d-flex justify-content-start">
              <a
                className="button-margin-right nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="button-margin-right nav-link" href="#">
                Features
              </a>
              <a className="button-margin-right nav-link" href="#">
                Pricing
              </a>
              <a className=" nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container w-50">
        <ul className="d-flex mt-5 justify-content-center homepage-category">
          <li className="text-center">
            <img
              className="w-75"
              src="https://images.ctfassets.net/9q8du028z7sn/5OYBQ0eYtaMeO2iOS3q5yD/1bec483251a8cc4db5d56080d2655706/2024-CW01-Women-Bubblecat-w01bbcwcatdress-1-dsk.jpg"
            />
            <p>Dress</p>
          </li>
          <li className="text-center">
            <img
              className="w-75"
              src="https://images.ctfassets.net/9q8du028z7sn/1GU2kJDruI3TiHEJHeBQah/6194e431bed34f826b8d5ae7b98d5076/2024-CW01-Women-Bubblecat-w01bbcwcatheelswedges-2-dsk.jpg"
            />
            <p>Heels & Wedges</p>
          </li>
          <li className="text-center">
            <img
              className="w-75"
              src="https://images.ctfassets.net/9q8du028z7sn/1GUj59tlcIFekRx8g3YSuN/f4f45fd2c455fce449116e278c52c77a/2024-CW01-Women-Bubblecat-w01bbcwcatsports-3-dsk.jpg"
            />
            <p>Sports</p>
          </li>
          <li className="text-center">
            <img
              className="w-75"
              src="https://images.ctfassets.net/9q8du028z7sn/3hQZE2Apyip8KgG9ABeItz/1fb381bdf2f0860856626702a5d3138e/2024-CW01-Women-Bubblecat-bbcclearancesale-6-dsk.jpg"
            />
            <p>Clearance Sale</p>
          </li>
          <li className="text-center">
            <img
              className="w-75"
              src="https://images.ctfassets.net/9q8du028z7sn/65G2WfdONa1dqiB93a7VWI/4883f8a0951710b3f28ccb20671fd6d3/2024-CW01-Women-Bubblecat-w01bbcwcatfashionbags-4-dsk.jpg"
            />
            <p>Fashion Baqs</p>
          </li>
          <li className="text-center">
            <img
              className="w-75"
              src="https://images.ctfassets.net/9q8du028z7sn/6JWNMAnGLg8X9itiA6ckJs/149e405f8e4a423102646e773b3c57bc/225X225_CIP__1_.gif"
            />
            <p>Dapatkan komisimu</p>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src="https://images.ctfassets.net/9q8du028z7sn/3ay3PTaT2J37K816JWkqrX/77a86abf98afbbbe74fe5d3ebb50c7b7/2024-CW01-Women-Hero-w01hfs14lp-1__07_Jan_10_00_AM_-_07_Jan_10_00_PM_-dsk.jpg"
              alt=""
              className="img-fluid w-75"
            />
          </div>
          <div className="col-12 text-center mt-5">
            <h2 className="font-bold">Emang Bisa Gratis Ongkir di ZALORA ?</h2>
            <p className="font-lightBold">
              Bisa dong! Cek selengkapnya disini ya!
            </p>
          </div>
          <div className="col-12 text-center mt-5">
            <img
              src="https://images.ctfassets.net/9q8du028z7sn/1LVj4w2Y5Kmh9BR80lLaGN/fc5363120db577492dd7e7d1ce43edf8/1920x480_ZVIP_APPSECONDARY_NEWPRICING.jpg"
              alt=""
              className="img-fluid w-75"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
