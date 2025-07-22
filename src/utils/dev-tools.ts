export class Tools {
	static log(title: string, message: string) {
		console.log(
			` - \u001b[32m${title}\u001b[0m: ${message.replace(/\n/g, `\n    `)}`,
		);
	}
}
