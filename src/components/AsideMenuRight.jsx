import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import useExit from '../hooks/useExit';

import Button from './Button';
import Avatar from "./Avatar";
import SvgIcon from './SvgIcon';
import NavBar from "./NavBar";

import { capitalizeFirst, pruneString } from '../utilities/utils';

function AsideMenuRight({ links }) {
    const { activeUser } = useContext(AuthContext);
    const { logOut } = useExit();

    return (
        <>
            <div className="aside__body">
                <div className="aside__main">
                    <div className="aside__section">
                        <Avatar character={activeUser.avatar} text={(activeUser.name + " " + activeUser.surname)} layout="horizontal" />
                        <ul className="section__list container--column-between mv-2">
                            <li class="list__item text-left"><p>{pruneString(capitalizeFirst(activeUser.race), ["_", "-"])}</p></li>
                            <li class="list__item text-left"><p>{pruneString(capitalizeFirst(activeUser.job), ["_", "-"])}</p></li>
                        </ul>
                        <ul className="section__list container--column-between mv-2">
                            <li class="list__item text-left">
                                <div class="container--center row--start g-2">
                                    <SvgIcon design='heart' color='#FF4500' />
                                    <p>{capitalizeFirst(activeUser.health.toString())}</p>
                                </div>
                            </li>
                            <li class="list__item text-left">
                                <div class="container--center row--start g-2">
                                    <SvgIcon design='money' />
                                    <p>{capitalizeFirst(activeUser.money.toString())}</p>
                                </div>
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