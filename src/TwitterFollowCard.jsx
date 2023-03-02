import { useState } from "react"
export function TwitterFollowCard ({ userName = 'unknown', children, InitialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(InitialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const btnClassName = isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-avatar" src={`https://unavatar.io/${userName}`} alt="El avatar de midu dev" />
                <div className="tw-follow-card-info">
                    <strong>{children}</strong>
                    <span className="tw-follow-card-name2">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    <span className="tw-follow-text">{text}</span>
                    <span className="tw-follow-card-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}