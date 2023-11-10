
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const REMOVE_FAV_COM = "REMOVE_FAV_COM"
export const SEARCH_ARTIST = 'SEARCH_ARTIST'
export const ALBUM_HOME = 'ALBUM_HOME'
export const SET_PLAYER = 'SET_PLAYER'

export const getSearch = (searchValue) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                searchValue,
                {
                    headers: {
                        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                        "X-RapidAPI-Key":
                            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
                    },
                }
            )
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: SEARCH_ARTIST,
                    payload: data.data,

                })
            } else {
                throw new Error("ops ricerca non trovata!")
            }
        } catch (error) {
            console.log("errore", error)
        }
    }
}

export const getAlbum = (artistName) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                artistName,
                {
                    headers: {
                        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                        "X-RapidAPI-Key":
                            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
                    },
                }
            )
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: ALBUM_HOME,
                    payload: data.data,

                })
            } else {
                throw new Error("ops ricerca non trovata!")
            }
        } catch (error) {
            console.log("errore", error)
        }
    }
}

export const setPlayer = (selectedAlbum) => (
    {
        type: SET_PLAYER,
        payload: selectedAlbum,
    }
)

export const addFavouriteAction = (liked) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: liked,
    }
}

// export const removeFavAction = (data) => {
//     return {
//         type: REMOVE_FAV_COM,
//         payload: data,
//     }
// }