import React from 'react'

const ImageUpload = ({image,setImage,setSaveImage}) => {
    function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setImage(URL.createObjectURL(uploaded));
        setSaveImage(uploaded);
    }
  return (
    <div className='w-25 mx-auto'>
        <div>
            <img src={image}
            className='img-thumbnail'
            alt=''
            />
        </div>
        <div className='my-3'>
            <input type="file" 
            id='formFile' 
            onChange={handleUploadChange}
            
            accept='image/*' className=" text-sm rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-black dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" required/>
        </div>
    </div>
  )
}

export default ImageUpload