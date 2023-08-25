import{configureStore} from "@reduxjs/toolkit"
import taskReducer from "./components/slices/taskSlice"

export const store = configureStore({
    reducer:{
        tasks: taskReducer


    }

})
