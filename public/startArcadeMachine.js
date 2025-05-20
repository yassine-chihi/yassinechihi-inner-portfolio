window.startArcadeMachine = function (container) {
    if (window.arcadeMachineInit) {
      window.arcadeMachineInit(container);
    } else {
      console.error("arcadeMachineInit is not ready yet.");
    }
  };
  