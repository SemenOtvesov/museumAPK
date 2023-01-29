export default (state = {}, identif, value) => {
    const newState = Object.assign({}, state)

    if(identif === 'setTopic'){
        newState.topic = value
    }


    return newState
}