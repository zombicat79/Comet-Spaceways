import { format, add } from "date-fns";

function Spacepass({ userData, orientation="landscape" }) {
    let classesCalculation = 'spacepass';
    if (!userData) classesCalculation = classesCalculation + ' spacepass--generic';
    if (orientation === 'portrait') classesCalculation = classesCalculation + ' spacepass--inverted';
    const defaultPicString = '/assets/images/characters/profiles/profile-default.png';

    return (
        <figure className={classesCalculation}>
            <div className="spacepass__header">
                <p className="spacepass__provider">solar federation</p>
                <p className="spacepass__title">spacepass</p>
            </div>
            <div className="spacepass__body">
                <img className="spacepass__picture" src={userData ? '' : defaultPicString} alt="spacepass holder picture" />
                <div className="spacepass__data">
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Type</p>
                            <p className="data__value">B1</p>
                        </div>
                        <div className="data__item">
                            <p className="data__label">Authority</p>
                            <p className="data__value">SF / EEU</p>
                        </div>
                        <div className="data__item">
                            <p className="data__label">Spacepass No.</p>
                            <p className="data__value">AAA000000</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Tribe / Cast / Faction</p>
                            <p className="data__value">SAMPLE FACTION</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Name</p>
                            <p className="data__value">SAMPLE NAME</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Race</p>
                            <p className="data__value">SAMPLE RACE</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Date of issue</p>
                            <p className="data__value">
                                {format(add(new Date(), { years: 100 }).toDateString(), 'dd-MM-yyyy')}
                            </p>
                        </div>
                        <div className="data__item">
                            <p className="data__label">Date of expiry</p>
                            <p className="data__value">
                                {format(add(new Date(), { years: 105 }).toDateString(), 'dd-MM-yyyy')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacepass__footer">
                <p className="spacepass__encoding">
                    {'P<SFSAMPLEFACTION<SAMPLENAME<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'}
                </p>
                <p className="spacepass__encoding">
                    {'AAA000000SF743499958HJ744424<<<<<<<<<<<EEU<<<<<<<<<<<<<<<<<<<<<<'}
                </p>
            </div>

            {!userData && <p className="specimen-tag">*-- SPECIMEN --*</p>}
        </figure>
    )
}

export default Spacepass;