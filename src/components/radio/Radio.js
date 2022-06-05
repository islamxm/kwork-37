import './Radio.scss';

export const Radio = ({id, name, label}) => {
    return (
        <div className="radio">
            <input type="radio" id={id} name={name}/>
            <label htmlFor={id} className="radio__label">
                <div className="radio__label_icon">
                    <div className="radio__label_icon_el"></div>
                </div>
                <div className="radio__label_text">{label}</div>
            </label>
        </div>
    )
}