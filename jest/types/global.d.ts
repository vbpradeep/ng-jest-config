
declare global {
  namespace JestHelper {
    const mockFunction: (obj: any, method: string) => jest.Mock<any, any, any>;
    const spyOnFunction: (obj: any, method: string) => jest.SpyInstance<any, unknown[], any>;
    const expectCalled: (mockFn: jest.SpyInstance) => void;
    const expectCalledTimes: (mockFn: jest.SpyInstance, times: number) => void;
    const expectCalledWith: (mockFn: jest.SpyInstance, ...args: any[]) => void;
    const resetMocks: () => void;
    const click: (selector: string) => void;
    const exists: (selector: string) => void;
    const non_exists: (selector: string) => void;
    const setInputValue: (selector: string, value: string) => void;
    const triggerKeyEvent: (selector: string, key: string, eventType?: string) => void;
    const hasClass: (selector: string, className: string) => void;
  }
}

export {};



