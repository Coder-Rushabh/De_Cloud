import React, { useEffect, useState } from 'react'

const Gallery = ({ contract, account }) => {
const [data, setData] = useState([]);

  const getdata = (async () => {
    let dataArray;
    try {
      if (true) {
        dataArray = await contract.display(account);
        console.log(dataArray);
      }
    } catch (e) {
      console.log("Error in gallary.jsx: ", e)
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log(str);
      console.log(str_array);

      var processedData = str_array.map(item => {
        const [hash, link] = item.split('%');
        return { hash, link };
      });

      console.log("ProcessedData: ", processedData);
      setData(processedData);
    } else {
      alert("No image to display");
    }

    async function getHashesWithImageHash(processedData) {
      try {
        if (!processedData || !Array.isArray(processedData)) {
          console.error('Invalid input for processedData');
          return [];
        }

        var dataWithImageHash = await Promise.all(processedData.map(async (item) => {
          const { hash, link } = item;
          console.log("dataWithImageHash: ", dataWithImageHash)

          try {
            // Fetch the image from the link
            const response = await fetch(link);
            const blob = await response.blob();
            console.log("Blob: ", blob)
            // Calculate the hash of the fetched image
            const imageHash = await calculateFileHash(blob);
            console.log("imagehash: ", imageHash)

            return { hash, imageHash };
          } catch (error) {
            console.error(`Error fetching or calculating hash for ${link}`, error);
            return null;
          }
        }));

        // Filter out any entries with null (error occurred during fetching or calculating hash)
        const validDataWithImageHash = dataWithImageHash.filter(item => item !== null);

        return validDataWithImageHash;
      } catch (error) {
        console.error('Error in getHashesWithImageHash:', error);
        return [];
      }
    }

    getHashesWithImageHash(processedData)


    async function calculateFileHash(blob) {
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

        fileReader.readAsArrayBuffer(blob);
      });
    }

    function checkHashes(processedData) {
      try {
        if (!Array.isArray(processedData)) {
          console.error('Invalid input for dataWithImageHash');
          return;
        }

       processedData.forEach(item => {
          const { Hash, imageHash, link } = item;
         


          if (Hash === imageHash) {
            console.log(`Success: Hash check passed for ${link}`);
            console.log(link);
           

          } else {
            console.log(`Failed: Hash check failed for ${link}`);
          }
        });
     
       
      } catch (error) {
        console.error('Error in checkHashes:', error);
      }
    }


    checkHashes(processedData);
   
   
  })();


  const renderImages = () => {
    return data.map((item, index) => (
      <div key={index}>
        <img src={item.link} alt={`Image ${index}`} style={{ width: '200px', height: '200px' }} />
        <p>{item.hash.substring(0, 34)}</p>
        <p>{item.hash.substring(35, 70)}</p>
      </div>
    ));
  };


  return (
    <div className='p-5 m-5'>
      {/* other UI elements here */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{renderImages()}</div>
     

    </div>
  );

}

export default Gallery