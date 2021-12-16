let mapping = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
];

function getCacheCount(cid) {
    let result = {};
    cid.forEach(t => {
        switch (t[0]) {
            case "PENNY": {
                result.PENNY = t[1] * 100;
                break;
            }
            case "NICKEL": {
                result.NICKEL = t[1] * 20;
                break;
            }
            case "DIME": {
                result.DIME = t[1] * 10;
                break;
            }
            case "QUARTER": {
                result.QUARTER = t[1] * 4;
                break;
            }
            case "ONE": {
                result.ONE = t[1] / 1;
                break;
            }
            case "FIVE": {
                result.FIVE = t[1] / 5;
                break;
            }
            case "TEN": {
                result.TEN = t[1] / 10;
                break;
            }
            case "TWENTY": {
                result.TWENTY = t[1] / 20;
                break;
            }
            case "ONE HUNDRED": {
                result["ONE HUNDRED"] = t[1] / 100;
                break;
            }
        }
    });
    return result;
}

function excute(types, change, result, value) {
    if(value === -1){
        result.change = [];
        return;
    }
    //类型,面值,总张数
    let curType = {
        key:mapping[value][0],
        value:mapping[value][1],
        count:types[mapping[value][0]]
    };
    //该类型最大需要几张
    let count = Math.floor((change * 100) / (curType.value * 100));
    if (count > 0) {
        //这个类型的总张数足够
        if (curType.count > count) {
            let money = count * curType.value;
            result.change.push([curType.key, money]);
            change = (change - money).toFixed(2);
            value -= 1;
            if(change > 0){
                return excute(types,change,result,value);
            } else{
                return;
            }
        } else {
            //有几张先分配
            if(curType.count > 0){
                let money = curType.count * curType.value;
                result.change.push([curType.key, money]);
                change = (change - money).toFixed(2);
                value -= 1;
                if(change > 0){
                    return excute(types,change,result,value);
                } else{
                    return;
                }
            } else{
                value -= 1;
                return excute(types,change,result,value);
            }
        }
    } else{
        value -= 1;
        return excute(types,change,result,value);
    }
}

function checkCashRegister(price, cash, cid) {
    //应找回金额
    let change = (cash - price).toFixed(2);
    //收银机总金额
    let money = 0;
    cid.map(t => t[1]).forEach(t => money += t);
    let result = {
        change: []
    };
    if (change > money) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    } else if (change == money) {
        result.status = "CLOSED";
        result.change = cid;
    } else {
        //每种纸币各有几张
        let types = getCacheCount(cid);
        excute(types,change,result,8);
        if(result.change.length === 0){
            result.status = "INSUFFICIENT_FUNDS";
        } else{
            result.status = "OPEN";
        }
    }
    console.log(result);
    return result;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);