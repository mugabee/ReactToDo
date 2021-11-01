const Footer = () => {
    return (
        <div>
            <footer className="footer bg-white  pt-1 border-b-2 border-blue-700">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-center">
              <div className="flex lg:mx-40 flex-col">
                <span className="my-2">
                  <a
                    href="#"
                    className="text-black  text-md hover:text-blue-500"
                  >
                    ⭐ Home
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-black  text-md hover:text-blue-500"
                  >
                    🖤 About
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-black  text-md hover:text-blue-500"
                  >
                    ⚫ Contact Us
                  </a>
                </span>
              </div>
              <div className="flex lg:mx-40 flex-col">
                <span className="my-2">
                  <a
                    href="#"
                    className="text-black text-md hover:text-blue-500"
                  >
                    Africa
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-black  text-md hover:text-blue-500"
                  >
                    America
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-black text-md hover:text-blue-500"
                  >
                    Europe
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-black font-bold mb-2">© Zatec 2021</p>
            </div>
          </div>
        </div>
      </footer>
            
        </div>
    )
}

export default Footer
