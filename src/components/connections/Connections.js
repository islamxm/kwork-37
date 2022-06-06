import {Header} from '../header/Header';
import useGlobal from '../../hooks/useGlobal';
import Select from 'react-select';
import { Checkbox } from '../checkbox/Checkbox';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import iconInt from '../../img/icon-internet.svg';
import iconAzure from '../../img/icon-azure.svg';
import iconAws from '../../img/icon-aws.svg';
import iconGcp from '../../img/icon-gsp.svg';
import iconOracle from '../../img/icon-oracle.svg';
import iconAb from '../../img/icon-ab.svg';

import prev from '../../img/prev.svg';

import fwaas from '../../img/fwaas.svg';
import ddos from '../../img/ddos.svg';
import swg from '../../img/svg.svg';
import ips from '../../img/ips.svg';
import nat from '../../img/nat.svg';
import lb from '../../img/lb.svg';


const { Panel } = Collapse;






export const Connections = () => {

    const {
        internet, 
        azure, 
        aws, 
        gcp, 
        oracle, 
        ab, 
        setResultInternet, 
        setResultAzure, 
        setResultAws, 
        setResultGcp, 
        setResultOracle, 
        setResultAb, 
        setGlobalStep,
        setGlobalSh} = useGlobal();

    setGlobalStep(true);
    

    const backBtnHandler = (bool) => {
        setGlobalSh(bool);
        setGlobalStep(bool)
    }

    return (
        <>
            <div className="header">
                <div class="header__vls complete">
                    <div class="header__vls_item active">
                        <div class="header__vls_item_val">1</div>
                        <div class="header__vls_item_name">Access connection</div>
                    </div>
                    <div class="header__vls_item">
                        <div class="header__vls_item_val">2</div>
                        <div class="header__vls_item_name">Connections</div>
                    </div>
                </div>
            </div>
            <div className="connections content__body">
                <div className="connections__head content__head">Add connections</div>
                
                    <Collapse 
                        bordered={false} 
                        defaultActiveKey={['1']}
                        ghost={true}
                        expandIconPosition={'right'}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : -90} />}>
                        <Panel 
                            style={{border: '1px solid #D8DAEB', padding: 0, borderRadius: '2px'}} 
                            className='content__panel' 
                            header={<div className='content__panel_head'>
                                <div className="content__panel_head_icon">
                                    <img src={iconInt} alt="" />
                                </div>
                                <div className="content__panel_head_text">Internet</div>
                            </div>} 
                            key="1">
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Location
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultInternet(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Internet provider
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                options={[{value: 'first', label: 'first'}, {value: 'second', label: 'second'}]}
                                                onChange={() => setResultInternet(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Connection speed
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultInternet(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Subscription
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultInternet(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col-fill">
                                    <div className="checkbox">
                                        <div className="checkbox__name">Services</div>
                                        <div className="checkbox__list">
                                            <div className="checkbox__item">
                                                <Checkbox icon={fwaas} label={'FWaaS'} id={'internet1'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ddos} label={'DDoS'} id={'internet2'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={swg} label={'SWG'} id={'internet3'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ips} label={'IPS/IDS'} id={'internet4'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={nat} label={'NAT'} id={'internet5'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={lb} label={'LB'} id={'internet6'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                        <Panel 
                            style={{border: '1px solid #D8DAEB', padding: 0, borderRadius: '2px'}}
                            className='content__panel' 
                            header={<div className='content__panel_head'>
                                <div className="content__panel_head_icon">
                                    <img src={iconAzure} alt="" />
                                </div>
                                <div className="content__panel_head_text">Azure</div>
                            </div>} 
                            key="2">
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Location
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAzure(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Account ID
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAzure(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Connection speed
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAzure(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Subscription
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAzure(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col-fill">
                                    <div className="checkbox">
                                        <div className="checkbox__name">Services</div>
                                        <div className="checkbox__list">
                                            <div className="checkbox__item">
                                                <Checkbox icon={fwaas} label={'FWaaS'} id={'azure1'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ddos} label={'DDoS'} id={'azure2'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={swg} label={'SWG'} id={'azure3'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ips} label={'IPS/IDS'} id={'azure4'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={nat} label={'NAT'} id={'azure5'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={lb} label={'LB'} id={'azure6'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>        
                        <Panel 
                            style={{border: '1px solid #D8DAEB', padding: 0, borderRadius: '2px'}}
                            className='content__panel' 
                            header={<div className='content__panel_head'>
                                <div className="content__panel_head_icon">
                                    <img src={iconAws} alt="" />
                                </div>
                                <div className="content__panel_head_text">AWS</div>
                            </div>} 
                            key="3">
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Location
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAws(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Account ID
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAws(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Connection speed
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAws(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Subscription
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAws(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col-fill">
                                    <div className="checkbox">
                                        <div className="checkbox__name">Services</div>
                                        <div className="checkbox__list">
                                            <div className="checkbox__item">
                                                <Checkbox icon={fwaas} label={'FWaaS'} id={'aws1'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ddos} label={'DDoS'} id={'aws2'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={swg} label={'SWG'} id={'aws3'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ips} label={'IPS/IDS'} id={'aws4'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={nat} label={'NAT'} id={'aws5'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={lb} label={'LB'} id={'aws6'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                        <Panel 
                            style={{border: '1px solid #D8DAEB', padding: 0, borderRadius: '2px'}}
                            className='content__panel' 
                            header={<div className='content__panel_head'>
                                <div className="content__panel_head_icon">
                                    <img src={iconGcp} alt="" />
                                </div>
                                <div className="content__panel_head_text">GCP</div>
                            </div>} 
                            key="4">
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Location
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultGcp(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Account ID
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultGcp(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Connection speed
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultGcp(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Subscription
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultGcp(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col-fill">
                                    <div className="checkbox">
                                        <div className="checkbox__name">Services</div>
                                        <div className="checkbox__list">
                                            <div className="checkbox__item">
                                                <Checkbox icon={fwaas} label={'FWaaS'} id={'gsp1'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ddos} label={'DDoS'} id={'gsp2'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={swg} label={'SWG'} id={'gsp3'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ips} label={'IPS/IDS'} id={'gsp4'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={nat} label={'NAT'} id={'gsp5'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={lb} label={'LB'} id={'gsp6'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                        <Panel 
                            style={{border: '1px solid #D8DAEB', padding: 0, borderRadius: '2px'}}
                            className='content__panel' 
                            header={<div className='content__panel_head'>
                                <div className="content__panel_head_icon">
                                    <img src={iconOracle} alt="" />
                                </div>
                                <div className="content__panel_head_text">Oracle</div>
                            </div>} 
                            key="5">
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Location
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultOracle(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Account ID
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultOracle(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Connection speed
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultOracle(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Subscription
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultOracle(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col-fill">
                                    <div className="checkbox">
                                        <div className="checkbox__name">Services</div>
                                        <div className="checkbox__list">
                                            <div className="checkbox__item">
                                                <Checkbox icon={fwaas} label={'FWaaS'} id={'oracle1'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ddos} label={'DDoS'} id={'oracle2'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={swg} label={'SWG'} id={'oracle3'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ips} label={'IPS/IDS'} id={'oracle4'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={nat} label={'NAT'} id={'oracle5'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={lb} label={'LB'} id={'oracle6'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                        <Panel 
                            style={{border: '1px solid #D8DAEB', padding: 0, borderRadius: '2px'}}
                            className='content__panel' 
                            header={<div className='content__panel_head'>
                                <div className="content__panel_head_icon">
                                    <img src={iconAb} alt="" />
                                </div>
                                <div className="content__panel_head_text">Alibaba</div>
                            </div>} 
                            key="6">
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Location
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAb(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Account ID
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAb(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Connection speed
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAb(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="content__panel_col">
                                    <div className="select">
                                        <div className="select__name">
                                            Subscription
                                        </div>
                                        <div className="select__el">
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                onChange={() => setResultAb(true)}
                                                />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="content__panel_row">
                                <div className="content__panel_col-fill">
                                    <div className="checkbox">
                                        <div className="checkbox__name">Services</div>
                                        <div className="checkbox__list">
                                            <div className="checkbox__item">
                                                <Checkbox icon={fwaas} label={'FWaaS'} id={'ab1'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ddos} label={'DDoS'} id={'ab2'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={swg} label={'SWG'} id={'ab3'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={ips} label={'IPS/IDS'} id={'ab4'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={nat} label={'NAT'} id={'ab5'}/>
                                            </div>
                                            <div className="checkbox__item">
                                                <Checkbox icon={lb} label={'LB'} id={'ab6'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>
                
            </div>
            <div className="content__action">
                <div className="content__action_item content__action_item-first">
                    <Link onClick={() => backBtnHandler(false)} className='content__action_btn' to={'/'}>
                        <div className="content__action_btn_icon">
                            <img src={prev} alt="" />
                        </div>
                        <div className="content__action_btn_text">Back</div>
                    </Link>
                </div>
                <div className="content__action_item content__action_item-last">
                    <button type='button' className='content__action_btn content__action_btn-fill'>
                        <div className="content__action_btn_text">Order</div>
                    </button>
                </div>
            </div>
        </>
        
    )
}