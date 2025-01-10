// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Splide, SplideSlide} from "@splidejs/react-splide";
import TestimonialCard from "@/components/website/TestimonialCard.tsx";

function Testimonials() {



    return (
        <>
            <Splide aria-label="Testimonials" options={{
                autoplay: true,
                perPage: 3,
                perMove: 1,
                resetProgress: false,
                type: 'loop',
                arrows: false,
                gap: '2rem'
                // rewind: true
            }}>
                <SplideSlide>
                    <TestimonialCard/>
                </SplideSlide>
                <SplideSlide>
                    <TestimonialCard/>
                </SplideSlide>
                <SplideSlide>
                    <TestimonialCard/>
                </SplideSlide>
                <SplideSlide>
                    <TestimonialCard/>
                </SplideSlide>
                <SplideSlide>
                    <TestimonialCard/>
                </SplideSlide>

            </Splide>
        </>
    )
}

export default Testimonials;