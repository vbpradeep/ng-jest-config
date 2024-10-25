export namespace TestHelpers {
  // Mocking helpers
  export const mockFunction = (obj: any, method: string) => {
    const mockFn = jest.fn();
    obj[method] = mockFn;
    return mockFn;
  };

  export const spyOnFunction = (obj: any, method: string) => {
    return jest.spyOn(obj, method);
  };

  export const expectCalled = (mockFn: jest.SpyInstance) => {
    expect(mockFn).toHaveBeenCalled();
  };

  export const expectCalledTimes = (
    mockFn: jest.SpyInstance,
    times: number
  ) => {
    expect(mockFn).toHaveBeenCalledTimes(times);
  };

  export const expectCalledWith = (
    mockFn: jest.SpyInstance,
    ...args: any[]
  ) => {
    expect(mockFn).toHaveBeenCalledWith(...args);
  };

  export const resetMocks = () => {
    jest.resetAllMocks();
  };

  export const click = (selector: string) => {
    const element = getSingleElement(selector);
    if (element) {
      element.click();
    } else {
      throw new Error(`Element not found for selector: "${selector}"`);
    }
  };

  export const exists = (selector: string) => {
    const element = getSingleElement(selector);
    expect(element).not.toBeNull(); // Ensure the element exists
  };

  export const non_exists = (selector: string) => {
    const element = getSingleElement(selector);
    expect(element).toBeNull(); // Ensure the element does not exist
  };

  export const setInputValue = (selector: string, value: string) => {
    const element = getSingleElement(selector) as HTMLInputElement;
    if (element && element.tagName === 'INPUT') {
      element.value = value;
      element.dispatchEvent(new Event('input')); // Trigger the 'input' event
    } else {
      throw new Error(`Input field not found for selector: ${selector}`);
    }
  };

  export const triggerKeyEvent = (
    selector: string,
    key: string,
    eventType = 'keydown'
  ) => {
    const element = getSingleElement(selector);
    if (element) {
      const event = new KeyboardEvent(eventType, { key });
      element.dispatchEvent(event);
    } else {
      throw new Error(`Element not found for selector: ${selector}`);
    }
  };

  export const hasClass = (selector: string, className: string) => {
    const element = getSingleElement(selector);
    expect(element.classList.contains(className)).toBe(true);
  };

  // Utility function to check for multiple elements
  const getSingleElement = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 1) {
      throw new Error(
        `Multiple elements found for selector: "${selector}". Please use a more specific selector.`
      );
    }
    return elements[0] as HTMLElement; // Return the first element or undefined if none found
  };
}
