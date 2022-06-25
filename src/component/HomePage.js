import React from "react";
import NewsletterSubscription from './NewsletterSubscription';

class HomePage extends React.Component {

    render() {
        return( 
        <div>
            <div>Page d'accueil </div>
            <NewsletterSubscription />
        </div>

        )
    }

}

export default HomePage;