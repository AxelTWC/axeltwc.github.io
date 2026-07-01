// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
	writable: true,
	value: () => ({
		clearRect: () => {},
		fillText: () => {},
		set globalAlpha(value) {
			this._globalAlpha = value;
		},
		get globalAlpha() {
			return this._globalAlpha ?? 1;
		},
		fillStyle: "",
		font: "",
	}),
});

class IntersectionObserverMock {
	observe() {}

	unobserve() {}

	disconnect() {}
}

global.IntersectionObserver = IntersectionObserverMock;
