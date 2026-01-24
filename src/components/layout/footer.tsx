export default function Footer() {
  return (
    <footer className="w-full h-130 md:h-[300px] flex flex-col bg-[#111827] items-center justify-center">
      <div className="group w-19/20 md:w-[85%] max-w-[1366px] h-full flex flex-col items-center justify-center gap-2">

        <div className="w-full h-4/5 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-2 pb-4">

          <div className="">
            <h1 className="text-2xl text-white font-bold mb-2">Janjatek</h1>
            <p className="text-[#c5d5d0]">
              Soluções emergentes personalizadas em software, segurança digital
              e automação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full place-content-start md:w-150 space-y-6">
            <ul>
              <li>
                <h1 className="font-bold text-white mb-2">Links</h1>
              </li>
              <li>
                <a href="#hero" className="footer-links">
                  Inícion
                </a>
              </li>
              <li>
                <a href="#services" className="footer-links">
                  erviços
                </a>
              </li>
              <li>
                <a href="#products" className="footer-links">
                  Produtos
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <h1 className="font-bold text-white mb-2">Mais</h1>
              </li>
              <li>
                <a href="#" target="_blank" className="footer-links">
                  NoHere
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="footer-links">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[20%] pt-4 border-t border-[#aaaaaabe] flex flex-col gap-2 items-center">
          <span className="text-[#c5d5d0]">
            © 2026 Janjatek. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
