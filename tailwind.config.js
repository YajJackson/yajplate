module.exports = {
    purge: ['./src/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#1a202c',
                dark: '#36404c',
                darker: '#2b313d',
                lightgrey: 'rgba(51, 51, 51, 0.05)',
                applegrey: '#f5f5f7',
            },
            columnCount: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            height: {
                'fit-content': 'fit-content',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                '10/10': '100%',
                '11/10': '110%',
                '12/10': '120%',
                'screen/2': '50vh',
                'screen/3': 'calc(100vh / 3)',
                'screen/4': 'calc(100vh / 4)',
                'screen/5': 'calc(100vh / 5)',
                '100px': '100px',
                '200px': '200px',
                '300px': '300px',
                '400px': '400px',
                '500px': '500px',
            },
            minHeight: {
                '1/4': '25%',
                '1/2': '50%',
                '2/3': '67%',
                '3/4': '75%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                '10/10': '100%',
                'screen/2': '50vh',
                'screen/3': 'calc(100vh / 3)',
                'screen/4': 'calc(100vh / 4)',
                'screen/5': 'calc(100vh / 5)',
            },
            maxHeight: {
                '1/4': '25%',
                '1/2': '50%',
                '2/3': '67%',
                '3/4': '75%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                '10/10': '100%',
                'screen/2': '50vh',
                'screen/3': 'calc(100vh / 3)',
                'screen/4': 'calc(100vh / 4)',
                'screen/5': 'calc(100vh / 5)',
            },
            width: {
                'fit-content': 'fit-content',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                '10/10': '100%',
                '11/10': '110%',
                '12/10': '120%',
                'screen/2': '50vh',
                'screen/3': 'calc(100vw / 3)',
                'screen/4': 'calc(100vw / 4)',
                'screen/5': 'calc(100vw / 5)',
                '100px': '100px',
                '200px': '200px',
                '300px': '300px',
                '400px': '400px',
                '500px': '500px',
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '2/3': '67%',
                '3/4': '75%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                '10/10': '100%',
                'screen/2': '50vh',
                'screen/3': 'calc(100vw / 3)',
                'screen/4': 'calc(100vw / 4)',
                'screen/5': 'calc(100vw / 5)',
            },
            minWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '2/3': '67%',
                '3/4': '75%',
                '100px': '100px',
                '200px': '200px',
                '300px': '300px',
                '400px': '400px',
                '500px': '500px',
            },
            boxShadow: {
                app: '0 2px 19px 4px rgba(0, 0, 0, 0.04)',
                rose: '0 2px 19px 4px #F4AF9099',
                lightrose: '0 2px 19px 4px #FCCFBE99',
                palerose: '0 2px 19px 4px #F2D8D099',
                pale: '0 2px 19px 4px #F7EBE999',
            },
        },
    },
    variants: { extend: { opacity: ['disabled'] } },
    plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-multi-column')()],
}