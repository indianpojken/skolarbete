const increment = (data) => {
    return {
        type: 'INCREMENT', // Vad för uppdatering ska vi göra
        payload: data // Den data vi vill spara i vår store
    }
}

const decrement = (data) => {
    return {
        type: 'DECREMENT', // Vad för uppdatering ska vi göra
        payload: data // Den data vi vill spara i vår store
    }
}


export { increment, decrement }
