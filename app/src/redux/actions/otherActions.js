//////////////////////////////////////////////////accion para el fetch
export const IS_FETCHING = 'IS_FETCHING';

export function isFetching(boolean) {
	console.log(boolean)
	return {
		"type": IS_FETCHING,
		boolean
	};
}
