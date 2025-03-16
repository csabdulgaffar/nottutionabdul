import { FaUsers } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";



import { FaConnectdevelop } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";

import map from '../assets/icons/map.png'



function Home() {
  return (

    <div>

      {/* // carousel */}

      <div className=" relative ">
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/topbanner.jpg')" }}
        ></div>
      </div>
      {/* sections */}
      <div className="w-3/4 mx-auto">


        {/* section1 */}
        <div className="bg-offwhite shadow-sm h-screen flex items-center text-primary px-10  ">
          <div>

            <div className=" text-center text-2xl text-primary font-bold">THE ONLY SELF LEARNING PLATFORM </div>
            <div className="text-center">
              <div className="inline-block">
                <p className="text-center text-5xl py-6  text-primary font-extrabold space-x-1 w-full whitespace-nowrap overflow-hidden animate-typing" >Not Tution</p></div></div>
            <div className="text-primary text-justify text-center w-2/3 mx-auto">Struggling to find the right mentor? Not Tuition connects you with expert mentors instantly! Get answers to your questions, connect with professionals nearby, and access personalized guidance. Upgrade to video solutions for in-depth learning—seamless, reliable, and designed for you!</div>
            <div className="text-center py-5">
              <div className="button-dark" > Get Started</div>

            </div>

          </div>

        </div>

        {/* section2 */}

        <div className="grid h-screen items-center grid-cols-4 gap-6 py-20 mt-5 mb-5">


          <div className="flex flex-col gap-2 text-center">
            <div className="text-5xl block mx-auto font-bold animate-shining"><FaUsers /></div>
            <div className="text-xl font-bold ">Used by 10,000+ users</div>
            <div className="para-primary">Our customer use our password manager to store and protect passwords in ecrypted form</div>
          </div>

          <div className="flex flex-col gasp-2 text-center">
            <div className="text-5xl block mx-auto font-bold"><MdStarRate /></div>
            <div className="text-xl font-bold ">Rating 4.8+</div>
            <div className="para-primary">Our customer are Happy with our product. Ratings are based on our customer feedback</div>
          </div>

          <div className="flex flex-col gap-2 text-center">
            <div className="text-5xl block mx-auto font-bold"><MdLeaderboard /></div>
            <div className="text-xl font-bold ">Leader in Password Management</div>
            <div className="para-primary">Adopted by proffesionals and organization for storing passwords</div>
          </div>

          <div className="flex flex-col gap-2 text-center">
            <div className="text-5xl block mx-auto font-bold"><GiTrophy /></div>
            <div className="text-xl font-bold ">Best Award</div>
            <div className="para-primary">Our Application won the best software applicaiton award 2024</div>
          </div>


        </div>

        {/* section3 */}

        <div className="h-screen items-center grid">

          <div>
            <div className="  text-center text-2xl py-5 text-primary font-bold">OUR FEATURES - FOR STUDENTS</div>

            <div>
              <div className="grid grid-cols-2 bg-background py-25 px-10 text-white ">
                <div className="font-bold grid grid-cols-1 items-center mx-auto size-full ">
                  <div className="text-9xl mx-auto inline-block  py-20 ">
                    <FaConnectdevelop />
                  </div>

                </div>
                <div>
                  <div>
                    <div className="  text-white  text-xl py-10   ">
                      <span className="font-bold"> – Quick Answer</span> : Get instant answers from mentors.
                    </div>

                  </div>

                  <div className="  text-white text-xl py-10 ">
                    <span className="font-bold">– SmartConnect  </span>: Automatically connect with mentors after receiving an answer.
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>


        {/* section 4*/}


        <div className="h-screen items-center grid">

          <div>
            <div className="  text-center text-2xl py-3 text-primary font-bold">OUR FEATURES - FOR CONSULTANTS</div>

            <div>
              <div className="grid grid-cols-2 bg-background py-15 px-10 text-white ">
                <div className="font-bold grid grid-cols-1 items-center mx-auto size-full ">
                  <div className="text-9xl mx-auto inline-block  py-20 ">
                    <PiStudentBold />
                  </div>

                </div>
                <div>
                  <div>
                    <div className="  text-white  text-xl py-10   ">
                      <span className="font-bold"> – SKillCash</span> : GEarn money by sharing your knowledge and helping students with answers and video solutions.
                    </div>
                    <div className="  text-white  text-xl py-10   ">
                      <span className="font-bold"> – CommBoost </span> : Enhance your communication skills by mentoring students and engaging in meaningful conversations.
                    </div>

                  </div>

                  <div className="  text-white text-xl py-10 ">
                    <span className="font-bold">– ReputationBoost  </span>: Build your credibility with ratings, reviews, and student trust.
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* section 5*/}


        <div className="h-screen items-center grid">

          <div>
            <div className="  text-center text-2xl py-3 text-primary font-bold">OUR FEATURES - FOR PARENTS</div>

            <div>
              <div className="grid grid-cols-2 bg-background py-15 px-10 text-white ">
                <div className="font-bold grid grid-cols-1 items-center mx-auto size-full ">
                  <div className="text-9xl mx-auto inline-block  py-20 ">
                    <RiParentFill />

                  </div>

                </div>
                <div>
                  <div>
                    <div className="  text-white  text-xl py-10   ">
                      <span className="font-bold"> – TrackProgress</span> : TrackProgress – Monitor your child's learning and mentor interactions.
                    </div>
                    <div className="  text-white  text-xl py-10   ">
                      <span className="font-bold"> – SafeConnect </span> : SafeConnect – Ensure secure and verified mentor connections.
                    </div>

                  </div>

                  <div className="  text-white text-xl py-10 ">
                    <span className="font-bold">– LearnWallet  </span>: 	 Manage payments for premium learning solutions.
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>




        {/* section LAST*/}
        <div className="h-screen flex items-center">
          <div>

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
          </div>



        </div>






      </div>
    </div>

  )
}

export default Home