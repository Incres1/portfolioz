import React from 'react';

const SoundCloudEmbed = () => {
    return (
        <div className='flex'>
            <iframe
                width="500"
                height="50%"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1680393513&color=%23391ec3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
                style={{
                    fontSize: '10px',
                    color: '#cccccc',
                    lineBreak: 'anywhere',
                    wordBreak: 'normal',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                    fontWeight: '100'
                }}
            >
            </div>
        </div>
    );
};

export default SoundCloudEmbed;
