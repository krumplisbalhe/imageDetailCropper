import React, {useState} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ShotMaker.scss';

const ShotMaker = () => {
  const [crop, setCrop] = useState()

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
