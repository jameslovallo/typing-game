import { create, css, html } from '//unpkg.com/cuick-dev'

import './hand.js'
import './keyboard.js'

create('guide', {
	key: '',
	$left: '',
	$right: '',
	template: ({ key, $left, $right }) => {
		if (key === ' ') key = 'space'
		const left = {
			pinky: ['q', 'a', 'z'],
			ring: ['w', 's', 'x'],
			middle: ['e', 'd'],
			pointer: ['r', 'f', 'c', 'v', 't', 'g', 'b'],
			thumb: ['space'],
		}
		const right = {
			pinky: ['p', ';', '.', '[', ']', "'"],
			ring: ['o', 'l', '.'],
			middle: ['i', 'k', ','],
			pointer: ['y', 'h', 'n', 'u', 'j', 'm'],
			thumb: ['space'],
		}
		const colors = {
			thumb: '#d50000',
			pointer: '#ff6d00',
			middle: '#ffab00',
			ring: '#00c853',
			pinky: '#2962ff',
		}
		const finger = (hand, signal) => {
			signal.value = ''
			Object.keys(hand).forEach((finger) => {
				if (hand[finger].includes(key)) signal.value = finger
			})
		}
		finger(left, $left)
		finger(right, $right)
		return html`
			<div
				class="container"
				style=${`--finger-color: ${colors[$left.value || $right.value]}`}
			>
				<c-keyboard key=${key}></c-keyboard>
				<div class="hands">
					<c-hand finger=${$left.value}></c-hand>
					<c-hand finger=${$right.value} right></c-hand>
				</div>
			</div>
		`
	},
	styles: css`
		.container {
			display: grid;
			gap: 4rem;
		}
		.hands {
			display: flex;
			gap: 2rem;
			justify-self: center;
			transform: scale(2);
		}
	`,
})
