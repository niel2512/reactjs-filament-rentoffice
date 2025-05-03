import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
        <Link to="/">
          <img src="/assets/images/logos/logo.svg" alt="logo" />
        </Link>
        <ul className="flex items-center gap-[50px] w-fit">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="view-booking-details.html">My Booking</a>
          </li>
        </ul>
        <a href="#" className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5">
          <img src="/assets/images/icons/call.svg" className="w-6 h-6" alt="icon" />
          <span className="font-semibold">Contact Us</span>
        </a>
      </div>
    </nav>
  );
}
