import './Header.scss';

export const Header = () => {
    return (
        <div className="header">
            <div class="header__vls">
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
    )
}