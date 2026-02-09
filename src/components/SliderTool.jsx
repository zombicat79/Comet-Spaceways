import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderTool({ contentType, content, settings }) {
    switch(contentType) {
        case "img":
            return (
                <Slider {...settings}>
                    {content.map((item) => {
                        return (
                            <div key={item.id}>
                                <img src={item.imgPath + item.img} alt={item.alt} />
                            </div>
                        )
                    })}
                </Slider>
            )
        case "link-img":
            return (
                <Slider {...settings}>
                    {content.map((item) => {
                        return (
                            <a key={item.id} href={item.imgPath + item.img} target="_blank" >
                                <img src={item.imgPath + item.img} alt={item.alt}/>
                            </a>
                        )
                    })}
                </Slider>
            )
        default:
            return (
                <Slider {...settings}>
                    {content.map((item, index) => {
                        return <div key={index + '-' + item}>{item}</div>
                    })}
                </Slider>
            )
    }
}

export default SliderTool;