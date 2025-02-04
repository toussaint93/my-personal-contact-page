import { useState } from 'react';
import {FaMapMarker}from 'react-icons/fa';

const JobListing = ({ job }) => {
const [showFullDescription, setShowFullDescription] = useState(false);

let description = job.description;

if (!showFullDescription) {

    description = description.substring(0, 90) + '...';
}

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription ? 'less' : 'more'}</button>

        <h3 className="text-black-500 mb-2">{job.connections} </h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-black-700 mb-3">
            <FaMapMarker  className='inline text-lg mb-1 mr-1' />
            {job.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
