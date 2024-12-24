import React from 'react';
import { State, EventHandler } from 'zvm-code-context';


interface IframeProps {
    url?: string;
}

interface IframeStateData extends State {
    // Define state properties here
}

interface IframeEvent {
    onLoad?: EventHandler;
    // Define other events here
}

export const Iframe: React.FC<IframeProps> = ({ url = "about:blank" }) => {
    return (
        <iframe style={{ width: '100vw', height: '100vh', border: "0", borderRadius: "0" }} src={url} />
    );
};