import { makeConfetti } from '../utils/confetti.js'
import { create, css, html } from '//unpkg.com/cuick-dev'

import './guide.js'

create('phrase', {
	phrase: '',
	$matched: '',
	$correct: '',
	setup({ $matched, $correct }) {
		let loaded = 0
		const load = () => {
			$matched.value = ''
			this.phrase = this.children[loaded].alt
			this.children[loaded].scrollIntoView({ behavior: 'smooth' })
		}
		load()
		addEventListener('keydown', (e) => {
			if (this.phrase.replace($matched.value, '')[0] === e.key) {
				$matched.value += e.key
				$correct.value = 'correct'
				if ($matched.value === this.phrase) {
					makeConfetti()
					setTimeout(() => {
						loaded++
						if (loaded === this.children.length) loaded = 0
						load()
					}, 5000)
				}
			} else $correct.value = 'incorrect'
			setTimeout(() => ($correct.value = null), 500)
		})
	},
	template: ({ phrase, $matched, $correct }) => {
		const unmatched = phrase.replace($matched.value, '')
		return html`
			<div class="container">
				<slot />
				<div class=${`prompt ${$correct.value}`}>
					<pre><span class="matched">${$matched.value}</span>${unmatched}</pre>
				</div>
				<c-guide key=${unmatched[0]}></c-guide>
			</div>
		`
	},
	styles: css`
		.container {
			align-items: center;
			display: flex;
			flex-direction: column;
		}
		.screen {
			align-items: end;
			background: var(--bg) no-repeat center center / cover;
			display: flex;
			width: calc(100% + 4rem);
		}
		slot {
			border: 1rem solid #555;
			border-radius: 2rem;
			box-sizing: content-box;
			display: flex;
			overflow: hidden;
			width: 32rem;
		}
		slot::slotted(*) {
			display: block;
			object-fit: cover;
			width: 100%;
		}
		.prompt {
			align-items: center;
			background: white;
			border: 2px solid black;
			border-radius: 1rem;
			color: black;
			display: flex;
			font-family: sans-serif;
			font-size: 1.5rem;
			font-weight: bold;
			height: 3rem;
			letter-spacing: 1px;
			padding: 0 1rem;
			position: relative;
			text-transform: uppercase;
			top: -2rem;
			transition: 0.5s ease-out;
		}
		pre {
			font-family: inherit;
			margin: 0;
		}
		.correct {
			background: #e8f5e9;
		}
		.incorrect {
			background: #ef9a9a;
		}
		.matched {
			color: #2e7d32;
		}
	`,
})
