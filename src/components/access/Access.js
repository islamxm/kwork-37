import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../../hooks/useGlobal';
import {Header} from '../header/Header';
import Select from 'react-select';
import { Radio } from '../radio/Radio';

import next from '../../img/next.svg';

const typeOptions = [
    {value: 'Data Center', label:'Data Center'},
    {value: 'SDWAN', label:'SDWAN'},
    {value: 'Fiber', label:'Fiber'}
]
    
const locOptions = [
    {value: 'Asia Pacific-Korea Central', label: 'Asia Pacific-Korea Central'},
    {value: 'Cisco', label: 'Cisco'},
]


export const Access = () => {


    const {loc, type, customer, setGlobalType, setGlobalLoc, setGlobalCustomer, setGlobalStep} = useGlobal(); 
    
    const customerHandler = (e) => {
        setGlobalCustomer(e.target.value);
    }

    const typeHandler = (val) => {
        setGlobalType(val.label);
    }

    const locHandler = (val) => {
        setGlobalLoc(val.label);
    }

    return (
        <>
            <Header/>
            <div className="access content__body">
                <div className="access__head content__head">Сreate access connection</div>
                <div className="access__panel content__panel">
                    <div className="content__panel_row">
                        <div className="content__panel_col-fill">
                            <div className="input">
                                <div className="input__name">Customer name</div>
                                <input value={customer} className='input__el' placeholder='Customer name' type="text" onChange={customerHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="content__panel_row">
                        <div className="content__panel_col">
                            <div className="select">
                                <div className="select__name">
                                    Type
                                </div>
                                <div className="select__el">
                                    <Select
                                        defaultValue={{value: type, label: type}}
                                        
                                        className="basic-single"
                                        classNamePrefix="select"
                                        onChange={typeHandler}
                                        options={typeOptions}/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="content__panel_col">
                            <div className="select">
                                <div className="select__name">
                                    Location
                                </div>
                                <div className="select__el">
                                    <Select
                                        defaultValue={{value: loc, label: loc}}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        onChange={locHandler}
                                        options={locOptions}/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="content__panel_row">
                        <div className="content__panel_col-fill">
                            <div className="radio">
                                <div className="radio__name">Port speed</div>
                                <div className="radio__list">
                                    <div className="radio__item">
                                        <Radio label='1 Gbps' id='r1' name='r'/>
                                    </div>
                                    <div className="radio__item">
                                        <Radio label='10 Gbps' id='r2' name='r'/>
                                    </div>
                                    <div className="radio__item">
                                        <Radio label='100 Gbps' id='r3' name='r'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content__action">
                <div className="content__action_item"></div>
                <div className="content__action_item content__action_item-last">
                    <Link onClick={() => setGlobalStep(true)}  className='content__action_btn content__action_btn-fill' to={'/step-2'}>
                        <div className="content__action_btn_text">Next</div>
                        <div className="content__action_btn_icon">
                            <img src={next} alt="" />
                        </div>
                    </Link>
                </div>
                
            </div>
        </>
        
    )
}