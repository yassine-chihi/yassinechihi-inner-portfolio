import React, { useEffect, useRef } from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ArcadeMachineProps extends WindowAppProps {}

const ArcadeMachine: React.FC<ArcadeMachineProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        // Handle keyboard events from parent to pass to iframe
        const handleKeyDown = (e: KeyboardEvent) => {
            if (iframeRef.current) {
                iframeRef.current.contentWindow?.postMessage(
                    { type: 'keyDownParent', key: e.key },
                    '*'
                );
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Window
            top={48}
            left={48}
            width={initWidth}
            height={initHeight}
            windowTitle="Arcade Machine"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div style={styles.container}>
                <iframe
                    ref={iframeRef}
                    src="/arcade-machine/index.html"
                    style={styles.iframe}
                    title="Arcade Machine"
                />
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    iframe: {
        width: '100%',
        height: '100%',
        border: 'none',
    },
};

export default ArcadeMachine;