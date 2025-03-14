import animation from "../assets/images/sample.jpg"
function OurFeatures() {
  return (
    <div className="text-center py-3">
      <div className="text-2xl  py-3 font-bold text-gray-800">
        Why Our Password Manager

      </div>
      <div className="text-5xl py-3  font-bold text-gray-800">
        Easily secure and store secure passwords
      </div>
      <div className="text-xl py-3">
        It’s simple. You remember your vault password. LastPass remembers the rest.


      </div>
      <div>
        <button className="bg-gray-800  text-white font-bold py-2 px-4 rounded py-3 hover:scale-110">Get Started</button>
      </div>
      <div>
        <img src={animation} className="w-2/3 mx-auto" alt="" />
      </div>

    </div>
  )
}

export default OurFeatures