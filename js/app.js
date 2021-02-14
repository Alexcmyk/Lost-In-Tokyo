const Highlight = ({ color, children }) => (
  <span className={`relative highlight highlight-${color}`}>
    {/* Whole template literal needs to be wrapped in brackets */}
    <span className="relative z-2">{children}</span>
    {/* props.children  refers to whatever content is inside a component*/}
  </span>
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

// Spread Operator sends all items to the props argument and passes them where its needed. | We destructured the "props" down to just the key items we needed
const NavItem = ({ className, href, children, logo }) => (
  <li className={`mh2-ns f4 f4-1 tc ${className}`}>
    {/* Each unique class name */}
    <a className="white no-underline" href={href}>
      {/* Each unique href*/}
      {logo ? <img src="images/logo.svg"></img> : children}
      {/* Each unique "child" i.e innerText */}
    </a>
  </li>
);

const Nav = () => (
  // Adding classes to the nav and ul items
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {/* Using map to iterate over each menu item in menu.js and applying JS code to interject the appropriate object item */}
      {menu.map((item) => (
        <NavItem {...item} />
      ))}
    </ul>
  </nav>
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
