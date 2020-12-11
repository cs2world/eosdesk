/*
** check_chainid.js
** PY Cheng
** Dec. 2020
** read the file: chain.info in this directory
** convert to JSON object
** get the chain_id string, compare with the chain id we known
** if same, create a JSON file { "Is EOS Mainnet": true, "chain_id":"x...."}
** else replace the file with {"Is EOS Mainnet": false, "chain_id":"y...."}
*/
const chain_id_we_known="aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906";

const fs = require('fs')
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}
jsonReader('./chain.info', (err, chaininfo) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(chaininfo.chain_id) // show the chain_id
    if (chaininfo.chain_id === chain_id_we_known) {
      console.log("true");
    }
    else{
      console.log("false");
    }
})
