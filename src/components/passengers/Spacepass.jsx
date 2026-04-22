function Spacepass({ userData }) {
    const defaultPicString = '/assets/images/characters/profiles/profile-default.png';

    return (
        <figure className='spacepass'>
            <div className="spacepass__header">
                <p>solar federation</p>
                <p>spacepass</p>
            </div>
            <div className="spacepass__body">
                <img className='spacepass__picture' src={userData ? '' : defaultPicString} alt="spacepass holder picture" />
                <div className='spacepass__data'></div>
            </div>
            <div className="spacepass__footer"></div>
        </figure>
    )
}

export default Spacepass;