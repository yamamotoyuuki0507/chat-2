// import React, { Component, useContext } from 'react'
// import { Route, Redirect } from 'react-router-dom'
// import { AuthContext } from './Auth'

// const LoggedInRoute = ({ component: Component, ...rest }) => {
//     const user = useContext(AuthContext)

//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 user ? (
//                     <Component {...props} />
//                 ) : (
//                         <Redirect to={'/login'} />
//                     )
//             }
//         />
//     )
// }

// export default LoggedInRoute


import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'

const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={props =>
                user ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={'/login'} />
                    )
            }
        />
    )
}

export default LoggedInRoute






// やっていること
// 子孫コンポーネントからProviderより与えられた値に
// アクセスする方法


//     < Redirect to = { '/login'} />
// 未ログインの場合は、ログインを促すために、
// Redirectコンポーネントを使用して/loginにリダイレクトを
// 行っていく












