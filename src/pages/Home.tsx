import Carousel from "../components/Carousel"


function Home() {
  return (
    <div>

      {/* // carousel */}

      <div>
        <Carousel />

      </div>

      {/* section1 */}
      <div className="bg-offwhite shadow-sm  text-primary px-10 py-20 ">
        <div className=" text-center text-2xl text-primary font-bold">India's section XYZ</div>
        <div className="text-center">
          <div className="inline-block">
            <p className="text-center text-5xl py-6  text-primary font-extrabold space-x-1 w-full whitespace-nowrap overflow-hidden animate-typing" >You are our section priority</p></div></div>
        <div className="text-primary text-center w-2/3 mx-auto">We’re committed to investing in privacy and security improvements designed to provide a secure and enjoyable LastPass experience.</div>
        <div className="text-center py-5">
          <div className="button-dark" > Get Started</div>

        </div>

      </div>

      {/* section2 */}

      <div className="grid grid-cols-4 gap-6 py-20 mt-5 mb-5">

        <div className="flex flex-col gap-2 text-center">
          <div className="text-5xl block mx-auto font-bold animate-shining">A</div>
          <div className="text-xl font-bold ">Used by 10,000+ users</div>
          <div className="para-primary">Our customer use our password manager to store and protect passwords in ecrypted form</div>
        </div>

        <div className="flex flex-col gasp-2 text-center">
          <div className="text-5xl block mx-auto font-bold">A</div>
          <div className="text-xl font-bold ">Rating 4.8+</div>
          <div className="para-primary">Our customer are Happy with our product. Ratings are based on our customer feedback</div>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <div className="text-5xl block mx-auto font-bold">A</div>
          <div className="text-xl font-bold ">Leader in Password Management</div>
          <div className="para-primary">Adopted by proffesionals and organization for storing passwords</div>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <div className="text-5xl block mx-auto font-bold">A</div>
          <div className="text-xl font-bold ">Best Award</div>
          <div className="para-primary">Our Application won the best software applicaiton award 2024</div>
        </div>


      </div>

      {/* section3 */}


      <div>
        <div className="grid grid-cols-2 bg-background py-15 px-10 text-white ">
          <div className="font-bold grid grid-cols-1 items-center mx-auto size-full ">
            <div className="text-9xl mx-auto inline-block  animate-flip w-48">                    A
            </div>

          </div>
          <div>
            <div className="  text-white font-bold text-xl py-3 ">
              Protect your business with better storer
            </div>
            <div className=" py-2 flex flex-col items center gap-6">
              <div className="flex gap-2 items-center">
                <div>
                  A

                </div>
                <div className="text-justify w-3/4">
                  Make it easy for users to securely access and share apps not protected by SSO and sensitive info.
                </div>

              </div>
              <div className="flex gap-2 items-center">
                <div  >
                  A

                </div>
                <div className="text-justify w-3/4">
                  Scale adoption with automation and proactively monitor company-wide password health.
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div >
                  A

                </div>
                <div className="text-justify w-3/4" >
                  Scale adoption with automation and proactively monitor company-wide password health.
                </div>
              </div>



            </div>
          </div>
        </div>

      </div>


      {/* section4 */}
      <div>

        <div className="grid grid-cols-2 py-20  ">
          <div className="w-3/4">
            <div className="text-xl block mx-auto font-bold text-center">
              Safely store and autofill passwords across devices
            </div>

            <div className="flex gap-2 items-center p-3">
              <div>
                AA

              </div>
              <div className="">
                Eliminate password reuse with the built-in password generator.

              </div>

            </div>
            <div className="flex gap-2 items-center p-3">
              <div>
                AA

              </div>
              <div>
                Autofill passwords and info in one click, on any device.


              </div>

            </div>
            <div className="flex gap-2 items-center p-3">
              <div>
                AA

              </div>
              <div>
                Minimize the need to type in passwords for a passwordless experience.



              </div>

            </div>
          </div>

          <div className="text-center">
            <img src="../assets/images/sample.jpg" alt="aa" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home