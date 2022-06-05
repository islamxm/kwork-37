import checkIcon from '../../img/check.svg';
import './Checkbox.scss';

export const Checkbox = ({id, label, icon}) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id={id}/>
            <label htmlFor={id} className="checkbox__label">
                <div className="checkbox__label_icon">
                    <div className="checkbox__label_icon_el">
                        <img src={checkIcon} alt="" />
                    </div>
                </div>
                <div className="checkbox__label_text">
                    <div className="checkbox__label_text_icon">
                        <img src={icon} alt="" />
                    </div>
                    {label}
                </div>
            </label>
        </div>
    )
}