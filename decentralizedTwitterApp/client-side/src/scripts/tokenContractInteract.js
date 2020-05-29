// import TokenContract from "./contracts/tokenContractInfo.json";
import tokenContractInstance from "./tokenContractInstance"

// let id = await contractInstance.methods
//   .create(tweetMsg.toString(), tweetMsgCategory.toString())
//   .send({ from: account, value: "0x38D7EA4C68000" });

export const publishTweet = (tweetMsg, tweetMsgCategory) => {
    return new Promise(async (resolve, reject) => {
        try {
            await tokenContractInstance.methods
            .create(tweetMsg, tweetMsgCategory)
            .send({value: "0x38D7EA4C68000"})
            .once("receipt", async(result) => {
                // console.log("printing in tokenContract Interact info file..")
                // console.log(result.events.Transfer.returnValues.tokenId);
                resolve(result.events.Transfer.returnValues.tokenId)
            });
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllTweets = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allTweets = await tokenContractInstance.methods
            .tweets()
            .call()
            console.log("printing inside tokenContract instance info file..")
            console.log(allTweets)
            resolve(allTweets)
        } catch (error) {
            reject (error)
        }
    })
}
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
