import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () => {
    return (
        <div>
        <ImageThumbnail />
        <HeaderContent />
        <HeaderTitle />
        </div>
    )
}

export default HeaderContainer;