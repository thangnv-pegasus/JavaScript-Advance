import React from "react"
import { routes } from "../config/routes"
import Lesson2 from "../pages/lesson2"
import Lesson4 from "../pages/lesson4"
import Lesson5 from "../pages/lesson5"
import Lesson1 from "../pages/lesson1"
import Lesson3 from "../pages/lesson3"

interface IRouter {
    path: string
    component: React.FC
}

export const publicRouters: IRouter[] = [
    {
        path: routes.lesson1,
        component: Lesson1
    },
    {
        path: routes.lesson2,
        component: Lesson2
    },
    {
        path: routes.lesson3,
        component: Lesson3
    },
    {
        path: routes.lesson4,
        component: Lesson4
    },
    {
        path: routes.lesson5,
        component: Lesson5
    }
]

/*
    b1: component flow
    b2: useEffect, licycle component 
    b3: key of component
    b3: useMemo
    b4: useCallback
    b5: React.memo
    b6: React.lazy
*/