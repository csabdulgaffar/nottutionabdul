import { FaUsers } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";

function AboutUs() {
  return (
    <div className="mx-auto">
      <div className="  text-2xl font-medium py-2  border-b-4 border-gray-900 border-solid  mb-3 inline-block">
        About Us
      </div>
      <div className="pb-5 leading-8  ">

        In today's digital landscape, the threat of data breaches looms large, with over 80% of security incidents stemming from compromised or poorly managed passwords. Failing to take proactive measures could result in catastrophic losses. Recognizing the urgency of safeguarding personal and business data, robust password security has become non-negotiable.

        <br />
        <br />
        Our Password Manager, a cutting-edge solution in the realm of password management. With a commitment to innovation and user-centric design,we offer award-winning password and identity management solutions that prioritize convenience, simplicity, and efficiency.
        <br />
        <br />
        we understand the paramount importance of privacy and security. That's why we employ state-of-the-art encryption measures to ensure that your sensitive information remains shielded – even from us. With our password manager, you can rest assured that your passwords and identity are safeguarded against emerging threats, empowering you to navigate the digital world with confidence and peace of mind.
      </div>
      <div>
        <div className="grid grid-cols-2 gap-6 p-6">
          <div className="flex flex-col gap-2 text-center">
            <div className="text-5xl block mx-auto font-bold animate-shining"><FaUsers /></div>
            <div className="text-2xl font-bold ">Used by 10,000+ users</div>
            <div>Our customer use our password manager to store and protect passwords in ecrypted form</div>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="text-5xl block mx-auto font-bold"><MdStarRate /></div>
            <div className="text-2xl font-bold ">Rating 4.8+</div>
            <div>Our customer are Happy with our product. Ratings are based on our customer feedback</div>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="text-5xl block mx-auto font-bold"><MdLeaderboard /></div>
            <div className="text-2xl font-bold ">Leader in Password Management</div>
            <div>Adopted by proffesionals and organization for storing passwords</div>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="text-5xl block mx-auto font-bold"><GiTrophy /></div>
            <div className="text-2xl font-bold ">Best Award</div>
            <div>Our Application won the best software applicaiton award 2024</div>
          </div>


        </div>
      </div>




    </div>

  )
}

export default AboutUs