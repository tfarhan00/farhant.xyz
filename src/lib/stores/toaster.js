import { writable, derived } from 'svelte/store';

function id() {
	return '_' + Math.random().toString(36).substring(2, 9);
}

const useToast = () => {
	/** @type {any} */
	const _toasts = writable([]);

	/**
	 * @param {string} t
	 * @param {number} d
	 * @param {boolean} is
	 * */

	const addToast = (t = 'default text', d = 2000, is = false) => {
		_toasts.update((/** @type {any} */ current) => {
			return [...current, { id: id(), text: t, duration: d, isRich: is }];
		});
	};

	const _watchToast = derived(_toasts, ($_toasts, set) => {
		set($_toasts);
		// @ts-ignore
		if ($_toasts.length > 0) {
			const toastCycle = setTimeout(() => {
				/** @param {any} current */
				_toasts.update((/** @type {void[]} */ current) => {
					current.pop();
					return current;
				});
				// @ts-ignore
			}, $_toasts[0].duration);
			return () => {
				clearTimeout(toastCycle);
			};
		}
	});

	const { subscribe } = _watchToast;

	return {
		subscribe,
		/**
		 * @param {string} text
		 * @param {boolean} isRich
		 * @param {number} duration */
		show: (text, duration, isRich) => addToast(text, duration, isRich)
	};
};

export const toaster = useToast();
