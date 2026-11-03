import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { LayoutContext } from '../contexts/LayoutContext';

import useExit from '../hooks/useExit';

import CompletionBar from './ui/CompletionBar';
import Button from './Button';
import Avatar from "./Avatar";
import SvgIcon from './SvgIcon';
import NavBar from "./NavBar";

import { capitalizeFirst, pruneString } from '../utilities/utils';

function AsideMenuRight({ links }) {
    const { activeUser } = useContext(AuthContext);
    const { layoutState, handlePopupLaunch, closeAside } = useContext(LayoutContext);
    const { logOut } = useExit();

    return (
        <>
            <div className="aside__body">
                <div className="aside__main">
                    <div className="aside__section">
                        <Link to='/user-profile'>
                            <Avatar 
                                character={activeUser.avatar} 
                                text={(activeUser.name + " " + activeUser.surname)} 
                                layout="horizontal" 
                            />
                        </Link>
                        <ul className="section__list container--column-between mv-2">
                            {
                                activeUser.race === 'humanoid' 
                                ? <li className='list__item list__item--clickable text-left'><p>{pruneString(capitalizeFirst(activeUser.race), ["_", "-"])}</p></li>
                                : <Link to={{
                                    pathname: '/nhes',
                                    search: `?race=${activeUser.race}`
                                }} target='_blank' rel='noreferrer'>
                                    <li className='list__item list__item--clickable text-left'><p>{pruneString(capitalizeFirst(activeUser.race), ["_", "-"])}</p></li>
                                </Link>
                            }
                            <li className="list__item text-left"><p>{pruneString(capitalizeFirst(activeUser.job), ["_", "-"])}</p></li>
                            {layoutState.viewportWidth > 600 && <li className="list__item list__item--clickable text-left" onClick={() => {
                                closeAside('right');
                                handlePopupLaunch({ modalClass: 'overlay', content: 'spacepass', props: { spacepassHolderData: activeUser, launchOrigin: 'aside-right' } });
                                }
                            }>
                                <p>CHECK SPACEPASS</p>
                            </li>}
                        </ul>
                        <ul className="section__list container--column-between mv-2">
                            <li className="list__item text-left">
                                <div className="container--center row--start g-2">
                                    <SvgIcon design='heart' color='#FF4500' />
                                    <p>{activeUser.actualHealth}</p>
                                    <CompletionBar value={activeUser.actualHealth} topReferenceValue={activeUser.maxHealth} />
                                </div>
                            </li>
                            <li className="list__item text-left">
                                <div className="container--center row--start g-2">
                                    <SvgIcon design='money' />
                                    <p>{capitalizeFirst(activeUser.money.toString())}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="aside__section">
                        <h3 className='text-left'>MISSION STATUS</h3>
                        <ul className="mission__status section__list container--column-between column--left" >
                            <li className={activeUser.activeFlight.id ? `list__item list__item--clickable container--start g-1` : `list__item list__item--blocked container--start g-1`} >
                                <SvgIcon design='starship' color='#272643' />
                                <p>Current flight: <span className='font-smaller'>{activeUser.activeFlight.id ? activeUser.activeFlight.id : 'None' }</span></p>
                            </li>
                            <li className={activeUser.activeQuest.id ? `list__item list__item--clickable container--start g-1` : `list__item list__item--blocked container--start g-1`} >
                                <SvgIcon design='planet' color='#272643' />
                                <p>Current quest: <span className='font-smaller'>{activeUser.activeQuest.id ? activeUser.activeQuest.id : 'None' }</span></p>
                            </li>
                            {/* temporary definition: item below will depend on 'activeConversation' variable */}
                            <li className={activeUser.activeQuest.id ? `list__item list__item--clickable container--start g-1` : `list__item list__item--blocked container--start g-1`}>
                                <SvgIcon design='speech' color='#272643' />
                                <p>Last message: <span className='font-smaller'>None</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="aside__lesser">
                    <NavBar 
                        direction='vertical'
                        links={links}
                    />
                    <Button type='secondary' action={logOut} text='log out' />
                </div>

                <img className='aside__badge' src="/logos/ctsw-logo_dark_badge.png" alt='Comet Spaceways badge' />
            </div>
            <div className="aside__footer">
                <blockquote className="aside__motto">Go conquer the universe</blockquote>
            </div>
        </>
    )
}

export default AsideMenuRight;