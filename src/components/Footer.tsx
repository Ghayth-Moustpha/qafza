import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full      p-4 mt-6">
      <div className="mx-auto max-w-7xl  bg-orchidPurple   rounded-xl px-4 sm:px-6 lg:px-8">
      

        <div className="py-7  text-white ">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-lg  text-center w-full">
              ©<a href="mailto:ghayth.moustpha@gmail.com" > جميع الحقوق محفوظة، تم التطوير من قبل فريق قفزة التقني 
          
              </a>  </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600 transition duration-300"
              >
                {/* SVG for social media icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g id="Social Media">
                    <path
                      id="Vector"
                      d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
