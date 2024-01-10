import React from "react";
import { useState } from "react";
import "./UploadFile.css";
import axios from "axios";


function UploadFile({ account, provider, contract }) {
  
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");

  async function calculateFileHash(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = async (event) => {
        const buffer = event.target.result;

        try {
          const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
          resolve(hashHex);
        } catch (error) {
          reject(error);
        }
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      fileReader.readAsArrayBuffer(file);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    

    if (file) {
      try {
        const fileHash = await calculateFileHash(file);
        console.log('File Hash:', fileHash);

        

       const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `ca5503dc4bd493403168`,
            pinata_secret_api_key: `dda07a92e23d0802f36830cdf9ae399a56bd68fb1b5849b785a3dafcf8e9ed90`,
            "Content-Type": "multipart/form-data",
          },
        });

       const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
       console.log("ImgHash: ",ImgHash)
       const Hash = `${fileHash}%${ImgHash}`
       console.log("Final Hash: ",Hash)
       contract.addHash(account, Hash);
       



        
      } catch (error) {
        console.error('Error calculating file hash:', error);
      }
    } else {
      alert('No file selected');
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  return (
    <div>
      <div
        style={{ width: "50%" }}
        class=" min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-700 to-transparent opacity-20 dark:opacity-100"
      ></div>
      <div
        style={{
          height: "100%",
          width: "50%",
          position: "fixed",
          zIndex: "1",
          top: 0,
          overflowX: "hidden",
          paddingTop: "20px",
          right: "0",
        }}
        class="relative flex justify-cente px-4 sm:px-6 lg:px-8 bg-blue-400 bg-no-repeat bg-cover items-center"
      >
        <div
          style={{ marginRight: "15%" }}
          class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10"
        >
          <div class="text-center">
            <h2 class="mt-5 text-3xl font-bold text-gray-900">File Upload!</h2>
          </div>
          <form class="mt-8 space-y-3" action="#" method="POST">
            <div class="grid grid-cols-1 space-y-2">
              <label class="text-sm font-bold text-gray-500 tracking-wide">
                Attach Document
              </label>
              <div class="flex items-center justify-center w-full">
                <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                  <div class="h-full w-full text-center flex flex-coljustify-center items-center  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                      <img
                        class="has-mask h-36 object-center"
                        src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                        alt="freepik image"
                      />
                    </div>
                    <p class="pointer-none text-gray-500 ">
                      <span class="text-sm">Drag and drop</span> files here{" "}
                      <br /> or{" "}
                      <span class="text-blue-600 ">select a file</span> from
                      your computer
                    </p>
                  </div>
                  <input
                    disabled={!account}
                    type="file"
                    class="hidden"
                    name="data"
                    onChange={retrieveFile}
                  />
                </label>
              </div>
            </div>
            <p class="text-sm text-gray-400">
              <span>{fileName}</span>
            </p>
            <div>
              <button
                className="upload"
                onClick={handleSubmit}
                disabled={!file}
                type="submit"
                class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                          font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
