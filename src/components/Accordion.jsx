import Lottie from "lottie-react";
import faqLottie from "../assets/FAQlottie.json";
import faq from "../assets/FAQ.json";
const Accordion = () => {
  return (
    <div className="space-y-2 bg-secondaryColor p-10 rounded-3xl w-full mr-3 lg:ml-0 mx-auto mt-10 lg:h-[70vh] flex flex-col lg:flex-row justify-evenly items-center gap-5">
      <div className="flex justify-center flex-col items-center">
        <Lottie
          animationData={faq}
          className="w-52 h-52 lg:w-[600px]"
          autoplay={true}
          speed={0.5}
          loop={true}
        ></Lottie>
        <h1 className="text-center font-bold lg:text-4xl text-2xl mb-10">
          Your Questions, Answered
        </h1>
      </div>
      <div>
        <div className="collapse collapse-plus bg-primaryColor text-secondaryColor">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-2xl font-medium">
            How are the product recommendations curated?
          </div>
          <div className="collapse-content">
            <p>
              Our product recommendations are carefully selected based on a
              combination of expert reviews, customer feedback, and advanced
              algorithms. We analyze product quality, popularity, and real user
              experiences to bring you the best options tailored to your needs.
              Whether you're looking for the latest tech or timeless home
              essentials, our goal is to make your shopping experience simple
              and reliable.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-primaryColor text-secondaryColor">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-2xl font-medium">
            What if I’m not satisfied with a product?
          </div>
          <div className="collapse-content">
            <p>
              We understand that sometimes a product might not meet your
              expectations. While we don't handle returns or refunds directly,
              we provide links to trusted sellers with clear return and exchange
              policies. Please review the seller's policy on their website or
              reach out to their support team for assistance. If you need help
              navigating the process, feel free to contact us, and we’ll guide
              you.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-primaryColor text-secondaryColor">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-2xl font-medium">
            Do you offer price comparisons?
          </div>
          <div className="collapse-content">
            <p>
              Yes! We strive to help you make informed decisions by including
              price comparisons from multiple trusted sellers whenever possible.
              Our platform highlights the best deals and ensures transparency,
              so you can choose the option that fits your budget. Simply look
              for the price comparison feature on product listings to explore
              your options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
