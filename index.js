function receivesAFunction(finishBattlePass){
    finishBattlePass();
}

function returnsANamedFunction(){
    function buyBattlePass(){
        return "Dont forget your battle pass!"
    }
        return buyBattlePass;
}

function returnsAnAnonymousFunction(){
    return function(){
        return "You forgot didn/'t you"
    }
}