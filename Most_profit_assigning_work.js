var maxProfitAssignment = function(difficulty, profit, worker){
    let profit_diff_map = {};
    worker.sort((a,b) => a - b);
    for(let i = 0; i < difficulty.length; i++){
        if(profit_diff_map[difficulty[i]] == undefined){
            profit_diff_map[difficulty[i]] = profit[i];
        }
        else{
            if(profit_diff_map[difficulty[i]] < profit[i]){
                profit_diff_map[difficulty[i]] = profit[i];
            }
        }
    }
    let totalprofit = 0;
    let difficultykeys = Object.keys(profit_diff_map);
    let ptr = 0;
    let maxprofit = 0;
    for(let i = 0 ; i < worker.length; i++){
        while(difficultykeys[ptr] <= worker[i]){
            if(profit_diff_map[difficultykeys[ptr]] > maxprofit){
                maxprofit = profit_diff_map[difficultykeys[ptr]]
            }
            ptr++;
        }
        totalprofit += maxprofit;
    }
    return totalprofit;
}