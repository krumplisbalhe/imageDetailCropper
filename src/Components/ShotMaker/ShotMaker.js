import React, {useState} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ShotMaker.scss';

const ShotMaker = ({ src }) => {
  const [crop, setCrop] = useState({
    src: '../../Assets/product_image.png',
    crop: {
      unit: '%',
      width: 50,
      height: 50,
      x: 25,
      y: 25
    },
  });

  return (
    <div className="shotMaker">
      <ReactCrop
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
