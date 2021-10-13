import { InstrumentItemType } from "../page/index/type";
import moment from 'moment';

const Instrument = ["BANKNIFTY SEP -num- CE","RELIANCE SEP -num- FUT","NIFTY SEP -num- CE", "HDFC BANK -num-","GOLD SEP FUT -num-"];
const Products = ["NRML","MIS","CNC"]
const Types = ["Cash", "F&O", "Equity","Commodity", "Currency"];
const CurrentPos = ["Open", "Close"];

interface AccountType{
    id:string
    name:string
}
const Accounts:AccountType[] = [{
    id:"YN8894",
    name:"Zerodha"
},{
    id:"AC345TH",
    name:"IIFL"
}]

interface Range {
    min:number
    max:number
}
const instrumentRange:Range = {
    min:2500,
    max:10000
}

const quantityRange:Range = {
    min:-1000,
    max:1000
}

const entryRange:Range = {
    min:25,
    max:1000
}

const marketRange:Range = {
    min:25,
    max:1000
}

const marginRange:Range = {
    min:25000,
    max:550000
}

const pandlRange:Range ={
    min: -6000,
    max: 4000
}

const varRange:Range = {
    min : 0,
    max: 100
}



export const fetchPositions = (n  = 1000):InstrumentItemType[] =>{
    const rows:InstrumentItemType[] = [];

    const now = moment();
    while(n--){
        let instrument = Instrument[Math.floor(Math.random()*Instrument.length)];
        const instrumentNum = randomIntFromInterval(instrumentRange.min, instrumentRange.max); 
        instrument = instrument.replace("-num-", `${instrumentNum}`);
        const product = Products[Math.floor(Math.random()*Products.length)]; 
        const itemType = Types[Math.floor(Math.random()*Types.length)]; 
        const account = Accounts[Math.floor(Math.random()*Accounts.length)];
        const currentPosition = CurrentPos[Math.floor(Math.random()*CurrentPos.length)];
        rows.push({
            instrument:instrument,
            product:product,
            type:itemType,
            accountId:account.id,
            currentPosition,
            quantity:randomIntFromInterval(quantityRange.min,quantityRange.max),
            entry:randomIntFromInterval(entryRange.min,entryRange.max),
            market:randomIntFromInterval(marketRange.min, marketRange.max),
            margin:randomIntFromInterval(marginRange.min, marginRange.max),
            pandl:randomIntFromInterval(pandlRange.min, pandlRange.max),
            var:randomIntFromInterval(varRange.min, varRange.max),
            time:now.format("MM-DD-YYYY HH:MM")
        })

        now.add(-1,"days");
    }

    return rows;
}


const  randomIntFromInterval = (min, max):number => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }