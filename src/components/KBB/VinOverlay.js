import React from "react"
import Wereisphoto from "../../images/svg/whereismyVIN.inline.svg"

const VinOverlay = ({ setIsOverlayVisible }) => {
    if (typeof setIsOverlayVisible !== "function") {
        return null;
    }
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
            onClick={() => setIsOverlayVisible(false)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setIsOverlayVisible(false);
                }
            }}
            role="button"
            tabIndex="0"
            aria-label="Close overlay"
        >
            <div
                className="bg-white p-4 rounded-md"
                onClick={e => e.stopPropagation()}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.stopPropagation();
                    }
                }}
                role="button"
                tabIndex="0"
            >
                <Wereisphoto className="w-full" />
            </div>
        </div >
    );
};

export default VinOverlay