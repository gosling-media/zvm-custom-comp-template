import { EventHandler } from 'zvm-code-context';

export interface IframePropData {
    url: string;
}

export interface IframeStateData { }

export interface IframeEvent {
    onConfirm?: EventHandler;
    onCancel?: EventHandler;
}

export interface IframeProps {
    propData: IframePropData;
    propState: IframeStateData;
    event: IframeEvent;
}

export function Iframe({ propData }: IframeProps) {
    return (
        <iframe style={{ width: '100vw', height: '100vh', border: "0", borderRadius: "0" }} src={propData.url} />
    );
}
