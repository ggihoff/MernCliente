import React, {useState} from 'react';
import Tw from './Tw'
import Tweet from './Tweet'


const Feed = () => {

    const [tweets, setTweets] = useState([{nombre: 'Gustavo iglesias', 
                                       tweet : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                                    },
                                    {nombre: 'Juan iglesias iglesias', 
                                    tweet : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                                    }
                                    ,
                                {nombre: 'Gustavo iglesias', 
                                tweet : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                                     }])
    return (
        <div className="App">
        <div className="__feed">
        <Tweet/>
        {
        tweets.map(tweet => (
            <Tw nombre={tweet.nombre} tweet={tweet.tweet}/>
        ))
}
        </div>
      </div>
    );
};

export default Feed;