declare module 'live2dcubismcore.min.js' {
  namespace Live2DCubismCore {
    function csmSetLogFunction(logFunction: (message: string) => void): void;
    const Version: {
      csmGetVersion(): number;
    };
    namespace Logging {
      function csmSetLogFunction(logFunction: (message: string) => void): void;
      function csmGetLogFunction(): ((message: string) => void) | null;
    }
    namespace Memory {
      function initializeAmountOfMemory(memorySize: number): void;
    }
  }
  export = Live2DCubismCore;
}

