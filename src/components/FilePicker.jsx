import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className=" ml-3 bg-[#18212a] p-3 w-[195px] h-[220px] flex flex-col rounded-md">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="bg-[#13181e] font-pixelate py-1.5 px-2 rounded-md shadow-sm text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer w-fit">
          Upload File
        </label>

        <p className="mt-2 text-white text-xs truncate font-pixelate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          disabled={!file}
          type="filled"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton
          disabled={!file}
          type="filled"
          title="Texture"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker