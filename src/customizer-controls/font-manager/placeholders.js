import {
	__,
} from '@wordpress/i18n';

export default {
	body: {
		group: 'base',
		label: __( 'Body', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '17',
				min: 6,
				max: 25,
				step: 1,
			},
			lineHeight: {
				value: '1.5',
				min: 1,
				max: 5,
				step: .1,
			},
			marginBottom: {
				value: 1.5,
				unit: 'em',
				min: 1,
				max: 5,
				step: .1,
			},
		},
	},
	'main-title': {
		group: 'header',
		label: __( 'Site Title', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '25',
				min: 10,
				max: 200,
				step: 1,
			},
		},
	},
	'site-description': {
		group: 'header',
		label: __( 'Site Description', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '15',
				min: 6,
				max: 50,
				step: 1,
			},
		},
	},
	'primary-menu-items': {
		group: 'primaryNavigation',
		label: __( 'Primary Menu Items', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '15',
				min: 6,
				max: 30,
				step: 1,
			},
		},
	},
	'primary-sub-menu-items': {
		group: 'primaryNavigation',
		label: __( 'Primary Sub-Menu Items', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '14',
				min: 6,
				max: 30,
				step: 1,
			},
		},
	},
	'primary-menu-toggle': {
		group: 'primaryNavigation',
		label: __( 'Primary Mobile Menu Toggle', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '15',
				min: 6,
				max: 30,
				step: 1,
			},
		},
	},
	buttons: {
		group: 'content',
		label: __( 'Buttons', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '',
				min: 5,
				max: 100,
				step: 1,
			},
		},
	},
	'all-headings': {
		group: 'content',
		label: __( 'All Headings', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '',
				min: 15,
				max: 100,
				step: 1,
			},
			lineHeight: {
				value: '',
				min: 0,
				max: 5,
				step: .1,
			},
			marginBottom: {
				value: 20,
				unit: 'px',
			},
		},
	},
	h1: {
		group: 'content',
		label: __( 'Heading 1 (H1)', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: 42,
				min: 15,
				max: 100,
				step: 1,
			},
			lineHeight: {
				value: 1.2,
				min: 0,
				max: 5,
				step: .1,
			},
			marginBottom: {
				value: 20,
				unit: 'px',
			},
		},
	},
	'single-content-title': {
		group: 'content',
		label: __( 'Single Content Title (H1)', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '',
				min: 15,
				max: 100,
				step: 1,
			},
		},
	},
	h2: {
		group: 'content',
		label: __( 'Heading 2 (H2)', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: 35,
				min: 15,
				max: 100,
				step: 1,
			},
			lineHeight: {
				value: 1.2,
				min: 0,
				max: 5,
				step: .1,
			},
			marginBottom: {
				value: 20,
				unit: 'px',
			},
		},
	},
	'archive-content-title': {
		group: 'content',
		label: __( 'Archive Content Title (H2)', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: '',
				min: 15,
				max: 100,
				step: 1,
			},
		},
	},
	h3: {
		group: 'content',
		label: __( 'Heading 3 (H3)', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: 29,
				min: 15,
				max: 100,
				step: 1,
			},
			lineHeight: {
				value: 1.2,
				min: 0,
				max: 5,
				step: .1,
			},
			marginBottom: {
				value: 20,
				unit: 'px',
			},
		},
	},
	h4: {
		group: 'content',
		label: __( 'Heading 4 (H4)', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: 24,
				min: 15,
				max: 100,
				step: 1,
			},
			lineHeight: {
				min: 0,
				max: 5,
				step: .1,
			},
			marginBottom: {
				value: 20,
				unit: 'px',
			},
		},
	},
	h5: {
		group: 'content',
		label: __( 'Heading 5 (H5)', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: 20,
				min: 15,
				max: 100,
				step: 1,
			},
			lineHeight: {
				min: 0,
				max: 5,
				step: .1,
			},
			marginBottom: {
				value: 20,
				unit: 'px',
			},
		},
	},
	h6: {
		group: 'content',
		label: __( 'Heading 6 (H6)', 'generatepress' ),
		placeholders: {
			fontSize: {
				min: 15,
				max: 100,
				step: 1,
			},
			lineHeight: {
				min: 0,
				max: 5,
				step: .1,
			},
			marginBottom: {
				value: 20,
				unit: 'px',
			},
		},
	},
	'top-bar': {
		group: 'widgets',
		label: __( 'Top Bar', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: 13,
				min: 6,
				max: 25,
				step: 1,
			},
		},
	},
	'widget-titles': {
		group: 'widgets',
		label: __( 'Widget Titles', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: 20,
				min: 6,
				max: 30,
				step: 1,
			},
			marginBottom: {
				value: 30,
				unit: 'px',
			},
		},
	},
	footer: {
		group: 'footer',
		label: __( 'Footer Bar', 'generatepress' ),
		placeholders: {
			fontSize: {
				value: 15,
				min: 6,
				max: 30,
				step: 1,
			},
		},
	},
	custom: {
		group: 'other',
		label: __( 'Custom', 'generatepress' ),
		placeholders: {},
	},
};
