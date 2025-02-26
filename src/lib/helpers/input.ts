export const parseInput = (type: string, target: EventTarget & HTMLInputElement) => {
	let value: unknown;
	switch (type) {
		case "file":
			value = target.files?.[0];
			break;
		case "checkbox":
			value = target.checked;
			break;
		case "number":
			value = target.valueAsNumber;
			break;
		default:
			value = target.value;
			break;
	}
	return value;
}