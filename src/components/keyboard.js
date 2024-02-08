import { create, css, html } from '//unpkg.com/cuick-dev'

create('keyboard', {
	key: '',
	template: ({ key }) => {
		const row = (row) => html`
			<div class="row">
				${row
					.split(' ')
					.map(
						(k) => html`
							<div class=${['key', k, k === key ? 'active' : ''].join(' ')}>
								${k.replace('_', ' ')}
							</div>
						`
					)}
			</div>
		`
		return html`
			${row('` 1 2 3 4 5 6 7 8 9 0 - = delete')}
			${row('tab q w e r t y u i o p [ ] \\')}
			${row("caps_lock a s d f g h j k l ; ' return")}
			${row('shift z x c v b n m , . / shift')}
			${row('bl bl bl bc space bc bl bl bl')}
		`
	},
	styles: css`
		:host {
			background: #555;
			border-radius: 0.5rem;
			display: grid;
			gap: 0.33rem;
			padding: 0.5rem;
			text-transform: uppercase;
			width: 34rem;
		}
		.row {
			display: flex;
			gap: 0.33rem;
		}
		.key {
			align-items: center;
			background: black;
			border-radius: 0.25rem;
			color: white;
			display: flex;
			flex-basis: 2rem;
			height: 2rem;
			justify-content: center;
			overflow: hidden;
			position: relative;
		}
		.delete,
		.tab,
		.caps_lock,
		.return,
		.shift {
			align-items: end;
			flex-grow: 1;
			font-size: 0.5rem;
			justify-content: flex-start;
			letter-spacing: 1px;
			padding: 0.3rem;
			text-transform: lowercase;
		}
		.delete,
		.return,
		.shift:last-child {
			justify-content: flex-end;
		}
		.delete,
		.tab {
			width: 3rem;
		}
		.bl,
		.bc,
		.space {
			color: black;
		}
		.bc {
			flex-basis: calc(2rem + 0.33rem);
		}
		.space {
			flex-grow: 1;
		}
		.active,
		:host([delete]) .delete,
		:host([tab]) .tab,
		:host([caps]) .caps-lock,
		:host([return]) .return,
		:host([shift]) .shift {
			color: var(--finger-color);
			font-weight: bold;
		}
		.active:before {
			background: var(--finger-color);
			bottom: 0;
			content: '';
			left: 0;
			opacity: 0.1;
			position: absolute;
			right: 0;
			top: 0;
		}
	`,
})
