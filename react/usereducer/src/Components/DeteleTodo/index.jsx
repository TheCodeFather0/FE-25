const url = 'http://localhost:3000/todos/'

export const handleDelete = (id,dispatch) => {
    fetch(url + id, {
        method:'DELETE'
    }).then((res) => {
       if (res.ok) {
            fetch(url).then((res) => {
                return res.json() 
            }).then((data) => {
                dispatch({
                    type:'DELETE_TODO',
                    data
                })
            })
       }
    })
  };