// 定义默认数据
const defaultState = {
    num: 1,
    msg:"hello"
}

// 导出一个函数
export default (state=defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type=="addnum"){
        newState.num+=action.value;

    }
    if(action.type=="changemsg"){
        newState.msg=action.value;
    }
    return newState;
}
