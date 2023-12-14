import React from 'react'
import Wereisphoto from '../../images/svg/whereismyVIN.inline.svg'

const VinOverlay = ({ setIsOverlayVisible }) => {
    if (typeof setIsOverlayVisible !== 'function') {
        console.error('setIsOverlayVisible must be a function');
        return null;
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={() => setIsOverlayVisible(false)}>
            <div className="bg-white p-4 rounded-md" onClick={e => e.stopPropagation()}>
                <Wereisphoto className="w-full"/>
            </div>
        </div>
    );
};

export default VinOverlay