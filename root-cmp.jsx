import { AppHeader } from "./js/cmps/app-header.jsx"
import { AppFooter } from "./js/cmps/app-footer.jsx"
import { Home } from "./js/pages/home.jsx"
import { MailApp } from "./js/pages/mail-app.jsx"


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function Apps() {

    return <Router>
        <AppHeader />
       
        <section className="app">
            <Switch>
                {/* <Route path="/book" component={BookApp} /> */}
                {/* <Route path="/keep" component={KeepApp} /> */}
                <Route path="/mail/:emailId?" component={MailApp} />
                <Route path="/mail" component={MailApp} />
                <Route path="/" component={Home} />
            </Switch>
        </section>
        <AppFooter/>
    </Router>
}