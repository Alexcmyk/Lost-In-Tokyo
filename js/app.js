const Highlight = (props) => (
  <span className={`relative highlight highlight-${props.color}`}>
    {/* Whole template literal needs to be wrapped in brackets */}
    <span className="relative z-2">{props.children}</span>
    {/* props.children  refers to whatever content is inside a component*/}
  </span>
);

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      <li className="mh2-ns f6 f4-l tc order-3-ns w-100 w-30-ns mb3 mb0-ns">
        <a href="index.html" className="white no-underline">
          <img src="../images/logo.svg" className="db center logo" alt="" />
        </a>
      </li>
      <li className="mh2-ns f6 f4-l tc order-1-ns w-20">
        <a href="#" className="white no-underline">
          About
        </a>
      </li>
      <li className="mh2-ns f6 f4-l tc order-2-ns w-20">
        <a href="#" className="white no-underline">
          Tickets
        </a>
      </li>
      <li className="mh2-ns f6 f4-l tc order-4-ns w-20">
        <a href="#" className="white no-underline">
          Journal
        </a>
      </li>
      <li className="mh2-ns f6 f4-l tc order-5-ns w-20">
        <a href="#" className="white no-underline">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    {/* tachyons utility classes */}
    <div className="mb3 mb4-ns">
      <Highlight color="aqua">Lost in Tokyo</Highlight> is a directory of fun places to see, play in and <Highlight color="yellow">explore</Highlight>{" "}
      in <Highlight color="blue">Tokyo</Highlight>, Japan.
    </div>
    <div>
      From <Highlight color="blue">museums</Highlight> and <Highlight color="blue">galleries</Highlight>, to{" "}
      <Highlight color="pink">Robot Restaurants</Highlight> and <Highlight color="pink">kitten cafes</Highlight>, Tokyo is the gift that keeps on
      giving. <Highlight color="yellow">Dattebayo!</Highlight>
    </div>
  </div>
);

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      {/* our navigation component */}
      <Intro />
      {/* our intro text component */}
    </div>
    <div className="flex flex-wrap container">{/* our attractions list component */}</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
