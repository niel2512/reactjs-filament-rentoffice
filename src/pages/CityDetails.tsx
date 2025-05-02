import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { City } from "../types/type";
import OfficeCard from "../components/OfficeCard";

export default function CityDetails() {
  const { slug } = useParams<{ slug: string }>(); //mengambil parameter yang sedang dikunjungi cth: kantor-1
  const [city, setCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      //parameter tersebut disimpan setelah city/ di url
      .get(`http://rentoffice.test/api/city/${slug}`, {
        headers: {
          "X-API-KEY": "qwertiop123774848880sh",
        },
      })
      .then((response) => {
        setCity(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading data: {error}</p>;
  }
  if (!city) {
    return <p>Category not found</p>;
  }

  const baseURL = "http://rentoffice.test/storage/";

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      {/* start navbar */}
      <nav className="bg-white">
        <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
          <a href="index.html">
            <img src="/assets/images/logos/logo.svg" alt="logo" />
          </a>
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
      {/* end navbar */}

      {/* start header */}
      <header className="flex flex-col w-full">
        <section id="Hero-Banner" className="relative flex h-[434px]">
          <div id="Hero-Text" className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10">
            <h1 className="font-extrabold text-[50px] leading-[60px]">
              Great Office in <br /> <span className="text-[#0D903A]">{city.name} City</span>
            </h1>
            <p className="text-lg leading-8 text-[#000929]">Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik dan sehat dalam tumbuhkan karir.</p>
          </div>
          <div id="Hero-Image" className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[434px] rounded-bl-[40px] overflow-hidden">
            <img src={`${baseURL}/${city.photo}`} className="w-full h-full object-cover" alt="hero background" />
          </div>
        </section>
      </header>
      {/* end header */}

      {/* start city details */}
      <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">Browse Offices</h2>
        <div className="grid grid-cols-3 gap-[30px]">
          {city.officeSpaces.map((office) => (
            <OfficeCard key={office.id} office={office}></OfficeCard>
          ))}
        </div>
      </section>
      {/* end city details */}
    </>
  );
}
