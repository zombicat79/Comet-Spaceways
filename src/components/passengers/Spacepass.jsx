import { format, add } from "date-fns";

function Spacepass({ spacepassData, orientation="landscape" }) {
    let classesCalculation = 'spacepass';
    if (!spacepassData) classesCalculation = classesCalculation + ' spacepass--generic';
    if (orientation === 'portrait') classesCalculation = classesCalculation + ' spacepass--inverted';
    const defaultPicString = '/assets/images/characters/profiles/profile-default.png';

    return (
        <figure className={classesCalculation}>
            <div className="spacepass__header">
                <p className="spacepass__provider">solar federation</p>
                <p className="spacepass__title">spacepass</p>
            </div>
            <div className="spacepass__body">
                <img className="spacepass__picture" src={spacepassData ? '' : defaultPicString} alt="spacepass holder picture" />
                <div className="spacepass__data">
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Type</p>
                            <p className="data__value">{spacepassData ? spacepassData.category : 'B1'}</p>
                        </div>
                        <div className="data__item">
                            <p className="data__label">Authority</p>
                            <p className="data__value">{spacepassData ? `SF / ${spacepassData.issuePlace}` : 'SF / EEU'}</p>
                        </div>
                        <div className="data__item">
                            <p className="data__label">Spacepass No.</p>
                            <p className="data__value">{spacepassData ? spacepassData.passNum : 'AAA000000'}</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Tribe / Cast / Faction</p>
                            <p className="data__value">{spacepassData ? spacepassData.surname : 'SAMPLE FACTION'}</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Name</p>
                            <p className="data__value">{spacepassData ? spacepassData.name : 'SAMPLE NAME'}</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Race</p>
                            <p className="data__value">{spacepassData ? spacepassData.race : 'RACE'}</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Date of issue</p>
                            <p className="data__value">
                                {spacepassData ? format(spacepassData.issueDate, 'dd-MM-yyyy') : format(add(new Date(), { years: 100 }).toDateString(), 'dd-MM-yyyy')}
                            </p>
                        </div>
                        <div className="data__item">
                            <p className="data__label">Date of expiry</p>
                            <p className="data__value">
                                {spacepassData ? format(spacepassData.expiryDate, 'dd-MM-yyyy') : format(add(new Date(), { years: 105 }).toDateString(), 'dd-MM-yyyy')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacepass__footer">
                <p className="spacepass__encoding">
                    {spacepassData ? spacepassData.namePrint : 'P<SFSAMPLEFACTION<SAMPLENAME<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'}
                </p>
                <p className="spacepass__encoding">
                    {spacepassData ? spacepassData.serialNum : 'AAA000000SF743499958HJ744424<<<<<<<<<<<EEU<<<<<<<<<<<<<<<<<<<<<<'}
                </p>
            </div>

            {!spacepassData && <p className="specimen-tag">*-- SPECIMEN --*</p>}
        </figure>
    )
}

export default Spacepass;