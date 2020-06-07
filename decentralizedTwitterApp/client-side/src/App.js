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
} from "./scripts/tokenContractInteract";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// const TokenPage = React.lazy(() => {
//   return import("./container/TokenPage/TokenPage");
// });
// function App() {
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

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* <!-- navbar starts here --> */}
          <nav class="navbar navbar-expand-lg navbar-light bg-white py-1">
            <div class="container">
              <a class="navbar-brand" href="#">
                <span class="tag-line">
                  <img src="./assets/img/logo_svg.svg" width="50" alt="" />{" "}
                  ChainConvo Tweet Currency Exchange
                </span>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline mx-auto my-2 my-lg-0">
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn my-2 my-sm-0" type="submit">
                    <img src="./assets/img/icon_search.svg" width="18" alt="" />
                  </button>
                </form>

                <div class="dropdown-divider"></div>

                <ul class="navbar-nav ml-auto">
                  {/* <li class="nav-item dropdown d-lg-none">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories21
                      <i>
                        <img
                          src="./assets/img/expand_more-24px.svg"
                          width="30"
                          alt=""
                        />
                      </i>
                    </a>

                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        General
                      </a>
                      <a class="dropdown-item" href="#">
                        Cryptocurrency
                      </a>
                      <a class="dropdown-item" href="#">
                        NFT
                      </a>
                      <a class="dropdown-item" href="#">
                        Arts
                      </a>
                      <a class="dropdown-item" href="#">
                        Games
                      </a>
                      <a class="dropdown-item" href="#">
                        Science
                      </a>
                      <a class="dropdown-item" href="#">
                        Technology
                      </a>
                      <a class="dropdown-item" href="#">
                        Politics
                      </a>
                      <a class="dropdown-item" href="#">
                        Society
                      </a>
                      <a class="dropdown-item" href="#">
                        Sports
                      </a>
                    </div>
                  </li> */}

                  <div class="dropdown-divider"></div>

                  <li class="nav-item active">
                    <span class="social-links">
                      <a class="nav-link" href="#">
                        <img
                          src="./assets/img/twitter_logo.svg"
                          width="30"
                          alt="twitter_img"
                        />
                      </a>
                    </span>

                    <span class="social-links pl-3">
                      <a class="nav-link" href="#">
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
          <div class="container-fluid category-section d-none d-lg-block">
            <div class="container py-3">
              <div class="row">
                <div class="col-auto font-weight-bold">
                  <i class="d-inline-block">
                    <img
                      src="./assets/img/category-24px.svg"
                      width="30px"
                      alt=""
                    />
                  </i>
                  Categories11
                </div>
                <div class="col-auto ml-auto">
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
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">Cryptocurrency</button> */}
                  <FilterCategoryButton
                    isActive={filters.cryptocurrency}
                    onClick={onClick}
                    filterName="cryptocurrency"
                  >
                    Cryptocurrency
                  </FilterCategoryButton>
                </div>
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">NFT</button> */}
                  <FilterCategoryButton
                    isActive={filters.nft}
                    onClick={onClick}
                    filterName="nft"
                  >
                    NFT
                  </FilterCategoryButton>
                </div>
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">Arts</button> */}
                  <FilterCategoryButton
                    isActive={filters.arts}
                    onClick={onClick}
                    filterName="arts"
                  >
                    Arts
                  </FilterCategoryButton>
                </div>
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">Games</button> */}
                  <FilterCategoryButton
                    isActive={filters.games}
                    onClick={onClick}
                    filterName="games"
                  >
                    Games
                  </FilterCategoryButton>
                </div>
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">Science</button> */}
                  <FilterCategoryButton
                    isActive={filters.science}
                    onClick={onClick}
                    filterName="science"
                  >
                    Science
                  </FilterCategoryButton>
                </div>
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">Technology</button> */}
                  <FilterCategoryButton
                    isActive={filters.technology}
                    onClick={onClick}
                    filterName="technology"
                  >
                    Technology
                  </FilterCategoryButton>
                </div>
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">Politics</button> */}
                  <FilterCategoryButton
                    isActive={filters.politics}
                    onClick={onClick}
                    filterName="politics"
                  >
                    Politics
                  </FilterCategoryButton>
                </div>
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">Society</button> */}
                  <FilterCategoryButton
                    isActive={filters.society}
                    onClick={onClick}
                    filterName="society"
                  >
                    Society
                  </FilterCategoryButton>
                </div>
                <div class="col-auto">
                  {/* <button class="btn p-0 border-0">Sports</button> */}
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
          <Route path="/token/:id" component={TokenPage}>
            {/* <TokenPage></TokenPage> */}
          </Route>
          <Route path="/owner/:address" component={OwnerPage}></Route>
          <Route path="/">
            <Homepage filtersList={filters}></Homepage>
          </Route>
        </Switch>
        {/* <!-- Footer --> */}
        <footer>
          <div class="container py-5">
            <div class="row">
              <div class="col-12 text-center">Footer</div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

function FilterCategoryButton({ children, isActive, onClick, filterName }) {
  // console.log("printing category filter");
  // console.log(filterName)
  return (
    <Button
      class="btn p-0 border-0"
      onClick={() => {
        onClick(filterName);
      }}
    >
      {children}
    </Button>
  );
}

const OwnerPage = () => {
  const address = window.location.pathname.replace("/owner/", "");

  return <div>TODO: Implement owner's page for address: {address}</div>;
};

const TokenPage = (props) => {
  const tokenId = window.location.pathname.replace("/token/", "");
  let owner, category, likes, dislikes, content;

  //  remove this if condition to check the error
  if (props.location !== undefined) {
    ({ owner, content, category, likes, dislikes } = props.location.state);
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
    <div class="col-12 pl-lg-5 col-lg-6">
      <div class="raleway-semibold">{"Token Info".toUpperCase()}</div>
      <div class="row">
        <div class="col-12 my-3" key={tokenId}>
          <div class="tweet-details">
            <div class="bg-black px-3 py-2">
              <div class="owner-id">
                {" "}
                <span class="title theme-text">
                  {"Tweet token details".toUpperCase()}
                </span>{" "}
                {/* <span class="p-id text-white">{owner}</span> */}
              </div>
              <div class="row justify-content-between">
                <div class="col-auto token-id">
                  {/* <Link
                    to={{
                      pathname: `token/${value.id}`,
                      state: {
                        owner: value.owner,
                        category: value.category,
                        likes: value.likes,
                        dislikes: value.dislikes,
                      },
                    }}
                  > */}
                  {/* <span class="title theme-text">Token ID:</span>{" "} */}
                  {/* <span class="p-id text-white">{tokenId}</span> */}
                  {/* </Link> */}
                </div>
                <div class="col-auto category">
                  {/* <span class="title theme-text">Category:</span>{" "} */}
                  {/* <span class="p-id text-white">{category}</span> */}
                </div>
              </div>
            </div>
            <div class="bg-white px-3">
              <div class="desc pt-3 pb-2">
                Owner: {"    "}
                {owner}
              </div>
              <div class="desc pt-3 pb-2">
                TokenId: {"  "}
                {tokenId}
              </div>
              <div class="desc pt-3 pb-2">
                Tweet: {"    "}
                {content}
              </div>
              <div class="desc pt-3 pb-2">Category: {category}</div>
              <div class="desc pt-3 pb-2">
                Likes: {"    "}
                {likes}
              </div>
              <div class="desc pt-3 pb-2">Dislikes: {dislikes}</div>

              <div class="text-right">
                {/* <span class="like px-1">
                  <button
                    key={tokenId}
                    class="btn border-0"
                    // onClick={(event) => {
                    //   onLikeClick(event, value.id);
                    // }}
                  >
                    <img src="./assets/img/like.png" alt="like_img" />
                  </button>
                  <span class="count px-1">{likes}</span>
                </span> */}
                {/* <span class="unLike px-1">
                  <button
                    key={tokenId}
                    class="btn border-0"
                    // onClick={(event) => {
                    //   onDislikeClick(event, value.id);
                    // }}
                  >
                    <img src="./assets//img/unlike.png" alt="unlike_img" />
                  </button>
                  <span class="count px-1">{dislikes}</span>
                </span> */}
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://rinkeby.opensea.io/assets/${tokenContractInstance.options.address}/${tokenId}`}
                >
                  
                  <span class="opensea pl-3">
                    <img src="./assets/img/open-sea.svg" alt="open_sea_img" />
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Homepage({ filtersList }) {
  // console.log(filtersList)
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
    getAllTweets().then((result) => {
      // console.log(result.reverse())
      setAllTweets(result.reverse());

      //  Setting the list of trending tweets based on the number of likes
      setTrendingTweets(
        allTweets.sort(function (a, b) {
          return parseInt(b[3]) - parseInt(a[3]);
        })
      );
      // console.log(allTweets.sort("likes"))
      // console.log(allTweets);
    });
  }, [allTweets]);

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
      await publishTweet(tweetMsg.toString(), tweetMsgCategory.toString()).then(
        (res) => {
          // console.log("app.js function printing.....")
          // console.log(res)
          setTokenId(res.toString());
        }
      );

      // console.log(id)
      // alert("Tweet message entered: " + tweetMsg + " with category: " + tweetMsgCategory);
    }
  };
  // console.log("txn. done.. Token Id: " , tokenId)
  const onLikeClick = async (event, tokenId) => {
    event.preventDefault();
    console.log("clicked like button");
    console.log(tokenId);
    await likeTweet(Number(tokenId)).then((result) => {
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
    <div class="main mb-5">
      <div class="container">
        {/* <!-- Form Here --> */}
        <form action="">
          <div class="row justify-content-center my-5">
            <div class="col-10 col-md-9 col-lg-7 bg-white shadow-sm pt-3 px-0">
              <textarea
                name="tweetBox"
                id="tweet"
                class="w-100 border-0"
                rows="6"
                placeholder="Messages with 500 characters or longer may be costly to mint due to gas fees. Your NFT image will only support up to 280 characters."
                onChange={(event) => {
                  onChangeTweetMsg(event);
                }}
              ></textarea>

              <div class="text-right">
                <span>Category:</span>
                <select
                  id="inputState"
                  class="form-control d-inline-block mr-3"
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
                  class="border-0 btn px-3 py-2"
                  onClick={(event) => {
                    onPublishClick(event);
                  }}
                >
                  <span class="px-3">Publish</span>
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* <!-- Posts --> */}
        <div class="row">
          {/* <!-- Trending --> */}
          <div class="col-12 pr-lg-5 col-lg-6">
            <div class="raleway-semibold">Trending</div>
            <div class="row">
              {filteredTrendingCategories.length > 0 &&
                filteredTrendingCategories.map((value, index) => {
                  if (index < trendingLoadMoreCount * 5) {
                    return (
                      <div class="col-12 my-3">
                        <div class="tweet-details">
                          <div class="bg-black px-3 py-2">
                            <div class="owner-id">
                              {" "}
                              <span class="title theme-text">Owner:</span>{" "}
                              <span class="p-id text-white">{value.owner}</span>
                            </div>
                            <div class="row justify-content-between">
                              <div class="col-auto token-id">
                                <span class="title theme-text">Token ID:</span>{" "}
                                <span class="p-id text-white">{value.id}</span>
                              </div>
                              <div class="col-auto category">
                                <span class="title theme-text">Category:</span>{" "}
                                <span class="p-id text-white">
                                  {value.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="bg-white px-3">
                            <div class="desc pt-3 pb-2">{value.content}</div>

                            <div class="text-right">
                              <span class="like px-1">
                                <button class="btn border-0">
                                  <img
                                    src="./assets/img/like.png"
                                    alt="like_img"
                                  />
                                </button>
                                <span class="count px-1">{value.likes}</span>
                              </span>
                              <span class="unLike px-1">
                                <button class="btn border-0">
                                  <img
                                    src="./assets//img/unlike.png"
                                    alt="unlike_img"
                                  />
                                </button>
                                <span class="count px-1">{value.dislikes}</span>
                              </span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://rinkeby.opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                              >
                                {/* https://rinkeby.opensea.io/assets/0x30cb06ec313f8d4acc618195389f442727aaf1d6/12 */}

                                <span class="opensea pl-3">
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
              <div class="col-12 text-center my-5">
                <button
                  class="btn text-white bg-black"
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
          <div class="col-12 pl-lg-5 col-lg-6">
            <div class="raleway-semibold">Latest</div>
            <div class="row">
              {filteredLatestCategories.length > 0 &&
                filteredLatestCategories.map((value, index) => {
                  // console.log(index)
                  // console.log(value.id)
                  if (index < latestLoadMoreCount * 5) {
                    return (
                      <div class="col-12 my-3" key={index}>
                        <div class="tweet-details">
                          <div class="bg-black px-3 py-2">
                            <div class="owner-id">
                              {" "}
                              <Link to={`owner/${value.owner}`}>
                                <span class="title theme-text">Owner:</span>{" "}
                                <span class="p-id text-white">
                                  {value.owner}
                                </span>
                              </Link>
                            </div>
                            <div class="row justify-content-between">
                              <div class="col-auto token-id">
                                {/* <a
                                    target="_blank"
                                    href={`#/token/${value.id}.html`}
                                  > */}

                                {/* <button
                                  class="btn border-0"
                                  onClick={(event) => {
                                    onTokenButtonClick(event, value.id);
                                  }}
                                > */}

                                <Link
                                  to={{
                                    pathname: `token/${value.id}`,
                                    state: {
                                      owner: value.owner,
                                      content: value.content,
                                      category: value.category,
                                      likes: value.likes,
                                      dislikes: value.dislikes,
                                    },
                                  }}
                                >
                                  <span class="title theme-text">
                                    Token ID:
                                  </span>{" "}
                                  <span class="p-id text-white">
                                    {value.id}
                                  </span>
                                </Link>

                                {/* </button> */}

                                {/* </a> */}
                              </div>
                              <div class="col-auto category">
                                <span class="title theme-text">Category:</span>{" "}
                                <span class="p-id text-white">
                                  {value.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="bg-white px-3">
                            <div class="desc pt-3 pb-2">{value.content}</div>

                            <div class="text-right">
                              <span class="like px-1">
                                <button
                                  key={index}
                                  class="btn border-0"
                                  onClick={(event) => {
                                    onLikeClick(event, value.id);
                                  }}
                                >
                                  <img
                                    src="./assets/img/like.png"
                                    alt="like_img"
                                  />
                                </button>
                                <span class="count px-1">{value.likes}</span>
                              </span>
                              <span class="unLike px-1">
                                <button
                                  key={index}
                                  class="btn border-0"
                                  onClick={(event) => {
                                    onDislikeClick(event, value.id);
                                  }}
                                >
                                  <img
                                    src="./assets//img/unlike.png"
                                    alt="unlike_img"
                                  />
                                </button>
                                <span class="count px-1">{value.dislikes}</span>
                              </span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://rinkeby.opensea.io/assets/${tokenContractInstance.options.address}/${value.id}`}
                              >
                                {/* https://rinkeby.opensea.io/assets/0x30cb06ec313f8d4acc618195389f442727aaf1d6/12 */}
                                <span class="opensea pl-3">
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

              <div class="col-12 text-center mt-5">
                <button
                  class="btn text-white bg-black"
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
