import { FaTruck, FaHeadset } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

function Jk() {
  return (
    <div className="px-10 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-700">
          ¿Por qué comprar con nosotros?
        </h2>
        <p className="text-slate-500 mt-2">
          Ofrecemos una experiencia de compra segura y confiable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="flex items-center gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center justify-center shrink-0 w-24 h-24 rounded-full bg-yellow-100 text-5xl text-slate-600">
            <FaTruck />
          </div>
          <div className="w-px self-stretch bg-slate-400"></div>
          <div>
            <h3 className="text-xl font-bold text-slate-700">Envíos</h3>
            <p className="text-sm text-slate-500 mt-1">
              Entregas a domicilio de forma rápida y segura.
            </p>
          </div>
        </div>

        
        <div className="flex items-center gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center justify-center shrink-0 w-24 h-24 rounded-full bg-yellow-100 text-5xl text-slate-600">
            <MdOutlineVerifiedUser />
          </div>
          <div className="w-px self-stretch bg-slate-400"></div>
          <div>
            <h3 className="text-xl font-bold text-slate-700">Pago seguro</h3>
            <p className="text-sm text-slate-500 mt-1">
              Compras protegidas y métodos de pago confiables.
            </p>
          </div>
        </div>

       
        <div className="flex items-center gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center justify-center shrink-0 w-24 h-24 rounded-full bg-yellow-100 text-5xl text-slate-600">
            <FaHeadset />
          </div>
          <div className="w-px self-stretch bg-slate-400"></div>
          <div>
            <h3 className="text-xl font-bold text-slate-700">Atención</h3>
            <p className="text-sm text-slate-500 mt-1">
              Asistencia personalizada para nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jk;