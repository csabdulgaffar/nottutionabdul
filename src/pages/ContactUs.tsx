import map from "../assets/images/sample.jpg";

function ContactUs() {
  return (
    <>
      <div className="text-center font-medium text-3xl pt-3"> Contact us</div>
      <div className="py-3  text-justify">For any inquiries, support needs, or feedback, our dedicated team is here to assist you. Reach out to us via email at support@nexGenPasswordManager.com, and we'll promptly address your concerns. Your satisfaction and security are our top priorities, and we're committed to ensuring that your experience with Our password manager exceeds your expectations.






      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3 pt-3">
          <div>
            <div className="text-xl font-medium">Address</div>
            <div>
              <div>123 Janakpuri</div>
              <div>Near XYZ Market</div>
              <div>New Delhi -11050</div>
            </div>
          </div>
          <div>
            <div className="text-xl font-medium">Contact No.</div>
            <div>
              9718220173
            </div>
          </div>
          <div>
            <div className="text-xl font-medium">Email Id:</div>
            <div>
              admin@npmanageer.com
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="font-serif text-xl py-3 border-b-4  border-gray-800  border-solid inline-block  mb-3">Connect with Us</div>
              <div className="flex flex-col gap-2"> <div>Linkedin</div>
                <div>Facebook</div>
                <div>Twitter</div></div>

            </div>
            <div>
              <div className="font-serif text-xl py-3 border-b-4 border-gray-800 border-solid inline-block  mb-3">Reach Us</div>
              <img src={map} className="w-24" alt="" />

            </div>
          </div>
        </div>
        <div>
          <div className="text-center font-medium">Have any query? Write us now!!</div>
          <form className=" mx-auto grid grid-cols-1 gap-3 " onSubmit={e => e.preventDefault()}>
            <div>
              <div className="py-3">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg  text-xs " />
              </div>
              <div className="py-3">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No:</label>
                <input type="number" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg  text-xs " />
              </div>
              <div className="py-3">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg  text-xs " />
              </div>
            </div>

            <div className="mb-5 py-3">
              <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comments</label>
              <input type="text" id="large-input" className="block wrap w-full h-24 p-4 text-gray-900 border border-gray-300 rounded-lg  text-base" />
            </div>
            <button className="span bg-gray-900 py-3 rounded-lg hover:scale-95  mb-10 text-white font-bold">Submit</button>

          </form>


        </div>
      </div>


    </>
  )
}

export default ContactUs