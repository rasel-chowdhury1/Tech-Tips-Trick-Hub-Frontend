import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const page = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-center mb-6">
        We&apos;d love to hear from you! Please reach out with any questions or
        feedback.
      </p>

      {/* Contact Form */}
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <Input type="text" label="Name" />
        </div>
        <div className="mb-3">
          <Input type="email" label="Email" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-dark dark:text-slate-100"
          >
            Message
          </label>
          <textarea
            id="message"
            className="border rounded-lg w-full p-2 mt-2 bg-[#f7f7f8] dark:bg-dark-100 border-0"
            rows={4}
            required
            placeholder="Message...!"
          ></textarea>
        </div>
        <Button fullWidth type="submit" className=" custom-btn">
          Send Message
        </Button>
      </form>

      {/* Support Highlight Section */}
      <div className="bg-secondary-700 dark:bg-dark-100 py-10 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-slate-50 mb-4">
            Why Our Support is the Best
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-100 mb-8">
            We pride ourselves on providing unparalleled support to our
            customers. Our dedicated team is always ready to assist you with any
            inquiries, ensuring your experience is seamless and satisfying.
          </p>
          <div className="flex justify-center gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary">
                24/7 Availability
              </h3>
              <p className="text-gray-600">
                Reach us anytime, day or night, for immediate assistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Our knowledgeable staff is trained to provide the best
                solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your happiness is our priority; we go the extra mile to ensure
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
