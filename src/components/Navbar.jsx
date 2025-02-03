import logo from '../assets/william.jpeg';

const Navbar = () => {
  return (
      <nav className="bg-gray-700 border-b
       border-gray-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a
                className="flex flex-shrink-0 items-center mr-4"
                href="/index.html"
              >
                <img
                  className="h-10 w-auto"
                  src={ logo }
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  <a
                    href="https://www.outsidethebox.dev/"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    William Toussaint
                  </a>
                </span>
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                <a
                    href="tel:+14037148006"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Phone
                  </a>
                <a
                    href="mailto:william@outsidethebox.dev"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    E-mail
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61558918795232"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/in/william-toussaint-340831116/"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
