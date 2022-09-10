import { FINANCE, WEATHER, EMOTIONS } from "./consts.mjs";
const handleComplaint = function(complaint){
    const {text, type} = complaint;
    if(type === FINANCE){
        console.log(`Money doesn’t grow on trees, you know.`);
    }else if(type === WEATHER){
        console.log(`It is the way of nature. Not much to be done.`);
    }else if(type === EMOTIONS){
        console.log(`It’ll pass, as all things do, with time.`);
    }else{
        console.log("Complaint's type isn't recognized.");
    }
}

export default handleComplaint;