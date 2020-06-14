import React from "react";
import "./App.css";
import Web3 from "web3";
import tokenContractInstance from "./scripts/tokenContractInstance";
import {
  publishTweet,
  getAllTweets,
  likeTweet,
  dislikeTweet,
  getFeesToCreate,
  getFeesToLike,
} from "./scripts/tokenContractInteract";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const App = () => {
  // Variable/React States to store the feesToCreate and feesToLike for a tweet
  const [feesToCreate, setFeesToCreate] = React.useState("");
  const [feesToLike, setFeesToLike] = React.useState("");

  //  Connecting to Metamask on load of webpage..
  React.useEffect(() => {
    async function connectMetamask() {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
        const accounts = await web3.eth.getAccounts();
        //  Setting the from account for the token contract to perform the 'Token' Contract transactions..
        tokenContractInstance.options.from = accounts[0];
      } catch (error) {
        console.log(error);
      }
    }
    connectMetamask();
  }, []);

  React.useEffect(() => {
    try {
      //  Getting the FeesToCreate from the smart contract on load of webpage
      getFeesToCreate().then((result) => {
        setFeesToCreate("0x" + Number(result).toString(16)); //  Converting the value in hex so that small value like 0.001 can be passed to smart contract
      });

      //  Getting the FeesToLike from the smart contract on load of webpage
      getFeesToLike().then((result) => {
        setFeesToLike("0x" + Number(result).toString(16));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //  Categories value initial state before filtering
  const [filters, setFilters] = React.useState({
    general: false,
    cryptocurrency: false,
    nft: false,
    arts: false,
    games: false,
    science: false,
    technology: false,
    politics: false,
    society: false,
    sports: false,
  });

  //  Function called on click of category selected from navbar
  const onClick = (event, filterName) => {
    event.preventDefault();

    //  Reversing the initial value of category selected from the navbar for filtering
    setFilters({
      general: false,
      cryptocurrency: false,
      nft: false,
      arts: false,
      games: false,
      science: false,
      technology: false,
      politics: false,
      society: false,
      sports: false,
      [filterName]: !filters[filterName],
    });
  };

  //  State/Variable to store the search value from the search bar
  const [searchValue, setSearchString] = React.useState("");

  const onClickSearch = (event) => {
    event.preventDefault();

    //  Storing the search bar value in code
    setSearchString(event.target[0].value);
  };

  //  This  return statement basically contains the HTML portion
  return (
    <HashRouter>
      <div className="App">
        <header>
          {/* <!-- navbar starts here --> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-1">
            <div className="container">
              <a className="navbar-brand" href="/#">
                <span className="tag-line">
                  <img src="./assets/img/logo_svg.svg" width="50" alt="" />{" "}
                  ChainConvo Tweet Currency Exchange
                </span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form
                  className="form-inline mx-auto my-2 my-lg-0"
                  onSubmit={(event) => {
                    onClickSearch(event);
                  }}
                >
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn my-2 my-sm-0" type="submit">
                    <img src="./assets/img/icon_search.svg" width="18" alt="" />
                  </button>
                </form>

                <div className="dropdown-divider"></div>

                {/* Navbar Categories for Mobile/ipad devices */}
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown d-lg-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories
                      <i>
                        <img
                          src="./assets/img/expand_more-24px.svg"
                          width="30"
                          alt=""
                        />
                      </i>
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <FilterCategoryAnchor
                        isActive={filters.general}
                        onClick={onClick}
                        filterName="general"
                      >
                        General
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.cryptocurrency}
                        onClick={onClick}
                        filterName="cryptocurrency"
                      >
                        Cryptocurrency
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.nft}
                        onClick={onClick}
                        filterName="nft"
                      >
                        NFT
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.arts}
                        onClick={onClick}
                        filterName="arts"
                      >
                        Arts
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.games}
                        onClick={onClick}
                        filterName="games"
                      >
                        Games
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.science}
                        onClick={onClick}
                        filterName="science"
                      >
                        Science
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.technology}
                        onClick={onClick}
                        filterName="technology"
                      >
                        Technology
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.politics}
                        onClick={onClick}
                        filterName="politics"
                      >
                        Politics
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.society}
                        onClick={onClick}
                        filterName="society"
                      >
                        Society
                      </FilterCategoryAnchor>
                      <FilterCategoryAnchor
                        isActive={filters.sports}
                        onClick={onClick}
                        filterName="sports"
                      >
                        Sports
                      </FilterCategoryAnchor>
                    </div>
                  </li>

                  <div className="dropdown-divider"></div>

                  {/* Twitter icon html component */}
                  <li className="nav-item active">
                    <span className="social-links">
                      <a className="nav-link" href="/#">
                        <img
                          src="./assets/img/twitter_logo.svg"
                          width="30"
                          alt="twitter_img"
                        />
                      </a>
                    </span>

                    {/* Discord icon html component */}
                    <span className="social-links pl-3">
                      <a className="nav-link" href="/#">
                        <img
                          src="./assets/img/discord_logo.svg"
                          width="30"
                          alt="discord_img"
                        />
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Navbar Categories for Laptop devices */}
          <div className="container-fluid category-section d-none d-lg-block">
            <div className="container py-3">
              <div className="row Navbar__Items">
                <div className="col-auto font-weight-bold">
                  <i className="d-inline-block">
                    <img
                      src="./assets/img/category-24px.svg"
                      width="30px"
                      alt=""
                    />
                  </i>
                  Categories
                </div>
                <div className="col-auto ml-auto">
                  <FilterCategoryButton
                    isActive={filters.general}
                    onClick={onClick}
                    filterName="general"
                  >
                    General
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  <FilterCategoryButton
                    isActive={filters.cryptocurrency}
                    onClick={onClick}
                    filterName="cryptocurrency"
                  >
                    Cryptocurrency
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  <FilterCategoryButton
                    isActive={filters.nft}
                    onClick={onClick}
                    filterName="nft"
                  >
                    NFT
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">Arts</button> */}
                  <FilterCategoryButton
                    isActive={filters.arts}
                    onClick={onClick}
                    filterName="arts"
                  >
                    Arts
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">Games</button> */}
                  <FilterCategoryButton
                    isActive={filters.games}
                    onClick={onClick}
                    filterName="games"
                  >
                    Games
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">Science</button> */}
                  <FilterCategoryButton
                    isActive={filters.science}
                    onClick={onClick}
                    filterName="science"
                  >
                    Science
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">Technology</button> */}
                  <FilterCategoryButton
                    isActive={filters.technology}
                    onClick={onClick}
                    filterName="technology"
                  >
                    Technology
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">Politics</button> */}
                  <FilterCategoryButton
                    isActive={filters.politics}
                    onClick={onClick}
                    filterName="politics"
                  >
                    Politics
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">Society</button> */}
                  <FilterCategoryButton
                    isActive={filters.society}
                    onClick={onClick}
                    filterName="society"
                  >
                    Society
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">Sports</button> */}
                  <FilterCategoryButton
                    isActive={filters.sports}
                    onClick={onClick}
                    filterName="sports"
                  >
                    Sports
                  </FilterCategoryButton>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- MAIN SECTION --> */}
        <Switch>
          {/* Redirting to Token Page on click on tokenId */}
          <Route exact path="/token/:id" component={TokenPage}></Route>

          {/* Redirecting to Owner's Page on click on Owner's Address */}
          <Route
            exact
            path="/owner/:address"
            render={(props) => <OwnerPage {...props}></OwnerPage>}
          ></Route>

          {/* Route for Homepage */}
          <Route exact path="/">
            <Homepage
              filtersList={filters}
              searchValue={searchValue}
              feesToCreate={feesToCreate}
              feesToLike={feesToLike}
            ></Homepage>
          </Route>
        </Switch>

        {/* <!-- Footer --> */}
        <footer>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 text-center">Footer</div>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

//  Component for Navbar Categories for Mobile/iPad/any non-laptop devices
function FilterCategoryAnchor({ children, isActive, onClick, filterName }) {
  return (
    <a
      className="dropdown-item"
      href="/#"
      onClick={(event) => {
        onClick(event, filterName);
      }}
    >
      {children}
    </a>
  );
}

//  Component for Navbar Categories for all kind of Laptop devices
function FilterCategoryButton({ children, isActive, onClick, filterName }) {
  // console.log("printing category filter");
  // console.log(filterName)
  return (
    <Button
      style={{ textTransform: "none", fontSize: 16 }}
      className="btn p-0 border-0"
      onClick={(event) => {
        onClick(event, filterName);
      }}
    >
      {children}
    </Button>
  );
}

//  Component for Owner's Page
const OwnerPage = (props) => {
  // const location = useLocation();

  let owner, tokenList; //  Variables to store owner and owner's tokens list for owner's page

  if (props.location !== undefined) {
    ({ owner, tokenList } = props.location.state); //  Assigning the value on click of Owner's Address
  }

  let filteredLatestCategories = tokenList; //  Copy the token's list to another variable for immutability
  filteredLatestCategories = filteredLatestCategories.filter(
    (filteredLatestCategory) => {
      if (
        filteredLatestCategory.owner.toLowerCase().toString() ===
        owner.toLowerCase().toString()
      ) {
        return true;
      }

      return false;
    }
  );

  //  Storing the count of token's to display on click of load more button
  const [latestLoadMoreCount, setLatestLoadMoreCount] = React.useState(1);
  const onLatestLoadMoreClick = (event) => {
    event.preventDefault();

    setLatestLoadMoreCount(latestLoadMoreCount + 1);
  };

  // HTML part for Owner's Page
  return true ? (
    <div className="main mb-5">
      <div className="container">
        {/* <!-- Posts --> */}
        <div className="raleway-semibold">User's Tokens</div>
        <div className="row">
          {/* <!-- Owner's Tokens List --> */}
          {filteredLatestCategories.length > 0 &&
            filteredLatestCategories.map((value, index) => {
              if (index < latestLoadMoreCount * 5) {
                return index % 2 === 0 ? (
                  <div className="col-12 pr-lg-5 col-lg-6" key={index}>
                    <div className="row">
                      <div className="col-12 my-3" key={index}>
                        <div className="tweet-details">
                          <div className="bg-black px-3 py-2">
                            <div className="owner-id">
                              {" "}
                              <span className="title theme-text">
                                Owner:
                              </span>{" "}
                              <span className="p-id text-white">
                                {value.owner}
                              </span>
                            </div>
                            <div className="row justify-content-between">
                              <div className="col-auto token-id">
                                <Link
                                  to={{
                                    pathname: `/token/${value.id}`,
                                    state: {
                                      owner: value.owner,
                                      content: value.content,
                                      category: value.category,
                                      likes: value.likes,
                                      dislikes: value.dislikes,
                                      tokenId: value.id,
                                    },
                                  }}
                                >
                                  <span className="title theme-text">
                                    Token ID:
                                  </span>{" "}
                                  <span className="p-id text-white">
                                    {value.id}
                                  </span>
                                </Link>
                              </div>
                              <div className="col-auto category">
                                <span className="title theme-text">
                                  Category:
                                </span>{" "}
                                <span className="p-id text-white">
                                  {value.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white px-3">
                            <div className="desc pt-3 pb-2">
                              {value.content}
                            </div>

                            <div className="text-right">
                              <span className="like px-1">
                                <span className="count px-1">
                                  Likes: {value.likes}
                                </span>
                              </span>
                              <span className="unLike px-1">
                                <span className="count px-1">
                                  Dislikes: {value.dislikes}
                                </span>
                              </span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                              >
                                <span className="opensea pl-3">
                                  <img
                                    src="./assets/img/open-sea.svg"
                                    alt="open_sea_img"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-12 pl-lg-5 col-lg-6" key={index}>
                    <div className="row">
                      <div className="col-12 my-3" key={index}>
                        <div className="tweet-details">
                          <div className="bg-black px-3 py-2">
                            <div className="owner-id">
                              {" "}
                              <span className="title theme-text">
                                Owner:
                              </span>{" "}
                              <span className="p-id text-white">
                                {value.owner}
                              </span>
                            </div>
                            <div className="row justify-content-between">
                              <div className="col-auto token-id">
                                <Link
                                  to={{
                                    pathname: `/token/${value.id}`,
                                    state: {
                                      owner: value.owner,
                                      content: value.content,
                                      category: value.category,
                                      likes: value.likes,
                                      dislikes: value.dislikes,
                                      tokenId: value.id,
                                    },
                                  }}
                                >
                                  <span className="title theme-text">
                                    Token ID:
                                  </span>{" "}
                                  <span className="p-id text-white">
                                    {value.id}
                                  </span>
                                </Link>
                              </div>
                              <div className="col-auto category">
                                <span className="title theme-text">
                                  Category:
                                </span>{" "}
                                <span className="p-id text-white">
                                  {value.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white px-3">
                            <div className="desc pt-3 pb-2">
                              {value.content}
                            </div>

                            <div className="text-right">
                              <span className="like px-1">
                                <span className="count px-1">
                                  Likes: {value.likes}
                                </span>
                              </span>
                              <span className="unLike px-1">
                                <span className="count px-1">
                                  Dislikes: {value.dislikes}
                                </span>
                              </span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                              >
                                <img
                                  src="./assets/img/open-sea.svg"
                                  alt="open_sea_img"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}

          <div className="col-12 text-center mt-5">
            <button
              className="btn text-white bg-black"
              onClick={(event) => {
                onLatestLoadMoreClick(event);
              }}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const TokenPage = (props) => {
  let owner, category, likes, dislikes, content, tokenId; //  Variables to store the values for Token's Page to display

  //  remove this if condition to check the error
  if (props.location !== undefined) {
    ({
      owner,
      content,
      category,
      likes,
      dislikes,
      tokenId,
    } = props.location.state);
  }

  //  Catching the error if no tokenId is passed on click of token Id
  if (!tokenId) {
    return <div>No Token Id passed.!</div>;
  }

  //  HTML portion for Token's Page
  return true ? (
    <div className="main mb-5">
      <div className="container">
        {/* <!-- Posts --> */}
        <div className="row">
          {/* <!-- Token's Page Content --> */}
          <div
            className="col-12 pl-lg-5 col-lg-6"
            style={{
              margin: "auto",
            }}
          >
            <div className="raleway-semibold">User's Token Info</div>
            <div className="row">
              <div className="col-12 my-3">
                <div className="tweet-details">
                  <div className="bg-black px-3 py-2">
                    <div className="owner-id">
                      {" "}
                      <span className="title theme-text">
                        Token Details
                      </span>{" "}
                    </div>
                  </div>
                  <div className="bg-white px-3">
                    <div className="desc pt-3 pb-2">Owner: {owner}</div>
                    <div className="desc pt-3 pb-2">Token Id: {tokenId}</div>
                    <div className="desc pt-3 pb-2">Content: {content}</div>
                    <div className="desc pt-3 pb-2">Likes: {likes}</div>
                    <div className="desc pt-3 pb-2">Dislikes: {dislikes}</div>
                    {false && (
                      <div className="desc pt-3 pb-2">Category: {category}</div>
                    )}

                    <div className="text-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

function Homepage({ filtersList, searchValue, feesToCreate, feesToLike }) {
  // States/Variable to store the values of allTweets, TrendingTweets, LatestTweets, tweetMsg, TweetCategory, LoadMoreButtonClickCount for Latest/trending Tweets
  const [allTweets, setAllTweets] = React.useState([]);
  const [trendingTweets, setTrendingTweets] = React.useState([]);
  const [tweetMsg, setTweetMsg] = React.useState("");
  const [tweetMsgCategory, setTweetMsgCategory] = React.useState("");
  const [tokenId, setTokenId] = React.useState("");
  const [latestLoadMoreCount, setLatestLoadMoreCount] = React.useState(1);
  const [trendingLoadMoreCount, setTrendingLoadMoreCount] = React.useState(1);

  let filteredLatestCategories = allTweets; //  Copying the allTweets fetched from smart contract to local array list for immutability
  //  Filtering the latest tweets list on the category selected from navbar
  filteredLatestCategories = filteredLatestCategories.filter(
    (filteredLatestCategory) => {
      //  If conditions are for negative scenarios.. eg: if category == general and list != general then return false
      if (
        filtersList.general &&
        !filteredLatestCategory.category.toLowerCase().includes("general")
      ) {
        return false;
      }
      if (
        filtersList.cryptocurrency &&
        !filteredLatestCategory.category
          .toLowerCase()
          .includes("cryptocurrency")
      ) {
        return false;
      }
      if (
        filtersList.nft &&
        !filteredLatestCategory.category.toLowerCase().includes("nft")
      ) {
        return false;
      }
      if (
        filtersList.arts &&
        !filteredLatestCategory.category.toLowerCase().includes("arts")
      ) {
        return false;
      }
      if (
        filtersList.games &&
        !filteredLatestCategory.category.toLowerCase().includes("games")
      ) {
        return false;
      }
      if (
        filtersList.science &&
        !filteredLatestCategory.category.toLowerCase().includes("science")
      ) {
        return false;
      }
      if (
        filtersList.technology &&
        !filteredLatestCategory.category.toLowerCase().includes("technology")
      ) {
        return false;
      }
      if (
        filtersList.politics &&
        !filteredLatestCategory.category.toLowerCase().includes("politics")
      ) {
        return false;
      }
      if (
        filtersList.society &&
        !filteredLatestCategory.category.toLowerCase().includes("society")
      ) {
        return false;
      }
      if (
        filtersList.sports &&
        !filteredLatestCategory.category.toLowerCase().includes("sports")
      ) {
        return false;
      }

      if (
        Boolean(searchValue) &&
        !(
          filteredLatestCategory.owner
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          filteredLatestCategory.content
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      ) {
        return false;
      }

      return true;
    }
  );

  let filteredTrendingCategories = trendingTweets; //  Copying the trending tweets list to local variable for immutability

  //  Filtering the trending tokens list on the basis of category selected from the navbar
  filteredTrendingCategories = filteredTrendingCategories.filter(
    (filteredTrendingCategory) => {
      //  If conditions are for negative scenarios.. eg: if category == general and list != general then return false
      if (
        filtersList.general &&
        !filteredTrendingCategory.category.toLowerCase().includes("general")
      ) {
        return false;
      }
      if (
        filtersList.cryptocurrency &&
        !filteredTrendingCategory.category
          .toLowerCase()
          .includes("cryptocurrency")
      ) {
        return false;
      }
      if (
        filtersList.nft &&
        !filteredTrendingCategory.category.toLowerCase().includes("nft")
      ) {
        return false;
      }
      if (
        filtersList.arts &&
        !filteredTrendingCategory.category.toLowerCase().includes("arts")
      ) {
        return false;
      }
      if (
        filtersList.games &&
        !filteredTrendingCategory.category.toLowerCase().includes("games")
      ) {
        return false;
      }
      if (
        filtersList.science &&
        !filteredTrendingCategory.category.toLowerCase().includes("science")
      ) {
        return false;
      }
      if (
        filtersList.technology &&
        !filteredTrendingCategory.category.toLowerCase().includes("technology")
      ) {
        return false;
      }
      if (
        filtersList.politics &&
        !filteredTrendingCategory.category.toLowerCase().includes("politics")
      ) {
        return false;
      }
      if (
        filtersList.society &&
        !filteredTrendingCategory.category.toLowerCase().includes("society")
      ) {
        return false;
      }
      if (
        filtersList.sports &&
        !filteredTrendingCategory.category.toLowerCase().includes("sports")
      ) {
        return false;
      }

      if (
        Boolean(searchValue) &&
        !(
          filteredTrendingCategory.owner
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          filteredTrendingCategory.content
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      ) {
        return false;
      }

      return true;
    }
  );

  //  React Hook for getting the list of all tweets from the smart contract
  React.useEffect(() => {
    let mounted = true; //  For cancelling all the promises calls after getting work done
    getAllTweets().then((result) => {
      if (mounted) {
        let receivedResult = result;
        if (receivedResult.length > 0) {
          //  Setting the list of latest tweets based on the tweet published
          setAllTweets([...receivedResult].reverse());

          //  Setting the list of trending tweets based on the number of likes
          setTrendingTweets(
            [...allTweets].sort(function (a, b) {
              return parseInt(b[3]) - parseInt(a[3]);
            })
          );
        }
      }
    });

    return () => (mounted = false);
  }, [allTweets, trendingTweets]);

  // Function to Set Tweet Message
  const onChangeTweetMsg = (event) => {
    event.preventDefault();
    if (event.target.value != null) {
      setTweetMsg(event.target.value);
    }
  };

  // Function Set Tweet Message Category
  const onSelectCategory = (event) => {
    event.preventDefault();
    if (event.target.value != null) {
      console.log(event.target.value);
      setTweetMsgCategory(event.target.value);
    }
  };

  //  Function to publish the tweet on blockchain
  const onPublishClick = async (event) => {
    event.preventDefault();

    if (
      tweetMsg !== "" &&
      tweetMsgCategory !== "" &&
      tweetMsgCategory !== "Choose..."
    ) {
      // Publishing the tweet via smart contract on blockchain
      await publishTweet(
        tweetMsg.toString(),
        tweetMsgCategory.toString(),
        feesToCreate.toString()
      ).then((res) => {
        //  Fetching the tweet published token's id from smart contract to store
        setTokenId(res.toString());
        if (!tokenId) {
          console.log(tokenId);
        }
      });
    }
  };

  // Function to like the tweet
  const onLikeClick = async (event, tokenId) => {
    event.preventDefault();

    await likeTweet(Number(tokenId), feesToLike.toString()).then((result) => {
      console.log(result);
    });
  };

  //  Function to dislike the tweet
  const onDislikeClick = async (event, tokenId) => {
    event.preventDefault();

    await dislikeTweet(Number(tokenId)).then((result) => {
      console.log(result);
    });
  };

  //  Function to handle load more button click for latest tweets section
  const onLatestLoadMoreClick = (event) => {
    event.preventDefault();
    setLatestLoadMoreCount(latestLoadMoreCount + 1);
  };

  //  Function to handle load more button click for trending tweets section
  const onTrendingLoadMoreClick = (event) => {
    event.preventDefault();
    setTrendingLoadMoreCount(trendingLoadMoreCount + 1);
  };

  //  HTML portion for HOMEPAGE
  return (
    <div className="main mb-5">
      <div className="container">
        {/* <!-- Form Here --> */}
        <form action="">
          <div className="row justify-content-center my-5">
            <div className="col-10 col-md-9 col-lg-7 bg-white shadow-sm pt-3 px-0">
              <textarea
                name="tweetBox"
                id="tweet"
                className="w-100 border-0"
                rows="6"
                placeholder="Messages with 500 characters or longer may be costly to mint due to gas fees. Your NFT image will only support up to 280 characters."
                onChange={(event) => {
                  onChangeTweetMsg(event);
                }}
              ></textarea>

              <div className="text-right">
                <span>Category:</span>
                <select
                  id="inputState"
                  className="form-control d-inline-block mr-3"
                  onChange={(event) => {
                    onSelectCategory(event);
                  }}
                >
                  <option defaultValue>Choose...</option>
                  <option>General</option>
                  <option>Cryptocurrency</option>
                  <option>NFT</option>
                  <option>Arts</option>
                  <option>Games</option>
                  <option>Science</option>
                  <option>Technology</option>
                  <option>Politics</option>
                  <option>Society</option>
                  <option>Sports</option>
                </select>

                <button
                  type="submit"
                  className="border-0 btn px-3 py-2"
                  onClick={(event) => {
                    onPublishClick(event);
                  }}
                >
                  <span className="px-3">Publish</span>
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* <!-- Posts --> */}
        <div className="row">
          {/* <!-- Trending --> */}
          <div className="col-12 pr-lg-5 col-lg-6">
            <div className="raleway-semibold">Trending</div>
            <div className="row">
              {filteredTrendingCategories.length > 0 &&
                filteredTrendingCategories.map((value, index) => {
                  if (index < trendingLoadMoreCount * 5) {
                    return (
                      <div className="col-12 my-3" key={index}>
                        <div className="tweet-details">
                          <div className="bg-black px-3 py-2">
                            <div className="owner-id">
                              {" "}
                              <Link
                                to={{
                                  pathname: `/owner/${value.owner}`,
                                  state: {
                                    owner: value.owner,
                                    tokenList: allTweets,
                                  },
                                }}
                              >
                                <span className="title theme-text">Owner:</span>{" "}
                                <span className="p-id text-white">
                                  {value.owner}
                                </span>
                              </Link>
                            </div>
                            <div className="row justify-content-between">
                              <div className="col-auto token-id">
                                <Link
                                  to={{
                                    pathname: `/token/${value.id}`,
                                    state: {
                                      owner: value.owner,
                                      content: value.content,
                                      category: value.category,
                                      likes: value.likes,
                                      dislikes: value.dislikes,
                                      tokenId: value.id,
                                    },
                                  }}
                                >
                                  <span className="title theme-text">
                                    Token ID:
                                  </span>{" "}
                                  <span className="p-id text-white">
                                    {value.id}
                                  </span>
                                </Link>
                              </div>
                              <div className="col-auto category">
                                <span className="title theme-text">
                                  Category:
                                </span>{" "}
                                <span className="p-id text-white">
                                  {value.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white px-3">
                            <div className="desc pt-3 pb-2">
                              {value.content}
                            </div>

                            <div className="text-right">
                              <span className="like px-1">
                                <button
                                  key={index}
                                  className="btn border-0"
                                  onClick={(event) => {
                                    onLikeClick(event, value.id);
                                  }}
                                >
                                  <img
                                    src="./assets/img/like.png"
                                    alt="like_img"
                                  />
                                </button>
                                <span className="count px-1">
                                  {value.likes}
                                </span>
                              </span>
                              <span className="unLike px-1">
                                <button
                                  key={index}
                                  className="btn border-0"
                                  onClick={(event) => {
                                    onDislikeClick(event, value.id);
                                  }}
                                >
                                  <img
                                    src="./assets//img/unlike.png"
                                    alt="unlike_img"
                                  />
                                </button>
                                <span className="count px-1">
                                  {value.dislikes}
                                </span>
                              </span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                              >
                                <span className="opensea pl-3">
                                  <img
                                    src="./assets/img/open-sea.svg"
                                    alt="open_sea_img"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}

              <div className="col-12 text-center my-5">
                <button
                  className="btn text-white bg-black"
                  onClick={(event) => {
                    onTrendingLoadMoreClick(event);
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Latest --> */}
          <div className="col-12 pl-lg-5 col-lg-6">
            <div className="raleway-semibold">Latest</div>
            <div className="row">
              {filteredLatestCategories.length > 0 &&
                filteredLatestCategories.map((value, index) => {
                  if (index < latestLoadMoreCount * 5) {
                    return (
                      <div className="col-12 my-3" key={index}>
                        <div className="tweet-details">
                          <div className="bg-black px-3 py-2">
                            <div className="owner-id">
                              {" "}
                              <Link
                                to={{
                                  pathname: `/owner/${value.owner}`,
                                  state: {
                                    owner: value.owner,
                                    tokenList: allTweets,
                                  },
                                }}
                              >
                                <span className="title theme-text">Owner:</span>{" "}
                                <span className="p-id text-white">
                                  {value.owner}
                                </span>
                              </Link>
                            </div>
                            <div className="row justify-content-between">
                              <div className="col-auto token-id">
                                <Link
                                  to={{
                                    pathname: `/token/${value.id}`,
                                    state: {
                                      owner: value.owner,
                                      content: value.content,
                                      category: value.category,
                                      likes: value.likes,
                                      dislikes: value.dislikes,
                                      tokenId: value.id,
                                    },
                                  }}
                                >
                                  <span className="title theme-text">
                                    Token ID:
                                  </span>{" "}
                                  <span className="p-id text-white">
                                    {value.id}
                                  </span>
                                </Link>
                              </div>
                              <div className="col-auto category">
                                <span className="title theme-text">
                                  Category:
                                </span>{" "}
                                <span className="p-id text-white">
                                  {value.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white px-3">
                            <div className="desc pt-3 pb-2">
                              {value.content}
                            </div>

                            <div className="text-right">
                              <span className="like px-1">
                                <button
                                  key={index}
                                  className="btn border-0"
                                  onClick={(event) => {
                                    onLikeClick(event, value.id);
                                  }}
                                >
                                  <img
                                    src="./assets/img/like.png"
                                    alt="like_img"
                                  />
                                </button>
                                <span className="count px-1">
                                  {value.likes}
                                </span>
                              </span>
                              <span className="unLike px-1">
                                <button
                                  key={index}
                                  className="btn border-0"
                                  onClick={(event) => {
                                    onDislikeClick(event, value.id);
                                  }}
                                >
                                  <img
                                    src="./assets//img/unlike.png"
                                    alt="unlike_img"
                                  />
                                </button>
                                <span className="count px-1">
                                  {value.dislikes}
                                </span>
                              </span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                              >
                                <span className="opensea pl-3">
                                  <img
                                    src="./assets/img/open-sea.svg"
                                    alt="open_sea_img"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}

              <div className="col-12 text-center mt-5">
                <button
                  className="btn text-white bg-black"
                  onClick={(event) => {
                    onLatestLoadMoreClick(event);
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
