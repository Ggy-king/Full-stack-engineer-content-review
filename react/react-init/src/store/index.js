import { configureStore } from "@reduxjs/toolkit"

import countReducer from "./store/modules/countStore"

const store = configureStore({   // 根store
    reducer: {
        count: countReducer
    }
})

export default store