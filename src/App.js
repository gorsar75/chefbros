import React from 'react';
import './App.css';

function App() {
  return (
      <section className="w-3/6 m-auto flex flex-wrap mt-20">
          <div className="flex flex-wrap">
              <div className="w-full mb-8 p-10 bg-gray-100 relative rounded shadow">
         <span className="text-gray-300 text-6xl absolute italic right-10">
           10
         </span>
                  <h2 className="z-10 relative text-2xl text-gray-900 absolute">
                      ChefBros
                  </h2>
                  <hr className="block mb-6 mt-5 w-8 border-red-500 h-0 border-t-2" />
                  <p className="text-gray-700">
                      [ ] Register as a customer [ ] Register as a chef [ ] User Portal [ ] View services [ ] Select the cook
                      [ ] Send requests to cook [ ] Track the cooks [ ] Get details about the chef’s location, expertise, experience & per hour charges
                      [ ] Specify the time duration [ ] Make payments [ ] Ratings and reviews [ ] Chef Portal [ ] Manage their profile
                      [ ] Show specialities [ ] Show price [ ] Set booking calendar [ ] View user request [ ] Accept/decline user request [ ] Receive payments
                  </p>
              </div>
          </div>
      </section>
  );
}

export default App;
