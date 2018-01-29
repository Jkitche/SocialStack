import axios from 'axios';

/**
 * A helper class that wraps ajax calls.
 */
const ajax = {

	/**
	 * Wraps and caches ajax calls around axios.
	 * @param {object} opts Options that map to axios options
	 * @return {Promise}    A promise that resolves based on axios's success or failure.
	 */
	call(opts) {
		return axios.request({
			// default timeout of 30 seconds for all requests
			timeout: 10000,
			...opts,
		}).catch((error) => {
			console.error(error);
		});
	},
};


export { ajax };
