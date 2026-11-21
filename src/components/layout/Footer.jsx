import { FaBagShopping } from "react-icons/fa6";
import { FaLink, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaRegUser, FaChevronRight, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between px-40 py-10 bg-yellow-100 border border-gray-300 rounded-2xl">
        <div className="w-64 pr-10 border-r border-gray-300">
          <div className="flex items-center gap-4">
            <FaBagShopping />
            <span>Ecommerce</span>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4 py-3 border border-gray-400 rounded-xl">
            <FaRegUser />
            <span>Logotype</span>
          </div>
          <h3>DESCRIPCIÓN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            ratione porro distinctio rem consequatur assumenda.
          </p>
        </div>

        <div className="px-10 border-r border-gray-300">
          <div className="flex items-center gap-4">
            <FaLink />
            <span>Enlaces</span>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <FaChevronRight className="text-xs" />
              Inicio
            </li>
            <li className="flex items-center gap-2">
              <FaChevronRight className="text-xs" />
              Catálogo
            </li>
            <li className="flex items-center gap-2">
              <FaChevronRight className="text-xs" />
              Contacto
            </li>
          </ul>
        </div>

        <div className="pl-10">
          <div className="flex items-center gap-4">
            <FaHeadphonesAlt />

            <span>Contacto</span>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2">
              <FaRegEnvelope />
              <span>tucorreo@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+591 68461616</span>
            </div>
            <span>La Paz, Bolivia</span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <CiShare2 />
            <span>Síguenos</span>
          </div>
          <div className="flex gap-4">
            <FaWhatsapp />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;