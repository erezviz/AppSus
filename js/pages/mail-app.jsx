import {MailList} from '../apps/mail/cmps/mail-list.jsx'
import {MailFilter} from '../apps/mail/cmps/mail-filter.jsx'
import {mailService } from '../services/mail-service.js'

export class MailApp extends React.Component {

    state ={

        emails:[]

    }

    componentDidMount(){
        setTimeout(this.loadEmails,1000)
        
    }

    loadEmails=()=>{
        console.log('getting emails');
        mailService.query()
        .then(emails=>this.setState({emails},()=>{
            console.log('finished loading', emails);
        }))
    }

    render(){
        const {emails} = this.state
        if(!this.state.emails.length) return <div className="loader"></div>
        return<main className="mail-app">
            MAIL APP!
            <MailList emails={emails}/>
          
            {/* <MailFilter/> */}

        </main>
        
    }


}