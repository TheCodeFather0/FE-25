const url = 'http://localhost:3000/todos/'

export const GetAllData = (dispatch) => {
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        dispatch({
            data,
            type:'GET_ALL_DATA',
        })
    })
}