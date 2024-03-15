import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DEFAULT_SIZE } from '../constants';
import { Container } from '../index';

describe('Container', () => {
	it('should render <div> with default size if prop is not defined', () => {
		const text = 'container';
		render(<Container>{text}</Container>);

		const container = screen.getByText(text);
		expect(container.dataset.size).toBe(DEFAULT_SIZE);
	});
});
