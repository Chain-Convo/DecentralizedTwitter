import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import getWeb3 from "./scripts/getWeb3"
import Web3 from "web3";
// import TokenContract from "./contracts/tokenContractInfo.json";
import tokenContractInstance from "./scripts/tokenContractInstance";
import {
  publishTweet,
  getAllTweets,
  likeTweet,
  dislikeTweet,
  getTweetInfo,
  getFeesToCreate,
  getFeesToLike,
} from "./scripts/tokenContractInteract";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// const TokenPage = React.lazy(() => {
//   return import("./container/TokenPage/TokenPage");
// });
// function App() {

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const App = () => {
  // let location = useLocation()
  // console.log(location)
  // React States to set the tweet msg, category, token Id, address
  // const [allTweets, setAllTweets] = React.useState([]);
  // const [trendingTweets, setTrendingTweets] = React.useState([]);
  // const [tweetMsg, setTweetMsg] = React.useState("");
  // const [tweetMsgCategory, setTweetMsgCategory] = React.useState("");
  // const [tokenId, setTokenId] = React.useState("");
  // const [latestLoadMoreCount, setLatestLoadMoreCount] = React.useState(1);
  // const [trendingLoadMoreCount, setTrendingLoadMoreCount] = React.useState(1);
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
        // dispatch(loginMetaMaskFail());
        console.log(error);
      }
    }
    connectMetamask();
  }, []);

  React.useEffect(() => {
    try {
      getFeesToCreate().then((result) => {
        // console.log("printing in app.js file..")
        // console.log(result)
        // console.log("value: " + "0x" + Number(result).toString(16))
        setFeesToCreate("0x" + Number(result).toString(16));
      });

      getFeesToLike().then((result) => {
        // console.log("printing in app.js file..")
        // console.log(result)
        // console.log("like value: " + Number(result).toString(16))
        setFeesToLike("0x" + Number(result).toString(16));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(feesToCreate)
  // console.log(feesToLike)

  // React.useEffect(() => {
  //   getAllTweets().then((result) => {
  //     // console.log(result.reverse())
  //     setAllTweets(result.reverse());

  //     //  Setting the list of trending tweets based on the number of likes
  //     setTrendingTweets(
  //       allTweets.sort(function (a, b) {
  //         return parseInt(b[3]) - parseInt(a[3]);
  //       })
  //     );
  //     // console.log(allTweets.sort("likes"))
  //     // console.log(allTweets);
  //   });
  // }, [allTweets]);

  // // if (allTweets.length > 0) {

  // //   console.log("printing: ", allTweets[11].id);
  // // }

  // // Set Tweet Message
  // const onChangeTweetMsg = (event) => {
  //   event.preventDefault();
  //   if (event.target.value != null) {
  //     setTweetMsg(event.target.value);
  //   }
  // };

  // // Set Tweet Message Category
  // const onSelectCategory = (event) => {
  //   event.preventDefault();
  //   if (event.target.value != null) {
  //     console.log(event.target.value);
  //     setTweetMsgCategory(event.target.value);
  //   }
  // };

  // const onPublishClick = async (event) => {
  //   event.preventDefault();
  //   console.log("ffef: ", tweetMsgCategory);
  //   // console.log(tokenContractInstance.options.from)

  //   if (
  //     tweetMsg !== "" &&
  //     tweetMsgCategory !== "" &&
  //     tweetMsgCategory !== "Choose..."
  //   ) {
  //     await publishTweet(tweetMsg.toString(), tweetMsgCategory.toString()).then(
  //       (res) => {
  //         // console.log("app.js function printing.....")
  //         // console.log(res)
  //         setTokenId(res.toString());
  //       }
  //     );

  //     // console.log(id)
  //     // alert("Tweet message entered: " + tweetMsg + " with category: " + tweetMsgCategory);
  //   }
  // };
  // // console.log("txn. done.. Token Id: " , tokenId)
  // const onLikeClick = async (event, tokenId) => {
  //   event.preventDefault();
  //   console.log("clicked like button");
  //   console.log(tokenId);
  //   await likeTweet(Number(tokenId)).then((result) => {
  //     console.log("app.js function printing");
  //     console.log(result);
  //   });
  // };

  // const onDislikeClick = async (event, tokenId) => {
  //   event.preventDefault();
  //   console.log("clicked like button");
  //   console.log(tokenId);
  //   await dislikeTweet(Number(tokenId)).then((result) => {
  //     console.log("app.js function printing");
  //     console.log(result);
  //   });
  // };

  // const onLatestLoadMoreClick = (event) => {
  //   event.preventDefault();
  //   setLatestLoadMoreCount(latestLoadMoreCount + 1);
  // };

  // const onTrendingLoadMoreClick = (event) => {
  //   event.preventDefault();
  //   setTrendingLoadMoreCount(trendingLoadMoreCount + 1);
  // };

  // let route = null;

  // const onTokenButtonClick = (event, tokenId) => {
  //   route = (
  //     <Switch>
  //       <Route path="/token" render={() => <TokenPage />} />
  //       <Redirect to="/token" />
  //     </Switch>
  //   );
  //   return route
  // }

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

  const onClick = (filterName) => {
    // console.log(filterName)
    // console.log({...filters, [filterName]: !filters[filterName]})
    // alert("clicked category: " + filterName)
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
  // console.log(filters.general)

  // const onClickCategoryFilter = (event) => {
  //   event.preventDefault();
  //   alert("clicked filtered category general");
  // };

  // const query = useQuery();
  const [searchValue, setSearchString] = React.useState("");

  const onClickSearch = (event) => {
    event.preventDefault();
    setSearchString(event.target[0].value);
    // console.log("coming in search")
    // console.log(event.target[0].value)
  };
  // console.log(searchValue)

  return (
    <HashRouter>
      <div className="App">
        <header>
          {/* <!-- navbar starts here --> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-1">
            <div className="container">
              <a className="navbar-brand" href="#">
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
                  <button
                    className="btn my-2 my-sm-0"
                    type="submit"
                    // onClick={(event) => {onClickSearch(event)}}
                  >
                    <img src="./assets/img/icon_search.svg" width="18" alt="" />
                  </button>
                </form>

                <div className="dropdown-divider"></div>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown d-lg-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
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

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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

                  <li className="nav-item active">
                    <span className="social-links">
                      <a className="nav-link" href="#">
                        <img
                          src="./assets/img/twitter_logo.svg"
                          width="30"
                          alt="twitter_img"
                        />
                      </a>
                    </span>

                    <span className="social-links pl-3">
                      <a className="nav-link" href="#">
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
          <div className="container-fluid category-section d-none d-lg-block">
            <div className="container py-3">
              <div className="row">
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
                  {/* <button
                    class="btn p-0 border-0"
                    onClick={(event) => {
                      onClickCategoryFilter(event);
                    }}
                  >
                    General
                  </button> */}
                  <FilterCategoryButton
                    isActive={filters.general}
                    onClick={onClick}
                    filterName="general"
                  >
                    General
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">Cryptocurrency</button> */}
                  <FilterCategoryButton
                    isActive={filters.cryptocurrency}
                    onClick={onClick}
                    filterName="cryptocurrency"
                  >
                    Cryptocurrency
                  </FilterCategoryButton>
                </div>
                <div className="col-auto">
                  {/* <button className="btn p-0 border-0">NFT</button> */}
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
          <Route exact path="/token/:id" component={TokenPage}>
            {/* <TokenPage></TokenPage> */}
          </Route>
          {/* <Route exact path="/owner/:address" component={OwnerPage}></Route> */}
          <Route
            exact
            path="/owner/:address"
            render={(props) => <OwnerPage {...props}></OwnerPage>}
          ></Route>
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

function FilterCategoryAnchor({ children, isActive, onClick, filterName }) {
  return (
    <a
      className="dropdown-item"
      onClick={() => {
        onClick(filterName);
      }}
      href="javascript:void(0)"
    >
      {children}
    </a>
  );
}

function FilterCategoryButton({ children, isActive, onClick, filterName }) {
  // console.log("printing category filter");
  // console.log(filterName)
  return (
    <Button
      className="btn p-0 border-0"
      onClick={() => {
        onClick(filterName);
      }}
    >
      {children}
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const OwnerPage = (props) => {
  const location = useLocation();
  console.log("line 564..");
  console.log(location.state);
  console.log("line 566..");
  const classes = useStyles();
  const address = window.location.pathname.replace("/owner/", "");
  let owner, tokenList;

  if (props.location !== undefined) {
    // if (props.location.state !== undefined) {
    ({ owner, tokenList } = props.location.state);
    // }
  }
  // const [myOwner, setOwner] = React.useState(owner);
  // const [myTokenList, setTokenList] = React.useState(tokenList);

  // React.useEffect(() => {
  //   const data = localStorage.getItem("myOwner");
  //   if (data) {
  //     setOwner(JSON.parse(data));
  //   }
  //   const tokenListData = localStorage.getItem("myTokenList");
  //   if (tokenListData) {
  //     setTokenList(JSON.parse(tokenListData));
  //   }
  // }, []);

  // React.useEffect(() => {
  //   localStorage.setItem("myOwner", JSON.stringify(owner));
  //   localStorage.setItem("myTokenList", JSON.stringify(tokenList));
  // });

  console.log("print1: " + owner);
  console.log("print2: " + tokenList);

  let filteredLatestCategories = tokenList;
  // console.log("print3: " + filteredLatestCategories)
  // if (filteredLatestCategories !== undefined) {
  filteredLatestCategories = filteredLatestCategories.filter(
    (filteredLatestCategory) => {
      // console.log("print4")
      if (filteredLatestCategory.owner.toLowerCase() == owner.toLowerCase()) {
        // console.log("print5")
        return true;
      }
      // console.log("print6")
      return false;
    }
  );
  // }
  console.log("print7");
  console.log("print8: " + filteredLatestCategories);

  const [latestLoadMoreCount, setLatestLoadMoreCount] = React.useState(1);
  const onLatestLoadMoreClick = (event) => {
    event.preventDefault();
    console.log("print9");
    setLatestLoadMoreCount(latestLoadMoreCount + 1);
  };
  console.log("print10");
  console.log(latestLoadMoreCount);

  return (
    // <div>TODO: Implement owner's page for address: {address}</div>
    true ? (
      <div className="main mb-5">
        <div className="container">
          {/* <!-- Posts --> */}
          <div className="raleway-semibold">User's Tokens</div>
          <div className="row">
            {/* <!-- Latest --> */}
            {filteredLatestCategories.length > 0 &&
              filteredLatestCategories.map((value, index) => {
                if (index < latestLoadMoreCount * 5) {
                  return index % 2 == 0 ? (
                    <div className="col-12 pr-lg-5 col-lg-6">
                      {/* <div className="raleway-semibold">User's Tokens</div> */}
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
                                  href={`https://rinkeby.opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                                >
                                  {/* <span className="opensea pl-3">
                                    {" "}
                                    OpenSea Link
                                  </span> */}
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
                    <div className="col-12 pl-lg-5 col-lg-6">
                      {/* <div className="raleway-semibold">User's Tokens</div> */}
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
                                  href={`https://rinkeby.opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                                >
                                  {/* <span className="opensea pl-3">
                                    {" "}
                                    OpenSea Link
                                  </span> */}
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
    ) : null
  );
};

const TokenPage = (props) => {
  // const tokenId = window.location.pathname.replace("/token/", "");
  let owner, category, likes, dislikes, content, tokenId;

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
  // console.log(tokenId);
  // console.log(category);
  // console.log(owner);
  // console.log(likes);
  // console.log(dislikes);
  // console.log(content)

  if (!tokenId) {
    return <div>No Token Id passed.!</div>;
  }
  return (
    // <div>TODO: Token info here: token id = {tokenId}</div>
    true ? (
      <div className="main mb-5">
        <div className="container">
          {/* <!-- Posts --> */}
          <div
            className="row"
            // style={{
            //   marginLeft: "200px",
            //   marginRight: "-200px",
            // }}
          >
            {/* <!-- Latest --> */}
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
                        {/* <span className="p-id text-white">
                                  {value.owner}
                                </span> */}
                      </div>
                      {/* <div className="row justify-content-between">
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
                              </div> */}
                    </div>
                    <div className="bg-white px-3">
                      <div className="desc pt-3 pb-2">Owner: {owner}</div>
                      <div className="desc pt-3 pb-2">Token Id: {tokenId}</div>
                      <div className="desc pt-3 pb-2">Content: {content}</div>
                      <div className="desc pt-3 pb-2">Likes: {likes}</div>
                      <div className="desc pt-3 pb-2">Dislikes: {dislikes}</div>

                      <div className="text-right">
                        {/* <span className="like px-1">
                          <span className="count px-1">Likes: {likes}</span>
                        </span>
                        <span className="unLike px-1">
                          <span className="count px-1">
                            Dislikes: {dislikes}
                          </span>
                        </span> */}
                        {/* <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`https://rinkeby.opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                                >
                                  <span className="opensea pl-3">
                                    {" "}
                                    OpenSea Link
                                  </span>
                                </a> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* {filteredLatestCategories.length > 0 &&
                  filteredLatestCategories.map((value, index) => {
                    if (index < latestLoadMoreCount * 5) {
                      return (
                        );
                    }
                  })} */}

                {/* <div className="col-12 text-center mt-5">
                  <button
                    className="btn text-white bg-black"
                    onClick={(event) => {
                      onLatestLoadMoreClick(event);
                    }}
                  >
                    Load More
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

function Homepage({ filtersList, searchValue, feesToCreate, feesToLike }) {
  // console.log(filtersList)
  // console.log("Search Value: " + searchValue)
  const [allTweets, setAllTweets] = React.useState([]);
  const [trendingTweets, setTrendingTweets] = React.useState([]);
  const [tweetMsg, setTweetMsg] = React.useState("");
  const [tweetMsgCategory, setTweetMsgCategory] = React.useState("");
  const [tokenId, setTokenId] = React.useState("");
  const [latestLoadMoreCount, setLatestLoadMoreCount] = React.useState(1);
  const [trendingLoadMoreCount, setTrendingLoadMoreCount] = React.useState(1);
  // let [filteredLatestCategories, setFilteredLatestCategories] = React.useState([])

  let filteredLatestCategories = allTweets;
  filteredLatestCategories = filteredLatestCategories.filter(
    (filteredLatestCategory) => {
      if (
        filtersList.general &&
        !filteredLatestCategory.category.toLowerCase().includes("general")
      ) {
        // filtersList = {...filtersList, general: !filtersList.general}
        return false;
      }
      if (
        filtersList.cryptocurrency &&
        !filteredLatestCategory.category
          .toLowerCase()
          .includes("cryptocurrency")
      ) {
        // filtersList = {...filtersList, cryptocurrency: !filtersList.cryptocurrency}
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

  let filteredTrendingCategories = trendingTweets;

  filteredTrendingCategories = filteredTrendingCategories.filter(
    (filteredTrendingCategory) => {
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
        // filtersList = {...filtersList, cryptocurrency: !filtersList.cryptocurrency}
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
      // console.log(category.category.toLowerCase().includes("general"))
    }
  );

  // const [filters, setFilters] = React.useState({
  //   general: false,
  //   cryptocurrency: false,
  //   nft: false,
  //   arts: false,
  //   games: false,
  //   science: false,
  //   technology: false,
  //   politics: false,
  //   society: false,
  //   sports: false,
  // });

  // const onClickGeneral = () => {
  //   setFilters({
  //     ...filters,
  //     general: !filters.general,
  //   });
  // };

  React.useEffect(() => {
    let mounted = true  //  For cancelling all the promises calls after getting work done
    getAllTweets().then((result) => {
      // console.log(result.reverse())
      // console.log("printing1.. ");
      // console.log("result: " + result);
      if (mounted) {
      let receivedResult = result;
      if (receivedResult.length > 0) {
        // console.log("printing2...");
        // console.log("received result: " + receivedResult);

        setAllTweets([...receivedResult].reverse());

        // console.log("printign3...");
        // console.log("all tweets: " + allTweets);

        //  Setting the list of trending tweets based on the number of likes
        setTrendingTweets(
          [...allTweets].sort(function (a, b) {
            return parseInt(b[3]) - parseInt(a[3]);
          })
        );
        // console.log("printing4...");
        // console.log("trending tweets: " + trendingTweets);
        // console.log(allTweets.sort("likes"))
        // console.log(allTweets);
      }
      // console.log("printing5...");
    }
    });

    return  () => mounted = false;

  }, [allTweets, trendingTweets]);

  // if (allTweets.length > 0) {

  //   console.log("printing: ", allTweets[11].id);
  // }

  // Set Tweet Message
  const onChangeTweetMsg = (event) => {
    event.preventDefault();
    if (event.target.value != null) {
      setTweetMsg(event.target.value);
    }
  };

  // Set Tweet Message Category
  const onSelectCategory = (event) => {
    event.preventDefault();
    if (event.target.value != null) {
      console.log(event.target.value);
      setTweetMsgCategory(event.target.value);
    }
  };

  const onPublishClick = async (event) => {
    event.preventDefault();
    console.log("ffef: ", tweetMsgCategory);
    // console.log(tokenContractInstance.options.from)

    if (
      tweetMsg !== "" &&
      tweetMsgCategory !== "" &&
      tweetMsgCategory !== "Choose..."
    ) {
      await publishTweet(
        tweetMsg.toString(),
        tweetMsgCategory.toString(),
        feesToCreate.toString()
      ).then((res) => {
        // console.log("app.js function printing.....")
        // console.log(res)
        setTokenId(res.toString());
      });

      // console.log(id)
      // alert("Tweet message entered: " + tweetMsg + " with category: " + tweetMsgCategory);
    }
  };
  // console.log("txn. done.. Token Id: " , tokenId)
  const onLikeClick = async (event, tokenId) => {
    event.preventDefault();
    console.log("clicked like button");
    console.log(tokenId);
    await likeTweet(Number(tokenId), feesToLike.toString()).then((result) => {
      console.log("app.js function printing");
      console.log(result);
    });
  };

  const onDislikeClick = async (event, tokenId) => {
    event.preventDefault();
    console.log("clicked like button");
    console.log(tokenId);
    await dislikeTweet(Number(tokenId)).then((result) => {
      console.log("app.js function printing");
      console.log(result);
    });
  };

  const onLatestLoadMoreClick = (event) => {
    event.preventDefault();
    setLatestLoadMoreCount(latestLoadMoreCount + 1);
  };

  const onTrendingLoadMoreClick = (event) => {
    event.preventDefault();
    setTrendingLoadMoreCount(trendingLoadMoreCount + 1);
  };

  // let route = null;

  // const onTokenButtonClick = (event, tokenId) => {
  //   route = (
  //     <Switch>
  //       <Route path="/token" render={() => <TokenPage />} />
  //       <Redirect to="/token" />
  //     </Switch>
  //   );
  //   return route;
  // };
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
                  <option selected>Choose...</option>
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
                      <div className="col-12 my-3">
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
                                href={`https://rinkeby.opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                              >
                                {/* https://rinkeby.opensea.io/assets/0x30cb06ec313f8d4acc618195389f442727aaf1d6/12 */}

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
                })}
              {/* <div class="col-12 my-3">
                  <div class="tweet-details">
                    <div class="bg-black px-3 py-2">
                      <div class="owner-id">
                        {" "}
                        <span class="title theme-text">Owner:</span>{" "}
                        <span class="p-id text-white">
                          0x012387128040918201209398213012
                        </span>
                      </div>
                      <div class="row justify-content-between">
                        <div class="col-auto token-id">
                          <span class="title theme-text">Token ID:</span>{" "}
                          <span class="p-id text-white">15AB8F007</span>
                        </div>
                        <div class="col-auto category">
                          <span class="title theme-text">Token ID:</span>{" "}
                          <span class="p-id text-white">15AB8F007</span>
                        </div>
                      </div>
                    </div>
                    <div class="bg-white px-3">
                      <div class="desc pt-3 pb-2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo
                      </div>

                      <div class="text-right">
                        <span class="like px-1">
                          <button class="btn border-0">
                            <img src="./assets/img/like.png" alt="like_img" />
                          </button>
                          <span class="count px-1">18</span>
                        </span>
                        <span class="unLike px-1">
                          <button class="btn border-0">
                            <img
                              src="./assets//img/unlike.png"
                              alt="unlike_img"
                            />
                          </button>
                          <span class="count px-1">2</span>
                        </span>
                        <span class="opensea pl-3">
                          <img
                            src="./assets/img/open-sea.svg"
                            alt="open_sea_img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 my-3">
                  <div class="tweet-details">
                    <div class="bg-black px-3 py-2">
                      <div class="owner-id">
                        {" "}
                        <span class="title theme-text">Owner:</span>{" "}
                        <span class="p-id text-white">
                          0x012387128040918201209398213012
                        </span>
                      </div>
                      <div class="row justify-content-between">
                        <div class="col-auto token-id">
                          <span class="title theme-text">Token ID:</span>{" "}
                          <span class="p-id text-white">15AB8F007</span>
                        </div>
                        <div class="col-auto category">
                          <span class="title theme-text">Token ID:</span>{" "}
                          <span class="p-id text-white">15AB8F007</span>
                        </div>
                      </div>
                    </div>
                    <div class="bg-white px-3">
                      <div class="desc pt-3 pb-2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo
                      </div>

                      <div class="text-right">
                        <span class="like px-1">
                          <button class="btn border-0">
                            <img src="./assets/img/like.png" alt="like_img" />
                          </button>
                          <span class="count px-1">18</span>
                        </span>
                        <span class="unLike px-1">
                          <button class="btn border-0">
                            <img
                              src="./assets//img/unlike.png"
                              alt="unlike_img"
                            />
                          </button>
                          <span class="count px-1">2</span>
                        </span>
                        <span class="opensea pl-3">
                          <img
                            src="./assets/img/open-sea.svg"
                            alt="open_sea_img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 my-3">
                  <div class="tweet-details">
                    <div class="bg-black px-3 py-2">
                      <div class="owner-id">
                        {" "}
                        <span class="title theme-text">Owner:</span>{" "}
                        <span class="p-id text-white">
                          0x012387128040918201209398213012
                        </span>
                      </div>
                      <div class="row justify-content-between">
                        <div class="col-auto token-id">
                          <span class="title theme-text">Token ID:</span>{" "}
                          <span class="p-id text-white">15AB8F007</span>
                        </div>
                        <div class="col-auto category">
                          <span class="title theme-text">Token ID:</span>{" "}
                          <span class="p-id text-white">15AB8F007</span>
                        </div>
                      </div>
                    </div>
                    <div class="bg-white px-3">
                      <div class="desc pt-3 pb-2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo
                      </div>

                      <div class="text-right">
                        <span class="like px-1">
                          <button class="btn border-0">
                            <img src="./assets/img/like.png" alt="like_img" />
                          </button>
                          <span class="count px-1">18</span>
                        </span>
                        <span class="unLike px-1">
                          <button class="btn border-0">
                            <img
                              src="./assets//img/unlike.png"
                              alt="unlike_img"
                            />
                          </button>
                          <span class="count px-1">2</span>
                        </span>
                        <span class="opensea pl-3">
                          <img
                            src="./assets/img/open-sea.svg"
                            alt="open_sea_img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
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
                  // console.log(index)
                  // console.log(value.id)
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
                                {/* <a
                                    target="_blank"
                                    href={`#/token/${value.id}.html`}
                                  > */}

                                {/* <button
                                  className="btn border-0"
                                  onClick={(event) => {
                                    onTokenButtonClick(event, value.id);
                                  }}
                                > */}

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

                                {/* </button> */}

                                {/* </a> */}
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
                                href={`https://rinkeby.opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                              >
                                {/* https://rinkeby.opensea.io/assets/0x30cb06ec313f8d4acc618195389f442727aaf1d6/12 */}
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
