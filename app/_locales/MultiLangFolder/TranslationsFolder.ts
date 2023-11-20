import { AbstractFolder } from './AbstractFolder';

export class TranslationsFolder extends AbstractFolder {
	protected readonly filePrefix = 'translations.';
	protected readonly fileExtension = '.json';

	getLanguageFile(locale: string): Record<string, string> | null {
		const file = this.getFileSource(locale);
		try {
			const json = file.readAsJson();
			if (this.isCorrectStructure(json)) {
				return json;
			} else {
				throw new Error('Translation JSON has wrong data structure');
			}
		} catch (e) {
			console.error(e);
			return null;
		}
	}

	private isCorrectStructure(json: any): json is Record<string, string> {
		return (
			json !== null &&
			typeof json === 'object' &&
			!Array.isArray(json) &&
			Object.values(json).every((v) => typeof v === 'string')
		);
	}
}
