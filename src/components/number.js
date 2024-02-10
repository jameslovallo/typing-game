import { create, css, html } from '//unpkg.com/cuick-dev'

create('number', {
	number: '10',
	alt: 'ten',
	template: ({ number }) => html`
		${number
			.split('')
			.map(
				(number) => html`<img src=${`/src/assets/numbers/${number}.png`} />`
			)}
	`,
	styles: css`
		:host {
			align-items: center;
			aspect-ratio: 4/3;
			background: white;
			border-radius: 0.5rem;
			display: flex;
			gap: 0.5rem;
			justify-content: center;
			padding: 0.5rem;
		}
	`,
})
