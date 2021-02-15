// Spread Operator sends all items to the props argument and passes them where its needed. | We destructured the "props" down to just the key items we needed
// Logo is rendered with a ternary opertator.
const NavItem = ({ className, href, children, logo }) => (
  <li className={`mh2-ns f4 f4-1 tc ${className}`}>
    {/* Each unique class name */}
    <a className="white no-underline" href={href}>
      {/* Each unique href*/}
      {logo ? <img src="images/logo.svg" className="db center logo"></img> : children}
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

// Overlay componet
const Overlay = ({ showInfo, title, description }) => (
  <div
    className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
    // Style if statement for overlay using showInfo
    style={{ transform: showInfo ? "none" : "translateY(-100%)" }}
  >
    <div>
      <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
      <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
    </div>
  </div>
);

// We can also create components as classes. Gives us more functionality and features. i.e lifecycle and react state / *click event
class Attraction extends React.Component {
  // ?????
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
    // Here we tell our toggleInfo about this by using bind.
    // Otherwise things like setState will not work
    this.toggleInfo = this.toggleInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }
  // Toggle Info method
  toggleInfo() {
    this.setState((prevState, props) => ({
      // Inverting the showInfo true false
      showInfo: !prevState.showInfo,
    }));
  }

  // Mouse Leave method
  closeInfo() {
    this.setState({
      showInfo: false,
    });
  }

  render() {
    // Shorthand for:
    // const title = this.props.title
    // const description = this.props.title and so on. Also called destructuring.
    const { title, description, className, image } = this.props;
    // Return is returning our HTML and referencing the consts above for each item
    const { showInfo } = this.state;
    return (
      <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
        // onClick with set state ??
        onClick={this.toggleInfo}
        onMouseLeave={this.closeInfo}
      >
        <div className="relative">
          {/* Pass down all of the props and state */}
          <Overlay {...this.props} {...this.state} />
          <img src={`./images/${image}`} className="db" />
        </div>
      </div>
    );
  }
}

// * Click event: adding a onClick attribute that runs a function.
// * onMouseLeave: adds a mouse leave event

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      {/*  Nav Componet */}
      <Nav />
      {/* Intro Section */}
      <Intro />
    </div>
    {/* Attractions section */}
    <div className="flex flex-wrap container">
      {attractions.map((item) => (
        <Attraction {...item} />
      ))}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
