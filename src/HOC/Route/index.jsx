import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

const createRoute = (condition) => {
    return class extends Component {
        render() {
            const { path, exact, Component, redirectPath } = this.props
            return (
                <Route path={path}
                    exact ={exact}
                    render= {() => {
                        if(condition()) {
                            return <Component/>;
                        }
                        return <Redirect to={redirectPath}/>
                    }}
                />
            )
        }
    } 
}
// guard route sign in / sign up
export const AuthRoute = createRoute(() => !localStorage.getItem('a'));
export const PrivateRoute = createRoute(() => localStorage.getItem('a'));








//cách thông dụng
//// guard route sign in / sign up
// export class AuthRoute extends Component {
//     render() {
//         const { path, Component, redirectPath } = this.props
//         return (
//             <Route path={path}
//                 render= {() => {
//                     if(!localStorage.getItem('a')) {
//                         return <Component/>
//                     }
//                     return <Redirect to={redirectPath}/>
//                 }}
//             />
//         )
//     }
// }