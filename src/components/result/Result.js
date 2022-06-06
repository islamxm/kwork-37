import useGlobal from '../../hooks/useGlobal';
import { useState } from 'react';
import './Result.scss';
import { Upload, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import sdwann from '../../img/SDWAN.svg';
import fiber from '../../img/Fiber.svg';
import dc from '../../img/Data Center.svg';
import line from '../../img/line.svg';
import placeholder from '../../img/placeholder.svg';

import resInternet from '../../img/res-internet.svg';
import resAzure from '../../img/res-azure.png';
import resAws from '../../img/res-aws.png';
import resGsp from '../../img/res-gsp.png';
import resOracle from '../../img/res-oracle.svg';
import resAb from '../../img/res-ab.svg';

import shImg from '../../img/sh.svg';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPngorSvg = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml';

    if (!isJpgOrPngorSvg) {
        message.error('You can only upload JPG/PNG/SVG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPngorSvg && isLt2M;
};

const DropPlaceholder = () => {
    return (
        <img src={placeholder} alt=""/>
    )
}


export const Result = () => {
    const {
        type, 
        loc, 
        customer, 
        step,
        internet,
        azure,
        aws,
        gcp,
        oracle,
        ab,
        sh} = useGlobal();
    
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();


    const typeImg = (type) => {
        switch (type) {
            case 'SDWAN':
                return sdwann;
            case 'Data Center':
                return dc;
            case 'Fiber':
                return fiber;
            default: 
                return null;
        }
    }


    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <DropPlaceholder />}
        </div>
    );


    return (
        <div className="result">
            <div className="result__in">
                <div className="result__customer">
                    {customer}
                </div>
                <div className="result__main">
                    <div className="result__main_img">
                        <img src={typeImg(type)} alt="" />
                    </div>
                    <div className="result__main_name">
                        {type}
                    </div>
                    <div className="result__main_loc">
                        {loc ? <div className='result__main_loc_el'>{loc}</div> : null}
                    </div>
                </div>

                <div className="result__arrow">
                    <img src={line} alt="" />
                </div>

                <div className="result__dropzone">
                    <Upload
                        name='logotype'
                        
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}>

                            {
                                imageUrl ? 
                                (<img src={imageUrl} alt=""/>)
                                : (uploadButton)
                            }

                    </Upload>
                </div>

                <div className="result__arrow result__arrow-sh">
                    {sh ? <div className="result__arrow-sh_item">
                        <img src={shImg} alt="" />
                    </div> : null}
                    <img src={line} alt="" />
                </div>
                <div className="result__cns">
                    {
                        step ? 
                            <div className="result__cns_list">
                                <div className={`result__cns_item ${internet ? 'selected' : ''}`}>
                                    <img src={resInternet} alt="" />
                                </div>
                                <div className={`result__cns_item ${azure ? 'selected' : ''}`}>
                                    <img src={resAzure} alt="" />
                                </div>
                                <div className={`result__cns_item ${aws ? 'selected' : ''}`}>
                                    <img src={resAws} alt="" />
                                </div>
                                <div className={`result__cns_item ${gcp ? 'selected' : ''}`}>
                                    <img src={resGsp} alt="" />
                                </div>
                                <div className={`result__cns_item ${oracle ? 'selected' : ''}`}>
                                    <img src={resOracle} alt="" />
                                </div>
                                <div className={`result__cns_item ${ab ? 'selected' : ''}`}>
                                    <img src={resAb} alt="" />
                                </div>
                            </div> 
                            
                            
                            : <div className="result__cns_empty">...</div>
                    }
                    
                </div>
                <div className="result__wt">
                    <div className="result__wt_el">
                        Powered by The Team
                    </div>
                </div>
            </div>
        </div>
    )
}