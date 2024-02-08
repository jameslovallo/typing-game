import { create, css, html } from '//unpkg.com/cuick-dev'

create('hand', {
	finger: '',
	right: false,
	template: ({ finger }) => {
		const fingers = ['pinky', 'ring', 'middle', 'pointer']
		const makeFinger = (f) => {
			const classes = [f, 'finger', f === finger ? 'active' : ''].join(' ')
			return html` <div class=${classes} /> `
		}
		return html`
			<div class="top">${fingers.map((f) => makeFinger(f))}</div>
			<div class="palm">${makeFinger('thumb')}</div>
		`
	},
	styles: css`
		:host {
			width: 4.25rem;
		}
		:host([right]) {
			transform: rotateY(180deg);
		}
		.top {
			align-items: end;
			aspect-ratio: 1;
			display: grid;
			gap: 2px;
			grid-template-columns: repeat(4, 1fr);
			position: relative;
			width: 3rem;
		}
		.top:before {
			background: #311b92;
			border-top-left-radius: 100%;
			bottom: 0;
			content: '';
			display: block;
			height: 1rem;
			position: absolute;
			width: 100%;
		}
		.finger {
			background: #311b92;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
			height: 3rem;
		}
		.pinky {
			height: 2rem;
		}
		.middle {
			height: 3.5rem;
		}
		.palm {
			background: #311b92;
			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 0.75rem;
			height: 2rem;
			position: relative;
			width: 3rem;
		}
		.thumb {
			border-radius: 1rem;
			bottom: 0;
			height: 3rem;
			position: absolute;
			right: 0.33rem;
			transform: rotate(33deg);
			transform-origin: bottom right;
			width: 0.75rem;
		}
		:host([finger='thumb']) .thumb {
			z-index: -1;
		}
		.active {
			background: var(--finger-color);
		}
	`,
})
