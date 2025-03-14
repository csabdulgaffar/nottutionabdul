import animation from "../assets/images/carousel2.jpg"
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
        <button className="button-dark my-5">Get Started</button>
      </div>
      <div className="p-10">
        <img src={animation} className="w-2/3 mx-auto" alt="" />
      </div>
      <div className="para-primary py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dignissimos officiis dolorem reprehenderit illo quam debitis perferendis modi beatae, dolorum, sit quaerat. Enim accusantium possimus amet sunt non ad commodi.
      </div>
      <div className="button-dark"> Know More</div>

    </div>
  )
}

export default OurFeatures