import React from "react";

const SketchEmbed = () => {
    return (
        <div className="sketchfab-embed-wrapper">
        <iframe
            title="Bill Cipher"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/8f5721c871d14a87a402548b6a26a257/embed"
            style={{ width: '100%', height: '500px' }} // Điều chỉnh kích thước nếu cần
        ></iframe>
    </div>
    );
};

export default SketchEmbed;
