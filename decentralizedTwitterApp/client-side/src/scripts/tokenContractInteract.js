// import TokenContract from "./contracts/tokenContractInfo.json";
import tokenContractInstance from "./tokenContractInstance"

// let id = await contractInstance.methods
//   .create(tweetMsg.toString(), tweetMsgCategory.toString())
//   .send({ from: account, value: "0x38D7EA4C68000" });

export const publishTweet = (tweetMsg, tweetMsgCategory, feesToCreate) => {
    return new Promise(async (resolve, reject) => {
        try {
            await tokenContractInstance.methods
            .create(tweetMsg, tweetMsgCategory)
            .send({value: feesToCreate})
            .once("receipt", async(result) => {
                // 0x38D7EA4C68000
                // "0x5AF3107A4000"
                // console.log("printing in tokenContract Interact info file..")
                // console.log(result.events.Transfer.returnValues.tokenId);
                resolve(result.events.Transfer.returnValues.tokenId)
            });
        } catch (error) {
            reject(error)
        }
    })
}

export const likeTweet = (tokenId, feesToLike) => {
    return new Promise(async(resolve, reject) => {
        try {
            await tokenContractInstance.methods
            .like(tokenId)
            .send({value: feesToLike})
            .once("receipt", async (result) => {
                // console.log("printing inside the tokenContract info file")
                // console.log(result)
                resolve(result)
            })
        } catch (error) {
            reject (error)
        }
    })
}

export const dislikeTweet = (tokenId) => {
    return new Promise(async(resolve, reject) => {
        try {
            await tokenContractInstance.methods
            .dislike(tokenId)
            .send()
            .once("receipt", async (result) => {
                console.log("printing inside the tokenContract info file")
                console.log(result)
                resolve(result)
            })
        } catch (error) {
            reject (error)
        }
    })
}

export const getAllTweets = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allTweets = await tokenContractInstance.methods
            .tweets()
            .call()
            // console.log("printing inside tokenContract instance info file..")
            // console.log(allTweets)
            resolve(allTweets)
        } catch (error) {
            reject (error)
        }
    })
}

export const getFeesToCreate = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let feesToCreate = await tokenContractInstance.methods
            .feesToCreate()
            .call()
            // console.log("printing create fees inside script")
            // console.log(feesToCreate)
            resolve(feesToCreate)
        }
        catch (error) {
            // console.log("printing error in script......")
            reject(error)
        }
    })
}

export const getFeesToLike = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let feesToLike = await tokenContractInstance.methods
            .feesToLike()
            .call()
            // console.log("printing like fees inside script..")
            // console.log(feesToLike)
            resolve(feesToLike)
        } catch (error) {
            // console.log("printing error in script..")
            reject(error)
        }
    })
}

// export const getTweetInfo = (tokenId) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let tweetInfo = await tokenContractInstance.methods
//             ._tweets(tokenId)
//             .call()
//             console.log("printing inside tokenContract instance info file..")
//             console.log(tweetInfo)
//             resolve(tweetInfo)
//         } catch (error) {
//             reject (error)
//         }
//     })
// }
// export const userLogin = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       await contractInfo.methods
//         .registerUser()
//         .send()
//         .once("receipt", async (result) => {
//           console.log(result);
//           resolve(result.events.CreateCredId.returnValues.credId);
//         });
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
