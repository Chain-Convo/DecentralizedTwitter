import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import getWeb3 from "./scripts/getWeb3"
import Web3 from "web3";
// import TokenContract from "./contracts/tokenContractInfo.json";
import tokenContractInstance from "./scripts/tokenContractInstance";
import { publishTweet, getAllTweets } from "./scripts/tokenContractInteract";

function App() {
  const [allTweets, setAllTweets] = React.useState([]);
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
  });

  React.useEffect(() => {
    getAllTweets().then((result) => {
      console.log("inside app.js file");
      console.log(result[11]);
      setAllTweets(result.reverse());
      // console.log(allTweets.length);
    });
  }, []);

  // if (allTweets.length > 0) {

  //   console.log("printing: ", allTweets[11].id);
  // }
  // React States to set the tweet msg, category, token Id, address
  const [tweetMsg, setTweetMsg] = React.useState("");
  const [tweetMsgCategory, setTweetMsgCategory] = React.useState("");
  const [tokenId, setTokenId] = React.useState("");

  // Set Tweet Message
  const onChangeTweetMsg = (event) => {
    if (event.target.value != null) {
      setTweetMsg(event.target.value);
    }
  };

  // Set Tweet Message Category
  const onSelectCategory = (event) => {
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
    console.log(tokenId)
    // await getAllTweets().then((result) => {
    //   console.log("inside app.js file");
    //   console.log(result[11]);
    //   setAllTweets(result)
    //   console.log(allTweets.length);
    // });
  };
  return (
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
                <li class="nav-item dropdown d-lg-none">
                  <a
                    class="nav-link dropdown-toggle"
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
                </li>

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
                Categories
              </div>
              <div class="col-auto ml-auto">
                <button class="btn p-0 border-0">General</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">Cryptocurrency</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">NFT</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">Arts</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">Games</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">Science</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">Technology</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">Politics</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">Society</button>
              </div>
              <div class="col-auto">
                <button class="btn p-0 border-0">Sports</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- MAIN SECTION --> */}
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
                </div>
                <div class="col-12 text-center my-5">
                  <button class="btn text-white bg-black">Load More</button>
                </div>
              </div>
            </div>
            {/* <!-- Latest --> */}
            <div class="col-12 pl-lg-5 col-lg-6">
              <div class="raleway-semibold">Latest</div>
              <div class="row">
                {allTweets.length > 0 &&
                  allTweets.reverse().map((value, index) => {
                    // console.log(index)
                    // console.log(value.id)
                    if (index <= 4) {
                      return (
                        <div class="col-12 my-3" key={index}>
                          <div class="tweet-details">
                            <div class="bg-black px-3 py-2">
                              <div class="owner-id">
                                {" "}
                                <span class="title theme-text">
                                  Owner:
                                </span>{" "}
                                <span class="p-id text-white">
                                  {value.owner}
                                </span>
                              </div>
                              <div class="row justify-content-between">
                                <div class="col-auto token-id">
                                  <span class="title theme-text">
                                    Token ID:
                                  </span>{" "}
                                  <span class="p-id text-white">
                                    {value.id}
                                  </span>
                                </div>
                                <div class="col-auto category">
                                  <span class="title theme-text">
                                    Category:
                                  </span>{" "}
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
                                  <button key={index}
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
                                  <button class="btn border-0">
                                    <img
                                      src="./assets//img/unlike.png"
                                      alt="unlike_img"
                                    />
                                  </button>
                                  <span class="count px-1">
                                    {value.dislikes}
                                  </span>
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
                          <span class="title theme-text">Category:</span>{" "}
                          <span class="p-id text-white">General</span>
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
                          <button
                            class="btn border-0"
                            onClick={(event) => {
                              onLikeClick(event);
                            }}
                          >
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
                <div class="col-12 text-center mt-5">
                  <button class="btn text-white bg-black">Load More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer>
        <div class="container py-5">
          <div class="row">
            <div class="col-12 text-center">Footer</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
