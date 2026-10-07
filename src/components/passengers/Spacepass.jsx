import { useQuery } from "@tanstack/react-query";
import { format, add } from "date-fns";
import { getSpacepass } from "../../services/spacepassService";

import Loader from "../Loader";

function Spacepass({ props=null, orientation="landscape" }) {
    const { data: spacepassData, isLoading } = useQuery({
        queryKey: ['active-spacepass'],
        queryFn: async () => {
            if (!props) return null;

            if (import.meta.env.PROD) {
                // TO DO
            } else {
                return await getSpacepass(props.spacepassHolderData.spacepass);
            }
        }
    });

    let classesCalculation = 'spacepass';
    if (!spacepassData) classesCalculation = classesCalculation + ' spacepass--generic';
    if (orientation === 'portrait') classesCalculation = classesCalculation + ' spacepass--inverted';
    
    const defaultPicString = '/assets/images/characters/profiles/profile-default.png';
    const spacepassHolderPicString = spacepassData ? `/assets/images/characters/profiles/profile-${props?.spacepassHolderData?.avatar}.webp` : null;

    if (isLoading) {
        return (
            <Loader spinner='spinner_light' />
        )
    }

    return (
        <figure className={classesCalculation}>
            <div className="spacepass__header">
                <p className="spacepass__provider">solar federation</p>
                <p className="spacepass__title">spacepass</p>
            </div>
            <div className="spacepass__body">
                <img className="spacepass__picture" src={spacepassData ? spacepassHolderPicString : defaultPicString} alt="spacepass holder picture" />
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
                            <p className="data__value">{spacepassData ? props?.spacepassHolderData?.surname.toUpperCase() : 'SAMPLE FACTION'}</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Name</p>
                            <p className="data__value">{spacepassData ? props?.spacepassHolderData?.name.toUpperCase() : 'SAMPLE NAME'}</p>
                        </div>
                    </div>
                    <div className="data__row">
                        <div className="data__item">
                            <p className="data__label">Race</p>
                            <p className="data__value">{spacepassData ? props?.spacepassHolderData?.race.toUpperCase() : 'RACE'}</p>
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