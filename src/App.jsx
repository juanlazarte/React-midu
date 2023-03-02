import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react';

export function App () {

/*     const [name, setName] = useState('dukissj');
    const [nameFirst, setNameFirst] = useState('Super Sangre Joven') */

    const users = [
        {
            userName: 'midudev',
            name: 'Midu Dev',
            isFollowing: false
        },
        {
            userName: 'dukissj',
            name: 'Super Sangre Joven',
            isFollowing: true
        },
        {
            userName: 'reddit',
            name: 'Reddit',
            isFollowing: false
        },
        {
            userName: 'khea1',
            name: 'Khea',
            isFollowing: true
        }
    ]

    return (
    <section className='App'>
        {
            users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                    {name}
                    </TwitterFollowCard>
            ))
        }
    </section>
    )

}



{/*     <button onClick={() => setName('tuliacosta')}>Cambiar nombre de usuario</button>
    <button onClick={() => setNameFirst('Tuli Acosta')}>Cambiar nombre de Tw</button> */}


