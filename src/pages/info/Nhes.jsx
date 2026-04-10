import ContentSection from '../../layout/ContentSection';
import Intersection from '../../components/Intersection';
import SliderTool from '../../components/SliderTool';
import PromoPoster from '../../components/PromoPoster';

function Nhes() {
    const sliderSettings = {
        autoplay: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    }

    return (
        <main className="nhes">
            <section className="nhes__intro">
                <h2 className="homepage__offers-heading">TRAVELING AS A NON-HUMAN ENTITY (Nhe)</h2>
                <p>
                    Since the landmark passage of the Alien Liberty of Movement Act in 2094 all alien passengers are allowed to travel 
                    within the boundaries of the Solar Systemo. This historic legislation, approved by the Senate of the Solar Federation, officially mandates that non-human travelers be permitted to board commercial flights and travel normally between all established destinations within the Solar System.
                </p>
                <p>
                    In compliance on board Comet Spaceways flights
                </p>
            </section>
            <section className="homepage__promos">
                <h3 className="homepage__offers-heading">PERMITTED RACES</h3>
                <SliderTool contentType="component" settings={sliderSettings} >
                    <PromoPoster
                        promoCatch="Recognize yourself? 🤔"
                        heading="big-headed gray"
                        body={[
                            "Join humankind's colonization effort, and embark on a life-changing journey that will take you and your family to a new home on a brave new world.",
                            "New generational spaceship set to depart on early 2127."
                        ]}
                        promoImg="trappist"
                        alert="wanna know more?"
                        cta="inspect"
                    />
                </SliderTool>
            </section>
            <section>
            <h3 className="homepage__offers-heading">REQUIREMENTS</h3>
            </section>
        </main>
    );
}

export default Nhes;

