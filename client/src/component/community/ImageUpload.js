import React,{useState} from 'react';
import axios from 'axios';

export default function ImageUpload(props) {
    const [image, setImage] = useState("");
    const [flag, setFlag] = useState(false)

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      console.log(file);

      const response = await axios.post('https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/community/lounge/image/upload', formData);
      console.log(response);
      setFlag(true);
      setImage(response.data.filePath);
      props.setImage(response.data.filePath);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" name='file' accept="image/*" onChange={handleFileUpload} />
      {/* {flag && <img src={image} />} */}
    </div>
  );
}
