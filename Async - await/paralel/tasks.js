const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne() {
        try{
            throw new Error("HOLAa");
            await sleep(3000);
            return 'One value';
        } catch(e) {
            console.log(e)
        }
    },

    async taskTwo(){
        try{
            throw new Error("HOLAa");
            await sleep(2000);
            return 'Two value'
        } catch(e){
            console.log(e);
        }
    }
}