import fromCWD from 'from-cwd';
import { describe, expect, it, vi } from 'vitest';
import { MDContentFolder } from '../MDContentFolder';

describe('MDContentFolder', () => {
	it('should read and return content from the child file', () => {
		const mdContentFolder = new MDContentFolder({
			path: getPath(),
		});
		let content = mdContentFolder.getLanguageFile('uk');
		if (typeof content === 'string') {
			content = content.trim();
		}
		expect(content).toBe('# Привіт світ!');
	});

	it('should return null when trying to read non-existent file', () => {
		const markdownFolder = new MDContentFolder({
			path: getPath(),
		});

		muteLog();
		const content = markdownFolder.getLanguageFile('non-existent-locale');
		unmuteLog();

		expect(content).toBeNull();
	});
});

function getPath(): string {
	return fromCWD('./app/_locales/MultiLangFolder/__specs__/fixtures/md');
}

function muteLog(): void {
	vi.stubGlobal('console', {
		error: (): void => undefined,
	});
}

function unmuteLog(): void {
	vi.unstubAllGlobals();
}
