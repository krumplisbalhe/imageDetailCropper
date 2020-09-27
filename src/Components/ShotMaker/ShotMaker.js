import React, {useState} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ShotMaker.css';

const ShotMaker = ({ src }) => {
  const [crop, setCrop] = useState({
    src: '../../Assets/product_image.png',
    crop: {
      unit: '%',
      width: 30,
      aspect: 16 / 9,
    },
  });

  return (
    <div className="shotMaker">
      <ReactCrop
        className="cropper"
        src='/product_image.png'
        crop={crop}
        onChange={newCrop => setCrop(newCrop)}
      />
      <div className="detailShots">
      </div>
    </div>
  )
}

export default ShotMaker;
