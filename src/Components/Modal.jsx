import { useRef, useState } from 'react';
import Select from 'react-select';



const Modal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3; // Adjusted to match the total number of steps

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne nextStep={nextStep} />;
      case 2:
        return <StepTwo nextStep={nextStep} />;
      case 3:
        return <StepThree nextStep={nextStep} />;
      default:
        return null;
    }
  };

  const getStepName = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return "New Community";
      case 2:
        return "New Community";
      case 3:
        return "New Community";

      default:
        return "Unknown Step";
    }
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-transparent bg-opacity-80 px-4">
      <div className="bg-[#2d2d2d] border-gray-600 w-full max-w-[900px] h-[800px] md:h-[700px] p-4 rounded-xl shadow-lg flex flex-col overflow-x-auto">
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 cursor-pointer"
            onClick={onClose}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="flex justify-center text-white">
          <h2 className="text-2xl mb-4">
            {getStepName(step)} (step {step}/{totalSteps})
          </h2>
        </div>
        {renderStep()}
        <div className="flex justify-center mt-auto">
          {step !== 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded inline-flex items-center mr-2"
            >
              Back
            </button>
          )}
          {step !== totalSteps ? (
            <button
              onClick={nextStep}
              className="bg-[#21c55e] hover:bg-[#388153] hover:duration-300 text-white font-bold py-2 px-6 rounded inline-flex items-center"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-[#21c55e] hover:bg-[#388153] text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>


  );
};

const products = [
  { value: '1', label: '1' },
  { value: '2', label: '1' },
  { value: '3', label: '1' },
];


const CustomOption = ({ innerProps, innerRef, data }) => {
  // Here you can define the appearance and behavior of your custom option
  return (
    <div {...innerProps} ref={innerRef}>
      {/* Render your custom option content */}
      <span>{data.label}</span>
      {/* Add additional content or styles as needed */}
    </div>
  );
};



const attribute = [
  { value: '1', label: '1' },
  { value: '2', label: '1' },
  { value: '3', label: '1' },
];






const StepOne = ({ nextStep }) => {










  const [selectedOption, setSelectedOption] = useState(null);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: '2px solid #555',
      borderColor: state.isFocused ? '#555' : '#555',
      borderRadius: '5px',
      padding: '2px',
      boxShadow: state.isFocused ? '0 0 0 1px #555' : 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#21c55e' : '#333',
      '&:hover': {
        backgroundColor: 'RGBA(33,171,83,0.5)', // Light purple with opacity
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#fff', // Adjust text color to white
    }),
    input: (provided, state) => ({
      ...provided,
      color: '#fff',
      '&::placeholder': {
        color: '#fff !important', // Adjust placeholder color here
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: '#333',
      color: '#fff', // Adjust dropdown menu background color
      zIndex: 9999, // Set the z-index value as needed
    }),
  };


  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    // Trigger click event on file input
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Simulate upload process (you would replace this with your actual upload logic)
    uploadFile(file);
  };

  const uploadFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target.result);
      // Simulate upload progress
      simulateUploadProgress(file);
    };
    reader.readAsDataURL(file);
  };

  const simulateUploadProgress = (file) => {
    const totalSize = file.size;
    let loaded = 0;
    const interval = setInterval(() => {
      loaded += 10000; // Simulate progress by adding 10KB each interval
      const progress = Math.min((loaded / totalSize) * 100, 100);
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 100); // Simulate progress every 100 milliseconds
  };

  const handleDeleteImage = () => {
    setUploadedImage(null);
    setUploadProgress(0);
  };

  return (
    <>
      <div className='grid grid-cols-12 gap-4 mt-5 items-center '>
        <div className='col-span-12 md:col-span-6 w-full'>









          <div className='py-2 px-2 relative mt-2 '>
            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1"> Name</label>

            <input
              type="text"
              className="w-full bg-transparent hover:border-gray-300 rounded-md border-2 border-[#555] text-white py-2 px-2 focus:outline-none placeholder-white" // Add placeholder color here
              required
              placeholder=' Name'
            />

          </div>

          <div className='relative py-2 mt-2 px-2'>
            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1"> Type:</label>
            <Select
              onChange={setSelectedOption}
              defaultValue={selectedOption}
              options={products}
              styles={customStyles}
              placeholder=' Type'
              className=''
            />
          </div>






          <div className='py-2 px-2 relative mt-2 '>
            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Short Description</label>

            <input
              type="text"
              className="w-full bg-transparent placeholder-white hover:border-gray-300 rounded-md border-2 border-[#555] text-white    py-2 px-4  focus:outline-none "
              required
              placeholder='desc...'
            />
          </div>
















        </div>


        <div className='col-span-12 flex items-center justify-center md:col-span-6 w-full order-last md:order-none'>




          <div className='w-full'>

            {uploadedImage ? (
              <div className='grid grid-cols-1 items-center mt-5 gap-4'>

                <img src={uploadedImage} className="w-[140px] " alt="Uploaded" />

                <div className='col-span-12 md:col-span-3 lg:col-span-3'>
                  {uploadProgress > 0 && (
                    <div className='flex space-x-4'>
                      <div className="w-full">
                        <div className="bg-[#444] h-4 rounded-lg overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: `${uploadProgress}%` }}></div>
                        </div>
                      </div>
                      <p className="text-center  text-white">{Math.round(uploadProgress)}% </p>
                      <div>
                        <button onClick={handleDeleteImage} className=' text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg></button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className='pb-4'>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="image_upload" className=" bg-[#3e3e3e] h-[200px] cursor-pointer bg-gray border-2 border-[#555] rounded-2xl w-full pb-4">
                    <div className='flex justify-center'>
                      <img className='w-24' src="/cloud.png" alt="" />
                    </div>
                    <span className="text-center block text-[#fff] text-sm md:text-md px-2"> Choose the product image that everyone can see</span>
                    <div className='flex justify-center mt-5'>
                      <button type="button" onClick={handleUploadButtonClick} className='bg-[#444] px-12 rounded-lg border-2 border-[#555] py-2 text-white'>Upload</button>
                    </div>
                    <input id="image_upload" className="hidden" type="file" ref={fileInputRef} onChange={handleFileInputChange} />
                  </label>
                </div>
              </div>
            )}









          </div>


        </div>


        <div className='col-span-12 md:col-span-6 w-full'>
          <div className='py-2 px-2 relative mt-2'>
            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1"> From</label>

            <input
              type="date"

              className="w-full bg-transparent placeholder-white hover:border-gray-300 rounded-md border-2 border-[#555] text-white py-2 px-4 focus:outline-none"
              style={{ background: 'transparent', color: 'white', width: '100%', height: '45px', WebkitAppearance: 'none' }} // Adjust width and height, and remove default appearance for iOS
              placeholder="Select Date" // Placeholder text for iOS
            />

            <style>
              {`
      /* Set placeholder color */
      ::-webkit-input-placeholder {
        color: white;
      }

      /* Style the date picker */
      input[type="date"] {
        -webkit-appearance: none; /* Remove default arrow button in Safari */
        appearance: none;
        padding: 10px; /* Adjust padding for better appearance */
        background-color: #3c3c3c; /* Set background color */
        border: 2px solid #555; /* Set border */
        border-radius: 5px; /* Set border radius */
        color: white; /* Set text color */
      }

      /* Style the date picker icon */
      input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1); /* Invert the color of the icon to white */
      }
    `}
            </style>
          </div>

        </div>
        <div className='col-span-12 md:col-span-6 w-full'>
          <div className='py-2 px-2 relative mt-2'>
            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1"> To</label>

            <input
              type="date"

              className="w-full bg-transparent placeholder-white hover:border-gray-300 rounded-md border-2 border-[#555] text-white py-2 px-4 focus:outline-none"
              style={{ background: 'transparent', color: 'white', width: '100%', height: '45px', WebkitAppearance: 'none' }} // Adjust width and height, and remove default appearance for iOS
              placeholder="Select Date" // Placeholder text for iOS
            />

            <style>
              {`
      /* Set placeholder color */
      ::-webkit-input-placeholder {
        color: white;
      }

      /* Style the date picker */
      input[type="date"] {
        -webkit-appearance: none; /* Remove default arrow button in Safari */
        appearance: none;
        padding: 10px; /* Adjust padding for better appearance */
        background-color: #3c3c3c; /* Set background color */
        border: 2px solid #555; /* Set border */
        border-radius: 5px; /* Set border radius */
        color: white; /* Set text color */
      }

      /* Style the date picker icon */
      input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1); /* Invert the color of the icon to white */
      }
    `}
            </style>
          </div>

        </div>

        <div className='col-span-12'>
          <div className='py-2 px-2 relative  '>
            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Long Description</label>

            <textarea
              rows={4} // Set the number of rows here
              className="w-full bg-transparent hover:border-gray-300 rounded-md border-2 border-[#555] text-white py-2 px-4 focus:outline-none placeholder-white" // Add placeholder color here
              required
              placeholder='description'
            />

          </div>
        </div>


      </div >







    </>

  );
};

const StepTwo = ({ nextStep }) => {

  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    // Trigger click event on file input
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Simulate upload process (you would replace this with your actual upload logic)
    uploadFile(file);
  };

  const uploadFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target.result);
      // Simulate upload progress
      simulateUploadProgress(file);
    };
    reader.readAsDataURL(file);
  };

  const simulateUploadProgress = (file) => {
    const totalSize = file.size;
    let loaded = 0;
    const interval = setInterval(() => {
      loaded += 10000; // Simulate progress by adding 10KB each interval
      const progress = Math.min((loaded / totalSize) * 100, 100);
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 100); // Simulate progress every 100 milliseconds
  };

  const handleDeleteImage = () => {
    setUploadedImage(null);
    setUploadProgress(0);
  };

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-1">
      <div>
        <div className="flex items-center justify-center w-full">


          <label htmlFor="image_upload" className=" bg-[#3e3e3e]  cursor-pointer bg-gray border-2 border-[#555] rounded-2xl w-full pb-4">
            <div className='flex justify-center'>
              <img className='w-40' src="/cloud.png" alt="" />
            </div>
            <span className="text-center block text-[#fff] text-lg px-2"> Choose a nice banner image for your community everyone can see</span>
            <div className='flex justify-center mt-5'>
              <button type="button" onClick={handleUploadButtonClick} className='bg-[#444] px-12 rounded-lg border-2 border-[#555] py-2 text-white'>Upload</button>
            </div>
            <input id="image_upload" className="hidden" type="file" ref={fileInputRef} onChange={handleFileInputChange} />
          </label>

        </div>




      </div>


      <div className='grid grid-cols-12 items-center md:mt-5 gap-4'>
        <div className='col-span-12 md:col-span-3 lg:col-span-3'>
          <img src={uploadedImage} className=" " />

        </div>
        <div className='col-span-12 md:col-span-3 lg:col-span-3'>
          {uploadProgress > 0 && (
            <div className='flex space-x-4'>
              <div className="w-full">
                <div className="bg-[#444] h-4 rounded-lg overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: `${uploadProgress}%` }}></div>
                </div>
              </div>
              <p className="text-center  text-white">{Math.round(uploadProgress)}% </p>
              <div>
                <button onClick={handleDeleteImage} className=' text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

                </button>
              </div>
            </div>
          )}
        </div>


      </div>
    </div>

  );
};


const StepThree = ({ nextStep }) => {










  const [selectedOption, setSelectedOption] = useState(null);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: '2px solid #555',
      borderColor: state.isFocused ? '#555' : '#555',
      borderRadius: '5px',
      padding: '2px',
      boxShadow: state.isFocused ? '0 0 0 1px #555' : 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#21c55e' : '#333',
      '&:hover': {
        backgroundColor: 'RGBA(33,171,83,0.5)', // Light purple with opacity
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#fff', // Adjust text color to white
    }),
    input: (provided, state) => ({
      ...provided,
      color: '#fff',
      '&::placeholder': {
        color: '#fff !important', // Adjust placeholder color here
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: '#333',
      color: '#fff', // Adjust dropdown menu background color
      zIndex: 9999, // Set the z-index value as needed
    }),
  };








  return (
    <>
      <div className='grid grid-cols-12 gap-4 mt-5 items-center '>
        <div className='col-span-12 md:col-span-6 w-full'>











          <div className='relative py-2 mt-2 px-2'>
            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1"> Attribute 1</label>
            <Select
              onChange={setSelectedOption}
              defaultValue={selectedOption}
              options={attribute}
              styles={customStyles}
              placeholder=' Attribute'

              className=''
            />
          </div>























        </div>











      </div >


      <div className='grid grid-cols-12 items-center mx-auto w-full px-2'>
    
        <div className='col-span-12 md:col-span-6 w-full relative px-2 mt-5 border rounded-xl flex justify-center py-4'>


        <label className="block text-sm text-white absolute top-0 z-10 -mt-2 left-2 bg-[#2d2d2d] px-1"> Speakers</label>








          <div className='w-full flex  justify-center'>
            <div className="relative w-[350px]    backdrop-blur-lg bg-[#000] bg-opacity-10 rounded-xl border border-white border-opacity-20">
              <div className="absolute top-0 right-2 flex items-center space-x-2 mt-1 cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>






              </div>
              <div className="flex gap-4 px-4  py-1.5 mt-1">
                <img
                  className="max-w-[60px] max-h-[60px] rounded-full"
                  src='https://randomuser.me/api/portraits/men/1.jpg'
                  alt=""
                />
                <hr className="border-l border-solid h-14 opacity-30" />
                <div className="font-[200] ">
                  <h1 className="text-white text-sm ">Andreas Wohlers Fotografie</h1>
                  <p className="text-sm text-white ">
                    Photographer
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 ">
                    Lorem ipsum dolor sit
                  </p>
                  <hr className='opacity-30 mt-1' />
                </div>


              </div>
            </div>
          </div>























        </div>
      </div>




    </>

  );
};


export default Modal;
