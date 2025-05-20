import React, { useEffect, useRef } from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ArcadeMachineProps extends WindowAppProps {}

const ArcadeMachine: React.FC<ArcadeMachineProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Mount the arcade machine to this container
      // Assuming `window.startArcadeMachine` initializes the app
      if ((window as any).startArcadeMachine) {
        (window as any).startArcadeMachine(container);
      }
    }
  }, []);

  return (
    <Window
      top={100}
      left={100}
      width={initWidth}
      height={initHeight}
      windowTitle="Arcade Machine"
      windowBarIcon="myComputer"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
    >
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </Window>
  );
};

export default ArcadeMachine;
